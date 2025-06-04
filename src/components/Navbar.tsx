'use client';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import NavLink from './NavLink';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#FF9770] text-zinc-900 sticky top-0 z-20">
      <nav
        className="flex items-center justify-between px-6 py-4 sm:px-8 sm:py-5 md:px-12 md:py-6 lg:px-20 lg:py-8 max-w-7xl mx-auto"
        aria-label="Main navigation"
      >
        <div className="text-2xl md:text-3xl font-bold">Portfolio</div>
        <button
          className="lg:hidden text-2xl focus:outline-none focus:ring-2 focus:ring-dark-txt rounded p-2"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div
          className={`${
            isOpen
              ? 'flex flex-col opacity-100 translate-y-0'
              : 'hidden opacity-0 -translate-y-4'
          } lg:flex lg:flex-row lg:opacity-100 lg:translate-y-0 gap-4 sm:gap-6 md:gap-8 lg:gap-10 absolute lg:static top-full left-0 w-full lg:w-auto bg-primary lg:bg-transparent px-6 py-4 lg:p-0 z-10 items-center lg:items-center lg:justify-end min-h-[calc(100vh-4rem)] lg:min-h-0 transition-all duration-300 ease-in-out`}
        >
          <NavLink
            href="https://github.com/ashlin-a/"
            text="Projects"
          />
          {/* <NavLink href="/" text="Blog" /> */}
          <NavLink
            href="#contact"
            text="Contact Me"
          />
        </div>
      </nav>
    </header>
  );
}
