import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

function RotatingStars() {
  const starsRef = useRef();
  
  useFrame((state, delta) => {
    if (starsRef.current) {
      starsRef.current.rotation.x -= delta / 40;
      starsRef.current.rotation.y -= delta / 50;
    }
  });

  return (
    <Stars 
      ref={starsRef} 
      radius={100} 
      depth={50} 
      count={4000} 
      factor={3} 
      saturation={0} 
      fade 
      speed={0.5} 
    />
  );
}

export default function Background3D() {
  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100vw', 
      height: '100vh', 
      zIndex: -1,
      background: 'var(--bg-color)', /* Ensure it blends with the dark theme */
      pointerEvents: 'none' /* Don't block interactions */
    }}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <RotatingStars />
      </Canvas>
    </div>
  );
}
