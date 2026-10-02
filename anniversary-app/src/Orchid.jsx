import './Flower.css';

const Orchid = () => {
  return (
    <div className="flower-container">
      <svg 
        width="140" 
        height="250" 
        viewBox="0 0 140 250" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="neon-flower"
      >
        {/* Arched Stem */}
        <path 
          d="M 70 250 Q 85 150 40 80 Q 20 50 60 30" 
          stroke="#39ff14" 
          strokeWidth="3" 
          className="flower-glow stem" 
        />
        
        {/* Wide Base Leaves */}
        <path d="M 70 240 Q 40 230 20 200 Q 50 215 70 240" stroke="#39ff14" strokeWidth="2" className="flower-glow leaf" />
        <path d="M 70 235 Q 100 220 120 190 Q 90 205 70 235" stroke="#39ff14" strokeWidth="2" className="flower-glow leaf" />
        <path d="M 70 230 Q 30 200 10 160 Q 40 185 70 230" stroke="#39ff14" strokeWidth="2" className="flower-glow leaf" />

        {/* Orchid Bloom 1 (Top) */}
        <g className="flower-glow orchid-bloom">
          <path d="M 60 30 Q 45 10 60 0 Q 75 10 60 30" stroke="#b026ff" strokeWidth="2" /> {/* Top Petal */}
          <path d="M 60 30 Q 35 30 40 45 Q 55 40 60 30" stroke="#b026ff" strokeWidth="2" /> {/* Left Petal */}
          <path d="M 60 30 Q 85 30 80 45 Q 65 40 60 30" stroke="#b026ff" strokeWidth="2" /> {/* Right Petal */}
          <circle cx="60" cy="32" r="4" stroke="#ffdd00" strokeWidth="2" className="orchid-center" /> {/* Center Lip */}
        </g>

        {/* Orchid Bloom 2 (Middle Curve) */}
        <g className="flower-glow orchid-bloom">
          <path d="M 35 90 Q 20 70 35 60 Q 50 70 35 90" stroke="#b026ff" strokeWidth="2" />
          <path d="M 35 90 Q 10 90 15 105 Q 30 100 35 90" stroke="#b026ff" strokeWidth="2" />
          <path d="M 35 90 Q 60 90 55 105 Q 40 100 35 90" stroke="#b026ff" strokeWidth="2" />
          <circle cx="35" cy="92" r="4" stroke="#ffdd00" strokeWidth="2" className="orchid-center" />
        </g>

        {/* Orchid Bloom 3 (Lower Stem) */}
        <g className="flower-glow orchid-bloom">
          <path d="M 75 160 Q 60 140 75 130 Q 90 140 75 160" stroke="#b026ff" strokeWidth="2" />
          <path d="M 75 160 Q 50 160 55 175 Q 70 170 75 160" stroke="#b026ff" strokeWidth="2" />
          <path d="M 75 160 Q 100 160 95 175 Q 80 170 75 160" stroke="#b026ff" strokeWidth="2" />
          <circle cx="75" cy="162" r="4" stroke="#ffdd00" strokeWidth="2" className="orchid-center" />
        </g>
      </svg>
    </div>
  );
};

export default Orchid;