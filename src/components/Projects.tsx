
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Fashion Finder",
      description: "A smart fashion recommendation system using computer vision and ML to suggest outfits based on style preferences and body type.",
      tech: ["React", "TensorFlow.js", "Python", "FastAPI"],
      image: "🎨",
      gradient: "from-bubble-pink to-hot-pink",
      category: "AI/ML"
    },
    {
      title: "Bubbly Dashboard",
      description: "An interactive data visualization dashboard with playful animations and real-time updates for e-commerce analytics.",
      tech: ["Vue.js", "D3.js", "Tailwind", "Chart.js"],
      image: "📊",
      gradient: "from-aqua-blue to-neon-green",
      category: "Frontend"
    },
    {
      title: "Sentiment Bubble Bot",
      description: "A chatbot that analyzes text sentiment and responds with emoji-filled messages. Built with NLP and a kawaii UI!",
      tech: ["React", "NLP", "Python", "WebSocket"],
      image: "🤖",
      gradient: "from-lemon-yellow to-bubble-pink",
      category: "AI/ML"
    },
    {
      title: "Pastel Portfolio CMS",
      description: "A content management system for creative portfolios with drag-and-drop functionality and Instagram-like filters.",
      tech: ["Next.js", "MongoDB", "Cloudinary", "Framer Motion"],
      image: "💖",
      gradient: "from-hot-pink to-aqua-blue",
      category: "Frontend"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-aqua-blue/10 via-white to-lemon-yellow/10 polka-dots-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bubblegum text-5xl md:text-6xl font-bold bubble-text-gradient mb-6">
            My Projects! ✨
          </h2>
          <p className="font-comic text-xl text-gray-700">
            Here's some of the fun stuff I've been working on! 🚀
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-aqua-blue to-bubble-pink mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`card-hover bg-white rounded-3xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-500 delay-${index * 100}`}
            >
              {/* Project Header */}
              <div className={`bg-gradient-to-r ${project.gradient} p-6 text-center relative overflow-hidden`}>
                <div className="absolute top-2 right-2">
                  <Sparkles className="w-6 h-6 text-white animate-bounce-slow" />
                </div>
                <div className="text-6xl mb-4 animate-pulse-glow">
                  {project.image}
                </div>
                <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 text-white font-comic font-bold">
                  {project.category}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="font-bubblegum text-2xl font-bold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="font-comic text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-gradient-to-r from-bubble-pink/20 to-aqua-blue/20 rounded-full px-3 py-1 text-sm font-comic font-bold text-gray-700 border border-dashed border-bubble-pink/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    size="sm"
                    className="bounce-button bg-bubble-pink hover:bg-hot-pink text-white font-comic rounded-full border-2 border-black"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    size="sm"
                    variant="outline"
                    className="bounce-button border-2 border-aqua-blue text-aqua-blue hover:bg-aqua-blue hover:text-black font-comic rounded-full"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="card-hover bg-white rounded-3xl p-8 shadow-xl inline-block">
            <h3 className="font-comic text-2xl font-bold bubble-text-gradient mb-4">
              Want to see more? 👀
            </h3>
            <Button className="bounce-button bg-gradient-to-r from-bubble-pink to-aqua-blue hover:from-hot-pink hover:to-neon-green text-white font-comic text-lg px-8 py-3 rounded-full border-4 border-black shadow-lg">
              <Github className="w-5 h-5 mr-2" />
              Check out my GitHub!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
