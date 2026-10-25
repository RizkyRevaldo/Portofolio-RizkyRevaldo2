// src/components/Intro.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/constants';

const Intro = ({ onComplete }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Logika animasi persentase angka 0 - 100
    let count = 0;
    const duration = 2000; // 2 detik untuk mencapai 100%
    const increment = duration / 100;

    const counterInterval = setInterval(() => {
      count += 1;
      setCounter(count);
      if (count === 100) clearInterval(counterInterval);
    }, increment);

    // Hapus layar loading setelah 3 detik
    const timer = setTimeout(onComplete, 3000); 

    return () => {
      clearInterval(counterInterval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#090909]"
      // Animasi saat loading selesai (layar bergeser ke atas)
      exit={{ opacity: 0, y: -100, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
    >
      {/* Teks Nama yang Muncul dari Bawah */}
      <div className="overflow-hidden mb-12">
        <motion.h1
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-3xl md:text-5xl tracking-[0.3em] text-[#F2F0EB] uppercase"
        >
          {PORTFOLIO_DATA.identity.name}
        </motion.h1>
      </div>

      {/* Kontainer Loading Bar & Angka */}
      <div className="flex flex-col items-center gap-4 w-64 md:w-80">
        <div className="h-[2px] w-full bg-[#333] relative overflow-hidden">
          {/* Garis Loading yang bergerak memanjang */}
          <motion.div
            className="absolute top-0 left-0 h-full bg-[#F2F0EB]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </div>
        
        {/* Angka Persentase */}
        <div className="font-body text-xs md:text-sm tracking-widest text-[#929292]">
          LOADING {counter}%
        </div>
      </div>
    </motion.div>
  );
};

export default Intro;