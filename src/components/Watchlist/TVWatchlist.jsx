import React, { useState, useMemo } from 'react';
import './TVWatchlist.css';

const DEFAULT_COLUMNS = [
  { key: 'symbol', label: '代码', width: 100, sortable: true },
  { key: 'name', label: '名称', width: 150 },
  { key: 'price', label: '价格', width: 100, sortable: true, align: 'right' },
  { key: 'change', label: '涨跌', width: 100, sortable: true, align: 'right' },
  { key: 'changePercent', label: '涨幅%', width: 100, sortable: true, align: 'right' }
];

const StockCell = ({ value, column }) => {
  const style = { textAlign: column.align || 'left' };
  
  if (column.key === 'change' || column.key === 'changePercent') {
    const color = value >= 0 ? '#0ecb81' : '#f6465d';
    return <span style={{ ...style, color }}>{value}</span>;
  }
  
  return <span style={style}>{value}</span>;
};

const SortableHeader = ({ column, sortKey, sortDirection, onSort }) => {
  const isActive = sortKey === column.key;
  return (
    <th 
      style={{ width: column.width }}
      onClick={() => column.sortable && onSort(column.key)}
    >
      {column.label}
      {isActive && (sortDirection === 'asc' ? ' ↑' : ' ↓')}
    </th>
  );
};

const TVWatchlist = ({ 
  stocks = [], 
  columns = DEFAULT_COLUMNS,
  onRowClick
}) => {
  const [sortKey, setSortKey] = useState('symbol');
  const [sortDirection, setSortDirection] = useState('asc');

  const sortedStocks = useMemo(() => {
    return [...stocks].sort((a, b) => {
      const valA = a[sortKey];
      const valB = b[sortKey];
      return sortDirection === 'asc' ? valA - valB : valB - valA;
    });
  }, [stocks, sortKey, sortDirection]);

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDirection('asc');
    }
  };

  return (
    <div className="tv-watchlist">
      <table>
        <thead>
          <tr>
            {columns.map(col => (
              <SortableHeader
                key={col.key}
                column={col}
                sortKey={sortKey}
                sortDirection={sortDirection}
                onSort={handleSort}
              />
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedStocks.map(stock => (
            <tr key={stock.symbol} onClick={() => onRowClick?.(stock)}>
              {columns.map(col => (
                <td key={`${stock.symbol}-${col.key}`}>
                  <StockCell 
                    value={stock[col.key]} 
                    column={col} 
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default React.memo(TVWatchlist);