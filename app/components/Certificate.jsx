"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
    <section
      id="certificates"
      className="py-20 bg-gradient-to-b from-[#040D12] to-[#0A1929]"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Certificates
        </h2>

        {/* Certificate Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#0A1929]/50 backdrop-blur-sm p-4 rounded-lg text-center border border-gray-700 hover:shadow-lg cursor-pointer transition-shadow"
              onClick={() => setSelectedCert(cert)}
            >
              <Image
                src={cert.image}
                alt={cert.title}
                width={300}
                height={200}
                className="rounded"
                objectFit="cover"
              />
              <h3 className="mt-4 text-white font-semibold">{cert.title}</h3>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-sm text-blue-400 hover:text-blue-300"
              >
                View Credential
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex justify-center items-center p-4">
          <div className="bg-[#0A1929] rounded-lg p-6 max-w-2xl w-full relative">
            <button
              className="absolute top-3 right-3 text-white text-2xl font-bold"
              onClick={() => setSelectedCert(null)}
            >
              ✕
            </button>
            <h2 className="text-center text-2xl font-bold mb-4 text-white">
              {selectedCert.title}
            </h2>
            <Image
              src={selectedCert.image}
              alt={selectedCert.title}
              width={800}
              height={500}
              objectFit="contain"
              className="rounded"
            />
            <div className="text-center mt-4">
              <a
                href={selectedCert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300"
              >
                View Credential
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificate;
