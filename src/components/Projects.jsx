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
    title: 'EYEDRA - (Clarity | Connection | Care)',
    description: 'EYEDRA is a social networking platform dedicated to' +
        ' digital mental wellbeing, focused on providing emotional support' +
        ' through impactful features such as Virtual Campfire sessions,' +
        'Community Spaces, Content Sharing, and AR-powered activities. The ' +
        'goal of the platform is to promote mental wellness by creating a ' +
        'safe, user-friendly space where individuals can express themselves' +
        ' and receive compassionate, technology-driven support. This project' +
        ' is being developed as part of our Level 5 Software Development Group ' +
        'Project at the Informatics Institute of Technology, affiliated with the' +
        ' University of Westminster.',
    tech: ['Spring Boot', 'Flutter', 'MySQL', 'MongoDB', 'Docker', 'GCP', 'Microservices'],
    links: {
      code: 'https://github.com',
      demo: 'https://demo.com',
    },
  },
  {
    title: 'EventPass.LK - Online Event Ticketing Platform',
    description: 'EventPass.LK is an emerging online event ticket-selling platform' +
        ' in Sri Lanka, where users can seamlessly purchase tickets for various events,' +
        ' while event organizers can create and manage their events directly on the platform. ' +
        'This ongoing project provides me with hands-on experience in building a real-time ticketing ' +
        'platform, managing complex user roles, integrating payment systems, and delivering a rich, dynamic ' +
        'user interface. It allows me to strengthen my full-stack development skills and work with cutting-edge ' +
        'technologies to create a scalable and impactful product.',
    tech: ['React', 'Redux', 'Axios', 'CSS', 'MongoDB', 'Node.js', 'Express.js'],
    links: {
      code: 'https://github.com',
      demo: 'https://demo.com',
    },
  },
  {
    title: 'Hadissi.LK',
    description: 'Hadissi.LK is an online marketplace ' +
        'platform developed as a group project by a team ' +
        'of four. The platform was designed to facilitate smooth' +
        ' and secure buying and selling of goods, providing a user-friendly' +
        ' experience for both individual sellers and small businesses. It features' +
        ' product listings, user profiles, categorized browsing, and a clean, responsive' +
        ' interface aimed at making peer-to-peer transactions easy and accessible.',
    tech: ['Angular', 'Tailwind CSS', 'RxJS', 'Material-UI', 'PrimeNG'],
    links: {
      code: 'https://github.com',
      demo: 'https://demo.com',
    },
  },
  {
    title: 'Roll & Roll – Kotlin Android Native Development',
    description: 'The Roll & Roll is a competitive dice game built using Kotlin and ' +
        'Jetpack Compose for Android. In the game, a human player competes against the ' +
        'computer by rolling five dice simultaneously. The objective is to reach a target ' +
        'score of 101 or more, with players able to reroll dice for better outcomes. After ' +
        'each throw, players can either score their result or opt for up to two rerolls, choosing ' +
        'which dice to keep. The game continues until one player achieves the target score. ' +
        'In case of a tie, a final roll-off is performed to determine the winner.',
    tech: ['Kotlin', 'Jetpack Compose', 'Android Studio', 'State Management'],
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

          <style>
            {`
            .swiper-button-next,
            .swiper-button-prev {
              color: #4ade80 !important;
            }
            
            .swiper-pagination-bullet-active {
              background-color: #4ade80 !important;
            }
          `}
          </style>

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
                <SwiperSlide key={index} className="h-auto flex">
                  <motion.div
                      className="glass-card w-full flex flex-col"
                      initial={{ opacity: 0, y: 50 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.2 }}>
                    <div className="p-6 flex flex-col h-full">
                      <h3 className="text-xl font-bold text-center text-white mb-3">{project.title}</h3>
                      <p className="text-gray-300 mb-4 text-center overflow-y-auto flex-grow line-clamp-6">{project.description}</p>
                      <div className="flex flex-wrap justify-center gap-2 mb-4">
                        {project.tech.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 bg-green-600/10 text-green-500 rounded-full text-sm">
                        {tech}
                      </span>
                        ))}
                      </div>
                      <div className="space-x-4 mt-auto text-center">
                        <a
                            href={project.links.code}
                            className="px-6 py-3 text-center rounded-3xl border border-green-400
                      text-green-400 hover:bg-green-400 hover:text-white transition-colors duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                          View
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