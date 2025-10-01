'use client';

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#040D12] shadow-md fixed w-full z-50 scroll-smooth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-white cursor-pointer">
              Priyanshu
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <Link href="#about" className="text-gray-300 hover:text-white">
              About
            </Link>
            <Link href="#projects" className="text-gray-300 hover:text-white">
              Projects
            </Link>
            <Link href="#certificates" className="text-gray-300 hover:text-white">
              Certificate
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-white">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#040D12]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="#about" className="block px-3 py-2 text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link href="#projects" className="block px-3 py-2 text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>
              Projects
            </Link>
            <Link href="#contact" className="block px-3 py-2 text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
