"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
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

  const contactInfo = [
    {
      icon: <FaPhoneAlt />,
      label: "Phone",
      value: "+91 7007836367",
      href: "tel:+917007836367",
      color: "text-blue-400",
    },
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "priyanshu1265656@gmail.com",
      href: "mailto:priyanshu1265656@gmail.com",
      color: "text-emerald-400",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "Lucknow, India",
      href: "#",
      color: "text-orange-400",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-b from-[#0A1929] to-[#040D12]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center"
        >
          {/* Section Header - Matched with Certification */}
          <div className="text-center mb-16">
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight"
            >
              Get In <span className="bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent">Touch</span>
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="h-1 w-20 bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto rounded-full"
            />
          </div>

          <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Contact Info */}
            <motion.div variants={itemVariants} className="lg:col-span-12 xl:col-span-5 space-y-4">
              <div className="bg-[#0A1929]/40 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl shadow-xl group">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
                  Let's <span className="text-indigo-400">Connect</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-1 gap-6">
                  {contactInfo.map((info, idx) => (
                    <motion.a
                      key={idx}
                      href={info.href}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4 group/item"
                    >
                      <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${info.color} text-lg group-hover/item:scale-105 transition-transform duration-300`}>
                        {info.icon}
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-0.5">
                          {info.label}
                        </p>
                        <p className="text-sm md:text-base text-gray-300 font-medium group-hover/item:text-white transition-colors truncate">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-12 xl:col-span-7 w-full">
              <div className="bg-[#0A1929]/40 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl shadow-xl">
                <form
                  action="https://getform.io/f/bqoewmwb"
                  method="POST"
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">
                        Full Name
                      </label>
                      <input
                        required
                        type="text"
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-1 focus:ring-indigo-500/50 outline-none text-white placeholder-gray-600 text-sm transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        id="email"
                        name="email"
                        placeholder="john@example.com"
                        className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-1 focus:ring-indigo-500/50 outline-none text-white placeholder-gray-600 text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">
                      Your Message
                    </label>
                    <textarea
                      required
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell me about your project..."
                      className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-1 focus:ring-indigo-500/50 outline-none text-white placeholder-gray-600 text-sm transition-all resize-none"
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold rounded-xl shadow-lg flex items-center justify-center gap-3 group transition-all"
                  >
                    Send Message
                    <FaPaperPlane className="text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
