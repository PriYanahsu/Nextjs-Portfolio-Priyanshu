/* eslint-disable react/no-unescaped-entities */
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiHackerrank } from "react-icons/si";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-[60vh] md:min-h-[70vh] w-full flex items-center justify-center bg-gradient-to-b from-[#0A1929] to-[#040D12] text-white px-4"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          About Me
        </h2>

        <section className="max-w-3xl md:text-lg text-center mx-auto text-gray-300 p-4">
          {/* Introduction Paragraph */}
          <p className="mb-6">
            I'm an <strong>MCA graduate</strong> and <strong>Software Engineer</strong> at Cognivac,
            specializing in building responsive and scalable applications using
            <strong> React.js</strong>, <strong>Next.js</strong>, <strong>React Native</strong>,
            and <strong>Tailwind CSS</strong>. I also have strong backend expertise
            with <strong>Python FASTAPI and Java Spring Boot</strong>.
          </p>
          {/* Skills & Achievements Paragraph */}
          <p className="mb-6">
            I bring hands-on experience in full-stack development with both
            <strong> SQL</strong> (PostgreSQL, MySQL) and <strong>NoSQL</strong> (MongoDB) databases.
            I enjoy solving complex problems with clean, efficient code.
            With <strong>450+ problems solved on LeetCode</strong> and a
            <strong> 5⭐ rating in Java & MySQL on HackerRank</strong>,
            I continuously sharpen my coding and problem-solving skills.
            I’m passionate about tackling challenges and delivering impactful digital solutions
            that combine performance, scalability, and user experience.
          </p>

          {/* Social Links */}
          <div className="flex flex-col items-center sm:flex-row justify-center gap-6 mt-8">
            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/priyanshukumar1265/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-400 hover:text-blue-200 transition-colors"
              >
                <FaLinkedin size={20} /> LinkedIn
              </a>
              <a
                href="https://leetcode.com/u/PriyAnshu1265/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-yellow-400 hover:text-yellow-200 transition-colors"
              >
                <SiLeetcode size={20} /> LeetCode
              </a>
            </div>
            <div className="flex gap-6">
              <a
                href="https://www.hackerrank.com/profile/priyanshukuma120"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-400 hover:text-green-200 transition-colors"
              >
                <SiHackerrank size={20} /> HackerRank
              </a>
              <a
                href="https://github.com/PriYanahsu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors"
              >
                <FaGithub size={20} /> GitHub
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
