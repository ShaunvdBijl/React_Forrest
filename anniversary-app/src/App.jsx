import React from 'react';
import Pot from './Pot';
import Snapdragon from './Snapdragon';
import Marigold from './Marigold';
import Orchid from './Orchid';
import './App.css'; 

function App() {
  return (
    <div className="app-container">
      <h1 className="header-title">Happy 6 Months</h1>
      
      <div className="garden-container" style={{ position: 'relative' }}>
        <Orchid />
        <Pot />
      </div>
    </div>
  );
}

export default App;