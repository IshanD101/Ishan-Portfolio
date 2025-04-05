import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const navItems = ['Home', 'About', 'Projects', 'Education', 'Contact'];

  // Sidebar variants for animation
  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 31
      }
    },
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  return (
      <>
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

            {/* Desktop Navigation */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="hidden md:flex space-x-8"
            >
              {navItems.map((item) => (
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

            {/* Mobile Hamburger Menu */}
            <div className="md:hidden">
              <button
                  onClick={toggleMenu}
                  className="text-white focus:outline-none"
                  aria-label="Toggle menu"
              >
                <div className={`w-6 h-0.5 bg-green-400 mb-1.5 transition-all ${isOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-green-400 mb-1.5 ${isOpen ? 'opacity-0' : 'opacity-100'} transition-opacity`}></div>
                <div className={`w-6 h-0.5 bg-green-400 transition-all ${isOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
              </button>
            </div>
          </div>
        </motion.nav>

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {isOpen && (
              <motion.div
                  className="fixed top-0 right-0 w-64 h-full bg-gray-800 z-50 shadow-lg md:hidden"
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={sidebarVariants}
              >
                <div className="flex flex-col h-full">
                  <div className="flex justify-end p-4">
                    <button
                        onClick={toggleMenu}
                        className="text-white focus:outline-none"
                        aria-label="Close menu"
                    >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                      >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center space-y-8 px-4">
                    {navItems.map((item) => (
                        <Link
                            key={item}
                            to={item.toLowerCase()}
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            onClick={handleLinkClick}
                            activeClass="text-green-400"
                            className="nav-link cursor-pointer text-white hover:text-green-400 transition-colors duration-300 text-xl"
                        >
                          {item}
                        </Link>
                    ))}
                  </div>
                  <div className="p-4 mt-auto">
                    <div className="text-green-400 font-bold text-center">IshanD</div>
                  </div>
                </div>
              </motion.div>
          )}
        </AnimatePresence>

        {/* Overlay when sidebar is open */}
        <AnimatePresence>
          {isOpen && (
              <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 bg-black z-40 md:hidden"
                  onClick={toggleMenu}
              />
          )}
        </AnimatePresence>
      </>
  );
};

export default Navbar;