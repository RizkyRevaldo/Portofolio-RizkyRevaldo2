// src/components/About.jsx
import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import { PORTFOLIO_DATA, fadeInUp, ease } from '../data/constants';

// Reveal ala tirai: terbuka dari bawah ke atas
const frameReveal = {
  hidden: { clipPath: 'inset(100% 0% 0% 0%)' },
  visible: {
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: { duration: 1.2, ease },
  },
};

const About = () => {
  const imageRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start'],
  });

  // Hanya teks latar yang bergerak
  const bgTextY = useTransform(scrollYProgress, [0, 1], ['12%', '-12%']);

  const { identity, about } = PORTFOLIO_DATA;
  const firstName = identity.name.split(' ')[0];

  return (
    <section id="about" className="py-24 md:py-40 px-6 md:px-12 bg-[#151515]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">
        <div className="md:col-span-5 md:col-start-1 order-2 md:order-1">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="font-display text-4xl md:text-6xl mb-8 tracking-tighter uppercase"
          >
            {about.title}
          </motion.h2>
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="font-body text-lg md:text-xl text-[#929292] leading-relaxed mb-12 max-w-md"
          >
            {about.description}
          </motion.p>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="flex gap-12 border-t border-[#333] pt-8"
          >
            <div>
              <span className="block font-body text-xs text-[#929292] uppercase tracking-widest mb-2">Location</span>
              <span className="font-display text-lg uppercase">{identity.location}</span>
            </div>
            <div>
              <span className="block font-body text-xs text-[#929292] uppercase tracking-widest mb-2">Status</span>
              <span className="font-display text-lg uppercase text-[#F2F0EB]">Mahasiswa / Available</span>
            </div>
          </motion.div>
        </div>

        {/* Foto profil */}
        <div
          ref={imageRef}
          className="relative order-1 w-full max-w-md justify-self-center md:order-2 md:col-span-6 md:col-start-7 md:justify-self-end"
        >
          {/* Frame outline dekoratif */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 translate-x-3 translate-y-3 border border-[#333] md:translate-x-5 md:translate-y-5"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={shouldReduceMotion ? fadeInUp : frameReveal}
            className="relative aspect-[4/5] overflow-hidden bg-gradient-to-b from-[#2e2e2e] to-[#1a1a1a]"
          >
            {/* Teks nama besar di belakang foto */}
            <motion.span
              aria-hidden="true"
              style={shouldReduceMotion ? undefined : { y: bgTextY }}
              className="pointer-events-none absolute inset-x-0 top-[14%] select-none text-center font-display text-[30vw] font-bold uppercase leading-none tracking-tighter text-transparent md:text-[9rem]"
            >
              <span style={{ WebkitTextStroke: '1px rgba(242,240,235,0.14)' }}>
                {firstName}
              </span>
            </motion.span>

            {/* Foto menempel di dasar frame (warna asli) */}
            <img
              src={about.image}
              alt={`Foto profil ${identity.name}`}
              loading="lazy"
              className="absolute inset-x-0 bottom-0 h-full w-full object-cover object-bottom"
            />

            {/* Gradient bawah supaya caption terbaca */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#090909]/85 to-transparent"
            />

            {/* Caption */}
            <div className="pointer-events-none absolute bottom-5 left-5 right-5 flex items-end justify-between md:bottom-6 md:left-6 md:right-6">
              <div>
                <span className="block font-display text-sm uppercase tracking-tight text-[#F2F0EB] md:text-base">
                  {identity.name}
                </span>
                <span className="block font-body text-[10px] uppercase tracking-[0.2em] text-[#929292] md:text-xs">
                  {identity.role}
                </span>
              </div>
              <span className="font-body text-xs tracking-widest text-[#929292]">
                (01)
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;