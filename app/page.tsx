import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certificate from './components/Certificate'
import Experience from './components/Experience';
import Services from './components/Services';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#040D12]">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Services />
      <Projects />
      <Certificate />
      <Contact />
    </div>
  );
}
