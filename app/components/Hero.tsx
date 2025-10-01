"use client"; // Next.js 13+ app directory

import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link as ScrollLink } from "react-scroll";
import HeroImage from "../assets/HeroImg.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-[80vh] md:min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-[#040D12] to-[#0A1929] text-white px-4"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center text-center md:text-left">
        {/* Text Section */}
        <div className="flex flex-col justify-center md:w-1/2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            {"Hi, I'm "}<span className="text-blue-400">Priyanshu</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4">
            Full Stack Developer | React | Next.js | Spring Boot
          </p>

          {/* Bio */}
          <p className="text-gray-400 max-w-md mb-6 leading-relaxed mx-auto md:mx-0">
            I am a passionate Full Stack Developer with hands-on experience in
            React, Next.js, React Native, and Spring Boot. Solved 400+ LeetCode
            problems, earned 5⭐️ in Java & MySQL on HackerRank, and explore AI
            integration for innovative solutions. Proficient in SQL (PostgreSQL)
            and NoSQL (MongoDB).
          </p>

          {/* Skill Tags */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-4 mb-6 mt-4">
            {[
              "React.js",
              "Next.js",
              "React Native",
              "Spring Boot",
              "PostgreSQL",
              "MongoDB",
              "AI Integration",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-[#0A1929]/50 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-lg border border-gray-700 text-sm sm:text-base"
              >
                <span className="text-blue-400">{skill}</span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4 w-full">
            <ScrollLink
              to="contact"
              smooth
              duration={500}
              className="group w-full sm:w-auto px-6 py-3 flex items-center justify-center rounded-md bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 text-white font-semibold shadow-lg hover:scale-105 transform transition duration-300"
            >
              Contact Me
              <span className="group-hover:rotate-90 duration-300 ml-1">
                <MdOutlineKeyboardArrowRight size={22} />
              </span>
            </ScrollLink>

            <ScrollLink
              to="projects"
              smooth
              duration={500}
              className="group w-full sm:w-auto px-6 py-3 flex items-center justify-center rounded-md bg-gradient-to-r from-purple-800 via-pink-00 to-red-500 text-white font-semibold shadow-lg hover:scale-105 transform transition duration-300"
            >
              View Projects
              <span className="group-hover:rotate-90 duration-300 ml-1">
                <MdOutlineKeyboardArrowRight size={22} />
              </span>
            </ScrollLink>
          </div>
        </div>

        {/* Image Section (hidden on small screens) */}
        <div className="mt-8 md:mt-0 md:w-1/2 justify-center hidden sm:flex">
          <Image
            src={HeroImage}
            alt="Priyanshu"
            className="rounded-2xl shadow-lg object-contain w-64 sm:w-80 md:w-full lg:w-[500px] h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
