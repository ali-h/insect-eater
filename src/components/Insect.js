import React, { useState } from 'react';
import antImage from '../assets/images/ant.png';
import beetleImage from '../assets/images/beetle.png';
import waspImage from '../assets/images/wasp.png';
import Draggable from 'react-draggable';
import '../styles/Insect.css';

const Insect = ({ type, position, setInsectPosition }) => {
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
    <Draggable
      bounds="parent"
      defaultPosition={{ x: position.x, y: position.y }}
      onDrag={(event, data) => {
        console.log('x:', data.x, 'y:', data.y);
        setInsectPosition({ x: data.x, y: data.y });
      }}
    >
      <div className="insect" style={{
        backgroundImage: `url(${getImage()})`,
        backgroundSize: 'contain'}}>
      </div>
    </Draggable>
  );
};

export default Insect;