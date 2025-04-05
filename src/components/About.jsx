import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  { name: 'React', icon: '⚛️' },
  { name: 'JavaScript', icon: '📜' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'Python', icon: '🐍' },
  { name: 'Docker', icon: '🐳' },
];

function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
        animate={{
          y: inView ? [50, 0] : 50,
          opacity: inView ? 1 : 0,
        }}
        transition={{ duration: 0.8 }}
      />

      <div className="container mx-auto px-4 relative">
        <motion.h2
          className="text-4xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12" ref={ref}>
          <motion.div
            className="text-gray-300"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="mb-6 text-lg">
              I'm a passionate full-stack developer with a keen eye for design and a love for creating
              seamless user experiences. With expertise in modern web technologies, I transform complex
              problems into elegant solutions.
            </p>
            <p className="text-lg">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source
              projects, or sharing knowledge with the developer community.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="glass-card flex items-center space-x-3"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <span className="text-2xl">{skill.icon}</span>
                <span className="text-white">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;