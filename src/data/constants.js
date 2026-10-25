export const PORTOFOLIO_DATA = {
    identity: {
        name: "RIZKY REVALDO",
        role: "FULLSTACK WEB DEVELOPER",
        location: "TANGERANG, BANTEN, INDONESIA",
    },
    contact: {
        email: "rizkyrevaldo2305@gmail.com",
        socials: ["GITHUB", "LINKEDIN", "INSTAGRAM", "PORTFOLIO"],
    }    
};

export const ease = [0, 16, 1, 0.3, 1];

export const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } }
};

export const revealText = {
    hidden: { y: "100%" },
    visible: { y: 0, transition: { duration: 1, ease } }
};

export const imageReveal = {
    hidden: { opacity: 0, scale: 1.05, filter: "blur(10px)" },
    visible: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 1.2, ease } }
};