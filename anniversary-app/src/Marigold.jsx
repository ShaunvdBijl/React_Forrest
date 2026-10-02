import './Flower.css';

const Marigold = () => {
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
          d="M 60 240 Q 65 170 60 100" 
          stroke="#39ff14" 
          strokeWidth="4" 
          className="flower-glow stem" 
        />
        
        {/* Feathery Leaves */}
        <path d="M 60 180 L 40 170 L 45 160 L 20 150" stroke="#39ff14" strokeWidth="2" className="flower-glow leaf" />
        <path d="M 60 150 L 80 140 L 75 130 L 100 120" stroke="#39ff14" strokeWidth="2" className="flower-glow leaf" />
        <path d="M 60 120 L 45 115 L 50 105 L 30 100" stroke="#39ff14" strokeWidth="2" className="flower-glow leaf" />

        {/* Marigold Bloom - Outer Petals (Orange) */}
        <circle cx="60" cy="50" r="14" stroke="#ff8800" strokeWidth="3" className="flower-glow marigold-bloom" />
        <circle cx="82" cy="65" r="14" stroke="#ff8800" strokeWidth="3" className="flower-glow marigold-bloom" />
        <circle cx="82" cy="89" r="14" stroke="#ff8800" strokeWidth="3" className="flower-glow marigold-bloom" />
        <circle cx="60" cy="104" r="14" stroke="#ff8800" strokeWidth="3" className="flower-glow marigold-bloom" />
        <circle cx="38" cy="89" r="14" stroke="#ff8800" strokeWidth="3" className="flower-glow marigold-bloom" />
        <circle cx="38" cy="65" r="14" stroke="#ff8800" strokeWidth="3" className="flower-glow marigold-bloom" />
        
        {/* Marigold Bloom - Inner Center (Yellow) */}
        <circle cx="60" cy="77" r="12" stroke="#ffdd00" strokeWidth="4" className="flower-glow marigold-center" />
        <circle cx="60" cy="77" r="4" stroke="#ffdd00" strokeWidth="2" className="flower-glow marigold-center" />
      </svg>
    </div>
  );
};

export default Marigold;