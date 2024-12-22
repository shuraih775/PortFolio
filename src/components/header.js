import React, { useState } from 'react';
import { Link } from 'react-scroll';
import DarkModeToggle from './darkModeToggle';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed w-full bg-white dark:bg-gray-900 bg-opacity-60 backdrop-blur-md shadow-md z-20 px-6 py-4 flex justify-between items-center">
      <div className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-200">Shuraih</div>

      {/* Mobile Menu Toggle */}
      <button
        className="text-gray-700 dark:text-gray-200 lg:hidden focus:outline-none"
        onClick={toggleMenu}
      >
        {menuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
      </button>

      {/* Navigation */}
      <nav
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } lg:flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-6 absolute lg:relative top-full left-0 w-full lg:w-auto bg-white dark:bg-gray-900 py-6 lg:py-0 shadow-md lg:shadow-none`}
      >
        {['about', 'skills', 'projects', 'education', 'contact'].map((section) => (
          <Link
            key={section}
            to={section}
            smooth={true}
            duration={1000}
            className="text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition cursor-pointer px-4 py-2 lg:p-0 text-center"
            onClick={toggleMenu}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}
        <div className="flex justify-center lg:block px-4 py-2 lg:p-0">
          <DarkModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;
