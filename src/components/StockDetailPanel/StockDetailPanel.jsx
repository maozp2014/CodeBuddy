import React, { useState, useEffect } from 'react';
import './StockDetailPanel.css';

const StockDetailPanel = ({ stock }) => {
  const [currentStock, setCurrentStock] = useState(stock);

  useEffect(() => {
    // 模拟WebSocket实时更新
    const interval = setInterval(() => {
      setCurrentStock(prev => ({
        ...prev,
        price: (prev.price * (1 + (Math.random() * 0.02 - 0.01))).toFixed(2),
        change: (prev.change * (1 + (Math.random() * 0.02 - 0.01))).toFixed(2),
        lastUpdated: new Date().toLocaleTimeString()
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const isPositive = currentStock.change >= 0;

  return (
    <div className="stock-detail-panel">
      <div className="header">
        <h3 className="name">{currentStock.name} ({currentStock.symbol})</h3>
        <div className="price-section">
          <div className="price">{currentStock.price}</div>
          <div className={`change ${isPositive ? 'positive' : 'negative'}`}>
            {isPositive ? '+' : ''}{currentStock.change} ({isPositive ? '+' : ''}{(currentStock.change / currentStock.price * 100).toFixed(2)}%)
          </div>
        </div>
        <div className="last-updated">最后更新: {currentStock.lastUpdated}</div>
      </div>
      
      <div className="stats-grid">
        {Object.entries(currentStock.stats).map(([key, value]) => (
          <div key={key} className="stat-item">
            <div className="stat-label">{key}</div>
            <div className="stat-value">{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StockDetailPanel;