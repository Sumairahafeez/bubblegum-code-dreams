
import { Code, Brain, Coffee, Heart } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: Code, name: 'Frontend Magic', color: 'text-bubble-pink' },
    { icon: Brain, name: 'AI/ML Wizardry', color: 'text-aqua-blue' },
    { icon: Coffee, name: 'Coffee-Driven Development', color: 'text-lemon-yellow' },
    { icon: Heart, name: 'Pixel-Perfect Passion', color: 'text-hot-pink' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-r from-lemon-yellow/10 to-bubble-pink/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bubblegum text-5xl md:text-6xl font-bold bubble-text-gradient mb-6">
            About Me! 💫
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-bubble-pink to-aqua-blue mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="card-hover bg-white rounded-3xl p-8 shadow-xl border-4 border-dashed border-bubble-pink/30">
              <h3 className="font-comic text-2xl font-bold text-bubble-pink mb-4">
                Hey there, I'm Sarah! 👋
              </h3>
              <div className="font-comic text-gray-700 leading-relaxed space-y-4">
                <p>
                  I'm a passionate <span className="text-bubble-pink font-bold">frontend developer</span> and 
                  <span className="text-aqua-blue font-bold"> AI/ML engineer</span> who believes that technology 
                  should be both beautiful AND intelligent! 
                </p>
                <p>
                  When I'm not crafting pixel-perfect UIs or training neural networks, you'll find me 
                  experimenting with new design trends, sipping bubble tea 🧋, and turning creative ideas 
                  into digital reality!
                </p>
                <p className="text-hot-pink font-bold">
                  Fun fact: I love designing interfaces that make users smile! 😊
                </p>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                className={`card-hover bg-white rounded-3xl p-6 text-center shadow-xl transform hover:rotate-3 transition-all duration-300 delay-${index * 100}`}
              >
                <div className="mb-4">
                  <skill.icon className={`w-12 h-12 ${skill.color} mx-auto animate-bounce-slow`} />
                </div>
                <h4 className="font-comic font-bold text-gray-800">
                  {skill.name}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-16">
          <div className="card-hover bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="font-comic text-2xl font-bold text-center mb-8 bubble-text-gradient">
              My Tech Toolbox 🛠️
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['React', 'TypeScript', 'TensorFlow', 'Python', 'Tailwind CSS', 'Node.js', 'PyTorch', 'Figma'].map((tech, index) => (
                <div 
                  key={tech}
                  className={`bounce-button bg-gradient-to-r from-bubble-pink/20 to-aqua-blue/20 rounded-full px-4 py-2 text-center font-comic font-bold text-gray-800 border-2 border-dashed border-bubble-pink/50 hover:border-solid`}
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
