import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online shopping platform with real-time inventory management.',
    image: 'https://via.placeholder.com/600x400',
    tech: ['React', 'Node.js', 'MongoDB', 'Redux'],
    links: {
      code: 'https://github.com',
      demo: 'https://demo.com',
    },
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates and team features.',
    image: 'https://via.placeholder.com/600x400',
    tech: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    links: {
      code: 'https://github.com',
      demo: 'https://demo.com',
    },
  },
  {
    title: 'AI Image Generator',
    description: 'Web application that generates unique images using machine learning algorithms.',
    image: 'https://via.placeholder.com/600x400',
    tech: ['Python', 'TensorFlow', 'Flask', 'React'],
    links: {
      code: 'https://github.com',
      demo: 'https://demo.com',
    },
  },
];

function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <Swiper
          modules={[Navigation, Pagination, EffectCards]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="project-swiper"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="glass-card h-full"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gold/10 text-gold-light rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.links.code}
                      className="button-primary flex-1 text-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                    </a>
                    <a
                      href={project.links.demo}
                      className="button-primary flex-1 text-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Projects;