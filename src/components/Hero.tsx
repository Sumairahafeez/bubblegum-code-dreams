
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Sparkles, Heart, Zap, Code, Star, Coffee } from 'lucide-react';
import resume from '../assets/resume.pdf';
import animeAvatar1 from '../assets/anime-avatar-1.png';
import animeAvatar2 from '../assets/anime-avatar-2.png';
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 dark:from-background dark:via-muted/20 dark:to-accent/10">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 dark:opacity-10 animate-pulse"></div>
      
      {/* Enhanced Floating Elements */}
      <div className="absolute top-16 left-8 lg:left-16 animate-float">
        <div className="p-3 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm">
          <Code className="w-6 h-6 text-primary dark:text-primary" />
        </div>
      </div>
      <div className="absolute top-32 right-8 lg:right-20 animate-float-delayed">
        <div className="p-2 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 backdrop-blur-sm">
          <Heart className="w-5 h-5 text-destructive dark:text-destructive" />
        </div>
      </div>
      <div className="absolute bottom-32 left-8 lg:left-24 animate-float-slow">
        <div className="p-3 rounded-full bg-gradient-to-r from-secondary/30 to-primary/20 backdrop-blur-sm">
          <Star className="w-6 h-6 text-primary dark:text-primary" />
        </div>
      </div>
      <div className="absolute bottom-48 right-8 lg:right-16 animate-float">
        <div className="p-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm">
          <Coffee className="w-5 h-5 text-muted-foreground dark:text-muted-foreground" />
        </div>
      </div>
      <div className="absolute top-48 left-1/4 animate-float-delayed">
        <div className="p-2 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-primary dark:text-primary" />
        </div>
      </div>
      <div className="absolute bottom-64 right-1/4 animate-float-slow">
        <div className="p-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm">
          <Zap className="w-4 h-4 text-primary dark:text-primary" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Anime Avatar Section */}
          <div className="mb-12 relative">
            <div className="flex justify-center items-center gap-8 mb-8">
              {/* Main Avatar */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full opacity-60 group-hover:opacity-100 blur animate-pulse"></div>
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden bg-background border-4 border-primary/20 shadow-2xl transform group-hover:scale-105 transition-all duration-300">
                  <img 
                    src={animeAvatar1} 
                    alt="Sumaira Hafeez - Anime Avatar" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating secondary avatar */}
                <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-background border-2 border-accent/30 shadow-lg animate-bounce-slow">
                  <img 
                    src={animeAvatar2} 
                    alt="Secondary Avatar" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Name and Title */}
          <div className="mb-8 space-y-4">
            <h1 className="font-bold text-5xl sm:text-6xl lg:text-8xl xl:text-9xl leading-tight">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x">
                Sumaira Hafeez
              </span>
            </h1>
            
            <div className="relative">
              <div className="font-medium text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-2 animate-typing">
                Frontend Developer & AI/ML Engineer
              </div>
              <div className="flex justify-center gap-2 text-primary/60">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse delay-75"></div>
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse delay-150"></div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Description */}
          <div className="mb-12 max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-4">
              Crafting{' '}
              <span className="font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Beautiful Interfaces
              </span>
              {' '}with{' '}
              <span className="font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Intelligent Solutions
              </span>
            </p>
            <p className="text-sm sm:text-base text-muted-foreground/80">
              Powered by coffee, creativity, and a passion for pixel-perfect design
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center mb-16">
            <Button 
              onClick={scrollToProjects}
              size="lg"
              className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore My Work
                <Sparkles className="w-5 h-5 group-hover:animate-spin" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              onClick={() => window.open(resume, '_blank')}
              className="group border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                Download Resume
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
              </span>
            </Button>
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <div className="text-sm text-muted-foreground font-medium">Scroll to explore</div>
            <div 
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 cursor-pointer transition-colors duration-300 group"
              onClick={scrollToProjects}
            >
              <ArrowDown className="w-6 h-6 text-primary group-hover:translate-y-1 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
