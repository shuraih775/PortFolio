// src/components/About.js
import React,{useEffect,useState} from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import lightImage from '../assets/light.jfif';
import darkImage from '../assets/dark.png';

// import ParticleBackground from './particleBackground';

const About = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    
    const darkModeActive = document.documentElement.classList.contains('dark');
    setIsDarkMode(darkModeActive);


    const observer = new MutationObserver(() => {
      const darkModeUpdated = document.documentElement.classList.contains('dark');
      setIsDarkMode(darkModeUpdated);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);
  return (
    
    <section 
    id="about" 
    className="h-screen flex flex-col justify-center items-center text-center px-4 bg-gray-100 dark:bg-gray-800 relative overflow-hidden"
    
  >
  <div 
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: `url(${isDarkMode ? darkImage : lightImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      filter: `${isDarkMode ? 'blur(8px)' : 'blur(1px)'}`,
    }}
  ></div>
  
      
      <div className='relative z-10 justify-center items-center text-center '>
      <motion.h1 
        className="text-5xl font-extrabold text-gray-800 dark:text-gray-100"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 80 }}
      >
        Hi, I'm Mohammed Shuraih Shaikh
      </motion.h1>
      
      
      <motion.p 
        className="text-lg text-gray-600 dark:text-gray-300 mt-4 mb-10"
        initial={{ opacity: 0 }}
        
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Full Stack Developer & Low-Level System Engineer
      </motion.p>
      
      <motion.a 
        href="https://drive.google.com/file/d/13AoHR4zhK56tlf6yk900iGE6dlmut62e/view" 
        download 
        className="mt-8 px-6 py-3 bg-black dark:bg-gray-300 dark:text-black dark:font-semibold text-white rounded-lg hover:bg-gray-800 dark:hover:bg-black dark:hover:text-gray-300 transition"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        whileHover={{ scale: 1.05 }}
      >
        View Resume
      </motion.a>

      
      <div className="flex gap-6 mt-8 items-center justify-center">
        <motion.a 
          href="https://github.com/shuraih775" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-gray-800 dark:text-gray-100 text-3xl hover:text-black dark:hover:text-black transition"
        >
          <FaGithub />
        </motion.a>
        
        <motion.a 
          href="https://www.linkedin.com/in/mohammed-shuraih-shaikh-507ab324b/" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-gray-800 dark:text-gray-100 text-3xl hover:text-black dark:hover:text-black transition"
        >
          <FaLinkedin />
        </motion.a>
        
        <motion.a 
          href="mailto:shuraih15@gmail.com" 
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="text-gray-800 dark:text-gray-100 text-3xl hover:text-black dark:hover:text-black transition"
        >
          <FaEnvelope />
        </motion.a>
      </div>
      </div>
    </section>
  );
};

export default About;
