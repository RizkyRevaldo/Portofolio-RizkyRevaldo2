// src/components/Intro.jsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA, ease } from '../data/constants';

const Intro = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#090909]"
      exit={{ opacity: 0, transition: { duration: 0.8, ease } }}
    >
      <div className="overflow-hidden">
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1, ease, delay: 0.2 }}
          className="font-display text-2xl tracking-widest text-[#F2F0EB] uppercase"
        >
          {PORTFOLIO_DATA.identity.name}
        </motion.div>
      </div>
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 h-[1px] bg-[#F2F0EB]"
        initial={{ width: 0 }}
        animate={{ width: "100px" }}
        transition={{ duration: 1.5, ease, delay: 0.5 }}
      />
    </motion.div>
  );
};

export default Intro;