// src/data/constants.js

export const PORTFOLIO_DATA = {
  identity: {
    name: "RIZKY REVALDO",
    role: "FULLSTACK WEB DEVELOPER",
    location: "TANGERANG, BANTEN, INDONESIA"
  },
  hero: {
    lines: ["BUILDING", "MODERN WEB", "APPLICATIONS", "& SYSTEMS."]
  },
  about: {
    title: "TENTANG SAYA",
    description: "Saya adalah mahasiswa Teknik Informatika yang berfokus merancang produk digital fungsional dan efisien. Saya terbiasa menjembatani ketelitian logika backend dengan antarmuka frontend yang dinamis, bertujuan untuk menciptakan sistem web yang andal, mulai dari portal komunitas hingga sistem Point of Sale.",
    image: "/foto-profil.jpg" 
  },
  projects: [
    {
      id: "01",
      title: "KARANG TARUNA PORTAL",
      category: "FULLSTACK WEB APP",
      year: "2026",
      description: "Portal manajemen aktivitas, direktori anggota, dan registrasi event untuk Unit 05 Cengkareng Timur menggunakan React, Tailwind CSS, dan Laravel.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
      layout: "full"
    },
    {
      id: "02",
      title: "KASIRKU CLOUD POS",
      category: "SYSTEM INTERFACE",
      year: "2026",
      description: "Aplikasi Cloud Point of Sale untuk usaha kecil dengan manajemen inventaris produk, kalkulasi otomatis, dan laporan harian (Laravel Breeze, React).",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
      layout: "left"
    },
    {
      id: "03",
      title: "WA TASK REMINDER",
      category: "AUTOMATION / BOT",
      year: "2026",
      description: "Bot pengingat tugas otomatis berbasis WhatsApp yang dikembangkan menggunakan Node.js, whatsapp-web.js, dan SQLite di environment Linux.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
      layout: "right"
    }
  ],
  expertise: [
    "FRONTEND ARCHITECTURE",
    "BACKEND (LARAVEL & PHP)",
    "NODE.JS AUTOMATION",
    "DATABASE MANAGEMENT",
    "LINUX SYSTEM WORKFLOWS"
  ],
  contact: {
    email: "rizkyrevaldo2305@gmail.com",
    socials: ["GITHUB", "LINKEDIN", "INSTAGRAM", "PORTFOLIO"]
  }
};

export const ease = [0.16, 1, 0.3, 1];

export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export const revealText = {
  hidden: { y: "100%" },
  visible: { y: 0, transition: { duration: 1, ease } }
};

export const imageReveal = {
  hidden: { opacity: 0, scale: 1.05, filter: "blur(10px)" },
  visible: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 1.2, ease } }
};