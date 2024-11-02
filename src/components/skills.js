import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaRust } from 'react-icons/fa';
import { DiMongodb, DiLinux } from 'react-icons/di';
import { SiGo, SiPython, SiAmazonwebservices, SiMysql, SiFirebase, SiGit, SiBootstrap, SiTailwindcss } from 'react-icons/si'; 

const skills = [
  { name: 'React', icon: <FaReact className="text-blue-500 dark:text-blue-400 text-4xl" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500 dark:text-green-400 text-4xl" /> },
  { name: 'MongoDB', icon: <DiMongodb className="text-green-500 dark:text-green-400 text-4xl" /> },
  { name: 'MySQL', icon: <SiMysql className="text-blue-500 dark:text-blue-400 text-4xl" /> },
  { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-500 dark:text-purple-400 text-4xl" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-blue-500 dark:text-blue-400 text-4xl" /> },
  { name: 'AWS', icon: <SiAmazonwebservices className="text-yellow-500 dark:text-yellow-400 text-4xl" /> },
  { name: 'React Native', icon: <FaReact className="text-blue-500 dark:text-blue-400 text-4xl" /> },
  { name: 'Firebase', icon: <SiFirebase className="text-orange-500 dark:text-orange-400 text-4xl" /> },
  { name: 'Git', icon: <SiGit className="text-red-500 dark:text-red-400 text-4xl" /> },
  { name: 'Go', icon: <SiGo className="text-blue-600 dark:text-blue-500 text-4xl" /> },       
  { name: 'Python', icon: <SiPython className="text-yellow-500 dark:text-yellow-400 text-4xl" /> },
  { name: 'Rust', icon: <FaRust className="text-red-500 dark:text-red-400 text-4xl" /> },
  { name: 'Linux', icon: <DiLinux className="text-black-500 dark:text-black-400 text-4xl" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 text-center pl-20 pr-20">
      <h2 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100 mb-8">Skills</h2>
      <div className="flex flex-wrap justify-center gap-10">
        {skills.map((skill, index) => (
          <motion.div 
            key={skill.name} 
            className="flex flex-col items-center text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, scale: 1 }}
            animate={{
              x: [0, Math.random() * 10 - 5, Math.random() * 10 - 5, 0],
              y: [0, Math.random() * 10 - 5, Math.random() * 10 - 5, 0],
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: index * 0.2,
            }}
          >
            {skill.icon}
            <p className="mt-2 text-lg font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 