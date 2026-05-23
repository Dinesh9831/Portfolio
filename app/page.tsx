import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Internship from '../components/sections/Internship';
import Education from '../components/sections/Education';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Certifications from '../components/sections/Certifications';
import Achievements from '../components/sections/Achievements';
import ResumeSection from '../components/sections/ResumeSection';
import Contact from '../components/sections/Contact';

import Cursor from '../components/ui/Cursor';
import BackgroundEffects from '../components/ui/BackgroundEffects';
import ScrollProgress from '../components/ui/ScrollProgress';

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <BackgroundEffects />
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Internship />
      <Skills />
      <Projects />
      <Certifications />
      <Achievements />
      <Education />
      <ResumeSection />
      <Contact />
      <Footer />
    </main>
  );
}
