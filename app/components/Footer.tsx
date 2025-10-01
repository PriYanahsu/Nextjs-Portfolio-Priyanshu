'use client';

import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#040D12] to-[#0A1929] text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Left Section: Contact Information */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
            <p>Email: <a href="mailto:priyanshu1265656@gmail.com" className="hover:text-blue-400 transition">priyanshu1265656@gmail.com</a></p>
            <p>Phone: <a href="tel:+9170078836367" className="hover:text-blue-400 transition">+91 70078836367</a></p>
          </div>

          {/* Middle Section: Navigation Links */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Right Section: Social Media Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              {/* Example: Uncomment if you want Twitter */}
              {/* <a href="https://x.com/deepakchandra41" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                <FaXTwitter className="w-6 h-6" />
              </a> */}
              <a href="https://github.com/PriYanahsu" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                <FaGithub className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/priyanshukumar1265/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="mailto:priyanshu1265656@gmail.com" className="hover:text-blue-400 transition">
                <FaEnvelope className="w-6 h-6" />
              </a>
              <a href="https://wa.me/917007836367" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                <FaWhatsapp className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section: Copyright */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Priyanshu Kumar. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
