import React from 'react';
import Pot from './Pot';
import Snapdragon from './Snapdragon';
import Marigold from './Marigold';
import Orchid from './Orchid';
import Nasturtium from './Nasturtium';
import Tulip from './Tulip';
import Hibiscus from './Hibiscus';
import Sunflower from './Sunflower';
import './App.css'; 

function App() {
  return (
    <div className="app-container">
      <h1 className="header-title">Happy 6 Months</h1>
      
      <div className="flower-gallery">
        <div className="garden-container"><Snapdragon /><Pot letter="6" /></div>
        <div className="garden-container"><Marigold /><Pot letter="M"/></div>
        <div className="garden-container"><Orchid /><Pot letter="O"/></div>
        <div className="garden-container"><Nasturtium /><Pot letter="N"/></div>
        <div className="garden-container"><Tulip /><Pot letter="T"/></div>
        <div className="garden-container"><Hibiscus /><Pot letter="H"/></div>
        <div className="garden-container"><Sunflower /><Pot letter="S"/></div>
      </div>
    </div>
  );
}

export default App;