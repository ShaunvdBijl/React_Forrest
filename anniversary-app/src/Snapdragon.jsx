import React from 'react';
import './Flower.css';

const Snapdragon = () => {
  return (
    <div className="flower-container">
      <svg 
        width="120" 
        height="240" 
        viewBox="0 0 120 240" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="neon-flower"
      >
        {/* Stem */}
        <path 
          d="M 60 240 Q 55 120 60 20" 
          stroke="#39ff14" /* Neon green */
          strokeWidth="4" 
          className="flower-glow stem" 
        />
        
        {/* Leaves */}
        <path d="M 60 180 Q 25 170 15 130 Q 40 145 58 155" stroke="#39ff14" strokeWidth="2" className="flower-glow leaf" />
        <path d="M 60 150 Q 95 140 105 100 Q 80 115 62 125" stroke="#39ff14" strokeWidth="2" className="flower-glow leaf" />

        {/* Snapdragon Blooms - Stacked upwards */}
        {/* Bottom tier */}
        <path d="M 58 120 Q 30 105 35 80 Q 48 85 59 100" stroke="#ff00ff" strokeWidth="3" className="flower-glow bloom" />
        <path d="M 62 110 Q 90 95 85 70 Q 72 75 61 90" stroke="#ff00ff" strokeWidth="3" className="flower-glow bloom" />
        
        {/* Middle tier */}
        <path d="M 59 85 Q 35 70 40 50 Q 50 55 60 68" stroke="#ff00ff" strokeWidth="3" className="flower-glow bloom" />
        <path d="M 61 75 Q 85 60 80 40 Q 70 45 60 58" stroke="#ff00ff" strokeWidth="3" className="flower-glow bloom" />
        
        {/* Top bloom */}
        <path d="M 60 40 Q 45 25 60 10 Q 75 25 60 40" stroke="#ff00ff" strokeWidth="3" className="flower-glow bloom" />
      </svg>
    </div>
  );
};

export default Snapdragon;