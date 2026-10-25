// src/components/ProjectShowcase.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA, fadeInUp, ease } from '../data/constants';

const ProjectShowcase = () => {
  return (
    <section id="work" className="py-24 md:py-40 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
          className="font-body text-xs uppercase tracking-widest text-[#929292] mb-20 flex items-center gap-4"
        >
          Selected Work <span className="w-12 h-[1px] bg-[#333]"></span>
        </motion.h2>

        <div className="flex flex-col gap-32 md:gap-48">
          {PORTFOLIO_DATA.projects.map((project) => (
            <div 
              key={project.id} 
              className={`flex flex-col ${
                project.layout === 'left' ? 'md:items-start' : 
                project.layout === 'right' ? 'md:items-end' : 
                'items-center'
              }`}
            >
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
                className={`w-full group cursor-pointer ${
                  project.layout === 'full' ? 'md:w-full' : 'md:w-[65%]'
                }`}
              >
                <div className="overflow-hidden mb-6 bg-[#151515] aspect-[16/9]">
                  <motion.img 
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.6, ease }}
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
                
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h3 className="font-display text-3xl md:text-5xl uppercase tracking-tight mb-2 group-hover:text-[#929292] transition-colors duration-300 flex items-center gap-4">
                      {project.title}
                      <ArrowUpRight size={24} className="opacity-0 -translate-y-2 translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                    </h3>
                    <div className="font-body text-xs md:text-sm text-[#929292] uppercase tracking-widest flex gap-4">
                      <span>{project.id}</span>
                      <span>—</span>
                      <span>{project.category}</span>
                    </div>
                  </div>
                  <p className="font-body text-sm text-[#929292] max-w-xs text-left md:text-right">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;