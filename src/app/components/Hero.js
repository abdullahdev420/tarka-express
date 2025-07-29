"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-center py-24 px-6 bg-cover bg-center text-white"
      style={{
        backgroundImage: `url('/hero-bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow"
      >
        Welcome to <span className="text-yellow-300">Tarka Express</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow font-bold"
      >
        Desi flavor delivered hot and fast to your doorstep. Taste the
        tradition!
      </motion.p>
    </motion.section>
  );
};

export default Hero;
