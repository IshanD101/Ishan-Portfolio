import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const education = [
  {
    year: '2020 - 2022',
    degree: 'Master of Computer Science',
    institution: 'Tech University',
    description: 'Specialized in Artificial Intelligence and Machine Learning',
    icon: '🎓',
  },
  {
    year: '2016 - 2020',
    degree: 'Bachelor of Science in Computer Science',
    institution: 'State University',
    description: 'Focus on Software Engineering and Data Structures',
    icon: '📚',
  },
  {
    year: '2014 - 2016',
    degree: 'Associate Degree in Programming',
    institution: 'Community College',
    description: 'Foundation in Programming and Web Development',
    icon: '💻',
  },
];

function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Education Journey
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="timeline-line" />

          <div className="space-y-12">
            {education.map((item, index) => (
              <motion.div
                key={index}
                className={`flex ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-8`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="flex-1" />
                <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center text-2xl relative z-10">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="glass-card">
                    <span className="text-gold-light font-semibold">{item.year}</span>
                    <h3 className="text-xl font-bold text-white mt-2">{item.degree}</h3>
                    <p className="text-gray-300 mt-1">{item.institution}</p>
                    <p className="text-gray-400 mt-2">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;