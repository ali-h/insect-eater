import React, { useState, useRef } from 'react';
import Owl from './components/Owl';
import InsectTiles from './components/InsectTiles';
import Insect from './components/Insect';
import './styles/App.css';

const App = () => {
  const [insectPosition, setInsectPosition] = useState({ x: 0, y: 0 });
  const [insects, setInsects] = useState([]);
  const draggableArea = useRef(null);
  const [owlRef, setOwlRef] = useState(null);

  const addInsect = (id, type, position) => {
    setInsects([...insects, { id, type, position }]);
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
      console.log('deleted', id);
      setInsects(insects.filter((insect) => insect.id !== id));

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
          <Owl insectPosition={insectPosition} setOwlRef={setOwlRef} />
          {insects.map((insect, index) => (
            <Insect
              key={index}
              id={insect.id}
              type={insect.type}
              position={insect.position}
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
