import React from 'react';

const ActionButton = ({ icon: Icon, count, onClick, className, style }) => {
  return (
    <button 
      className={`action-btn ${className || ''}`} 
      onClick={onClick}
      style={style}
    >
      <Icon /> {count !== undefined ? count : ''}
    </button>
  );
};

export default ActionButton;
