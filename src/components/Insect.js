import React, { useState, useEffect } from 'react';
import antImage from '../assets/images/ant.png';
import beetleImage from '../assets/images/beetle.png';
import waspImage from '../assets/images/wasp.png';

const Insect = ({ type, position }) => {
  const [currentPosition, setCurrentPosition] = useState(position);

  const getImage = () => {
    switch (type) {
      case 'ant':
        return antImage;
      case 'beetle':
        return beetleImage;
      case 'wasp':
        return waspImage;
      default:
        return antImage;
    }
  };

  return (
    <div
      className="insect"
      style={{
        position: 'absolute',
        left: `${currentPosition.x}px`,
        top: `${currentPosition.y}px`,
        cursor: 'move',
      }}
    >
      <img src={getImage()} alt={type} className="insect-image" />
    </div>
  );
};

export default Insect;