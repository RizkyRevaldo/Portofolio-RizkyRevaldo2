import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactLenis } from 'lenis/react';

// Components
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProjectShowcase from './components/ProjectShowcase';
import Expertise from './components/Expertise';
import Contact from './components/Contact';

const ease = [0.16, 1, 0.3, 1];

const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

    :root {
      --bg-primary: #090909;
      --bg-secondary: #151515;
      --text-primary: #F2F0EB;
      --text-muted: #929292;
    }

    html {
      background: var(--bg-primary);
      scroll-behavior: auto;
    }

    body {
      margin: 0;
      background-color: var(--bg-primary);
      color: var(--text-primary);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      overflow-x: hidden;
    }

    #root {
      min-height: 100%;
      overflow-x: clip;
    }

    .font-display {
      font-family: 'Space Grotesk', sans-serif;
    }

    .font-body {
      font-family: 'Inter', sans-serif;
    }

    ::selection {
      background-color: var(--text-primary);
      color: var(--bg-primary);
    }

    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background: var(--bg-primary);
    }

    ::-webkit-scrollbar-thumb {
      background: var(--bg-secondary);
    }

    ::-webkit-scrollbar-thumb:hover {
      background: var(--text-muted);
    }

    @media (prefers-reduced-motion: reduce) {
      html {
        scroll-behavior: auto;
      }
    }
  `}</style>
);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  // true hanya setelah intro selesai DAN fade-in halaman utama selesai
  const [heroReady, setHeroReady] = useState(false);

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.05,
        smoothWheel: true,
      }}
    >
      <GlobalStyles />

      <AnimatePresence mode="wait">
        {isLoading ? (
          <Intro
            key="intro"
            onComplete={() => setIsLoading(false)}
          />
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.65,
              ease,
            }}
            onAnimationComplete={() => setHeroReady(true)}
            className="relative min-h-screen"
          >
            <Navbar />
            <Hero introComplete={heroReady} />
            <About />
            <ProjectShowcase />
            <Expertise />
            <Contact />
          </motion.main>
        )}
      </AnimatePresence>
    </ReactLenis>
  );
}