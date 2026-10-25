import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { PORTOFOLIO_DATA, staggerContainer, revealTexy } from '../data/constants';

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col justify-end pb-24 px-6 md:px-12 relative pt-32">
            <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-[1400px] w-full mx-auto"
            >
            {PORTOFOLIO_DATA.hero.lines.map((line, index) => (
                <div key= {index} className="overflow-hidden leading-[0.85] py-1">
                    <motion.h1
                    variants={revealText}
                    className="font-display font-medium text-[14vw] md:text-[9vw] lg:text-[8.5vw] tracking-tighter upparcase m-0 text-[#F2F0EB]"
                    >
                        {line}
                    </motion.h1>
                </div>
            ))}
            </motion.div>

            <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 right-6 md:right-12 flex flex-col items-center gap-4 text-[#929292]"
            >
            <span className="font-body text-xs uppercase tracking-widest rotate-90 origin-right translate-x-[4px] mb-8">Scroll</span>
            <ArrowDown size={16} className="animate-bounce" />
            </motion.div>
        </section>
    );
};

export default Hero;