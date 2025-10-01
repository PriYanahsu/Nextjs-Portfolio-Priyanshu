import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certificate from './components/Certificate'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#040D12]">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificate />
      <Contact />
    </div>
  );
}
