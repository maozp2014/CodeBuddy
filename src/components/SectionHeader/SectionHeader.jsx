import React from 'react';
import './SectionHeader.css';

const SectionHeader = ({ title, collapsible, isCollapsed, onToggle }) => {
  return (
    <div 
      className={`section-header ${collapsible ? 'collapsible' : ''}`}
      onClick={collapsible ? onToggle : undefined}
    >
      <h2>{title}</h2>
      {collapsible && (
        <span className="toggle-icon">
          {isCollapsed ? '▼' : '▲'}
        </span>
      )}
    </div>
  );
};

export default SectionHeader;