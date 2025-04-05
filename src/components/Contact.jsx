import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const socialLinks = [
  { name: 'GitHub', icon: '🐱', url: 'https://github.com' },
  { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com' },
  { name: 'Email', icon: '📧', url: 'mailto:your.email@example.com' },
];

function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-white mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <motion.p
            className="text-gray-300 text-center mb-12"
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
                className="text-4xl hover:text-gold-light transition-colors duration-300 relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="relative z-10">{link.icon}</span>
                <div className="absolute inset-0 bg-gold/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            ))}
          </div>

          <motion.form
            className="glass-card space-y-6"
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
                className="w-full bg-dark/50 border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-gold-light transition-colors duration-300"
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
                className="w-full bg-dark/50 border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-gold-light transition-colors duration-300"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full bg-dark/50 border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-gold-light transition-colors duration-300"
                placeholder="Your message..."
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="button-primary w-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;