import React from 'react';
import { useDraggable } from '@dnd-kit/core';

const DragOverlay = () => {
  const { active } = useDraggable();

  if (!active) {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        left: `${active.transform?.x || 0}px`,
        top: `${active.transform?.y || 0}px`,
        pointerEvents: 'none',
        zIndex: 100,
        opacity: 0.5,
      }}
    >
      <img
        src={active.type === 'ant'
          ? '/path/to/ant.png'
          : active.type === 'beetle'
          ? '/path/to/beetle.png'
          : '/path/to/wasp.png'}
        alt={active.type}
        style={{ width: '50px', height: 'auto' }}
      />
    </div>
  );
};

export default DragOverlay;
