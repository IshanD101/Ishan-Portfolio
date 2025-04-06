import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  // Function to handle the resume download
  const handleDownloadResume = () => {
    // Create a link to your resume file
    const link = document.createElement('a');
    link.href = '/src/assets/Ishan_Dakshina_CV.pdf'; // Update this path to where your resume is stored
    link.download = 'Ishan_Dakshina_CV.pdf'; // What the downloaded file will be named
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
      <section id="home" className="min-h-screen flex items-start md:items-center section-padding pt-0">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left mt-4 md:mt-0"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6">
              Hola!, I'm <span className="text-green-400">Ishan Dakshina</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 mb-4 md:mb-8">
              Full Stack Developer
            </h2>
            <p className="text-gray-400 mb-6 md:mb-8">
              Turning ideas into seamless digital experiences, front to back....!!!
            </p>
            <motion.button
                onClick={handleDownloadResume}
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
              className="relative flex justify-center mt-8 md:mt-0"
          >
            <div className="aspect-square rounded-full bg-gradient-to-r from-green-400 to-green-700 opacity-20 absolute inset-0 blur-3xl" />
            <img
                src="/src/assets/ishan-pic.png"
                alt="Profile"
                className="rounded-full w-3/4 relative z-10"
            />
          </motion.div>
        </div>
      </section>
  );
};

export default Hero;