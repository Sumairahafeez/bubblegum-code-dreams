
import { Code, Brain, Coffee, Heart } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: Code, name: 'Frontend Magic', color: 'text-bubble-pink dark:text-purple-400' },
    { icon: Brain, name: 'AI/ML Wizardry', color: 'text-aqua-blue dark:text-blue-400' },
    { icon: Coffee, name: 'Coffee-Driven Development', color: 'text-lemon-yellow dark:text-yellow-400' },
    { icon: Heart, name: 'Pixel-Perfect Art', color: 'text-hot-pink dark:text-pink-400' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-r from-lemon-yellow/10 to-bubble-pink/10 dark:from-yellow-900/20 dark:to-purple-900/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-5xl md:text-6xl font-bold bubble-text-gradient mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-bubble-pink to-aqua-blue dark:from-purple-400 dark:to-blue-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="group card-hover bg-white dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-4 border-dashed border-bubble-pink/30 dark:border-purple-400/30 cursor-pointer">
              <h3 className="font-poppins text-2xl font-bold text-bubble-pink dark:text-purple-400 mb-4">
                Hey there, I'm Sumaira!
              </h3>
              <div className="font-inter text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
                <p>
                  I'm a passionate <span className="text-bubble-pink dark:text-purple-400 font-bold">frontend developer</span> and 
                  <span className="text-aqua-blue dark:text-blue-400 font-bold"> AI/ML engineer</span> who believes that technology 
                  should be both beautiful AND intelligent! 
                </p>
                <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  When I'm not crafting frontend or training models, you'll find me 
                  experimenting with new design trends, using generative images models to create digital art as hobbies, sipping bubble tea, and turning creative ideas 
                  into digital reality!
                </p>
                <p className="text-hot-pink dark:text-pink-400 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Fun fact: I love crafting images with generative models that make users smile! 
                </p>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                className={`card-hover bg-white dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-6 text-center shadow-xl transform hover:rotate-3 transition-all duration-300 delay-${index * 100}`}
              >
                <div className="mb-4">
                  <skill.icon className={`w-12 h-12 ${skill.color} mx-auto animate-bounce-slow`} />
                </div>
                <h4 className="font-inter font-bold text-gray-800 dark:text-gray-200">
                  {skill.name}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-16">
          <div className="card-hover bg-white dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
            <h3 className="font-poppins text-2xl font-bold text-center mb-8 bubble-text-gradient">
              My Tech Toolbox
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['React js', 'Next js', 'MongoDB', 'Python', 'Flask', 'Node.js', 'Bootstrap & Tailwind','pinecone','chromadb','scikit-learn','github','gitlab'].map((tech, index) => (
                <div 
                  key={tech}
                  className={`bounce-button bg-gradient-to-r from-bubble-pink/20 to-aqua-blue/20 dark:from-purple-500/20 dark:to-blue-500/20 rounded-full px-4 py-2 text-center font-inter font-bold text-gray-800 dark:text-gray-200 border-2 border-dashed border-bubble-pink/50 dark:border-purple-400/50 hover:border-solid`}
                >
                  {tech}
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
