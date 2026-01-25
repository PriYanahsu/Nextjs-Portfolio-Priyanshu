/* eslint-disable react/no-unescaped-entities */
'use client';
import { FaLinkedin, FaGithub, FaBriefcase, FaLaptopCode } from "react-icons/fa";
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import { MdWorkspacePremium } from "react-icons/md";
import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const stats = [
    { icon: <SiLeetcode className="text-yellow-400" size={28} />, value: "450+", label: "LeetCode Problems" },
    { icon: <SiHackerrank className="text-green-400" size={28} />, value: "5⭐", label: "HackerRank Java" },
    { icon: <MdWorkspacePremium className="text-purple-400" size={28} />, value: "5⭐", label: "HackerRank MySQL" },
    { icon: <FaBriefcase className="text-blue-400" size={28} />, value: "2+", label: "Years Experience" }
  ];

  const expertise = [
    {
      title: "Frontend Development",
      skills: ["React.js", "Next.js", "React Native", "Tailwind CSS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend Development",
      skills: ["Spring Boot (Java)", "FastAPI (Python)", "RESTful APIs"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Database & Cloud",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "Firebase"],
      color: "from-purple-500 to-pink-500"
    }
  ];

  const socialLinks = [
    { href: "https://www.linkedin.com/in/priyanshukumar1265/", icon: <FaLinkedin size={22} />, label: "LinkedIn", color: "text-blue-400 hover:text-blue-300" },
    { href: "https://github.com/PriYanahsu", icon: <FaGithub size={22} />, label: "GitHub", color: "text-gray-400 hover:text-gray-300" },
    { href: "https://leetcode.com/u/PriyAnshu1265/", icon: <SiLeetcode size={22} />, label: "LeetCode", color: "text-yellow-400 hover:text-yellow-300" },
    { href: "https://www.hackerrank.com/profile/priyanshukuma120", icon: <SiHackerrank size={22} />, label: "HackerRank", color: "text-green-400 hover:text-green-300" }
  ];

  return (
    <section
      id="about"
      className="min-h-[60vh] md:min-h-[70vh] w-full flex items-center justify-center bg-gradient-to-b from-[#0A1929] to-[#040D12] text-white px-4 py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Title */}
        <div className="text-center mb-12">
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-3">
            About
            <span className="bg-gradient-to-r from-violet-400 to-indigo-500 text-transparent bg-clip-text"> Me</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="h-1 w-20 bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto rounded-full"
          />
        </div>

        {/* Main Content Container */}
        <div className="max-w-5xl mx-auto">
          {/* Introduction */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-[#0A1929]/50 backdrop-blur-sm rounded-full border border-gray-700">
              <FaLaptopCode className="text-cyan-400" size={20} />
              <span className="text-gray-300 text-sm">Software Engineer @ Cognivac</span>
            </div>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4">
              I'm an <span className="text-white font-semibold">MCA graduate</span> and{" "}
              <span className="text-white font-semibold">Full Stack Developer</span> specializing in building
              scalable, production-grade web and mobile applications. Currently working at{" "}
              <span className="text-cyan-400 font-semibold">Cognivac</span>, I also collaborate with clients
              as a <span className="text-white font-semibold">freelance developer</span>, delivering reliable,
              business-driven software solutions.
            </p>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              I'm passionate about solving complex problems with clean, efficient code and delivering
              impactful digital solutions that combine <span className="text-white font-semibold">performance</span>,{" "}
              <span className="text-white font-semibold">scalability</span>, and exceptional{" "}
              <span className="text-white font-semibold">user experience</span>.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-[#0A1929]/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105"
              >
                <div className="flex justify-center mb-3">{stat.icon}</div>
                <p className="text-2xl md:text-3xl font-bold text-white text-center mb-1">
                  {stat.value}
                </p>
                <p className="text-xs md:text-sm text-gray-400 text-center">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Expertise Areas */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-white">
              Technical Expertise
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {expertise.map((area, index) => (
                <div
                  key={index}
                  className="bg-[#0A1929]/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300"
                >
                  <div className={`inline-block px-4 py-2 rounded-lg bg-gradient-to-r ${area.color} mb-4`}>
                    <h4 className="text-white font-semibold text-sm">{area.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {area.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1.5 bg-[#040D12] rounded-md text-gray-300 border border-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Engineering Practices */}
          <div className="bg-gradient-to-r from-[#0A1929]/80 to-[#040D12]/80 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-700 mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-center mb-4 text-white">
              Engineering Practices
            </h3>
            <p className="text-gray-300 text-center text-sm md:text-base leading-relaxed">
              I follow solid engineering principles including{" "}
              <span className="text-cyan-400 font-semibold">Low-Level Design</span>,{" "}
              <span className="text-cyan-400 font-semibold">Object-Oriented Programming</span>,{" "}
              <span className="text-cyan-400 font-semibold">MVC Architecture</span>, and{" "}
              <span className="text-cyan-400 font-semibold">Clean Code Standards</span>.
              I collaborate in Agile environments using Jira, ClickUp, and Slack, managing codebases with Git, GitHub, and GitLab.
            </p>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6 text-white">Connect With Me</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-5 py-3 bg-[#0A1929]/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105 ${link.color}`}
                >
                  {link.icon}
                  <span className="font-medium text-sm">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;