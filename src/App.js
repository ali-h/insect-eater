import React, { useState } from 'react';
import Owl from './components/Owl';
import InsectTiles from './components/InsectTiles';
import Insect from './components/Insect';
import './styles/App.css';

const App = () => {
  const [insectPosition, setInsectPosition] = useState({ x: 0, y: 0 });
  const [insects, setInsects] = useState([]);

  const addInsect = (type, position) => {
    setInsectPosition(position);
    setInsects([...insects, { type, position }]);
  };

  return (
    <div id="wrapper">
      <div id="app">
        <InsectTiles addInsect={addInsect} />
        <div className="draggable-area">
          <Owl insectPosition={insectPosition} />
          {insects.map((insect, index) => (
            <Insect
              key={index}
              type={insect.type}
              position={insect.position}
              setInsectPosition={setInsectPosition}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
