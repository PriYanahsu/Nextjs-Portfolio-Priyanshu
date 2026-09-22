import type { StaticImageData } from "next/image";
import type { IconType } from "react-icons";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaHandshake, FaJava, FaAws } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import {
  SiLeetcode,
  SiHackerrank,
  SiMedium,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiSpringboot,
  SiSpringsecurity,
  SiSpring,
  SiFastapi,
  SiJsonwebtokens,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiSupabase,
  SiFirebase,
  SiDocker,
  SiGithubactions,
  SiRailway,
  SiGit,
  SiGitlab,
  SiJira,
  SiClickup,
  SiSlack,
  SiReddit,
} from "react-icons/si";

import portrait from "../assets/HeroPortrait.png";

import HireCheck1 from "../assets/portfolio/hirecheck1.png";
import HireCheck2 from "../assets/portfolio/hirecheck2.png";
import HireCheck3 from "../assets/portfolio/hirecheck3.png";
import HireCheck4 from "../assets/portfolio/hirecheck4.png";
import HireCheck5 from "../assets/portfolio/hirecheck5.png";
import HireCheck6 from "../assets/portfolio/hirecheck6.png";
import HireCheck7 from "../assets/portfolio/hirecheck7.png";
import HireCheck8 from "../assets/portfolio/hirecheck8.png";
import HireCheck9 from "../assets/portfolio/hirecheck9.png";
import HireCheck10 from "../assets/portfolio/hirecheck10.png";
import HireCheck11 from "../assets/portfolio/hirecheck11.png";
import HireCheck12 from "../assets/portfolio/hirecheck12.png";

import FoodCal from "../assets/portfolio/FoodCal.png";
import FoodCal1 from "../assets/portfolio/FoodCal1.png";
import FoodCal2 from "../assets/portfolio/FoodCal2.png";
import FoodCal3 from "../assets/portfolio/FoodCal3.png";
import FoodCal4 from "../assets/portfolio/FoodCal4.png";
import FoodCal5 from "../assets/portfolio/FoodCal5.png";
import FoodCal6 from "../assets/portfolio/FoodCal6.png";
import FoodCal7 from "../assets/portfolio/FoodCal7.png";
import FoodCal8 from "../assets/portfolio/FoodCal8.png";
import FoodCal9 from "../assets/portfolio/FoodCal9.png";
import FoodCalMobileLanding from "../assets/portfolio/FoodCalMobile-landing.png";
import FoodCalMobileSignin from "../assets/portfolio/FoodCalMobile-signin.png";
import FoodCalMobileNutrition from "../assets/portfolio/FoodCalMobile-nutrition.png";
import FoodCalMobileScan from "../assets/portfolio/FoodCalMobile-scan.png";
import FoodCalMobileHistory from "../assets/portfolio/FoodCalMobile-history.png";
import FoodCalMobilePlan from "../assets/portfolio/FoodCalMobile-plan.png";
import FoodCalMobileMeals from "../assets/portfolio/FoodCalMobile-meals.png";
import FoodCalMobileMeal from "../assets/portfolio/FoodCalMobile-meal.png";
import FoodCalMobileToday from "../assets/portfolio/FoodCalMobile-today.png";
import FoodCalMobileWater from "../assets/portfolio/FoodCalMobile-water.png";
import FoodCalMobileWeight from "../assets/portfolio/FoodCalMobile-weight.png";
import FoodCalMobileCoach from "../assets/portfolio/FoodCalMobile-coach.png";
import FoodCalMobileMenu from "../assets/portfolio/FoodCalMobile-menu.png";

import FileForge1 from "../assets/portfolio/FileForge1.png";
import FileForge2 from "../assets/portfolio/FileForge2.png";
import FileForge3 from "../assets/portfolio/FileForge3.png";
import FileForge4 from "../assets/portfolio/FileForge4.png";
import FileForge5 from "../assets/portfolio/FileForge5.png";

import disease1 from "../assets/portfolio/disease1.png";
import disease2 from "../assets/portfolio/disease2.png";

import INNFOODIE from "../assets/portfolio/INNFOODIE.png";
import INNFOODIE1 from "../assets/portfolio/INNFOODIE1.png";
import INNFOODIE2 from "../assets/portfolio/INNFOODIE2.png";
import INNFOODIE3 from "../assets/portfolio/INNFOODIE3.png";
import INNFOODIE4 from "../assets/portfolio/INNFOODIE4.png";

import Silk from "../assets/portfolio/SilkBusiness.png";
import Gym from "../assets/portfolio/Gym.png";
import weather from "../assets/portfolio/weather.png";
import personal from "../assets/portfolio/personal.png";

import MachineLearningWithPython from "../assets/certificate/Machine Learning with Python.png";
import ArtificialIntelligenceAnalyst from "../assets/certificate/Artificial Intelligence Analyst.png";
import BusinessIntelligence from "../assets/certificate/Bussiness Intelligence.png";
import NoSQLAndDBaaS from "../assets/certificate/NoSQL And DABaaS 101.png";
import PythonForDataScience from "../assets/certificate/Python Data Science.png";
import DataStructuresBackendJava from "../assets/certificate/Data Structure and Backend With java.png";
import FrontendCertificate from "../assets/certificate/Frontend Certificate.png";
import JavaCertificate from "../assets/certificate/Java Certificate.png";
import MySqlCertificate from "../assets/certificate/MySql Certificate.png";
import ProblemSolving from "../assets/certificate/Problem Solving Certificate.png";

/* ------------------------------------------------------------------ */
/* Profile                                                             */
/* ------------------------------------------------------------------ */

export const profile = {
  name: "Priyanshu Kumar",
  firstName: "Priyanshu",
  role: "Full-Stack Software Engineer",
  location: "Noida, India",
  timezone: "Asia/Kolkata",
  email: "priyanshu.dev.agile@gmail.com",
  phone: "+91 6006935523",
  phoneHref: "tel:+916006935523",
  resume: "/resume.pdf",
  portrait,
  company: { name: "Cognivac", role: "Associate Software Engineer" },
  venture: { name: "Krixen", href: "https://krixen.com" },
};

export interface SocialLink {
  label: string;
  href: string;
  handle: string;
  icon: IconType;
}

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/PriYanahsu", handle: "PriYanahsu", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/priyanshukumar1265/", handle: "priyanshukumar1265", icon: FaLinkedin },
  { label: "Topmate", href: "https://topmate.io/dev_priyanshu", handle: "Book a mentorship call", icon: FaHandshake },
  { label: "Medium", href: "https://medium.com/@priyanshu.dev.agile", handle: "@priyanshu.dev.agile", icon: SiMedium },
  { label: "LeetCode", href: "https://leetcode.com/u/PriyAnshu1265/", handle: "PriyAnshu1265", icon: SiLeetcode },
  { label: "HackerRank", href: "https://www.hackerrank.com/profile/priyanshukuma120", handle: "priyanshukuma120", icon: SiHackerrank },
  { label: "WhatsApp", href: "https://wa.me/916006935523", handle: "+91 6006935523", icon: FaWhatsapp },
  { label: "Email", href: "mailto:priyanshu.dev.agile@gmail.com", handle: "priyanshu.dev.agile@gmail.com", icon: FaEnvelope },
];

export const stats = [
  { value: 450, suffix: "+", label: "DSA problems solved on LeetCode & HackerRank" },
  { value: 20, suffix: "+", label: "REST APIs designed and secured at Cognivac" },
  { value: 5, suffix: "★", label: "HackerRank rating in Java and MySQL" },
  { value: 1, suffix: "st", label: "Place in a university-level hackathon" },
];

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

export const aboutFacts: { label: string; value: string[] }[] = [
  { label: "Currently", value: ["Associate Software Engineer at Cognivac"] },
  { label: "Also", value: ["Founder of Krixen · Freelance developer"] },
  {
    label: "Education",
    value: [
      "MCA (Data Science), Babu Banarasi Das University · 2023–25",
      "BCA, Shri Ramswaroop Memorial University · 2020–23",
    ],
  },
  { label: "Practices", value: ["Low-level design, OOP, MVC, clean code, Agile"] },
  { label: "Based in", value: ["Noida, India"] },
];

export const services = [
  {
    title: "Full-stack web apps",
    description: "Scalable web products with React / Next.js on top of robust backend APIs.",
    stack: ["Next.js", "Spring Boot", "FastAPI", "PostgreSQL"],
  },
  {
    title: "Backend & API engineering",
    description: "Clean-architecture APIs with authentication, performance and reliability built in.",
    stack: ["Java", "Python", "REST", "Docker"],
  },
  {
    title: "Mobile & cross-platform",
    description: "Responsive, high-performance app interfaces and mobile-ready workflows.",
    stack: ["React Native", "Firebase", "Supabase", "CI/CD"],
  },
];

/* ------------------------------------------------------------------ */
/* Experience                                                          */
/* ------------------------------------------------------------------ */

export interface Experience {
  role: string;
  company: string;
  companyHref?: string;
  period: string;
  summary: string;
  points: string[];
  metrics?: { value: string; label: string }[];
  stack: string[];
}

export const experience: Experience[] = [
  {
    role: "Associate Software Engineer",
    company: "Cognivac",
    period: "May 2025 — Present",
    summary:
      "Building and maintaining full-stack web and mobile applications across frontend, backend and database layers.",
    points: [
      "Developed and maintained full-stack web and mobile applications with Next.js and React.js, improving feature delivery speed and user experience.",
      "Designed and secured RESTful APIs in Spring Boot and FastAPI with JWT authentication.",
      "Integrated third-party APIs, including Reddit APIs and Devvit applications, for workflow automation and real-time data sync.",
      "Optimized API and database performance, cutting average response times by roughly 30%.",
      "Worked in Agile teams across sprint planning, code review, CI/CD, testing and deployment.",
    ],
    metrics: [
      { value: "5+", label: "apps shipped" },
      { value: "20+", label: "secured APIs" },
      { value: "15+", label: "end-to-end features" },
      { value: "~30%", label: "faster responses" },
    ],
    stack: ["Next.js", "React", "Spring Boot", "FastAPI", "JWT", "Devvit"],
  },
  {
    role: "Founder & Builder",
    company: "Krixen",
    companyHref: "https://krixen.com",
    period: "2024 — Present",
    summary: "Leading product direction from idea validation to deployment.",
    points: [
      "Built internal product systems and reusable development workflows.",
      "Led product direction from idea validation through to deployment.",
      "Streamlined development velocity with component-first engineering.",
    ],
    stack: ["Next.js", "Supabase", "Python"],
  },
  {
    role: "Freelance Full-Stack Developer",
    company: "Independent",
    period: "2023 — Present",
    summary: "Designing and shipping SaaS and MVP products for startups and local businesses.",
    points: [
      "Owned architecture, implementation, deployment and post-launch support.",
      "Focused on speed, scalability and conversion-driven UX.",
    ],
    stack: ["React", "Supabase", "PostgreSQL"],
  },
];

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

export interface Project {
  slug: string;
  title: string;
  category: string;
  year?: string;
  description: string;
  problem?: string;
  built?: string;
  longDescription?: string;
  image: StaticImageData;
  gallery?: StaticImageData[];
  /** Short names for `image` followed by each `gallery` screen, shown as captions. */
  captions?: string[];
  /** Captioned portrait screens. When set, the case study splits into Desktop / Mobile. */
  mobileGallery?: { src: StaticImageData; label: string }[];
  technologies: string[];
  achievements: string[];
  live: string;
  code: string;
  featured?: boolean;
  /** Brand color sampled from the product's own UI; tints its showcase stage. */
  tint?: string;
}

export const projects: Project[] = [
  {
    slug: "hirecheck",
    tint: "#2563eb",
    title: "HireCheck",
    category: "Recruitment SaaS",
    year: "2026",
    featured: true,
    description:
      "A technical assessment platform where recruiters create timed tests, invite candidates and review scores, and candidates take proctored tests.",
    problem:
      "Recruiters need one place to run timed technical assessments, invite candidates and review results, and they need to trust that the scores are honest.",
    built:
      "The full product, end to end: a React + TypeScript dashboard, a Spring Boot API with JWT auth on PostgreSQL, and a proctored test flow, shipped as a single Docker image.",
    longDescription:
      "HireCheck is a full-stack technical assessment platform for recruiters and candidates. Recruiters sign up, create timed tests with multiple-choice and short-answer questions, invite candidates individually or in bulk, share public test links, and monitor their pipeline through Dashboard, Tests, Candidates and Analytics views tracking pass rates, completion stats and per-candidate scores with phone and IP metadata. Candidates register via a public link, review test instructions and anti-cheat rules, then take assessments under fullscreen with a live countdown timer, auto-save, and tab-switch detection that auto-submits after repeated violations. Under the hood, a React + Vite frontend shares Zod validation schemas with a Spring Boot backend on PostgreSQL, secured with JWT auth, EmailJS invitations and ImageKit uploads, shipped as a single Docker image on Railway serving both API and SPA from one process.",
    image: HireCheck1,
    gallery: [HireCheck2, HireCheck3, HireCheck4, HireCheck5, HireCheck6, HireCheck7, HireCheck8, HireCheck9, HireCheck10, HireCheck11, HireCheck12],
    technologies: ["React", "TypeScript", "Spring Boot", "PostgreSQL", "JWT", "Zod", "Docker", "Railway"],
    achievements: [
      "Proctored test flow with a timer, auto-save, fullscreen mode and auto-submit on tab switch",
      "Recruiter dashboard with pipeline KPIs, recent activity and active assessments",
      "Bulk candidate invites, resends and public self-registration links",
      "Analytics for pass rate, average score, completion rate and per-test charts",
      "18+ secure REST APIs built with Spring Security and JWT",
    ],
    live: "https://hirecheck-beryl.vercel.app",
    code: "https://github.com/PriYanahsu/HireCheck-Full-Stack-",
  },
  {
    slug: "foodcal",
    tint: "#a3e635",
    title: "FoodCal",
    category: "AI · Health & Fitness",
    year: "2025",
    featured: true,
    description:
      "An AI-powered nutrition and fitness tracker that analyzes food photos to estimate calories and macros in real time.",
    problem:
      "Manually logging meals is tedious enough that most people give up. Tracking needs to take seconds, not minutes.",
    built:
      "A Next.js PWA with Supabase for auth and real-time data, plus a Python and computer-vision pipeline using OpenCV, Gemini and OpenAI for food recognition.",
    longDescription:
      "FoodCal is a health and fitness application that uses AI and computer vision to make nutrition tracking effortless. Users take a photo or use a live camera feed; the app identifies food items, estimates portions and calculates nutritional values in real time. It includes persistent data tracking, personalized recommendations based on BMI and activity level, and step counting with anti-cheat validation. Next.js powers a fast frontend while Supabase handles authentication and real-time data.",
    image: FoodCal,
    gallery: [FoodCal1, FoodCal2, FoodCal3, FoodCal4, FoodCal5, FoodCal6, FoodCal7, FoodCal8, FoodCal9],
    captions: [
      "Landing",
      "Sign in",
      "Create account",
      "First-day dashboard",
      "Daily dashboard",
      "Snap a meal",
      "History calendar",
      "My plan",
      "Notifications",
      "Profile & goals",
    ],
    mobileGallery: [
      { src: FoodCalMobileLanding, label: "Landing" },
      { src: FoodCalMobileSignin, label: "Sign in" },
      { src: FoodCalMobileNutrition, label: "Daily dashboard" },
      { src: FoodCalMobileScan, label: "Snap a meal" },
      { src: FoodCalMobileMeal, label: "AI meal breakdown" },
      { src: FoodCalMobileMeals, label: "Today's meals" },
      { src: FoodCalMobileToday, label: "Macro summary" },
      { src: FoodCalMobileHistory, label: "History calendar" },
      { src: FoodCalMobileWater, label: "Water tracker" },
      { src: FoodCalMobileWeight, label: "Weight log" },
      { src: FoodCalMobilePlan, label: "My plan" },
      { src: FoodCalMobileCoach, label: "AI coach" },
      { src: FoodCalMobileMenu, label: "Account menu" },
    ],
    technologies: ["Next.js", "Supabase", "Python", "OpenCV", "Gemini", "OpenAI", "PWA"],
    achievements: [
      "Real-time food calorie detection from the camera",
      "Protein, fat and carbohydrate breakdown for every meal",
      "AI-generated daily calorie targets from BMI and activity level",
      "Step counting with anti-cheat validation and goal tracking",
      "Health dashboards and fitness notifications",
    ],
    live: "https://food-cal-fe-ewy4.vercel.app/login?redirectedFrom=%2F",
    code: "https://github.com/krixen-org/foodCal_fe",
  },
  {
    slug: "fileforge",
    tint: "#7c3aed",
    title: "File Forge",
    category: "Productivity tool",
    featured: true,
    description:
      "An all-in-one document platform for file conversion, PDF generation and compression.",
    problem:
      "Everyday document tasks like converting, merging or compressing are scattered across ad-heavy single-purpose sites.",
    built:
      "A Next.js platform with a suite of PDF and image tools covering conversion, merge and split, compression and generation, all in one fast interface.",
    longDescription:
      "File Forge is a document management suite with a comprehensive set of tools for working with digital documents, including conversion between PDF, Word, Excel and image formats. Users can merge documents, split large PDFs, compress files while preserving quality, and generate PDFs from plain text or Markdown. The interface keeps complex file operations one click away.",
    image: FileForge1,
    gallery: [FileForge2, FileForge3, FileForge4, FileForge5],
    technologies: ["Next.js", "Supabase", "PDF processing", "File conversion", "Cloud storage"],
    achievements: [
      "PDF to Word and Excel conversion",
      "Document-to-PDF generator",
      "PDF compression and image optimization",
      "Merge, split and extend PDFs",
    ],
    live: "https://fileforge.online/",
    code: "https://github.com/krixen-org/Converter-Website",
  },
  {
    slug: "disease-detection",
    title: "ML Disease Detection",
    category: "Machine learning",
    description: "A machine-learning diagnosis system that predicts diseases and recommends drugs.",
    longDescription:
      "A healthcare project that uses machine learning to assist in early disease detection. It processes symptoms and patient history through trained Random Forest and Logistic Regression models to predict potential conditions, and a recommendation engine suggests medications and next steps based on the predicted diagnosis. The project applies data science to medicine with an emphasis on model interpretability and data privacy.",
    image: disease1,
    gallery: [disease2],
    technologies: ["Python", "Flask", "Scikit-learn", "Machine learning"],
    achievements: [
      "Multi-disease prediction model",
      "Drug recommendation engine",
      "Flask REST API integration",
      "Accuracy reporting and model validation",
    ],
    live: "https://disease-detection-with-drug.onrender.com",
    code: "https://github.com/PriYanahsu/Disease-Prediction-with-Drug-Recommendation-Using-ML",
  },
  {
    slug: "innfoodie",
    title: "INNFOODIE",
    category: "Food ordering",
    description: "A React food-ordering platform with a dynamic menu system and order tracking.",
    longDescription:
      "INNFOODIE is a food delivery and management system. A dynamic menu system lets restaurant owners update their offerings in real time, and the customer-facing frontend is optimized for speed and conversion with a smooth checkout flow, responsive cart management and a live order-tracking interface.",
    image: INNFOODIE,
    gallery: [INNFOODIE1, INNFOODIE2, INNFOODIE3, INNFOODIE4],
    technologies: ["React", "State management", "Framer Motion", "Styled Components"],
    achievements: [
      "Interactive dynamic menu system",
      "Real-time order tracking",
      "Mobile-first responsive UI",
      "State management optimized for large menus",
    ],
    live: "https://innfoodie-food-order-site-24-7.vercel.app/",
    code: "https://github.com/PriYanahsu/INNFOODIE-Food-order-Site-24-7",
  },
  {
    slug: "silk-b2c",
    title: "Silk B2C Website",
    category: "Commerce",
    description: "A B2C commerce platform integrated with WhatsApp for customer communication and delivery.",
    longDescription:
      "This B2C platform bridges traditional commerce and modern messaging. It integrates with WhatsApp for order confirmations, delivery updates and direct customer support, alongside a product catalog, search filtering and a checkout flow that prioritizes speed and trust.",
    image: Silk,
    technologies: ["React", "Tailwind CSS", "WhatsApp API", "Framer Motion"],
    achievements: [
      "B2C ordering workflow with WhatsApp integration",
      "Fast product search and filtering",
      "Automated customer communication",
      "Branded visuals and animation",
    ],
    live: "https://silk-bussines.onrender.com/",
    code: "https://github.com/PriYanahsu/silk-bussiness",
  },
  {
    slug: "gym-management",
    title: "Gym Management System",
    category: "Business SaaS",
    description: "Gym management software for member records, payments and sales analytics.",
    longDescription:
      "A SaaS solution for fitness centers that covers the member lifecycle, from signup and payments to attendance tracking and subscription renewals. Owners get a dashboard with sales analytics and member metrics. Supabase and PostgreSQL keep business data consistent and available.",
    image: Gym,
    technologies: ["React", "Supabase", "PostgreSQL", "Recharts"],
    achievements: [
      "Centralized member records",
      "Sales and performance analytics dashboards",
      "Automated billing and digital invoicing",
      "Role-based access control",
    ],
    live: "https://arhamgym.vercel.app/",
    code: "https://github.com/PriYanahsu/gym-data-management",
  },
  {
    slug: "weather",
    title: "Weather Forecast App",
    category: "Data visualization",
    description: "A weather app with 5-day forecasts, charts and conditions-aware theming.",
    longDescription:
      "This app provides local weather forecasts with a focus on visual data. The UI adapts to local conditions, and alongside temperature it shows air quality, UV alerts and detailed 5-day predictions with interactive charts. The project emphasizes clean architecture and efficient third-party API integration.",
    image: weather,
    technologies: ["Next.js", "Weather API", "Chart.js"],
    achievements: [
      "5-day forecasts",
      "Theme transitions based on conditions",
      "Interactive weather charts",
      "Location-based insights",
    ],
    live: "https://weatherapp-iota-ecru.vercel.app/",
    code: "https://github.com/PriYanahsu/Weather-forecaste-site----predict-5-futurestic-days",
  },
  {
    slug: "personal-website",
    title: "Personal Website",
    category: "Portfolio",
    description: "A personal website showcasing projects and technical expertise.",
    longDescription:
      "A personal site built with Next.js for server rendering and SEO, Framer Motion for micro-interactions and Tailwind CSS for styling, with responsive layouts across device sizes.",
    image: personal,
    technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    achievements: [
      "SEO-friendly server rendering",
      "Micro-interactions with Framer Motion",
      "Responsive across screen sizes",
    ],
    live: "https://personal-website-priyanshu.vercel.app/",
    code: "https://github.com/PriYanahsu/Personal-Website-Priyanshu-",
  },
];

/* ------------------------------------------------------------------ */
/* Skills                                                              */
/* ------------------------------------------------------------------ */

export interface SkillGroup {
  title: string;
  items: { name: string; icon?: IconType }[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: [
      { name: "Java", icon: FaJava },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Python", icon: SiPython },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React Native", icon: SiReact },
      { name: "Redux", icon: SiRedux },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Spring Security", icon: SiSpringsecurity },
      { name: "Spring Data JPA", icon: SiSpring },
      { name: "FastAPI", icon: SiFastapi },
      { name: "REST APIs" },
      { name: "Microservices" },
      { name: "JWT auth", icon: SiJsonwebtokens },
    ],
  },
  {
    title: "Data",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Supabase", icon: SiSupabase },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      { name: "Docker", icon: SiDocker },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "AWS EC2", icon: FaAws },
      { name: "AWS RDS", icon: FaAws },
      { name: "Railway", icon: SiRailway },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: FaGithub },
      { name: "GitLab", icon: SiGitlab },
      { name: "VS Code", icon: VscVscode },
      { name: "Jira", icon: SiJira },
      { name: "ClickUp", icon: SiClickup },
      { name: "Slack", icon: SiSlack },
      { name: "Devvit", icon: SiReddit },
    ],
  },
];

export const coreConcepts = [
  "Data structures & algorithms",
  "Object-oriented programming",
  "System design",
  "Low-level design",
  "Database design",
  "API development",
  "Auth & authorization",
  "Performance optimization",
  "Agile / SDLC",
];

/* ------------------------------------------------------------------ */
/* Certificates                                                        */
/* ------------------------------------------------------------------ */

export interface Certificate {
  title: string;
  issuer: string;
  image: StaticImageData;
  link: string;
}

export const certificates: Certificate[] = [
  { title: "Java", issuer: "HackerRank", image: JavaCertificate, link: "https://www.hackerrank.com/certificates/iframe/b8062a55bdb2" },
  { title: "Problem Solving", issuer: "HackerRank", image: ProblemSolving, link: "https://www.hackerrank.com/certificates/iframe/144387ffdba7" },
  { title: "MySQL", issuer: "HackerRank", image: MySqlCertificate, link: "https://www.hackerrank.com/certificates/a2c369bb2800" },
  { title: "Data Structures & Backend with Java", issuer: "Coursera", image: DataStructuresBackendJava, link: "https://www.coursera.org/account/accomplishments/records/RP8V380YTQG2" },
  { title: "Frontend Development", issuer: "Coursera", image: FrontendCertificate, link: "https://www.coursera.org/account/accomplishments/verify/USXHP6XWZEYL" },
  { title: "Machine Learning with Python", issuer: "IBM Skills Network", image: MachineLearningWithPython, link: "https://courses.bbdu.skillsnetwork.site/certificates/2e8ff54cce0a48ed92526c76f1422d3c" },
  { title: "Artificial Intelligence Analyst", issuer: "IBM Skills Network", image: ArtificialIntelligenceAnalyst, link: "https://courses.bbdu.skillsnetwork.site/certificates/713dd99de9d34583a76c93cef84675e8" },
  { title: "Python for Data Science", issuer: "IBM Skills Network", image: PythonForDataScience, link: "https://courses.bbdu.skillsnetwork.site/certificates/47a4b24e74864357a2a5ea39f2ba42ec" },
  { title: "Business Intelligence", issuer: "IBM Skills Network", image: BusinessIntelligence, link: "https://courses.bbdu.skillsnetwork.site/certificates/141e4dfe6bd040c084c606b3d24b587e" },
  { title: "NoSQL and DBaaS 101", issuer: "IBM Skills Network", image: NoSQLAndDBaaS, link: "https://courses.bbdu.skillsnetwork.site/certificates/e6be221fff5145ddb950ab215efb94b2" },
];

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export const navLinks = [
  { label: "Work", id: "work" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Stack", id: "stack" },
  { label: "Credentials", id: "credentials" },
];

export const hostOf = (url: string) => {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
};
