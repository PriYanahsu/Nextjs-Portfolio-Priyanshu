"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/PriYanahsu", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/priyanshukumar1265/", label: "LinkedIn" },
    { icon: FaEnvelope, href: "mailto:priyanshu1265656@gmail.com", label: "Email" },
    { icon: FaWhatsapp, href: "https://wa.me/917007836367", label: "WhatsApp" },
  ];

  return (
    <footer className="relative bg-[#040D12] pt-16 pb-8 overflow-hidden">
      {/* Top Border with Gradient glow effect */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">

          {/* Column 1: Branding */}
          <div className="md:col-span-5 space-y-6">
            <div>
              <h2 className="text-2xl font-black text-white tracking-tighter mb-2">
                <span className="bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent">
                  Priyanshu Kumar
                </span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                Software Engineer & Full Stack Product Engineer focused on building high-performance
                digital solutions with a premium design aesthetic.
              </p>
            </div>

            {/* Social Links - Glassmorphic Style */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-300 shadow-lg"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="md:col-span-3 space-y-6">
            <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
              Quick Navigation
            </h3>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-3">
              {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                    className="text-sm text-gray-400 hover:text-indigo-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-700 group-hover:bg-indigo-400 transition-colors" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="md:col-span-4 space-y-6">
            <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
              Get in touch
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:priyanshu1265656@gmail.com"
                className="block group"
              >
                <p className="text-[9px] text-gray-600 uppercase font-bold tracking-tighter mb-0.5">Email</p>
                <p className="text-sm text-gray-300 group-hover:text-white transition-colors">priyanshu1265656@gmail.com</p>
              </a>
              <a
                href="tel:+917007836367"
                className="block group"
              >
                <p className="text-[9px] text-gray-600 uppercase font-bold tracking-tighter mb-0.5">Phone</p>
                <p className="text-sm text-gray-300 group-hover:text-white transition-colors">+91 7007836367</p>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-gray-600 font-medium">
            &copy; {currentYear} Priyanshu Kumar. Architected with passion.
          </p>
          <div className="flex gap-6 text-[11px] text-gray-600 font-medium">
            <span className="hover:text-gray-400 transition-colors cursor-default">Privacy Policy</span>
            <span className="hover:text-gray-400 transition-colors cursor-default">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
