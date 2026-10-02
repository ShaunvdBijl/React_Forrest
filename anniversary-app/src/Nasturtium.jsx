import React from 'react';
import './Flower.css';

const Nasturtium = () => {
  return (
    <div className="flower-container">
      <svg 
        width="140" 
        height="240" 
        viewBox="0 0 140 240" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="neon-flower"
      >
        {/* Stems */}
        <path d="M 70 240 Q 60 150 70 60" stroke="#39ff14" strokeWidth="4" className="flower-glow stem" /> {/* Main stem */}
        <path d="M 68 180 Q 50 170 40 145" stroke="#39ff14" strokeWidth="2" className="flower-glow stem" /> {/* Stem to left leaf */}
        <path d="M 69 130 Q 90 120 100 95" stroke="#39ff14" strokeWidth="2" className="flower-glow stem" /> {/* Stem to right leaf */}
        
        {/* Left Leaf - Round lily-pad shape with radiating veins */}
        <circle cx="40" cy="145" r="18" stroke="#39ff14" strokeWidth="2" className="flower-glow leaf" />
        <circle cx="40" cy="145" r="3" stroke="#39ff14" strokeWidth="2" className="flower-glow leaf" />
        <path d="M 40 145 L 30 132 M 40 145 L 52 135 M 40 145 L 35 160 M 40 145 L 53 153 M 40 145 L 25 150" stroke="#39ff14" strokeWidth="1" className="flower-glow leaf" />

        {/* Right Leaf - Smaller, higher up */}
        <circle cx="100" cy="95" r="14" stroke="#39ff14" strokeWidth="2" className="flower-glow leaf" />
        <circle cx="100" cy="95" r="2" stroke="#39ff14" strokeWidth="2" className="flower-glow leaf" />
        <path d="M 100 95 L 90 85 M 100 95 L 110 88 M 100 95 L 95 107 M 100 95 L 110 102 M 100 95 L 88 100" stroke="#39ff14" strokeWidth="1" className="flower-glow leaf" />

        {/* Nasturtium Bloom - 5 distinct irregular petals */}
        <g className="flower-glow nasturtium-bloom">
          {/* Top Petal */}
          <path d="M 70 60 Q 55 25 70 15 Q 85 25 70 60" stroke="#ff3300" strokeWidth="2" />
          {/* Top Right Petal */}
          <path d="M 70 60 Q 95 35 110 50 Q 100 75 70 60" stroke="#ff3300" strokeWidth="2" />
          {/* Bottom Right Petal */}
          <path d="M 70 60 Q 95 85 80 100 Q 60 85 70 60" stroke="#ff3300" strokeWidth="2" />
          {/* Bottom Left Petal */}
          <path d="M 70 60 Q 45 85 60 100 Q 80 85 70 60" stroke="#ff3300" strokeWidth="2" />
          {/* Top Left Petal */}
          <path d="M 70 60 Q 45 35 30 50 Q 40 75 70 60" stroke="#ff3300" strokeWidth="2" />
          
          {/* Center */}
          <circle cx="70" cy="60" r="5" stroke="#ffdd00" strokeWidth="3" className="nasturtium-center" />
        </g>
      </svg>
    </div>
  );
};

export default Nasturtium;