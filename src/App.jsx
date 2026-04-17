import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Background3D from './components/Background3D';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX }}
      />
      <Background3D />
      <Navbar />
      <main>
        <Home />
      </main>
    </>
  );
}
