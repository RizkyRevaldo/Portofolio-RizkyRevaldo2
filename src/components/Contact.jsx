// src/components/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA, staggerContainer, revealText, fadeInUp } from '../data/constants';

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-40 px-6 md:px-12 min-h-screen flex flex-col justify-between">
      <div className="max-w-[1400px] mx-auto w-full flex-grow flex flex-col justify-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <div className="overflow-hidden mb-2">
            <motion.h2 variants={revealText} className="font-display text-[12vw] md:text-[10vw] leading-[0.8] tracking-tighter uppercase">
              LET'S
            </motion.h2>
          </div>
          <div className="overflow-hidden mb-12">
            <motion.h2 variants={revealText} className="font-display text-[12vw] md:text-[10vw] leading-[0.8] tracking-tighter uppercase text-[#929292]">
              TALK.
            </motion.h2>
          </div>
          
          <motion.a 
            variants={fadeInUp}
            href={`mailto:${PORTFOLIO_DATA.contact.email}`}
            className="inline-flex items-center gap-4 font-display text-2xl md:text-4xl uppercase border-b border-[#F2F0EB] pb-2 hover:text-[#929292] hover:border-[#929292] transition-colors duration-300"
          >
            {PORTFOLIO_DATA.contact.email}
            <ArrowUpRight size={32} />
          </motion.a>
        </motion.div>
      </div>

      <motion.footer 
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }}
        className="max-w-[1400px] mx-auto w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pt-12 border-t border-[#333]"
      >
        <div className="font-body text-xs text-[#929292] uppercase tracking-widest">
          © {new Date().getFullYear()} {PORTFOLIO_DATA.identity.name} <br/>
          ALL RIGHTS RESERVED.
        </div>
        <div className="flex flex-wrap gap-6 font-body text-xs uppercase tracking-widest">
          {PORTFOLIO_DATA.contact.socials.map((social) => (
            <a key={social} href="#" className="hover:text-[#F2F0EB] transition-colors text-[#929292]">
              {social}
            </a>
          ))}
        </div>
      </motion.footer>
    </section>
  );
};

export default Contact;