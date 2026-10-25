import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/constants';

const easeOut = [0.22, 1, 0.36, 1];

// Reduced motion: hanya fade, tanpa pergerakan
const getHeadlineVariants = (reduce) => ({
  hidden: reduce
    ? { opacity: 0, y: 0 }
    : { y: '110%', opacity: 0 },
  visible: (index) => ({
    y: '0%',
    opacity: 1,
    transition: {
      duration: reduce ? 0.6 : 1,
      delay: 0.2 + index * 0.14,
      ease: easeOut,
    },
  }),
});

const getContentVariants = (reduce) => ({
  hidden: reduce ? { opacity: 0, y: 0 } : { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: reduce ? 0.6 : 0.85,
      delay: 0.65,
      ease: easeOut,
    },
  },
});

const Hero = ({ introComplete = false }) => {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', '30%']
  );

  const scrollOpacity = useTransform(
    scrollYProgress,
    [0, 0.8, 1],
    [1, 0.5, 0]
  );

  const headlineLines = PORTFOLIO_DATA.hero.lines;
  const headlineVariants = getHeadlineVariants(shouldReduceMotion);
  const contentVariants = getContentVariants(shouldReduceMotion);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-[#090909] px-6 pb-24 pt-32 md:px-12"
    >
      {/* Hero content */}
      <motion.div
        style={
          shouldReduceMotion
            ? undefined
            : {
                y: parallaxY,
                opacity: scrollOpacity,
              }
        }
        className="relative z-10 mx-auto w-full max-w-[1400px]"
      >
        {/* Main headline */}
        <div>
          {headlineLines.map((line, index) => (
            <div
              key={`${line}-${index}`}
              className="overflow-hidden py-1 leading-[0.85]"
            >
              <motion.h1
                custom={index}
                variants={headlineVariants}
                initial="hidden"
                animate={introComplete ? 'visible' : 'hidden'}
                className="m-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center bg-clip-text text-[14vw] font-bold uppercase tracking-tighter text-transparent md:text-[10vw] lg:text-[9vw]"
              >
                {line}
              </motion.h1>
            </div>
          ))}
        </div>

        {/* Supporting content */}
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate={introComplete ? 'visible' : 'hidden'}
          className="mt-8 flex flex-col gap-5 md:mt-10 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-md font-body text-sm leading-relaxed text-[#929292] md:text-base">
            Developer focused on building thoughtful digital
            experiences through code, design, and technology.
          </p>

          <span className="font-body text-xs uppercase tracking-[0.2em] text-[#929292]">
            Available for selected projects
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
        animate={
          introComplete
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: shouldReduceMotion ? 0 : 12 }
        }
        transition={{
          duration: shouldReduceMotion ? 0.6 : 0.7,
          delay: shouldReduceMotion ? 0.8 : 1.5,
          ease: easeOut,
        }}
        className="absolute bottom-10 right-6 z-10 flex flex-col items-center gap-4 text-[#929292] md:right-12"
      >
        <span className="mb-8 translate-x-[4px] rotate-90 origin-right font-body text-xs uppercase tracking-widest">
          Scroll
        </span>

        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : { y: [0, 5, 0] }
          }
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <ArrowDown size={16} strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;