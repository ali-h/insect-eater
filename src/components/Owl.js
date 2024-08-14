import React, { useRef, useEffect } from 'react';
import owlImage from '../assets/images/owl.png';
import '../styles/Owl.css';

const Owl = ({ insectPosition, setOwlRef }) => {
  const owlRef = useRef(null);

  const setPosition = () => {
    return {
      transform: `translate(${insectPosition.x}%, ${insectPosition.y}%)`,
    }
  };

  useEffect(() => {
    setOwlRef(owlRef);
  }, [setOwlRef]);

  return (
    <div className="owl">
      <img src={owlImage} alt="Owl" className="owl-image" ref={owlRef} />
      <div className="owl-eyes">
        <div className="owl-eye left">
          <div className="pupil" style={setPosition()}></div>
        </div>
        <div className="owl-eye right">
          <div className="pupil" style={setPosition()}></div>
        </div>
      </div>
    </div>
  );
};

export default Owl;
