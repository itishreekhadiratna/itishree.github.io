import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Icosahedron } from '@react-three/drei';

function AnimatedGeometry() {
  const outerRef = useRef();
  const innerRef = useRef();
  
  useFrame((state, delta) => {
    if (outerRef.current) {
      outerRef.current.rotation.x += delta * 0.15;
      outerRef.current.rotation.y += delta * 0.2;
    }
    if (innerRef.current) {
      innerRef.current.rotation.x -= delta * 0.1;
      innerRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      {/* Sleek Professional Outer Wireframe */}
      <Icosahedron ref={outerRef} args={[1.6, 1]}>
        <meshStandardMaterial 
          color="#00f2fe" 
          wireframe={true} 
          transparent 
          opacity={0.4}
        />
      </Icosahedron>
      
      {/* Inner Glowing Core */}
      <Icosahedron ref={innerRef} args={[1, 1]}>
         <meshStandardMaterial 
           color="#4facfe" 
           transparent 
           opacity={0.8}
           roughness={0.2}
           metalness={0.8}
         />
      </Icosahedron>
    </Float>
  );
}

export default function Hero3DObject() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#00f2fe" />
        <AnimatedGeometry />
      </Canvas>
    </div>
  );
}
