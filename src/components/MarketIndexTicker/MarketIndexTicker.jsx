import React, { useState, useEffect } from 'react';
import './MarketIndexTicker.css';

const MarketIndexTicker = ({ indices }) => {
  const [currentIndices, setCurrentIndices] = useState(indices);

  useEffect(() => {
    const interval = setInterval(() => {
      // 这里应该是从API获取最新数据，暂时使用模拟数据
      setCurrentIndices(prev => prev.map(index => ({
        ...index,
        value: (index.value * (1 + (Math.random() * 0.02 - 0.01))).toFixed(2),
        change: (index.change * (1 + (Math.random() * 0.02 - 0.01))).toFixed(2)
      })));
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="market-index-ticker">
      {currentIndices.map((index, i) => (
        <div key={i} className="index-item">
          <div className="index-name">{index.name}</div>
          <div className="index-value">{index.value}</div>
          <div className={`index-change ${index.change >= 0 ? 'positive' : 'negative'}`}>
            {index.change >= 0 ? '+' : ''}{index.change}%
          </div>
        </div>
      ))}
    </div>
  );
};

export default MarketIndexTicker;