"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import INNFOODIE from "../assets/portfolio/INNFOODIE.png";
import Disease from "../assets/portfolio/disease.png";
import personal from "../assets/portfolio/personal.png";
import spam from "../assets/portfolio/spam.png";
import weather from "../assets/portfolio/weather.png";
import fileShare from "../assets/portfolio/fileShare.png";
import smartCompaint from "../assets/portfolio/smartcomplaint.png";
import Silk from "../assets/portfolio/SilkBusiness.png";
import Gym from "../assets/portfolio/Gym.png";
import FoodCal from "../assets/portfolio/FoodCal.png";
import FileForge from "../assets/portfolio/FileForge.png";

const containerStagger = {
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const Projects = () => {
  // ================== Project Data ==================
  const additionalProjects = [
    {
      title: "FoodCal",
      description:
        "AI-powered fitness and calorie tracking platform using computer vision to analyze food, calculate calories, macros, BMI, and personalized fitness goals.",
      image: FoodCal,
      technologies: [
        "Next.js",
        "Supabase",
        "Python",
        "OpenCV",
        "AI / Computer Vision",
      ],
      achievements: [
        "Food Calorie Detection via Camera",
        "Protein, Fat & Carbohydrate Analysis",
        "BMI Calculation",
        "AI-based Daily Calorie Recommendation",
        "Step Counter & Activity Tracking",
        "Health Notifications & Fitness Insights",
      ],
      Live: "https://food-cal-fe-fp6i.vercel.app/login?redirectedFrom=%2F",
      codeLink: "https://github.com/krixen-org/foodCal_fe",
    },

    {
      title: "File Forge",
      description:
        "All-in-one document processing web platform for file conversion, PDF generation, compression, and cloud-based document management.",
      image: FileForge,
      technologies: [
        "Next.js",
        "Supabase",
        "PDF Processing",
        "File Conversion",
        "Cloud Storage",
      ],
      achievements: [
        "PDF to Word / Excel Conversion",
        "Document to PDF Generator",
        "PDF Compression & Image Optimization",
        "Merge, Split & Extend PDFs",
        "Fast Cloud-based File Processing",
      ],
      Live: "https://converter-website-5mix.vercel.app/",
      codeLink: "https://github.com/krixen-org/Converter-Website",
    },

    {
      title: "INNFOODIE",
      description:
        "React-based food ordering platform featuring a dynamic menu system and real-time order tracking.",
      image: INNFOODIE,
      technologies: ["React", "State Management"],
      achievements: ["Dynamic Menu System", "Live Order Tracking"],
      Live: "https://innfoodie-food-order-site-24-7.vercel.app/",
      codeLink:
        "https://github.com/PriYanahsu/INNFOODIE-Food-order-Site-24-7",
    },

    {
      title: "Skill B2C Website",
      description:
        "Commerce-focused B2C platform integrated with WhatsApp for optimized customer communication and delivery.",
      image: Silk,
      technologies: ["React", "Tailwind CSS"],
      achievements: ["B2C Workflow Integration", "WhatsApp API Integration"],
      Live: "https://silk-bussines.onrender.com/",
      codeLink: "https://github.com/PriYanahsu/silk-bussiness",
    },

    {
      title: "Gym Management System",
      description:
        "Automated gym management solution for handling member records, payments, and sales analytics.",
      image: Gym,
      technologies: ["React", "Supabase", "PostgreSQL"],
      achievements: ["Automated Member Records", "Sales & Performance Analytics"],
      Live: "https://arhamgym.vercel.app/",
      codeLink: "https://github.com/PriYanahsu/gym-data-management",
    },

    {
      title: "Weather Forecast App",
      description:
        "Futuristic weather forecasting application providing accurate 5-day predictions using advanced APIs.",
      image: weather,
      technologies: ["Next.js", "Weather API"],
      achievements: ["5-Day Predictive Forecasting", "Futuristic UI Design"],
      Live: "https://weatherapp-iota-ecru.vercel.app/",
      codeLink:
        "https://github.com/PriYanahsu/Weather-forecaste-site----predict-5-futurestic-days",
    },

    {
      title: "ML Disease Detection",
      description:
        "Machine learning-based medical diagnosis system with disease prediction and drug recommendation.",
      image: Disease,
      technologies: ["Python", "Machine Learning"],
      achievements: ["Disease Prediction", "AI-Based Drug Recommendation"],
      Live:
        "https://github.com/PriYanahsu/Disease-Prediction-with-Drug-Recommendation-Using-ML",
      codeLink:
        "https://github.com/PriYanahsu/Disease-Prediction-with-Drug-Recommendation-Using-ML",
    },

    {
      title: "Personal Portfolio",
      description:
        "Modern, high-performance personal portfolio showcasing full-stack projects and technical expertise.",
      image: personal,
      technologies: ["Next.js", "TypeScript"],
      achievements: ["SEO Optimized", "Premium UI/UX Design"],
      Live: "https://personal-website-priyanshu.vercel.app/",
      codeLink:
        "https://github.com/PriYanahsu/Personal-Website-Priyanshu-",
    },
  ];

  const renderProjectCard = (project: any, index: number) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover="active"
      whileTap="active"
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
      className="group relative flex flex-col h-full bg-[#0A1929]/40 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 shadow-xl hover:border-indigo-500/30 transition-all duration-500"
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <motion.div
          variants={{
            active: { scale: 1.1 }
          }}
          transition={{ duration: 0.7 }}
          className="relative w-full h-full"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
          <motion.div
            variants={{
              active: { opacity: 0.3 }
            }}
            initial={{ opacity: 0.6 }}
            className="absolute inset-0 bg-[#040D12] transition-opacity duration-500"
          />
        </motion.div>

        {/* Floating Icons */}
        <motion.div
          variants={{
            active: { translateY: 0, opacity: 1 }
          }}
          initial={{ translateY: 8, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-4 right-4 flex gap-3 z-20"
        >
          {project.codeLink && (
            <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-[#040D12]/80 backdrop-blur-md rounded-full text-gray-300 hover:text-white border border-white/10 transition">
              <FaGithub size={18} />
            </a>
          )}
          {project.Live && project.Live !== "#" && (
            <a href={project.Live} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-[#040D12]/80 backdrop-blur-md rounded-full text-gray-300 hover:text-white border border-white/10 transition">
              <FaExternalLinkAlt size={16} />
            </a>
          )}
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-100 group-hover:text-white transition-colors">
            {project.title}
          </h3>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-grow">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech: string) => (
            <span key={tech} className="px-2.5 py-1 bg-white/5 text-gray-300 border border-white/10 rounded-md text-[10px] uppercase tracking-wider font-semibold">
              {tech}
            </span>
          ))}
        </div>

        {/* Highlights */}
        <div className="pt-4 border-t border-white/5">
          <div className="flex items-center gap-2 text-gray-400 font-bold text-[11px] uppercase tracking-widest mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-gray-600" />
            Core Highlights
          </div>
          <ul className="flex flex-col gap-1.5">
            {project.achievements.map((item: string, idx: number) => (
              <li key={idx} className="text-xs text-gray-500 flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-gray-700" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-[#0A1929] to-[#040D12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight"
          >
            Featured <span className="bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-1 w-24 bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto rounded-full"
          />
        </div>

        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {additionalProjects.map((project, index) => renderProjectCard(project, index))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
