"use client";

import { motion } from "framer-motion";
import { FaServer, FaMobileAlt, FaGlobe } from "react-icons/fa";

const services = [
  {
    title: "Full Stack Web Apps",
    desc: "Scalable web products using React/Next.js + robust backend APIs.",
    stack: ["Next.js", "Spring Boot", "FastAPI", "PostgreSQL"],
    icon: FaGlobe,
  },
  {
    title: "Backend & API Engineering",
    desc: "Clean architecture APIs with authentication, performance, and observability.",
    stack: ["Java", "Python", "REST APIs", "Docker"],
    icon: FaServer,
  },
  {
    title: "Mobile & Cross-Platform",
    desc: "Responsive, high-performance app interfaces and mobile-ready workflows.",
    stack: ["React Native", "Firebase", "Supabase", "CI/CD"],
    icon: FaMobileAlt,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-[#040D12] to-[#0A1929]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight"
          >
            What I <span className="bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent">Offer</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-1 w-20 bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto rounded-full"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              className="bg-[#0A1929]/40 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-xl"
            >
              <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 mb-4">
                <service.icon size={20} />
              </div>
              <h3 className="text-white text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">{service.desc}</p>
              <div className="flex flex-wrap gap-2">
                {service.stack.map((item) => (
                  <span
                    key={item}
                    className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-md border border-white/10 text-gray-300 bg-white/5"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
