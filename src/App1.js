import React, { useState, useEffect } from 'react';

import InsectTiles from './components/InsectTiles';
// import Insect from './components/Insect';
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
        <InsectTiles />
        <Owl insectPosition={insectPosition} />
      </div>
    </div>
  );
};

export default App;