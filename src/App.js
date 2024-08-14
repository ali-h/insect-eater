import React, { useState, useEffect } from 'react';
import Owl from './components/Owl';
import './styles/App.css';

const App = () => {
  const [insectPosition, setInsectPosition] = useState({ x: 0, y: 0 });

  // Update insectPosition state on mouse move
  const handleMouseMove = (event) => {
    setInsectPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div id='wrapper'>
      <div id='app' onMouseMove={handleMouseMove}>
        <Owl insectPosition={insectPosition} />
      </div>
    </div>
  );
};

export default App;