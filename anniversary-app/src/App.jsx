import { useState } from 'react'; // Removed 'React' and 'useEffect'
import Pot from './Pot';
import Snapdragon from './Snapdragon';
import Marigold from './Marigold';
import Orchid from './Orchid';
import Nasturtium from './Nasturtium';
import Tulip from './Tulip';
import Hibiscus from './Hibiscus';
import Sunflower from './Sunflower';
import './App.css'; 

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
  // Use a lazy initializer function to calculate the day exactly once on load
  const [currentDay] = useState(() => {
    const storedDate = localStorage.getItem('anniversaryStartDate');
    
    if (!storedDate) {
      // First visit! Log the exact date and time
      localStorage.setItem('anniversaryStartDate', new Date().toISOString());
      return 1;
    } 
    
    // If she has visited, calculate how many days have passed
    const start = new Date(storedDate);
    const now = new Date();
    
    const diffInMs = now - start;
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    
    let calculatedDay = diffInDays + 1;
    
    return calculatedDay > 7 ? 7 : calculatedDay;
  });

  return (
    <div className="app-container">
      <h1 className="header-title">Happy 6 Months</h1>
      
      <div className="flower-gallery">
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
    </div>
  );
}

export default App;