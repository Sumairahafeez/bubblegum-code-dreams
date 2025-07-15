
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import DownloadResume from '@/components/DownloadResume';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Volunteer from '@/components/Volunteer';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="overflow-x-hidden anime-bg min-h-screen">
      <Navbar />
      <div className="pt-16">
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <DownloadResume />
        <section id="projects">
          <Projects />
        </section>
        <section id="certifications">
          <Certifications />
        </section>
        <section id="volunteer">
          <Volunteer />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
