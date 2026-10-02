import React from 'react';
import './Pot.css'; 

const Pot = ({ letter }) => {
  return (
    <div className="pot-container">
      <svg 
        width="150" 
        height="130" 
        viewBox="0 0 150 130" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="neon-pot"
      >
        {/* Pot Body */}
        <path 
          d="M 35 30 L 45 110 Q 75 125 105 110 L 115 30" 
          stroke="#00e5ff" 
          strokeWidth="4" 
          className="pot-glow main-line" 
        />
        
        {/* Pot Rim */}
        <rect 
          x="25" 
          y="10" 
          width="100" 
          height="20" 
          rx="5" 
          stroke="#00e5ff" 
          strokeWidth="4" 
          className="pot-glow main-line" 
        />
        
        {/* Inner dirt/depth line */}
        <ellipse 
          cx="75" 
          y="20" 
          rx="50" 
          ry="10" 
          stroke="#00e5ff" 
          strokeWidth="2" 
          strokeDasharray="4 4" 
          className="pot-glow detail-line" 
        />

        {/* The Glowing Letter */}
        {letter && (
          <text 
            x="75" 
            y="90" 
            textAnchor="middle" 
            fill="#ffffff" 
            className="pot-glow pot-letter"
            fontSize="42"
            fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
            fontWeight="bold"
          >
            {letter}
          </text>
        )}
      </svg>
    </div>
  );
};

export default Pot;