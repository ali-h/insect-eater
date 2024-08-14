import React, { useState } from 'react';
import Owl from './components/Owl';
import InsectTiles from './components/InsectTiles';
import Insect from './components/Insect';
import './styles/App.css';

const App = () => {
  const [insects, setInsects] = useState([]);

  const addInsect = (type, position) => {
    setInsects([...insects, { type, position }]);
  };

  return (
      <div id="wrapper">
        <div id="app">
          <InsectTiles addInsect={addInsect} />
          <div className="draggable-area">
            <Owl insectPosition={{ x: 0, y: 0 }} />
            {insects.map((insect, index) => (
              <Insect
                key={index}
                type={insect.type}
                position={insect.position}
              />
            ))}
          </div>
        </div>
      </div>
  );
};

export default App;
