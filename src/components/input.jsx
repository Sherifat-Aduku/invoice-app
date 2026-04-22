import React from 'react';
import './input.css';

const Input = ({ label, error, ...props }) => {
  return (
    <div className="input-group">
      <div className="label-wrapper">
        <label className="input-label">{label}</label>
        {error && <span className="error-text">{error}</span>}
      </div>

      <input 
        className={`input-field ${error ? 'error-border' : ''}`}
        {...props} 
      />
    </div>
  );
};

export default Input;