import React, { useState, useEffect } from 'react';
import Pot from './Pot';
import Snapdragon from './Snapdragon';
import Marigold from './Marigold';
import Orchid from './Orchid';
import Nasturtium from './Nasturtium';
import Tulip from './Tulip';
import Hibiscus from './Hibiscus';
import Sunflower from './Sunflower';
import './App.css'; 

// Array holding our 7-day sequence
const FLOWER_SEQUENCE = [
  { id: 1, Component: Snapdragon, letter: "6" },
  { id: 2, Component: Marigold, letter: "M" },
  { id: 3, Component: Orchid, letter: "O" },
  { id: 4, Component: Nasturtium, letter: "N" },
  { id: 5, Component: Tulip, letter: "T" },
  { id: 6, Component: Hibiscus, letter: "H" },
  { id: 7, Component: Sunflower, letter: "S" },
];

function App() {
  const [currentDay, setCurrentDay] = useState(1);

  useEffect(() => {
    // 1. Check if she has visited before
    const storedDate = localStorage.getItem('anniversaryStartDate');
    
    if (!storedDate) {
      // First visit! Log the exact date and time
      localStorage.setItem('anniversaryStartDate', new Date().toISOString());
      setCurrentDay(1);
    } else {
      // 2. If she has visited, calculate how many days have passed
      const start = new Date(storedDate);
      const now = new Date();
      
      const diffInMs = now - start;
      const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
      
      // Add 1 because the first 24 hours is "Day 1"
      let calculatedDay = diffInDays + 1;
      
      // Cap the maximum day at 7 so it stays complete after the week is over
      if (calculatedDay > 7) calculatedDay = 7;
      
      setCurrentDay(calculatedDay);
    }
  }, []);

  return (
    <div className="app-container">
      <h1 className="header-title">Happy 6 Months</h1>
      
      <div className="flower-gallery">
        {/* 
          We use slice() to only render the flowers up to the current day.
          On Day 1, slice(0, 1) returns just the Snapdragon.
          On Day 7, slice(0, 7) returns the whole garden.
        */}
        {FLOWER_SEQUENCE.slice(0, currentDay).map((item) => {
          const FlowerComponent = item.Component;
          return (
            <div key={item.id} className="garden-container">
              <FlowerComponent />
              <Pot letter={item.letter} />
            </div>
          );
        })}
      </div>
      
      {/* 
        DEV TOOLS: A tiny button to test the week-long animation. 
        Remove this block before you deploy the app! 
      */}
      <button 
        onClick={() => setCurrentDay(prev => prev < 7 ? prev + 1 : 1)}
        style={{ 
          position: 'fixed', bottom: '10px', right: '10px', 
          opacity: 0.1, cursor: 'pointer', background: 'transparent', 
          color: 'white', border: '1px solid white' 
        }}
      >
        Advance Day
      </button>
    </div>
  );
}

export default App;