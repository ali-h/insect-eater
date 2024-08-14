import React from 'react';
import antImage from '../assets/images/ant.png';
import beetleImage from '../assets/images/beetle.png';
import waspImage from '../assets/images/wasp.png';
import '../styles/InsectTiles.css';

const InsectTiles = ({ addInsect }) => {
  const handleClick = (type) => {
    // Random position, adjust as needed
    const position = {
      // Random between 0 and 300
      x: Math.random() * 350,
      // Random between 300 and 400
      y: 300 + Math.random() * 150,
    };
    addInsect(type, position);
  };

  return (
    <div className="insects-tiles">
      <div className="insect-tile" onClick={() => handleClick('ant')}>
        <img src={antImage} alt="Ant" className="insect-image" />
      </div>
      <div className="insect-tile" onClick={() => handleClick('beetle')}>
        <img src={beetleImage} alt="Beetle" className="insect-image" />
      </div>
      <div className="insect-tile" onClick={() => handleClick('wasp')}>
        <img src={waspImage} alt="Wasp" className="insect-image" />
      </div>
    </div>
  );
};

export default InsectTiles;
