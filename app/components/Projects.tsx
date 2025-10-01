"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

import INNFOODIE from '../assets/portfolio/INNFOODIE.png';
import Disease from '../assets/portfolio/disease.png';
import personal from '../assets/portfolio/personal.png';
import spam from '../assets/portfolio/spam.png';
import weather from '../assets/portfolio/weather.png';
import fileShare from '../assets/portfolio/fileShare.png';
import smartCompaint from '../assets/portfolio/smartcomplaint.png';

const containerStagger = {
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Projects = () => {
  const additionalProjects = [
    {
      title: "Weather Forecast Site",
      description: "A futuristic 5-day weather forecasting site using advanced prediction algorithms.",
      image: weather,
      technologies: ["Next.js", "API Integration", "CSS"],
      achievements: [
        "Built a futuristic weather forecast system",
        "Integrated accurate prediction algorithms",
        "Responsive UI for mobile and desktop",
      ],
      Live: "https://weatherapp-iota-ecru.vercel.app/",
      codeLink: "https://github.com/PriYanahsu/Weather-forecaste-site----predict-5-futurestic-days",
    },
    {
      title: "INNFOODIE",
      description: "A React-based food-ordering platform with a dynamic menu and order tracking.",
      image: INNFOODIE,
      technologies: ["React", "Food Ordering"],
      achievements: ["Dynamic menu system", "Order tracking feature"],
      Live: "https://innfoodie-food-order-site-24-7.vercel.app/",
      codeLink: "https://github.com/PriYanahsu/INNFOODIE-Food-order-Site-24-7",
    },
    {
      title: "Disease Detection and Drug Recommendation",
      description: "A Machine Learning project to detect diseases and recommend appropriate drugs.",
      image: Disease,
      technologies: ["Machine Learning", "Python"],
      achievements: ["Disease detection", "Drug recommendation"],
      Live: "https://github.com/PriYanahsu/Disease-Prediction-with-Drug-Recommendation-Using-ML",
      codeLink: "https://github.com/PriYanahsu/Disease-Prediction-with-Drug-Recommendation-Using-ML",
    },
    {
      title: "Personal Website",
      description: "A personal portfolio website showcasing my projects and skills.",
      image: personal,
      technologies: ["Next.js", "React", "CSS"],
      achievements: ["Portfolio design", "Responsive UI"],
      Live: "https://personal-website-priyanshu.vercel.app/",
      codeLink: "https://github.com/PriYanahsu/Personal-Website-Priyanshu-",
    },
    {
      title: "File Share App",
      description: "A secure application to share files with ease.",
      image: fileShare,
      technologies: ["Node.js", "Express.js", "React"],
      achievements: ["Secure file sharing", "Responsive UI"],
      Live: "https://github.com/PriYanahsu/file-share-app",
      codeLink: "https://github.com/PriYanahsu/file-share-app",
    },
    {
      title: "Spam Message Detector",
      description: "A Machine Learning tool to detect spam messages.",
      image: spam,
      technologies: ["Machine Learning", "Python"],
      achievements: ["Spam detection", "Accuracy optimization"],
      Live: "https://github.com/PriYanahsu/Spam-Message-Detector",
      codeLink: "https://github.com/PriYanahsu/Spam-Message-Detector",
    },
    {
      title: "Smart Complaint Management System",
      description: "A full-stack platform for complaint management with tracking features.",
      image: smartCompaint,
      technologies: ["React", "Node.js", "MongoDB"],
      achievements: ["Complaint tracking", "Responsive UI"],
      Live: "https://online-complaint-mangement-system.vercel.app/",
      codeLink: "https://github.com/PriYanahsu/-Smart-Complaint-Management-System-Full-Stack-",
    },
  ];

  const renderProjectSection = (
    title: string,
    projects: {
      title: string;
      image?: string | StaticImageData;
      description: string;
      technologies: string[];
      achievements: string[];
      Live?: string;
      codeLink?: string;
    }[]
  ) => (
    <>
      <motion.h3
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-2xl text-white font-semibold mb-6 mt-12"
      >
        {title}
      </motion.h3>

      <motion.div
        variants={containerStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-[#0A1929]/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            {project.image && (
              <div className="relative h-64 overflow-hidden bg-gray-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                />
              </div>
            )}

            <div className="p-5">
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-3 text-sm">{project.description}</p>

              <div className="mb-3">
                <h4 className="text-sm font-semibold text-blue-400 mb-1">
                  Highlights:
                </h4>
                <ul className="list-disc list-inside text-gray-300 text-xs space-y-1">
                  {project.achievements.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-2 text-sm">
                {project.Live && project.Live !== "#" && (
                  <a
                    href={project.Live}
                    className="text-blue-400 hover:text-blue-300 font-medium underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                  </a>
                )}
                {project.codeLink && (
                  <a
                    href={project.codeLink}
                    className="text-blue-400 hover:text-blue-300 font-medium underline"
                  >
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-[#0A1929] to-[#040D12]"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-12"
        >
          Projects
        </motion.h2>

        {renderProjectSection("Portfolio Projects", additionalProjects)}
      </div>
    </section>
  );
};

export default Projects;
