"use client"; // Next.js 13+ app directory

import Image from "next/image";
import { MdOutlineKeyboardArrowRight, MdFileDownload } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import { Link as ScrollLink } from "react-scroll";
import HeroImage from "../assets/HeroImg.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-[60vh] md:min-h-[70vh] w-full flex items-center justify-center bg-gradient-to-b from-[#040D12] to-[#0A1929] text-white px-4 py-16 relative"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between text-center lg:text-left relative z-10 gap-8">
        {/* Text Section */}
        <div className="flex flex-col justify-center lg:w-1/2 space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 self-center lg:self-start px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-blue-500/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-gray-300 text-xs sm:text-sm font-medium">Available for Opportunities</span>
          </div>

          {/* Main Heading */}
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
              {"Hi, I'm "}
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-500 text-transparent bg-clip-text animate-gradient">
                Priyanshu
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-xl text-gray-300 font-semibold mb-2">
              Software Engineer @
              <span className="text-cyan-400"> Cognivac</span>
            </p>
            <p className="text-sm sm:text-base text-gray-400">
              Full Stack Developer | Freelancer | Problem Solver
            </p>
          </div>

          {/* Bio */}
          <p className="text-gray-400 max-w-lg leading-relaxed mx-auto lg:mx-0 text-sm sm:text-base">
            Crafting scalable web & mobile applications with{" "}
            <span className="text-blue-400 font-semibold">React</span>,{" "}
            <span className="text-blue-400 font-semibold">Next.js</span>,{" "}
            <span className="text-green-400 font-semibold">Spring Boot</span>, and{" "}
            <span className="text-green-400 font-semibold">FastAPI</span>.
            <br />
            <span className="text-yellow-400">450+ LeetCode</span> problems solved •
            <span className="text-green-400"> 5⭐ HackerRank</span> certified
          </p>

          {/* Skill Tags */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2">
            {[
              { name: "React.js", color: "from-cyan-400 to-blue-500" },
              { name: "Next.js", color: "from-gray-300 to-gray-500" },
              { name: "Spring Boot", color: "from-green-400 to-emerald-500" },
              { name: "FastAPI", color: "from-teal-400 to-cyan-500" },
              { name: "PostgreSQL", color: "from-blue-400 to-indigo-500" },
              { name: "MongoDB", color: "from-green-500 to-lime-500" },
            ].map((skill) => (
              <div
                key={skill.name}
                className="group relative bg-[#0A1929]/50 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-gray-700 hover:border-gray-500 transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <span className="relative text-gray-300 text-xs sm:text-sm font-medium">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
            <ScrollLink
              to="contact"
              smooth
              duration={500}
              className="group relative w-full sm:w-auto px-6 py-2 flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transform transition-all duration-300 text-sm sm:text-base overflow-hidden cursor-pointer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-green-500 via-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative flex items-center gap-2">
                Contact Me
                <MdOutlineKeyboardArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </span>
            </ScrollLink>

            <ScrollLink
              to="projects"
              smooth
              duration={500}
              className="group relative w-full sm:w-auto px-6 py-2 flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white font-semibold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 transform transition-all duration-300 text-sm sm:text-base overflow-hidden cursor-pointer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative flex items-center gap-2">
                View Projects
                <MdOutlineKeyboardArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </span>
            </ScrollLink>

            <a
              href="/resume.pdf"
              download="Priyanshu_Resume.pdf"
              className="group relative w-full sm:w-auto px-6 py-2 flex items-center justify-center rounded-lg border-2 border-gray-600 text-white font-semibold hover:border-cyan-400 hover:bg-cyan-400/10 transform transition-all duration-300 text-sm sm:text-base"
            >
              <span className="flex items-center gap-2">
                Resume
                <MdFileDownload className="group-hover:animate-bounce" size={22} />
              </span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center lg:justify-start pt-2">
            {[
              { href: "https://github.com/PriYanahsu", icon: FaGithub, label: "GitHub" },
              { href: "https://www.linkedin.com/in/priyanshukumar1265/", icon: FaLinkedin, label: "LinkedIn" },
              { href: "https://leetcode.com/u/PriyAnshu1265/", icon: SiLeetcode, label: "LeetCode" },
              { href: "https://www.hackerrank.com/profile/priyanshukuma120", icon: SiHackerrank, label: "HackerRank" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-[#0A1929]/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-cyan-400 text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Image Section - Only visible on md and lg screens */}
        <div className="hidden md:flex lg:w-1/2 justify-center lg:justify-end items-center">
          <div className="relative group">
            {/* Glow Effect - Only on large screens */}
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition duration-500 animate-pulse hidden lg:block"></div>

            {/* Image Container */}
            <div className="relative">
              <Image
                src={HeroImage}
                alt="Priyanshu Kumar"
                className="rounded-2xl shadow-2xl object-contain w-64 md:w-72 lg:w-[420px] h-auto border-2 border-gray-700/50 group-hover:border-cyan-400/50 transition-all duration-500"
                priority
              />

              {/* Floating Badge - Only on large screens */}
              <div className="hidden lg:block absolute -bottom-4 -right-4 bg-gradient-to-r from-green-400 to-cyan-500 text-white px-4 py-2 rounded-lg shadow-lg font-semibold text-sm animate-bounce">
                <span className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                  </span>
                  Open to Work
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;