import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const socialLinks = [
  {
    name: 'GitHub',
    icon: 'https://img.icons8.com/?size=100&id=efFfwotdkiU5&format=png&color=000000',
    url: 'https://github.com/IshanD101'
  },
  {
    name: 'LinkedIn',
    icon: 'https://img.icons8.com/?size=100&id=kBCrQMzpQDLQ&format=png&color=000000',
    url: 'https://www.linkedin.com/in/ishan-dakshina-6a0454248'
  },
  {
    name: 'Email',
    icon: '📧',
    url: 'mailto:dakshinaishan88@gmail.com'
  },
];

// Custom animated divider component
const CreativeDivider = () => {
  const [dividerRef, dividerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
      <div ref={dividerRef} className="relative py-8 flex items-center justify-center overflow-hidden">
        <motion.div
            className="absolute w-full h-px bg-gray-700"
            initial={{ scaleX: 0 }}
            animate={dividerInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5 }}
        />

        {/* Animated dots */}
        <div className="relative z-10 flex space-x-2">
          {[...Array(5)].map((_, i) => (
              <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-green-400"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={dividerInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: 0.7 + (i * 0.1),
                    type: "spring",
                    stiffness: 200
                  }}
              />
          ))}
        </div>

        {/* Animated glow effect */}
        <motion.div
            className="absolute w-32 h-4 bg-green-400 filter blur-xl rounded-full"
            initial={{ opacity: 0 }}
            animate={dividerInView ? { opacity: 0.3 } : {}}
            transition={{ duration: 1, delay: 1.2 }}
        />
      </div>
  );
};

function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
      <>
        {/* Creative divider to separate contact from previous section */}
        <CreativeDivider />

        <section id="contact" className="py-20" ref={ref}>
          <div className="container mx-auto px-4">
            <motion.h2
                className="text-4xl font-bold text-white mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}>
              Get in Touch with Me!
            </motion.h2>

            <div className="max-w-4xl mx-auto">
              <motion.p
                  className="text-gray-300 text-center mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
              >
                I'm always open to new opportunities and interesting projects.
                Feel free to reach out!
              </motion.p>

              <div className="flex justify-center space-x-8 mb-12">
                {socialLinks.map((link, index) => (
                    <motion.a
                        key={link.name}
                        href={link.url}
                        className="text-4xl hover:text-green-400 transition-colors duration-300 relative group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 * index }}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                      {link.name === 'Email' ? (
                          <span className="block text-center">{link.icon}</span>
                      ) : (
                          <img src={link.icon} alt={`${link.name} icon`} className="w-10 h-10 mb-2" />
                      )}
                      <div className="absolute inset-0 bg-green-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.a>
                ))}
              </div>

              <motion.form
                  className="glass-card space-y-6 flex flex-col justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                      type="text"
                      id="name"
                      className="w-full bg-dark/50 border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-green-400 transition-colors duration-300"
                      placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                      type="email"
                      id="email"
                      className="w-full bg-dark/50 border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-green-400 transition-colors duration-300"
                      placeholder="Your e-mail"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                      id="message"
                      rows="4"
                      className="w-full bg-dark/50 border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-green-400 transition-colors duration-300"
                      placeholder="Your message..."
                  ></textarea>
                </div>
                <motion.button
                    type="submit"
                    className="px-6 py-3 text-center rounded-3xl border border-green-400
                      text-green-400 hover:bg-green-400 hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </motion.form>
            </div>
          </div>
        </section>
      </>
  );
}

export default Contact;