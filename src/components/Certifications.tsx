
import { Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Certifications = () => {
  const certifications = [
    {
      title: "TensorFlow Developer Certificate",
      issuer: "Google",
      date: "2024",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      credentialUrl: "#",
      skills: ["TensorFlow", "Machine Learning", "Python"]
    },
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
      credentialUrl: "#",
      skills: ["AWS", "Cloud Computing", "Architecture"]
    },
    {
      title: "Meta Frontend Developer Certificate",
      issuer: "Meta",
      date: "2023",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      credentialUrl: "#",
      skills: ["React", "JavaScript", "HTML/CSS"]
    },
    {
      title: "Google UX Design Certificate",
      issuer: "Google",
      date: "2023",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      credentialUrl: "#",
      skills: ["UX Design", "Figma", "User Research"]
    },
    {
      title: "Microsoft Azure AI Fundamentals",
      issuer: "Microsoft",
      date: "2022",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
      credentialUrl: "#",
      skills: ["Azure", "AI", "Machine Learning"]
    },
    {
      title: "Certified Ethical Hacker",
      issuer: "EC-Council",
      date: "2022",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      credentialUrl: "#",
      skills: ["Cybersecurity", "Penetration Testing", "Network Security"]
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-lemon-yellow/10 via-white to-bubble-pink/10 dark:from-yellow-900/20 dark:via-gray-900 dark:to-purple-900/20 polka-dots-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bubblegum text-5xl md:text-6xl font-bold bubble-text-gradient mb-6">
            My Certifications! 🏆
          </h2>
          <p className="font-comic text-xl text-gray-700 dark:text-gray-300">
            Here are my professional certifications and achievements! 📜
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-bubble-pink to-aqua-blue dark:from-purple-400 dark:to-blue-400 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={cert.title}
              className={`group card-hover bg-white dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-500 delay-${index * 100} relative`}
            >
              {/* Certificate Image - Hidden by default, shown on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <img 
                  src={cert.image} 
                  alt={`${cert.title} Certificate`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-3">
                    <Award className="w-8 h-8 text-bubble-pink dark:text-purple-400" />
                  </div>
                </div>
              </div>

              {/* Certificate Info - Visible by default */}
              <div className="group-hover:opacity-0 transition-opacity duration-300 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gradient-to-r from-bubble-pink to-aqua-blue dark:from-purple-500 dark:to-blue-500 rounded-full p-3">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-comic text-sm text-gray-500 dark:text-gray-400">{cert.date}</span>
                </div>

                <h3 className="font-bubblegum text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
                  {cert.title}
                </h3>
                <p className="font-comic text-bubble-pink dark:text-purple-400 font-bold mb-4">
                  {cert.issuer}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="bg-gradient-to-r from-lemon-yellow/20 to-bubble-pink/20 dark:from-yellow-500/20 dark:to-purple-500/20 rounded-full px-3 py-1 text-xs font-comic font-bold text-gray-700 dark:text-gray-300 border border-dashed border-bubble-pink/50 dark:border-purple-400/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <Button 
                  size="sm"
                  className="bounce-button bg-gradient-to-r from-bubble-pink to-aqua-blue dark:from-purple-600 dark:to-blue-600 hover:from-hot-pink hover:to-neon-green dark:hover:from-purple-700 dark:hover:to-blue-700 text-white font-comic rounded-full border-2 border-black dark:border-white text-xs w-full"
                >
                  <ExternalLink className="w-3 h-3 mr-1" />
                  View Certificate
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
