import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Define skills with image URLs for icons
const skills = [
  {
    name: 'Java',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
  },
  {
    name: 'C#',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg'
  },
  {
    name: 'ASP .NET',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg'
  },
  {
    name: 'Spring Boot',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg'
  },
  {
    name: 'Angular',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg'
  },
  {
    name: 'React.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
  },
  {
    name: 'Node.JS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
  },
  {
    name: 'MySQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
  },
  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
  },
  {
    name: 'Javascript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
  },
  {
    name: 'Typescript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
  },
];

function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
      <section id="about" className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4" ref={ref}>
          <motion.h2
              className="text-4xl font-extrabold text-white mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center p-10">
            {/* Left Column - About Text */}
            <motion.div
                className="text-gray-300 space-y-6 text-lg leading-relaxed text-left lg:text-left text-center"
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}>
              <p>
                I'm a passionate software engineering undergraduate who loves building full-stack applications,
                especially with Java at the core.
              </p>
              <p>
                I thrive on bringing ideas to life through clean code, intuitive UI, and scalable architecture.
                Every line of code I write is a step toward solving real-world problems creatively.
              </p>
              <p>
                I embrace challenges, adapt quickly, and enjoy collaborating with others to shape meaningful digital
                experiences.
              </p>
              <p>
                Whether it's a solo project or a team hustle, I'm all about continuous learning and pushing limits.
              </p>
            </motion.div>

            {/* Right Column - Tech Stack */}
            <motion.div
                className="grid grid-cols-3 sm:grid-cols-4 gap-5"
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
              {skills.map((skill, index) => (
                  <motion.div
                      key={skill.name}
                      className="flex flex-col items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 transform transition duration-300 ease-in-out"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      whileHover={{
                        scale: 1.1,
                        boxShadow: '0px 4px 15px rgba(255, 255, 255, 0.3)', // Subtle glow on hover
                        transition: { duration: 0.3 },
                      }}
                  >
                    <img src={skill.icon} alt={`${skill.name} icon`} className="w-10 h-10 mb-2" />
                    <span className="text-white text-sm font-medium text-center">{skill.name}</span>
                  </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
  );
}

export default About;