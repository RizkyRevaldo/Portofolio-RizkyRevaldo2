// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA, fadeInUp, imageReveal } from '../data/constants';

const About = () => {
  return (
    <section id="about" className="py-24 md:py-40 px-6 md:px-12 bg-[#151515]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">
        <div className="md:col-span-5 md:col-start-1 order-2 md:order-1">
          <motion.h2 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="font-display text-4xl md:text-6xl mb-8 tracking-tighter uppercase"
          >
            {PORTFOLIO_DATA.about.title}
          </motion.h2>
          <motion.p 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="font-body text-lg md:text-xl text-[#929292] leading-relaxed mb-12 max-w-md"
          >
            {PORTFOLIO_DATA.about.description}
          </motion.p>
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="flex gap-12 border-t border-[#333] pt-8"
          >
            <div>
              <span className="block font-body text-xs text-[#929292] uppercase tracking-widest mb-2">Location</span>
              <span className="font-display text-lg uppercase">{PORTFOLIO_DATA.identity.location}</span>
            </div>
            <div>
              <span className="block font-body text-xs text-[#929292] uppercase tracking-widest mb-2">Status</span>
              <span className="font-display text-lg uppercase text-[#F2F0EB]">Mahasiswa / Available</span>
            </div>
          </motion.div>
        </div>
        
        <div className="md:col-span-6 md:col-start-7 order-1 md:order-2 overflow-hidden aspect-[4/5] md:aspect-[3/4]">
          <motion.img 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={imageReveal}
            src={PORTFOLIO_DATA.about.image} 
            alt="Profil" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out"
          />
        </div>
      </div>
    </section>
  );
};

export default About;