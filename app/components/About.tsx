/* eslint-disable react/no-unescaped-entities */
import { FaLinkedin, FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-[60vh] md:min-h-[70vh] w-full flex items-center justify-center bg-gradient-to-b from-[#0A1929] to-[#040D12] text-white px-4"
    >
      <div className="container mx-full">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          About Me
        </h2>

        <section className="max-w-3xl md:text-lg text-center mx-auto text-gray-300 p-4">
          {/* Introduction Paragraph */}
          <p className="mb-6">
            I'm an <strong>MCA graduate</strong> and <strong>Frontend Engineer</strong> at Cognivac,
            specializing in building responsive and scalable applications using
            <strong>React.js</strong>, <strong>Next.js</strong>, <strong>React Native</strong>,
            and <strong>Tailwind CSS</strong>. I also have strong backend expertise
            with <strong>Java Spring Boot</strong>.
          </p>
          {/* Skills & Achievements Paragraph */}
          <p className="mb-6">
            I bring hands-on experience in full-stack development with both
            <strong>SQL</strong> (PostgreSQL, MySQL) and <strong>NoSQL</strong> (MongoDB) databases.
            I enjoy solving complex problems with clean, efficient code.
            With <strong>400+ problems solved on LeetCode</strong> and a
            <strong>5⭐ rating in Java & MySQL on HackerRank</strong>,
            I continuously sharpen my coding and problem-solving skills.
            I’m passionate about tackling challenges and delivering impactful digital solutions
            that combine performance, scalability, and user experience.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-8">
            <a
              href="https://www.linkedin.com/in/priyanshukumar1265/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <FaLinkedin size={20} /> LinkedIn
            </a>
            <a
              href="https://github.com/PriYanahsu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <FaGithub size={20} /> GitHub
            </a>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
