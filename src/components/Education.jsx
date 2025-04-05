import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const education = [
  {
    year: '2023 - Present',
    degree: 'BEng.(Hons) Software Engineering',
    institution: 'Informatics Institute of Technology',
    description: '',
    icon: '🎓',
  },
  {
    year: '2021',
    degree: 'GCE Advanced Level Examination',
    institution: 'Thurstan College',
    description: '',
    icon: '📝',
  },
  {
    year: '2018',
    degree: 'GCE Ordinary Level Examination',
    institution: 'Thurstan College',
    description: '',
    icon: '📒',
  },
];

// Add this CSS to your global styles or as a styled component
const timelineStyles = `
  .timeline-line {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 2px;
    background-color: rgba(74, 222, 128, 0.5);
    transform: translateX(-50%);
  }
  
  .glass-card {
    background-color: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border-radius: 8px;
    padding: 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 100%;
  }

  @media (max-width: 768px) {
    .timeline-line {
      left: 2.5rem;
    }
  }
`;

function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
      <section id="education" className="py-20 relative overflow-hidden" ref={ref}>
        <style>{timelineStyles}</style>
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
            {/* Timeline line - properly positioned */}
            <div className="timeline-line" />

            <div className="space-y-12">
              {education.map((item, index) => (
                  <motion.div
                      key={index}
                      className={`flex flex-col ${
                          index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                      } items-center gap-4 md:gap-8`}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <div className="hidden md:block md:flex-1" />
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-green-600 flex items-center justify-center text-2xl md:text-4xl relative z-10 shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex-1 max-w-full">
                      <div className="glass-card">
                        <span className="text-green-400 font-semibold">{item.year}</span>
                        <h3 className="text-xl font-bold text-white mt-2">{item.degree}</h3>
                        <p className="text-gray-300 mt-1">{item.institution}</p>
                        {item.description && <p className="text-gray-400 mt-2">{item.description}</p>}
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