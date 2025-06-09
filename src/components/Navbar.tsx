'use client';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import NavLink from './NavLink';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-primary text-dark-txt sticky top-0 z-20">
      <div
        className={`fixed inset-0 bg-black/50 z-30 lg:hidden transition-opacity duration-300 ease-in-out ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={handleLinkClick}
        aria-hidden="true"
      />

      <nav
        className="flex items-center justify-between px-6 py-4 sm:px-8 sm:py-5 md:px-12 md:py-6 lg:px-20 lg:py-8 max-w-7xl mx-auto"
        aria-label="Main navigation"
      >
        <div className="text-2xl md:text-3xl font-bold">Portfolio</div>

        <button
          className="lg:hidden text-2xl focus:outline-none focus:ring-2 focus:ring-dark-txt rounded p-2 transition-transform duration-200 hover:scale-110"
          onClick={toggleMenu}
          aria-label="Open menu"
          aria-expanded={isOpen}
        >
          <FaBars />
        </button>

        <div className="hidden lg:flex lg:flex-row gap-10 items-center">
          <NavLink
            href="https://github.com/ashlin-a/"
            text="Projects"
            onClick={handleLinkClick}
          />
          <NavLink
            href="#contact"
            text="Contact Me"
            onClick={handleLinkClick}
          />
        </div>
      </nav>

      <div
        className={`fixed top-0 left-0 w-full bg-primary z-40 lg:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 sm:px-8 sm:py-5 md:px-12 md:py-6 border-b border-black/10">
          <div className="text-2xl md:text-3xl font-bold">Portfolio</div>
          <button
            className="text-2xl focus:outline-none focus:ring-2 focus:ring-dark-txt rounded p-2 transition-transform duration-200 hover:scale-110"
            onClick={handleLinkClick}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>

        <div className="flex flex-col gap-6 px-6 py-8 sm:px-8 md:px-12 items-center">
          <div className="transition-all duration-300 ease-in-out transform hover:translate-x-2">
            <NavLink
              href="https://github.com/ashlin-a/"
              text="Projects"
              onClick={handleLinkClick}
            />
          </div>
          <div className="transition-all duration-300 ease-in-out transform hover:translate-x-2">
            <NavLink
              href="#contact"
              text="Contact Me"
              onClick={handleLinkClick}
            />
          </div>
        </div>
      </div>
    </header>
  );
}