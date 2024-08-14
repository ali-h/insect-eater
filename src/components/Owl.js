import React, { useRef } from 'react';
import owlImage from '../assets/images/owl.png';
import '../styles/Owl.css';

const Owl = ({ insectPosition }) => {
  const owlRef = useRef(null);

  const { x: mouseX, y: mouseY } = insectPosition;

  const calculatePupilPosition = () => {
    if (!owlRef.current) return { left: '50%', top: '50%' };

    // Get the size and position of the owl
    const owlRect = owlRef.current.getBoundingClientRect()
    const owlCenterX = owlRect.left + owlRect.width / 2;
    const owlCenterY = owlRect.top + owlRect.height / 2;

    // Calculate relative position of the mouse to the center of the owl
    const relativeX = (mouseX - owlCenterX) / (owlRect.width / 2);
    const relativeY = (mouseY - owlCenterY) / (owlRect.height / 2);

    // Constrain the pupil movement within the eye area (adjust multiplier as needed)
    const pupilOffsetX = Math.min(Math.max(relativeX * 10), 10);
    const pupilOffsetY = Math.min(Math.max(relativeY * 10), 10);

    return {
      left: `${10 + pupilOffsetX}px`,
      top: `${10 + pupilOffsetY}px`,
    };
  };

  const pupilStyleLeft = calculatePupilPosition();
  const pupilStyleRight = calculatePupilPosition();

  return (
    <div className="owl" ref={owlRef}>
      <img src={owlImage} alt="Owl" className="owl-image" />
      <div className='owl-eyes'>
        <div className='owl-eye left'>
          <div className='pupil' style={pupilStyleLeft}></div>
        </div>
        <div className='owl-eye right'>
          <div className='pupil' style={pupilStyleRight}></div>
        </div>
      </div>
    </div>
  );
};

export default Owl;
