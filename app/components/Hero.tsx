"use client"; // Next.js 13+ app directory

import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link as ScrollLink } from "react-scroll";
import HeroImage from "../assets/HeroImg.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-[60vh] md:min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-[#040D12] to-[#0A1929] text-white px-6 py-4"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center text-center md:text-left">
        {/* Text Section */}
        <div className="flex flex-col justify-center md:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
            {"Hi, I'm "}
            <span className="text-blue-400">Priyanshu</span>
          </h1>

          {/* Tagline */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-3">
            Software Engineer | Full Stack Developer | React | Next.js | FASTAPI | Spring Boot
          </p>

          {/* Bio */}
          <p className="text-gray-400 max-w-md mb-5 leading-relaxed mx-auto md:mx-0 text-sm sm:text-base">
            I am a passionate Full Stack Developer with hands-on experience in
            React, Next.js, React Native, FASTAPI and Spring Boot. Solved 450+ LeetCode
            problems, earned 5⭐️ in Java & MySQL on HackerRank, and explore AI
            integration for innovative solutions. Proficient in SQL (PostgreSQL)
            and NoSQL (MongoDB).
          </p>

          {/* Skill Tags */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 mb-5">
            {[
              "React.js",
              "Next.js",
              "React Native",
              "FASTAPI",
              "Spring Boot",
              "PostgreSQL",
              "MYSQL",
              "AI Integration",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-[#0A1929]/50 backdrop-blur-sm px-3 py-1.5 rounded-md border border-gray-700 text-xs sm:text-sm"
              >
                <span className="text-blue-400">{skill}</span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <ScrollLink
              to="contact"
              smooth
              duration={500}
              className="group w-full sm:w-auto px-5 py-2 flex items-center justify-center rounded-md bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 text-white font-semibold shadow-md hover:scale-105 transform transition duration-300 text-sm sm:text-base"
            >
              Contact Me
              <span className="group-hover:rotate-90 duration-300 ml-1">
                <MdOutlineKeyboardArrowRight size={20} />
              </span>
            </ScrollLink>

            <ScrollLink
              to="projects"
              smooth
              duration={500}
              className="group w-full sm:w-auto px-5 py-2 flex items-center justify-center rounded-md bg-gradient-to-r from-purple-700 via-pink-500 to-red-500 text-white font-semibold shadow-md hover:scale-105 transform transition duration-300 text-sm sm:text-base"
            >
              View Projects
              <span className="group-hover:rotate-90 duration-300 ml-1">
                <MdOutlineKeyboardArrowRight size={20} />
              </span>
            </ScrollLink>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-6 md:mt-0 md:w-1/2 justify-center hidden sm:flex">
          <Image
            src={HeroImage}
            alt="Priyanshu"
            className="rounded-2xl shadow-lg object-contain w-44 sm:w-64 md:w-3/4 lg:w-[380px] h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
