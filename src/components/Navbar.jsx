// src/components/Navbar.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA, ease } from '../data/constants';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5, ease }}
      className="fixed top-0 left-0 w-full p-6 md:p-10 flex justify-between items-start z-40 mix-blend-difference"
    >
      <div className="font-display font-medium text-sm md:text-base tracking-widest uppercase text-[#F2F0EB]">
        {PORTFOLIO_DATA.identity.name} <br/>
        <span className="text-[#929292] text-xs mt-1 block">{PORTFOLIO_DATA.identity.role}</span>
      </div>
      <div className="hidden md:flex gap-8 font-body text-xs tracking-widest uppercase text-[#F2F0EB]">
        <a href="#work" className="hover:text-[#929292] transition-colors">Work</a>
        <a href="#about" className="hover:text-[#929292] transition-colors">About</a>
        <a href="#contact" className="hover:text-[#929292] transition-colors">Contact</a>
      </div>
    </motion.nav>
  );
};

export default Navbar;