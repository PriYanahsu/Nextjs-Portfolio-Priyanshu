"use client"; // Next.js 13+ app directory

import { MdOutlineKeyboardArrowRight, MdFileDownload } from "react-icons/md";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const skills = ["React.js", "Next.js", "Spring Boot", "FastAPI", "PostgreSQL", "MongoDB"];
  const socials = [
    { href: "https://github.com/PriYanahsu", icon: FaGithub, label: "GitHub" },
    { href: "https://www.linkedin.com/in/priyanshukumar1265/", icon: FaLinkedin, label: "LinkedIn" },
    { href: "https://leetcode.com/u/PriyAnshu1265/", icon: SiLeetcode, label: "LeetCode" },
    { href: "https://www.hackerrank.com/profile/priyanshukuma120", icon: SiHackerrank, label: "HackerRank" },
    { href: "https://wa.me/916006935523", icon: FaWhatsapp, label: "WhatsApp" },
    { href: "mailto:priyanshu1265656@gmail.com", icon: FaEnvelope, label: "Email" },
  ];

  return (
    <motion.section
      id="hero"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#020817] px-3 py-20 text-white sm:px-4"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.14),_transparent_48%),radial-gradient(circle_at_75%_75%,_rgba(168,85,247,0.14),_transparent_40%)]" />
        <motion.div
          animate={{ y: [0, -18, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-16 top-20 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], scale: [1, 1.06, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-16 bottom-20 h-96 w-96 rounded-full bg-violet-500/15 blur-3xl"
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-10 rounded-3xl p-6 backdrop-blur-xl sm:p-10 lg:p-14">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="mx-auto w-full max-w-2xl space-y-7 text-center lg:mx-0 lg:max-w-none lg:text-left">
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-cyan-100 sm:text-sm">Available for Opportunities</span>
            </motion.div>

            <motion.div variants={item} className="space-y-3">
              <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl xl:text-7xl">
                {"Hi, I'm "}
                <span className="animate-gradient bg-gradient-to-r from-cyan-300 via-violet-300 to-indigo-300 bg-clip-text text-transparent">
                  Priyanshu
                </span>
              </h1>
              <div className="flex flex-col items-center justify-start gap-1 text-sm text-slate-300 sm:text-lg lg:items-start">
                <p>
                  Software Engineer @
                  <span className="font-semibold text-cyan-300"> Cognivac</span>
                </p>
                <p>
                  Founder @
                  <a
                    href="https://krixen.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-cyan-300 transition-colors duration-300 hover:text-cyan-200"
                  >
                    {" krixen.com"}
                  </a>
                </p>
              </div>
            </motion.div>

            <motion.p variants={item} className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base lg:mx-0 lg:max-w-xl">
              Crafting scalable web and mobile applications with{" "}
              <span className="font-semibold text-cyan-300">React</span>,{" "}
              <span className="font-semibold text-cyan-300">Next.js</span>,{" "}
              <span className="font-semibold text-emerald-300">Spring Boot</span>, and{" "}
              <span className="font-semibold text-emerald-300">FastAPI</span>.
              <br />
              <span className="font-medium text-amber-300">450+ LeetCode</span> problems solved and{" "}
              <span className="font-medium text-emerald-300">5-star HackerRank</span> certified.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap justify-center gap-2 lg:justify-start">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200 transition-colors duration-200 hover:border-cyan-300/50 hover:text-cyan-200 sm:text-sm"
                >
                  {skill}
                </span>
              ))}
            </motion.div>

            <motion.div variants={item} className="flex flex-col items-center gap-3 pt-1 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
              <ScrollLink
                to="contact"
                smooth
                duration={500}
                className="group inline-flex h-12 w-full max-w-[220px] cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-cyan-500/40 sm:h-auto sm:w-auto sm:max-w-none"
              >
                Contact Me
                <MdOutlineKeyboardArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={20} />
              </ScrollLink>

              <ScrollLink
                to="projects"
                smooth
                duration={500}
                className="group inline-flex h-12 w-full max-w-[220px] cursor-pointer items-center justify-center gap-2 rounded-xl border border-violet-300/40 bg-violet-500/10 px-6 py-3 text-sm font-semibold text-violet-100 transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-500/20 sm:h-auto sm:w-auto sm:max-w-none"
              >
                View Projects
                <MdOutlineKeyboardArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={20} />
              </ScrollLink>

              <a
                href="/resume.pdf"
                download="Priyanshu_Resume.pdf"
                className="inline-flex h-12 w-full max-w-[220px] items-center justify-center gap-2 rounded-xl border border-slate-400/40 bg-slate-900/50 px-6 py-3 text-sm font-semibold text-slate-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/60 hover:text-cyan-200 sm:h-auto sm:w-auto sm:max-w-none"
              >
                Resume
                <MdFileDownload size={20} />
              </a>
            </motion.div>

            <motion.div variants={item} className="flex items-center justify-center gap-3 pt-0 lg:justify-start">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/15 bg-white/5 p-3 text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/50 hover:text-cyan-200"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={item}
            className="mx-auto w-full max-w-md rounded-2xl border border-white/15 bg-gradient-to-b from-white/10 to-white/[0.03] p-6 shadow-2xl shadow-cyan-950/40"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200/80">Profile Snapshot</p>
            <div className="mt-5 space-y-4">
              <div className="rounded-xl border border-white/10 bg-slate-950/40 p-4">
                <p className="text-2xl font-semibold text-white">4+ Years</p>
                <p className="mt-1 text-sm text-slate-300">Building production-ready full stack products</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/10 bg-slate-950/40 p-4">
                  <p className="text-xl font-semibold text-cyan-200">450+</p>
                  <p className="text-xs text-slate-300">LeetCode Problems</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-slate-950/40 p-4">
                  <p className="text-xl font-semibold text-emerald-200">5 Star</p>
                  <p className="text-xs text-slate-300">HackerRank</p>
                </div>
              </div>
              <div className="rounded-xl border border-cyan-300/25 bg-cyan-400/10 p-4">
                <p className="text-sm text-cyan-100">
                  I design and ship performant products with clean architecture and measurable business impact.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div variants={item} className="inline-flex items-center gap-2 self-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-slate-300 sm:text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span>Full Stack Developer | Freelancer | Problem Solver</span>
          </motion.div>
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
    </motion.section>
  );
};

export default Hero;
