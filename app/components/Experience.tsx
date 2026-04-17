"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaCode, FaRocket } from "react-icons/fa";

const experiences = [
  {
    role: "Software Engineer",
    company: "Cognivac",
    period: "2024 - Present",
    points: [
      "Built production-grade web apps with modern frontend and backend stacks.",
      "Improved API performance and reliability for client-facing systems.",
      "Delivered features end-to-end with agile execution and clean architecture.",
    ],
    icon: FaBriefcase,
  },
  {
    role: "Freelance Full Stack Developer",
    company: "Independent Projects",
    period: "2023 - Present",
    points: [
      "Designed and shipped SaaS/MVP products for startups and local businesses.",
      "Handled architecture, implementation, deployment, and post-launch support.",
      "Focused on speed, scalability, and conversion-driven UX.",
    ],
    icon: FaCode,
  },
  {
    role: "Founder & Builder",
    company: "Krixen",
    period: "2024 - Present",
    points: [
      "Built internal product systems and reusable development workflows.",
      "Led product direction from idea validation to deployment.",
      "Streamlined development velocity with component-first engineering.",
    ],
    icon: FaRocket,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-[#0A1929] to-[#040D12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight"
          >
            Work <span className="bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent">Experience</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-1 w-20 bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto rounded-full"
          />
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-white/10" />
          <div className="space-y-8">
            {experiences.map((item, idx) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="relative pl-14"
              >
                <div className="absolute left-0 top-1 h-10 w-10 rounded-xl border border-white/10 bg-[#0A1929]/70 flex items-center justify-center text-indigo-400">
                  <item.icon size={16} />
                </div>
                <div className="bg-[#0A1929]/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <h3 className="text-white text-xl font-bold">{item.role}</h3>
                    <span className="text-[11px] uppercase tracking-widest text-gray-400 font-semibold">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-indigo-300 text-sm mb-4">{item.company}</p>
                  <ul className="space-y-2">
                    {item.points.map((point) => (
                      <li key={point} className="text-gray-300 text-sm flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
