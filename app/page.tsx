import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Internship from '../components/sections/Internship';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Certifications from '../components/sections/Certifications';
import Achievements from '../components/sections/Achievements';
import Contact from '../components/sections/Contact';

import Cursor from '../components/ui/Cursor';
import ScrollProgress from '../components/ui/ScrollProgress';

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Internship />
      <Skills />
      <Projects />
      <Certifications />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
