
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import DarkModeToggle from './darkModeToggle';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed w-full bg-white dark:bg-gray-900  bg-opacity-60 backdrop-blur-md shadow-md z-20 px-8 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">Shuraih</div>
      
      {/* Toggle Button for Mobile */}
      <button
        className="text-gray-700 lg:hidden focus:outline-none"
        onClick={toggleMenu}
      >
        {menuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
      </button>

      
      <nav
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } lg:flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-6 absolute lg:relative top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent py-4 lg:py-0 shadow-md lg:shadow-none lg:justify-center`}
      >
        <Link
          to="about"
          smooth={true}
          duration={1000}
          className="text-gray-700 hover:text-blue-600 dark:text-gray-500 transition cursor-pointer px-4 py-2 lg:p-0 text-center"
          onClick={toggleMenu}
        >
          About
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={1000}
          className="text-gray-700 hover:text-blue-600 dark:text-gray-500 transition cursor-pointer px-4 py-2 lg:p-0 text-center"
          onClick={toggleMenu}
        >
          Skills
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={1000}
          className="text-gray-700 hover:text-blue-600 dark:text-gray-500 transition cursor-pointer px-4 py-2 lg:p-0 text-center"
          onClick={toggleMenu}
        >
          Projects
        </Link>
        <Link
          to="education"
          smooth={true}
          duration={1000}
          className="text-gray-700 hover:text-blue-600 dark:text-gray-500 transition cursor-pointer px-4 py-2 lg:p-0 text-center"
          onClick={toggleMenu}
        >
          Education
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={1000}
          className="text-gray-700 hover:text-blue-600 dark:text-gray-500 transition cursor-pointer px-4 py-2 lg:p-0 text-center"
          onClick={toggleMenu}
        >
          Contact
        </Link>
        <div className="flex justify-center lg:block px-4 py-2 lg:p-0">
          <DarkModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;
