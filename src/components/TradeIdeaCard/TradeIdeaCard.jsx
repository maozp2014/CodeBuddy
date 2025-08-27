import React from 'react';
import './TradeIdeaCard.css';

const TradeIdeaCard = ({ title, summary, author, time, onClick }) => {
  return (
    <div className="trade-idea-card" onClick={onClick}>
      <h3>{title}</h3>
      <p className="summary">{summary}</p>
      <div className="meta">
        <span className="author">{author}</span>
        <span className="time">{time}</span>
      </div>
    </div>
  );
};

export default TradeIdeaCard;