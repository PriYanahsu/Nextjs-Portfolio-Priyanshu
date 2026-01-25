"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaTimes } from "react-icons/fa";

import MachinelearningwithPython from "../assets/certificate/Machine Learning with Python.png";
import ArtificialIntelligenceAnalyst from "../assets/certificate/Artificial Intelligence Analyst.png";
import BussinessIntelligence from "../assets/certificate/Bussiness Intelligence.png";
import NoSQLAndDABaas from "../assets/certificate/NoSQL And DABaaS 101.png";
import PythonWithDataScience from "../assets/certificate/Python Data Science.png";
import DataStructureandBackendWithJava from "../assets/certificate/Data Structure & Backend With java.png";
import FrontendCertificate from "../assets/certificate/Frontend Certificate.png";
import JavaCertificate from "../assets/certificate/Java Certificate.png";
import MySqlCertificate from "../assets/certificate/MySql Certificate.png";
import ProblemSolving from "../assets/certificate/Problem Solving Certificate.png";

const Certificate = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    { id: 1, title: "Machine learning with Python", image: MachinelearningwithPython, link: "https://courses.bbdu.skillsnetwork.site/certificates/2e8ff54cce0a48ed92526c76f1422d3c" },
    { id: 2, title: "Frontend Certificate", image: FrontendCertificate, link: "https://www.coursera.org/account/accomplishments/verify/USXHP6XWZEYL" },
    { id: 3, title: "Artificial Intelligence Analyst", image: ArtificialIntelligenceAnalyst, link: "https://courses.bbdu.skillsnetwork.site/certificates/713dd99de9d34583a76c93cef84675e8" },
    { id: 4, title: "Java Certificate", image: JavaCertificate, link: "https://www.hackerrank.com/certificates/iframe/b8062a55bdb2" },
    { id: 5, title: "Bussiness Intelligence", image: BussinessIntelligence, link: "https://courses.bbdu.skillsnetwork.site/certificates/141e4dfe6bd040c084c606b3d24b587e" },
    { id: 6, title: "Problem Solving Certificate", image: ProblemSolving, link: "https://www.hackerrank.com/certificates/iframe/144387ffdba7" },
    { id: 7, title: "NoSQL And DABaas", image: NoSQLAndDABaas, link: "https://courses.bbdu.skillsnetwork.site/certificates/e6be221fff5145ddb950ab215efb94b2" },
    { id: 8, title: "Data Structure & Backend With Java", image: DataStructureandBackendWithJava, link: "https://www.coursera.org/account/accomplishments/records/RP8V380YTQG2" },
    { id: 9, title: "Python With Data Science", image: PythonWithDataScience, link: "https://courses.bbdu.skillsnetwork.site/certificates/47a4b24e74864357a2a5ea39f2ba42ec" },
    { id: 10, title: "MySQL Certificate", image: MySqlCertificate, link: "https://www.hackerrank.com/certificates/a2c369bb2800" },
  ];

  return (
    <section id="certificates" className="py-24 bg-gradient-to-b from-[#040D12] to-[#0A1929]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight"
          >
            My <span className="bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent">Certifications</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-1 w-20 bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto rounded-full"
          />
        </div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative bg-[#0A1929]/40 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:border-violet-500/20 hover:-translate-y-1 transition-all duration-500 cursor-pointer"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#040D12]/40 transition-opacity duration-500 group-hover:opacity-20" />

                {/* Overlay Action */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="p-3 bg-[#040D12]/80 backdrop-blur-md rounded-full text-gray-200 border border-white/10">
                    <FaExternalLinkAlt size={18} />
                  </span>
                </div>
              </div>

              <div className="p-6 text-center">
                <h3 className="text-sm font-bold text-gray-200 mb-3 line-clamp-2 min-h-[2.5rem] group-hover:text-white transition-colors">
                  {cert.title}
                </h3>
                <div className="flex items-center justify-center">
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Credential</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal - Enhanced Presentation */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#040D12]/95 backdrop-blur-md flex justify-center items-center p-4"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-[#0A1929] rounded-3xl p-8 max-w-3xl w-full relative border border-white/10 shadow-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
                onClick={() => setSelectedCert(null)}
              >
                <FaTimes size={24} />
              </button>

              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2 tracking-tight">
                  {selectedCert.title}
                </h2>
                <div className="h-1 w-16 bg-gray-700 mx-auto rounded-full" />
              </div>

              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl shadow-inner border border-white/5">
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="mt-8 flex justify-center">
                <a
                  href={selectedCert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-200 hover:text-white font-bold border border-white/10 transition-all duration-300 flex items-center gap-2"
                >
                  Verify Credential
                  <FaExternalLinkAlt size={14} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificate;
