import React from 'react';
import './StockItemCard.css';

const StockItemCard = ({ symbol, name, price, change, onClick }) => {
  const isPositive = change >= 0;
  
  return (
    <div className="stock-item-card" onClick={onClick}>
      <div className="stock-info">
        <div className="symbol">{symbol}</div>
        <div className="name">{name}</div>
      </div>
      <div className="price-info">
        <div className="price">{price}</div>
        <div className={`change ${isPositive ? 'positive' : 'negative'}`}>
          {isPositive ? '+' : ''}{change}%
        </div>
      </div>
    </div>
  );
};

export default StockItemCard;