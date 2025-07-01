import { ExternalLink, Github, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const projectsPerPage = 4;

  const projects = [
    {
      title: "AI-Powered Student Mental Health Predictor",
      description: "A machine learning model that predicts student mental health issues based on various factors such as academic performance, social interactions, and personal well-being.",
      tech: ["streamlit", "scikit-learn", "Python", "GeminiPI"],
      image: "🎨",
      gradient: "from-bubble-pink to-hot-pink dark:from-purple-500 dark:to-pink-500",
      category: "ai",
      demoUrl: "https://sumairahafeez-mental-health-chatbot-app-flf43s.streamlit.app/",
      codeUrl: "https://github.com/Sumairahafeez/mental-health-chatbot"
    },
    {
      title: "Books Recommendation System",
      description: "A machine learning model that recommends books based on user preferences and reading history.",
      tech: ["streamlit", "scikit-learn", "Python", "GeminiPI"],
      image: "📚",
      gradient: "from-aqua-blue to-neon-green dark:from-blue-500 dark:to-green-500",
      category: "ai",
      demoUrl: "https://github.com/Sumairahafeez/Books_Recommendation",
      codeUrl: "https://github.com/Sumairahafeez/Books_Recommendation"
    },
    {
      title: "CosmicDB",
      description: "A complete document based database management system with a user-friendly interface for managing and querying data. Built with python ",
      tech: ["python", "Flask", "WAL logic", "Database"],
      image: "💕",
      gradient: "from-lemon-yellow to-bubble-pink dark:from-yellow-500 dark:to-purple-500",
      category: "frontend",
      demoUrl: "https://www.youtube.com/watch?v=yGYoe2wV0tM",
      codeUrl: "https://github.com/Sumairahafeez/COSMICDB"
    },
    {
      title: "Color Hunt Game UI",
      description: "A fun and interactive color hierarchy hunt game's UI designed using Adobe illustrator.",
      tech: ["Adobe illustrator", "Freepik"],
      image: "🎨",
      gradient: "from-lemon-yellow to-bubble-pink dark:from-yellow-500 dark:to-purple-500",
      category: "uiux",
      demoUrl: "https://www.behance.net/gallery/229356003/COLORHUNT-UI",
      codeUrl: "https://github.com/Sumairahafeez/sentiment-bubble-bot"
    },
    {
      title: "Rule based AI Chatbot",
      description: "A rule-based AI chatbot for providing instant responses to user queries and assisting with common tasks.",
      tech: ["react-native", "Ollama", "expo", "sqlite"],
      image: "💖",
      gradient: "from-hot-pink to-aqua-blue dark:from-pink-500 dark:to-blue-500",
      category: "ai",
      demoUrl: "",
      codeUrl: ""
    },
    {
      title: "Tower Defense Game UI",
      description: "A visually stunning and immersive user interface for a tower defense game, featuring unique character designs and engaging animations.",
      tech: ["Figma", "Adobe XD", "Unity"],
      image: "🎮",
      gradient: "from-bubble-pink to-neon-green dark:from-purple-500 dark:to-green-500",
      category: "uiux",
      demoUrl: "https://www.behance.net/gallery/229355753/Tower-Defence-UI",
      codeUrl: ""
    },
    {
      title: "AR Game room UI",
      description: "A visually immersive AR game room interface with interactive elements and engaging animations.",
      tech: ["Unity", "AR Foundation", "3D Modeling", 'Adobe Illustrator'],
      image: "🌈",
      gradient: "from-lemon-yellow to-aqua-blue dark:from-yellow-500 dark:to-blue-500",
      category: "uiux",
      demoUrl: "https://www.behance.net/gallery/229355393/AR-Game-room",
      codeUrl: ""
    },
    {
      title: "SwipeRush Game UI",
      description: "A visually stunning and immersive user interface for a fast-paced swipe game, featuring vibrant graphics and engaging animations.",
      tech: ["Figma", "Adobe Illustrator", "Unity"],
      image: "🍰",
      gradient: "from-bubble-pink to-neon-green dark:from-purple-500 dark:to-green-500",
      category: "uiux",
      demoUrl: "https://www.behance.net/gallery/229355053/Swipe-Rush-Game-design",
      codeUrl: "https://github.com/Sumairahafeez/ml-recipe-generator"
    },
    {
      title: "Color Hunt Game UI",
      description: "UI art for a color hierarchy hunt game, featuring vibrant colors and engaging animations.a casual game with a focus on color recognition and hierarchy.",
      tech: ["Freepik", "Adobe Illustrator", "AI"],
      image: "🛍️",
      gradient: "from-hot-pink to-aqua-blue dark:from-pink-500 dark:to-blue-500",
      category: "uiux",
      demoUrl: "https://www.behance.net/gallery/229356003/COLORHUNT-UI",
      codeUrl: ""
    },
    {
      title: "Book cover designs",
      description: "A collection of book cover designs created for various genres, showcasing creativity and visual storytelling.",
      tech: ["Adobe Photoshop", "Adobe Illustrator"],
      image: "�",
      gradient: "from-hot-pink to-lemon-yellow dark:from-pink-500 dark:to-yellow-500",
      category: "uiux",
      demoUrl: "https://www.behance.net/gallery/229356401/Fantasy-Book-cover",
      codeUrl: "https://github.com/Sumairahafeez/bubbly-task-manager"
    },
    {
      title: "Horror/Comic book designs",
      description: "A collection of horror and comic book cover designs, showcasing creativity and visual storytelling.",
      tech: ["Adobe Photoshop", "Adobe Illustrator"],
      image: "📚",
      gradient: "from-hot-pink to-lemon-yellow dark:from-pink-500 dark:to-yellow-500",
      category: "uiux",
      demoUrl: "https://www.behance.net/gallery/229356609/Comic-Book-covers",
      codeUrl: "https://github.com/Sumairahafeez/smart-mirror-ui"
    },
   
  ];

  const categories = [
    { id: 'all', label: 'All Projects', emoji: '✨' },
    { id: 'ai', label: 'AI/ML', emoji: '🤖' },
    { id: 'frontend', label: 'Frontend', emoji: '💻' },
    { id: 'uiux', label: 'UI/UX', emoji: '🎨' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const currentProjects = filteredProjects.slice(currentIndex, currentIndex + projectsPerPage);

  const nextProjects = () => {
    setCurrentIndex((prev) => (prev + projectsPerPage) % filteredProjects.length);
  };

  const prevProjects = () => {
    setCurrentIndex((prev) => (prev - projectsPerPage + filteredProjects.length) % filteredProjects.length);
  };

  // Reset pagination when category changes
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentIndex(0);
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-aqua-blue/10 via-white to-lemon-yellow/10 dark:from-blue-900/20 dark:via-gray-900 dark:to-yellow-900/20 polka-dots-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bubblegum text-5xl md:text-6xl font-bold bubble-text-gradient mb-6">
            My Projects! ✨
          </h2>
          <p className="font-comic text-xl text-gray-700 dark:text-gray-300">
            Here's some of the fun stuff I've been working on! 🚀
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-aqua-blue to-bubble-pink dark:from-blue-400 dark:to-purple-400 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex justify-center mb-12">
          <Tabs value={selectedCategory} onValueChange={handleCategoryChange} className="w-full max-w-2xl">
            <TabsList className="grid w-full grid-cols-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full p-1 border-2 border-dashed border-bubble-pink/30 dark:border-purple-400/30">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="font-comic font-bold text-sm rounded-full data-[state=active]:bg-bubble-pink dark:data-[state=active]:bg-purple-600 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
                >
                  <span className="mr-1">{category.emoji}</span>
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <Button
            onClick={prevProjects}
            className="bounce-button bg-bubble-pink hover:bg-hot-pink dark:bg-purple-600 dark:hover:bg-purple-700 text-white font-comic rounded-full p-3 border-2 border-black dark:border-white"
            disabled={filteredProjects.length <= projectsPerPage}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <div className="font-comic text-gray-600 dark:text-gray-400">
            {Math.floor(currentIndex / projectsPerPage) + 1} of {totalPages}
          </div>
          
          <Button
            onClick={nextProjects}
            className="bounce-button bg-bubble-pink hover:bg-hot-pink dark:bg-purple-600 dark:hover:bg-purple-700 text-white font-comic rounded-full p-3 border-2 border-black dark:border-white"
            disabled={filteredProjects.length <= projectsPerPage}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentProjects.map((project, index) => (
            <div 
              key={project.title}
              className={`card-hover bg-white dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-500 delay-${index * 100}`}
            >
              {/* Project Header - Smaller */}
              <div className={`bg-gradient-to-r ${project.gradient} p-4 text-center relative overflow-hidden`}>
                <div className="absolute top-1 right-1">
                  <Sparkles className="w-4 h-4 text-white animate-bounce-slow" />
                </div>
                <div className="text-4xl mb-2 animate-pulse-glow">
                  {project.image}
                </div>
                <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-white font-comic font-bold">
                  {categories.find(cat => cat.id === project.category)?.label || 'Other'}
                </div>
              </div>

              {/* Project Content - Compact */}
              <div className="p-4">
                <h3 className="font-bubblegum text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
                  {project.title}
                </h3>
                <p className="font-comic text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack - Smaller */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span 
                      key={tech}
                      className="bg-gradient-to-r from-bubble-pink/20 to-aqua-blue/20 dark:from-purple-500/20 dark:to-blue-500/20 rounded-full px-2 py-1 text-xs font-comic font-bold text-gray-700 dark:text-gray-300 border border-dashed border-bubble-pink/50 dark:border-purple-400/50"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs font-comic text-gray-500 dark:text-gray-400">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Buttons - Updated with real links */}
                <div className="flex gap-2">
                  <Button 
                    onClick={() => window.open(project.demoUrl, '_blank')}
                    size="sm"
                    className="bounce-button bg-bubble-pink hover:bg-hot-pink dark:bg-purple-600 dark:hover:bg-purple-700 text-white font-comic rounded-full border-2 border-black dark:border-white text-xs px-3 py-1"
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Demo
                  </Button>
                  <Button 
                    onClick={() => window.open(project.codeUrl, '_blank')}
                    size="sm"
                    variant="outline"
                    className="bounce-button border-2 border-aqua-blue dark:border-blue-400 text-aqua-blue dark:text-blue-400 hover:bg-aqua-blue hover:text-black dark:hover:bg-blue-400 dark:hover:text-black font-comic rounded-full text-xs px-3 py-1"
                  >
                    <Github className="w-3 h-3 mr-1" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="card-hover bg-white dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl inline-block">
            <h3 className="font-comic text-2xl font-bold bubble-text-gradient mb-4">
              Want to see more? 👀
            </h3>
            <Button onClick={() => window.open('https://github.com/Sumairahafeez', '_blank')} className="bounce-button bg-gradient-to-r from-bubble-pink to-aqua-blue dark:from-purple-600 dark:to-blue-600 hover:from-hot-pink hover:to-neon-green dark:hover:from-purple-700 dark:hover:to-blue-700 text-white font-comic text-lg px-8 py-3 rounded-full border-4 border-black dark:border-white shadow-lg">
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
