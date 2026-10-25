// src/components/Expertise.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA, fadeInUp } from '../data/constants';

const Expertise = () => {
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-[#151515]">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
          className="font-body text-xs uppercase tracking-widest text-[#929292] mb-16"
        >
          Expertise & Focus
        </motion.h2>
        
        <ul className="flex flex-col border-t border-[#333]">
          {PORTFOLIO_DATA.expertise.map((item, index) => (
            <motion.li 
              key={index}
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp}
              className="border-b border-[#333] py-8 md:py-12 group cursor-default"
            >
              <h3 className="font-display text-4xl md:text-7xl lg:text-8xl tracking-tighter uppercase text-[#555] group-hover:text-[#F2F0EB] transition-colors duration-500 hover:pl-8">
                {item}
              </h3>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Expertise;