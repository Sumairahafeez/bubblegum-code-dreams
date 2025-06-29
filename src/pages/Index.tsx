
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Volunteer from '@/components/Volunteer';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <About />
      <Projects />
      <Certifications />
      <Volunteer />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
