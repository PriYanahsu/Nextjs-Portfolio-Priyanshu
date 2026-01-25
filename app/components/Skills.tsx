'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaGitAlt, FaJava, FaPython, FaDocker, FaGithub, FaGitlab } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiSpringboot,
  SiMysql,
  SiTailwindcss,
  SiRedux,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiPostgresql,
  SiSupabase,
  SiFastapi
} from "react-icons/si";

interface Skill {
  name: string;
  icon: React.ReactElement<{ className?: string }>;
}

const skills: Skill[] = [
  // Frontend
  { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-400 text-3xl" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-400 text-3xl" /> },
  { name: "React.js", icon: <FaReact className="text-cyan-400 text-3xl" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white text-3xl" /> },
  { name: "HTML5", icon: <SiHtml5 className="text-orange-500 text-3xl" /> },
  { name: "CSS3", icon: <SiCss3 className="text-blue-500 text-3xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 text-3xl" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-400 text-3xl" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-400 text-3xl" /> },

  // Backend
  { name: "Java", icon: <FaJava className="text-orange-400 text-3xl" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="text-green-400 text-3xl" /> },
  { name: "Python", icon: <FaPython className="text-blue-300 text-3xl" /> },
  { name: "FastAPI", icon: <SiFastapi className="text-teal-400 text-3xl" /> },

  // Databases
  { name: "MySQL", icon: <SiMysql className="text-blue-500 text-3xl" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700 text-3xl" /> },
  { name: "Supabase (PostgreSQL)", icon: <SiSupabase className="text-emerald-400 text-3xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-3xl" /> },

  // DevOps & Tools
  { name: "Git", icon: <FaGitAlt className="text-orange-400 text-3xl" /> },
  { name: "GitHub", icon: <FaGithub className="text-white text-3xl" /> },
  { name: "GitLab", icon: <FaGitlab className="text-orange-500 text-3xl" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-300 text-3xl" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-[#040D12] to-[#0A1929]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight"
          >
            Technical <span className="bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent">Expertise</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-1 w-20 bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.03, duration: 0.4 }}
              viewport={{ once: true }}
              className="group relative bg-[#0A1929]/40 backdrop-blur-md p-6 rounded-2xl text-center border border-white/5 hover:border-white/20 shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="relative z-10 mb-4 flex justify-center transform group-hover:scale-110 transition-all duration-300">
                {React.cloneElement(skill.icon, {
                  className: `${skill.icon.props.className || ''} text-4xl sm:text-5xl opacity-80 group-hover:opacity-100 transition-opacity`
                })}
              </div>

              <h3 className="relative z-10 font-bold text-gray-400 text-xs sm:text-sm tracking-wide group-hover:text-white transition-colors">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
