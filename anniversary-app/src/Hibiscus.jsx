import React from 'react';
import './Flower.css';

const Hibiscus = () => {
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
        {/* Stem */}
        <path 
          d="M 70 240 Q 75 160 70 80" 
          stroke="#39ff14" 
          strokeWidth="4" 
          className="flower-glow stem" 
        />
        
        {/* Broad, slightly jagged leaves */}
        <path d="M 70 180 Q 40 180 30 150 Q 50 140 70 160" stroke="#39ff14" strokeWidth="2" className="flower-glow leaf" />
        <path d="M 70 140 Q 100 140 110 110 Q 90 100 70 120" stroke="#39ff14" strokeWidth="2" className="flower-glow leaf" />

        {/* Hibiscus Bloom - 5 Large Petals */}
        <g className="flower-glow hibiscus-bloom">
          {/* Top-left */}
          <path d="M 70 80 C 30 60, 20 10, 50 20 C 70 30, 70 60, 70 80" stroke="#ff007f" strokeWidth="2" />
          {/* Top-right */}
          <path d="M 70 80 C 110 60, 120 10, 90 20 C 70 30, 70 60, 70 80" stroke="#ff007f" strokeWidth="2" />
          {/* Bottom-left */}
          <path d="M 70 80 C 30 90, 10 120, 30 130 C 50 140, 60 100, 70 80" stroke="#ff007f" strokeWidth="2" />
          {/* Bottom-right */}
          <path d="M 70 80 C 110 90, 130 120, 110 130 C 90 140, 80 100, 70 80" stroke="#ff007f" strokeWidth="2" />
          {/* Bottom center */}
          <path d="M 70 80 C 50 120, 90 120, 70 80" stroke="#ff007f" strokeWidth="2" />

          {/* Internal Petal Veins for detail */}
          <path d="M 70 80 L 52 42 M 70 80 L 88 42 M 70 80 L 42 108 M 70 80 L 98 108" stroke="#ff007f" strokeWidth="1" opacity="0.6" />
        </g>

        {/* Prominent Stamen protruding out */}
        <g className="flower-glow hibiscus-stamen">
          {/* Stamen stalk */}
          <path d="M 70 80 Q 60 50 55 35" stroke="#ffea00" strokeWidth="3" />
          {/* Anthers (little dots at the end) */}
          <circle cx="55" cy="35" r="3" stroke="#ff3300" strokeWidth="2" />
          <circle cx="50" cy="38" r="2" stroke="#ff3300" strokeWidth="2" />
          <circle cx="60" cy="33" r="2" stroke="#ff3300" strokeWidth="2" />
          <circle cx="53" cy="30" r="2" stroke="#ff3300" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
};

export default Hibiscus;