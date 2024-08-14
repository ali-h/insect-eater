import React, { useEffect, useRef } from 'react';
import antImage from '../assets/images/ant.png';
import beetleImage from '../assets/images/beetle.png';
import waspImage from '../assets/images/wasp.png';
import Draggable from 'react-draggable';
import '../styles/Insect.css';

const Insect = ({ id, type, position, setInsectPosition, draggableArea, checkForRemoval }) => {
  
  const handleDrag = (e, data) => {
    // Calculate percentage of the insect position relative to the parent container
    let x = (data.x / (draggableArea.current.clientWidth)) * 100;
    let y = (data.y / (draggableArea.current.clientHeight)) * 100;
    
    // Adjustment in percentages
    if (y > 0)
    y += 70
    else
    y += 80
    x += 40

    setInsectPosition({ x, y });
    checkForRemoval(id);
  };

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

  useEffect(() => {
    handleDrag(null, position);
  }, []);

  return (
    <Draggable
      bounds="parent"
      defaultPosition={{ x: position.x, y: position.y }}
      onDrag={handleDrag}
    >
      <div className="insect" style={{
        backgroundImage: `url(${getImage()})`,
        backgroundSize: 'contain'}}
        id={id}
      >
      </div>
    </Draggable>
  );
};

export default Insect;