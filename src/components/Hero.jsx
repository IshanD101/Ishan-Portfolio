import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-green-400">Ishan Dakshina</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300 mb-8">
            Full Stack Developer
          </h2>
          <p className="text-gray-400 mb-8">
            Crafting beautiful and functional digital experiences
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border border-green-400 text-green-400 rounded-md hover:bg-green-400 hover:text-white transition-colors duration-300">
            Download Ishan's Resume
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-square rounded-full bg-gradient-to-r from-green-400 to-green-700 opacity-20 absolute inset-0 blur-3xl" />
          <img
            src="https://via.placeholder.com/500"
            alt="Profile"
            className="rounded-full w-full relative z-10"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;