import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className={`fixed w-full z-50 transition-all duration-300 ${
              scrolled ? 'glass py-4' : 'py-6'
          }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl font-bold text-green-400"
          >
            IshanD
          </motion.div>

          <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="hidden md:flex space-x-8"
          >
            {['Home', 'About', 'Projects', 'Education', 'Contact'].map((item) => (
                <Link
                    key={item}
                    to={item.toLowerCase()}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    activeClass="text-green-400"
                    className="nav-link cursor-pointer text-white hover:text-green-400 transition-colors duration-300"
                >
                  {item}
                </Link>
            ))}
          </motion.div>
        </div>
      </motion.nav>
  );
};

export default Navbar;
