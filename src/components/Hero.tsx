
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Sparkles, Heart, Zap } from 'lucide-react';
import resume from '../assets/resume.pdf'; // Adjust the path as necessary
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-bubble-pink/20 via-white to-aqua-blue/20 dark:from-purple-900/30 dark:via-gray-900 dark:to-blue-900/30 polka-dots-subtle relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-bounce-slow">
        <Sparkles className="w-8 h-8 text-bubble-pink dark:text-purple-400" />
      </div>
      <div className="absolute top-40 right-20 animate-bounce-slow delay-100">
        <Heart className="w-6 h-6 text-hot-pink dark:text-pink-400" />
      </div>
      <div className="absolute bottom-40 left-20 animate-bounce-slow delay-200">
        <Zap className="w-7 h-7 text-aqua-blue dark:text-blue-400" />
      </div>
      
      <div className={`text-center max-w-4xl mx-auto px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Profile Avatar */}
        <div className="mb-8 relative">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-bubble-pink to-aqua-blue dark:from-purple-500 dark:to-blue-500 p-1 animate-pulse-glow">
            <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-6xl">
              💫
            </div>
          </div>
        </div>

        {/* Name and Title */}
        <h1 className="font-bubblegum text-6xl md:text-8xl font-bold mb-4 bubble-text-gradient animate-pulse-glow">
          Sumaira Hafeez
        </h1>
        
        <div className="font-comic text-2xl md:text-3xl text-black dark:text-white mb-6 typewriter">
          Frontend Developer & AI/ML Engineer
        </div>
        
        <p className="font-comic text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          ✨ Crafting <span className="text-bubble-pink dark:text-purple-400 font-bold">Beautiful Interfaces</span> with <span className="text-aqua-blue dark:text-blue-400 font-bold">Intelligent Solutions</span> ✨
          <br />
          <span className="text-sm">Powered by coffee, creativity, and a love for pixel-perfect design!</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            onClick={scrollToProjects}
            className="bounce-button bg-bubble-pink hover:bg-hot-pink dark:bg-purple-600 dark:hover:bg-purple-700 text-white font-comic text-lg px-8 py-4 rounded-full border-4 border-black dark:border-white shadow-lg"
          >
             Explore My Work
          </Button>
          
          <Button 
            variant="outline"
            onClick={() => window.open(resume, '_blank')}
            className="bounce-button border-4 border-aqua-blue dark:border-blue-400 text-aqua-blue dark:text-blue-400 hover:bg-aqua-blue hover:text-black dark:hover:bg-blue-400 dark:hover:text-black font-comic text-lg px-8 py-4 rounded-full shadow-lg"
          >
            💌 Download Resume
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ArrowDown className="w-8 h-8 text-bubble-pink dark:text-purple-400 mx-auto cursor-pointer" onClick={scrollToProjects} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
