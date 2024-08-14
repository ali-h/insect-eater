import React, { useState, useRef, useEffect } from 'react';
import Owl from './components/Owl';
import InsectTiles from './components/InsectTiles';
import Insect from './components/Insect';
import './styles/App.css';

const App = () => {
  const [score, setScore] = useState(0);
  const [insectPosition, setInsectPosition] = useState({ x: 0, y: 0 });
  const [insects, setInsects] = useState({});
  const draggableArea = useRef(null);
  const [owlRef, setOwlRef] = useState(null);

  const addInsect = (id, type, position) => {
    // Add the insect to the insects object
    let newInsects = Object.assign({}, insects);
    newInsects[id] = { type, position }
    setInsects(newInsects);
  };

  const checkForRemoval = (id) => {
    // Get the owl's position
    const owlPosition = owlRef.current.getBoundingClientRect();

    // Get the insect's position
    const insect = document.getElementById(id);
    const insectPosition = insect.getBoundingClientRect();

    // Check if the insect is within the owl's bounds
    if (
      insectPosition.x >= owlPosition.x &&
      insectPosition.right <= owlPosition.right &&
      insectPosition.y >= owlPosition.y &&
      insectPosition.bottom <= owlPosition.bottom
    ) {
      // Remove the insect
      let newInsects = Object.assign({}, insects);
      delete newInsects[id];
      setInsects(newInsects);

      // Update the score
      setScore(score + 1);

      // Add eating class to owl
      owlRef.current.classList.add('eating');

      // Remove eating class after 1 second
      setTimeout(() => {
        owlRef.current.classList.remove('eating');
      }, 1000);
    }
  }

  return (
    <div id="wrapper">
      <div id="app">
        <InsectTiles addInsect={addInsect} />
        <div className="draggable-area" ref={draggableArea}>
          <div className="score-wrapper">
            <span className='score'>SCORE: {score}</span>
          </div>
          <Owl insectPosition={insectPosition} setOwlRef={setOwlRef} />
          {Object.keys(insects).map((key) => (
            <Insect
              key={key}
              id={key}
              type={insects[key].type}
              position={insects[key].position}
              setInsectPosition={setInsectPosition}
              draggableArea={draggableArea}
              checkForRemoval={checkForRemoval}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
