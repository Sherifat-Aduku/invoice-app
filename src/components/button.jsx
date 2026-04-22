import React from "react";
import './button.css';
import plusIcon from '../../assets/icons/plusicon.svg';


const Button = ({ children, variant = 'primary', onClick, type = 'button' }) => {
  const variantClass = `btn-${variant}`;
  
  return (
    <button 
      className={`btn ${variantClass}`} 
      onClick={onClick}
      type={type}>
        
      {/* If it's the 'new' variant, show the white circle with the imported SVG */}
      {variant === 'new' && (
        <div className="icon-container">
          <img src={plusIcon} alt="plus" className="btn-icon" />
        </div>
      )}

      <span className="btn-text">{children}</span>
    </button>
  );
};

export default Button;