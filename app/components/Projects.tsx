"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ProjectDetail, { Project } from "./ProjectDetail";

import INNFOODIE from "../assets/portfolio/INNFOODIE.png";
import Disease from "../assets/portfolio/disease.png";
import personal from "../assets/portfolio/personal.png";
import weather from "../assets/portfolio/weather.png";
import Silk from "../assets/portfolio/SilkBusiness.png";
import Gym from "../assets/portfolio/Gym.png";
import FoodCal from "../assets/portfolio/FoodCal.png";
import FileForge from "../assets/portfolio/FileForge.png";
import fileShare from "../assets/portfolio/fileShare.png";
import smartCompaint from "../assets/portfolio/smartcomplaint.png";

const containerStagger = {
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // ================== Project Data ==================
  const additionalProjects: Project[] = [
    {
      title: "FoodCal",
      description:
        "AI-powered fitness and calorie tracking platform using computer vision to analyze food, calculate calories, macros, BMI, and personalized fitness goals.",
      longDescription: "FoodCal is a cutting-edge health and fitness application that leverages Artificial Intelligence and Computer Vision to revolutionize how users track their nutrition. By simply taking a photo or using a live camera feed, the app identifies food items, estimates portion sizes, and calculates nutritional values in real-time. It features a robust backend for persistent data tracking, a personalized recommendation engine based on BMI and activity levels, and a seamless integration with mobile step counting APIs. Built with a focus on high-performance and user experience, it uses Next.js for a lightning-fast frontend and Supabase for real-time data management.",
      image: FoodCal,
      gallery: [FoodCal, FoodCal, FoodCal], // Placeholder for multiple images
      technologies: [
        "Next.js",
        "Supabase",
        "Python",
        "OpenCV",
        "AI / Computer Vision",
      ],
      achievements: [
        "Real-time Food Calorie Detection via Camera",
        "Detailed Protein, Fat & Carbohydrate Analysis",
        "Automated BMI Calculation & Progress Tracking",
        "AI-based Personalized Daily Calorie Recommendation",
        "Cross-platform Step Counter & Activity Tracking",
        "Dynamic Health Notifications & Fitness Insights",
      ],
      Live: "https://food-cal-fe-fp6i.vercel.app/login?redirectedFrom=%2F",
      codeLink: "https://github.com/krixen-org/foodCal_fe",
    },

    {
      title: "File Forge",
      description:
        "All-in-one document processing web platform for file conversion, PDF generation, compression, and cloud-based document management.",
      longDescription: "File Forge is a heavy-duty document management suite designed for professional use. It provides a comprehensive set of tools for manipulating digital documents, including high-fidelity conversion between PDF, Word, Excel, and various image formats. The platform prioritizes security and speed, utilizing serverless functions for horizontal scaling and cloud storage integration for persistent access. Users can merge multiple documents, split large PDFs, compress files without losing quality, and even generate professional PDFs from plain text or Markdown. The intuitive interface ensures that complex file operations are just a click away.",
      image: FileForge,
      gallery: [FileForge, fileShare, FileForge],
      technologies: [
        "Next.js",
        "Supabase",
        "PDF Processing",
        "File Conversion",
        "Cloud Storage",
      ],
      achievements: [
        "Lossless PDF to Word / Excel Conversion",
        "Automated Document to PDF Generator",
        "Intelligent PDF Compression & Image Optimization",
        "Advanced Merge, Split & Extend PDFs",
        "Super-fast Cloud-based File Processing Engines",
      ],
      Live: "https://converter-website-5mix.vercel.app/",
      codeLink: "https://github.com/krixen-org/Converter-Website",
    },

    {
      title: "INNFOODIE",
      description:
        "React-based food ordering platform featuring a dynamic menu system and real-time order tracking.",
      longDescription: "INNFOODIE is a sophisticated food delivery and management system built to handle high-traffic operations. It features a custom-built dynamic menu system that allows restaurant owners to update their offerings in real-time. The customer-facing frontend is optimized for speed and conversion, featuring a smooth checkout flow, responsive cart management, and a live tracking interface that uses WebSockets to provide real-time updates on order preparation and delivery status. The project showcases advanced state management and high-performance React patterns.",
      image: INNFOODIE,
      gallery: [INNFOODIE, INNFOODIE],
      technologies: ["React", "State Management", "Framer Motion", "Styled Components"],
      achievements: [
        "Highly Interactive Dynamic Menu System",
        "Real-time WebSocket Order Tracking",
        "Responsive Mobile-First UI/UX",
        "Optimized State Management for Large Menus"
      ],
      Live: "https://innfoodie-food-order-site-24-7.vercel.app/",
      codeLink:
        "https://github.com/PriYanahsu/INNFOODIE-Food-order-Site-24-7",
    },

    {
      title: "Skill B2C Website",
      description:
        "Commerce-focused B2C platform integrated with WhatsApp for optimized customer communication and delivery.",
      longDescription: "This B2C platform was designed to bridge the gap between traditional commerce and modern digital communication. By integrating directly with the WhatsApp Business API, the platform allows for seamless automated order confirmations, delivery updates, and direct customer support. It features a high-performance product catalog, intelligent search filtering, and a custom checkout flow that prioritizes speed and trust. The styling uses a premium Tailwind CSS configuration with a focus on accessibility and brand consistency.",
      image: Silk,
      technologies: ["React", "Tailwind CSS", "WhatsApp API", "Framer Motion"],
      achievements: [
        "Direct B2C Workflow & WhatsApp Integration",
        "Zero-Latency Product Search & Filtering",
        "Automated Communication Pulse",
        "Premium Visual Branding & Animation"
      ],
      Live: "https://silk-bussines.onrender.com/",
      codeLink: "https://github.com/PriYanahsu/silk-bussiness",
    },

    {
      title: "Gym Management System",
      description:
        "Automated gym management solution for handling member records, payments, and sales analytics.",
      longDescription: "A comprehensive SaaS solution for fitness centers, the Gym Management System automates the entire lifecycle of a gym member. From initial signup and secure payment processing to daily attendance tracking and subscription renewals. The system provides owners with a powerful dashboard featuring real-time sales analytics, member performance metrics, and automated CRM features. Built with Supabase and PostgreSQL, it ensures data integrity and high availability for mission-critical business data.",
      image: Gym,
      technologies: ["React", "Supabase", "PostgreSQL", "Recharts"],
      achievements: [
        "Centralized Automated Member Records",
        "Detailed Sales & Performance Analytics Dashboards",
        "Automated Billing & Digital Invoicing",
        "Secure Role-Based Access Control"
      ],
      Live: "https://arhamgym.vercel.app/",
      codeLink: "https://github.com/PriYanahsu/gym-data-management",
    },

    {
      title: "Weather Forecast App",
      description:
        "Futuristic weather forecasting application providing accurate 5-day predictions using advanced APIs.",
      longDescription: "Utilizing advanced meteorological data APIs, this application provides hyper-local weather forecasts with a focus on visual data representation. It features a futuristic, glassmorphic UI that changes based on local weather conditions. Beyond simple temperature tracking, the app provides air quality indices, UV radiation alerts, and detailed 5-day hourly predictions with interactive charts. The project emphasizes clean code architecture and efficient third-party API integration.",
      image: weather,
      technologies: ["Next.js", "Weather API", "Chart.js", "Glassmorphism"],
      achievements: [
        "Hyper-Accurate 5-Day Predictive Forecasting",
        "Immersive Dynamic Theme Transitions",
        "Data-Rich Interactive Weather Charts",
        "Geo-Location Based Personalized Insights"
      ],
      Live: "https://weatherapp-iota-ecru.vercel.app/",
      codeLink:
        "https://github.com/PriYanahsu/Weather-forecaste-site----predict-5-futurestic-days",
    },

    {
      title: "ML Disease Detection",
      description:
        "Machine learning-based medical diagnosis system with disease prediction and drug recommendation.",
      longDescription: "A specialized healthcare project that uses Machine Learning to assist in early disease detection. By processing symptoms and patient history through a trained Random Forest and Logistic Regression model, the system predicts potential conditions with high accuracy. It also includes a pharmaceutical recommendation engine that suggests medications and next steps based on predicted diagnoses. The project showcases the practical application of Data Science in the medical field, prioritizing model interpretability and data privacy.",
      image: Disease,
      technologies: ["Python", "Flask", "Scikit-Learn", "Machine Learning"],
      achievements: [
        "High-Precision Multi-Disease Prediction Model",
        "Context-Aware AI Drug Recommendation Engine",
        "Scalable Flask REST API Integration",
        "Detailed Accuracy Reporting & Model Validation"
      ],
      Live:
        "https://github.com/PriYanahsu/Disease-Prediction-with-Drug-Recommendation-Using-ML",
      codeLink:
        "https://github.com/PriYanahsu/Disease-Prediction-with-Drug-Recommendation-Using-ML",
    },

    {
      title: "Personal Portfolio",
      description:
        "Modern, high-performance personal portfolio showcasing full-stack projects and technical expertise.",
      longDescription: "This iteration of my personal portfolio was built to maximize visibility and showcase my technical breadth. It utilizes Next.js for SSR and SEO optimization, Framer Motion for premium micro-interactions, and a custom Tailwind CSS configuration for a unique brand identity. The project features automated image optimization, responsive layouts for all device types, and a centralized data architecture for easy content management. It represents my commitment to building fast, accessible, and visually stunning web experiences.",
      image: personal,
      technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
      achievements: [
        "Full SEO Optimization & High Core Web Vitals",
        "Premium UI/UX with Advanced Micro-Interactions",
        "Dynamic Content Hydration & Fast Navigation",
        "Responsive Design Across All Screen Tiers"
      ],
      Live: "https://personal-website-priyanshu.vercel.app/",
      codeLink:
        "https://github.com/PriYanahsu/Personal-Website-Priyanshu-",
    },
  ];

  const renderProjectCard = (project: Project, index: number) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover="active"
      whileTap="active"
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
      onClick={() => setSelectedProject(project)}
      className="group relative flex flex-col h-full bg-[#0A1929]/40 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 shadow-xl hover:border-indigo-500/30 transition-all duration-500 cursor-pointer"
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
        <div className="absolute top-4 right-4 flex gap-3 z-20">
          <motion.div
            variants={{
              active: { translateY: 0, opacity: 1 }
            }}
            initial={{ translateY: 8, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex gap-3"
          >
            {project.codeLink && (
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2.5 bg-[#040D12]/80 backdrop-blur-md rounded-full text-gray-300 hover:text-white border border-white/10 transition"
              >
                <FaGithub size={18} />
              </a>
            )}
            {project.Live && project.Live !== "#" && (
              <a
                href={project.Live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2.5 bg-[#040D12]/80 backdrop-blur-md rounded-full text-gray-300 hover:text-white border border-white/10 transition"
              >
                <FaExternalLinkAlt size={16} />
              </a>
            )}
          </motion.div>
        </div>
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
          {project.technologies.slice(0, 3).map((tech: string, i: number) => (
            <span key={`${tech}-${i}`} className="px-2.5 py-1 bg-white/5 text-gray-300 border border-white/10 rounded-md text-[10px] uppercase tracking-wider font-semibold">
              {tech}
            </span>
          ))}
        </div>

        {/* Highlights */}
        <div className="pt-4 border-t border-white/5">
          <div className="flex items-center gap-2 text-gray-400 font-bold text-[11px] uppercase tracking-widest mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
            Core Highlights
          </div>
          <ul className="flex flex-col gap-1.5">
            {project.achievements.slice(0, 2).map((item: string, idx: number) => (
              <li key={idx} className="text-xs text-gray-500 flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-gray-700" />
                {item}
              </li>
            ))}
            {project.achievements.length > 2 && (
              <li className="text-[10px] text-indigo-400 font-medium italic mt-1">
                + View more details
              </li>
            )}
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

      <ProjectDetail
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
