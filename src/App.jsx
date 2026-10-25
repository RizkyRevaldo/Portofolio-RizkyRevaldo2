// src/App.jsx
import React, { useState } from 'react';
import './index.css';
import { motion, AnimatePresence } from 'framer-motion';

// Import Komponen
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProjectShowcase from './components/ProjectShowcase';
import Expertise from './components/Expertise';
import Contact from './components/Contact';

// Konstanta Animasi Global
const ease = [0.16, 1, 0.3, 1];

const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
    
    :root {
      --bg-primary: #090909;
      --bg-secondary: #151515;
      --text-primary: #F2F0EB;
      --text-muted: #929292;
    }

    body {
      background-color: var(--bg-primary);
      color: var(--text-primary);
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      overflow-x: hidden;
    }

    .font-display { font-family: 'Space Grotesk', sans-serif; }
    .font-body { font-family: 'Inter', sans-serif; }
    ::selection { background-color: var(--text-primary); color: var(--bg-primary); }
    ::-webkit-scrollbar { width: 8px; }
    ::-webkit-scrollbar-track { background: var(--bg-primary); }
    ::-webkit-scrollbar-thumb { background: var(--bg-secondary); }
    ::-webkit-scrollbar-thumb:hover { background: var(--text-muted); }
  `}</style>
);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <GlobalStyles />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Intro key="intro" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.main 
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease }}
            className="relative"
          >
            <Navbar />
            <Hero />
            <About />
            <ProjectShowcase />
            <Expertise />
            <Contact />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}