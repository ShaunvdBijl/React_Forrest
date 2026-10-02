import './Flower.css';

const Tulip = () => {
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
          d="M 70 240 Q 65 160 70 90" 
          stroke="#39ff14" 
          strokeWidth="4" 
          className="flower-glow stem" 
        />
        
        {/* Broad, upward-sweeping leaves */}
        <path d="M 70 210 Q 30 160 40 100 Q 55 150 68 180" stroke="#39ff14" strokeWidth="2" className="flower-glow leaf" />
        <path d="M 70 220 Q 110 170 100 110 Q 85 160 72 190" stroke="#39ff14" strokeWidth="2" className="flower-glow leaf" />

        {/* Tulip Bloom - Cup shape with pointed tips */}
        <g className="flower-glow tulip-bloom">
          {/* Main Cup Base */}
          <path d="M 50 60 C 50 115, 90 115, 90 60" stroke="#ffea00" strokeWidth="3" />
          
          {/* Petal Zig-Zag Top (Three peaks) */}
          <path d="M 50 60 L 60 75 L 70 45 L 80 75 L 90 60" stroke="#ffea00" strokeWidth="3" strokeLinejoin="round" />
          
          {/* Inner Petal Crease Lines */}
          <path d="M 60 75 Q 70 90 70 106" stroke="#ffea00" strokeWidth="2" />
          <path d="M 80 75 Q 70 90 70 106" stroke="#ffea00" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
};

export default Tulip;