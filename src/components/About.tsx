import { Code, Brain, Coffee, Heart, Star, Sparkles } from 'lucide-react';
import animeAbout from '../assets/anime-about.png';

const About = () => {
  const skills = [
    { icon: Code, name: 'Frontend Magic', color: 'text-primary' },
    { icon: Brain, name: 'AI/ML Wizardry', color: 'text-secondary' },
    { icon: Coffee, name: 'Coffee-Driven Development', color: 'text-accent' },
    { icon: Heart, name: 'Pixel-Perfect Art', color: 'text-destructive' }
  ];

  return (
    <section id="about" className="py-20 anime-bg relative">
      {/* Floating sakura petals */}
      <div className="sakura-container">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="sakura-petal"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold kawaii-text mb-6">
            About Me
          </h2>
          <div className="flex justify-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-destructive animate-bounce-kawaii" />
            <Star className="w-6 h-6 text-primary animate-pulse-glow" />
            <Sparkles className="w-6 h-6 text-secondary animate-float" />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full animate-gradient-x"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio Section with Anime Illustration */}
          <div className="space-y-6 order-2 md:order-1">
            <div className="kawaii-card p-8">
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                <Heart className="w-6 h-6 text-destructive animate-pulse-glow" />
                Hey there, I'm Sumaira!
              </h3>
              <div className="text-muted-foreground leading-relaxed space-y-4">
                <p>
                  I'm a passionate <span className="text-primary font-bold">frontend developer</span> and 
                  <span className="text-secondary font-bold"> AI/ML engineer</span> who believes that technology 
                  should be both beautiful AND intelligent! 
                </p>
                <p>
                  When I'm not crafting stunning interfaces or training AI models, you'll find me 
                  experimenting with anime-inspired designs, creating digital art with generative models, 
                  sipping bubble tea, and turning creative ideas into digital reality!
                </p>
                <p className="text-destructive font-bold">
                  Fun fact: I love crafting kawaii experiences that make users smile! 
                </p>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="kawaii-card p-8">
              <h3 className="text-2xl font-bold text-center mb-8 kawaii-text flex items-center justify-center gap-2">
                <Code className="w-6 h-6 text-primary" />
                My Tech Toolbox
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {['React', 'JavaScript', 'Winform', 'Python', 'Tailwind CSS', 'Node.js', 'Bootstrap', 'Adobe Illustrator', 'Adobe After Effects','Flask','scikit-learn','React Native','Expo', 'Express.js','GitHub','GitLab'].map((tech, index) => (
                  <div 
                    key={tech}
                    className="anime-button text-sm py-2 px-3 text-center font-semibold rounded-full hover:scale-105 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Anime Avatar & Skills */}
          <div className="space-y-6 order-1 md:order-2">
            {/* Anime Illustration */}
            <div className="relative group">
              <div className="kawaii-card p-8">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative">
                  <img
                    src={animeAbout}
                    alt="Anime style illustration of Sumaira"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Floating elements around image */}
                  <div className="absolute -top-4 -right-4 animate-float">
                    <div className="w-12 h-12 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-primary/30">
                      <Code className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -left-4 animate-float-delayed">
                    <div className="w-10 h-10 bg-secondary/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-secondary/30">
                      <Heart className="w-5 h-5 text-secondary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className="kawaii-card p-6 text-center group hover:rotate-3 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="mb-4">
                    <skill.icon className={`w-12 h-12 ${skill.color} mx-auto animate-bounce-kawaii group-hover:scale-110 transition-transform`} />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm">
                    {skill.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;