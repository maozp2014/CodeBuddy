import React, { useState, useMemo } from 'react';
import './components/Watchlist/TVWatchlist.css';

// 扩展股票数据
const demoStocks = [
  { symbol: 'AAPL', name: '苹果公司', price: 182.63, change: 1.23, changePercent: 0.68 },
  { symbol: 'MSFT', name: '微软', price: 420.72, change: -0.45, changePercent: -0.11 },
  { symbol: 'GOOGL', name: '谷歌', price: 2850.15, change: 12.34, changePercent: 0.43 },
  { symbol: 'AMZN', name: '亚马逊', price: 3456.78, change: -23.45, changePercent: -0.67 },
  { symbol: 'TSLA', name: '特斯拉', price: 987.65, change: 45.67, changePercent: 4.85 }
];

// 扩展列定义，添加排序功能
const columns = [
  { key: 'symbol', label: '代码', width: 100, sortable: true },
  { key: 'name', label: '名称', width: 150 },
  { key: 'price', label: '价格', width: 100, align: 'right', sortable: true },
  { key: 'change', label: '涨跌', width: 100, align: 'right', sortable: true },
  { key: 'changePercent', label: '涨幅%', width: 100, align: 'right', sortable: true }
];

// 股票单元格组件，处理颜色显示
const StockCell = ({ value, column }) => {
  const style = { textAlign: column.align || 'left' };
  
  if (column.key === 'change' || column.key === 'changePercent') {
    const color = value >= 0 ? '#0ecb81' : '#f6465d';
    return <span style={{ ...style, color }}>{value}</span>;
  }
  
  return <span style={style}>{value}</span>;
};

// 可排序的表头组件
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

export default function WatchlistDemo() {
  const [text, setText] = useState('这是一段测试文字');
  const [sortKey, setSortKey] = useState('symbol');
  const [sortDirection, setSortDirection] = useState('asc');
  
  const handleEdit = () => {
    setText('文字已被编辑！');
    console.log('编辑按钮被点击');
  };

  const handleRowClick = (stock) => {
    console.log('点击了股票:', stock);
    setText(`点击了 ${stock.name} (${stock.symbol})`);
  };
  
  // 排序功能
  const handleSort = (key) => {
    if (sortKey === key) {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDirection('asc');
    }
  };
  
  // 使用 useMemo 对股票数据进行排序
  const sortedStocks = useMemo(() => {
    return [...demoStocks].sort((a, b) => {
      const valA = a[sortKey];
      const valB = b[sortKey];
      
      if (typeof valA === 'string') {
        return sortDirection === 'asc' 
          ? valA.localeCompare(valB) 
          : valB.localeCompare(valA);
      }
      
      return sortDirection === 'asc' ? valA - valB : valB - valA;
    });
  }, [demoStocks, sortKey, sortDirection]);

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>TVWatchlist 功能测试</h1>
      <p>{text}</p>
      <button 
        onClick={handleEdit}
        style={{
          padding: '8px 16px',
          backgroundColor: '#0066cc',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginBottom: '20px'
        }}
      >
        编辑
      </button>
      
      <h2>TVWatchlist 组件</h2>
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
              <tr key={stock.symbol} onClick={() => handleRowClick(stock)}>
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
    </div>
  );
}
