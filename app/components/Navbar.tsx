'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { MdFileDownload } from 'react-icons/md';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Certificates', to: 'certificates' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled
        ? 'bg-[#040D12]/95 backdrop-blur-md shadow-lg border-b border-gray-800'
        : 'bg-[#040D12]'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <ScrollLink
            to="hero"
            smooth
            duration={500}
            className="relative group cursor-pointer"
          >
            <h1 className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-500 text-transparent bg-clip-text">
                Priyanshu
              </span>
            </h1>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-indigo-500 group-hover:w-full transition-all duration-300"></div>
          </ScrollLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.to}
                smooth
                duration={500}
                spy={true}
                offset={-64}
                className="relative group px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                <span className="relative z-10">{link.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-3/4 transition-all duration-300"></div>
              </ScrollLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 focus:outline-none transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenuAlt3 className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1 bg-[#0A1929]/95 backdrop-blur-lg border-t border-gray-800">
          {navLinks.map((link, index) => (
            <ScrollLink
              key={link.name}
              to={link.to}
              smooth
              duration={500}
              spy={true}
              offset={-64}
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 transition-all duration-200 cursor-pointer transform ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                }`}
              style={{
                transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms',
              }}
            >
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                {link.name}
              </span>
            </ScrollLink>
          ))}

          {/* Mobile Resume Button */}
          <a
            href="/resume.pdf"
            download="Priyanshu_Resume.pdf"
            onClick={() => setIsMenuOpen(false)}
            className="block mt-4 px-4 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-center hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
          >
            <span className="flex items-center justify-center gap-2">
              Download Resume
              <MdFileDownload size={20} />
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;