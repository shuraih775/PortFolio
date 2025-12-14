import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Reverie Facade',
    description: 'Launched an AI-powered app for managing maladaptive daydreaming with features for day planning, emotional trigger analysis, and personalized tips to boost productivity and well-being.',
    link: 'https://github.com/shuraih775/The-ReverieFacade-App',
    technologies: ['React Native', 'Express', 'MongoDB'],
  },
  {
    title: 'StudyCollab',
    description: 'Built a real-time study collaboration platform with WebSocket-based messaging, secure file sharing via MinIO, and containerized microservices.',
    link: 'https://github.com/shuraih775/Study-Colab',
    technologies: ['Go', 'Spring Boot', 'PostgreSQL', 'MinIO', 'Docker', 'Next.js'],
  },
  {
    title: 'Cypher',
    description: 'Built a distributed Go crawler using goroutines and Redis locking, with ML-based domain classification and stylometry-driven clustering for writing-pattern analysis.',
    // link: 'https://github.com/shuraih775',
    technologies: ['Go', 'Redis', 'XLM-R', 'DarkBERT'],
  },
  {
    title: 'College BookMart',
    description: 'Developed a website to manage bookstore operations, reducing crowding and improving inventory management, revenue tracking, and automated printing services.',
    link: 'https://github.com/shuraih775/College-Bookmart',
    technologies: ['MERN Stack', 'QZ Tray', 'RazorPay API'],
  },
  {
    title: 'Gym Website',
    description: 'A vibrant gym website showcasing services, membership options, and a user-friendly layout that reflects an energetic fitness atmosphere.',
    link: 'https://github.com/shuraih775/Gym-website',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Fast Style Transfer',
    description: 'Implemented Texture Networks to enable real-time image stylization using deep neural networks.',
    link: 'https://github.com/shuraih775/Fast-Style-Transfer',
    technologies: ['Python', 'TensorFlow', 'Deep Learning'],
  },
  
  
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 dark:text-gray-100 mb-12">Projects</h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="p-6 border dark:border-gray-700 rounded-2xl shadow-xl bg-white dark:bg-gray-900 hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">{project.title}</h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-teal-100 dark:bg-teal-800 text-teal-400 dark:text-teal-400 rounded-full text-xs font-semibold">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {
              project.link && <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500 font-medium"
            >
              View Project <FaExternalLinkAlt className="ml-2" />
            </a>
            }
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
