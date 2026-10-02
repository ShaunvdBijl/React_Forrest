import './Flower.css';

const Sunflower = () => {
  return (
    <div className="flower-container">
      <svg 
        width="160" 
        height="260" 
        viewBox="0 0 160 260" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="neon-flower"
      >
        {/* Sturdy Stem */}
        <path 
          d="M 80 260 L 80 80" 
          stroke="#39ff14" 
          strokeWidth="5" 
          className="flower-glow stem" 
        />
        
        {/* Large, broad heart-like leaves */}
        <path d="M 80 200 Q 40 180 30 220 Q 60 230 80 200" stroke="#39ff14" strokeWidth="2" className="flower-glow leaf" />
        <path d="M 80 150 Q 120 130 130 170 Q 100 180 80 150" stroke="#39ff14" strokeWidth="2" className="flower-glow leaf" />

        {/* Sunflower Bloom Container */}
        <g className="flower-glow sunflower-bloom">
          {/* Symmetrical Petals - Rotated 16 times in a full circle */}
          {[...Array(16)].map((_, i) => (
            <path
              key={i}
              // A pointed petal shape radiating outward
              d="M 80 65 Q 95 30 80 5 Q 65 30 80 65"
              stroke="#ffea00"
              strokeWidth="2"
              transform={`rotate(${i * (360 / 16)} 80 80)`}
            />
          ))}
          
          {/* Inner Petal Highlights (Smaller offset petals) */}
          {[...Array(16)].map((_, i) => (
            <path
              key={`inner-${i}`}
              d="M 80 70 Q 90 40 80 20 Q 70 40 80 70"
              stroke="#ffdd00"
              strokeWidth="1.5"
              transform={`rotate(${(i * (360 / 16)) + 11.25} 80 80)`}
            />
          ))}
        </g>

        {/* Deep Orange/Brown Center for the seeds */}
        <g className="flower-glow sunflower-center">
          <circle cx="80" cy="80" r="18" stroke="#ff6600" strokeWidth="4" fill="#1a0a00" />
          <circle cx="80" cy="80" r="10" stroke="#ff6600" strokeWidth="2" strokeDasharray="2 3" />
          <circle cx="80" cy="80" r="4" stroke="#ff6600" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
};

export default Sunflower;