import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Experience />
      <Skills />
      <Certificates />
      <Contact />
    </>
  );
}
