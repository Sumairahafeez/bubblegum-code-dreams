
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Lead frontend development for enterprise applications using React, TypeScript, and modern web technologies. Collaborated with cross-functional teams to deliver pixel-perfect user experiences.',
      achievements: [
        'Improved application performance by 40%',
        'Led a team of 5 developers',
        'Implemented responsive design systems'
      ]
    },
    {
      title: 'AI/ML Engineer',
      company: 'DataMind Inc.',
      location: 'Austin, TX',
      period: '2020 - 2022',
      description: 'Developed machine learning models for predictive analytics and natural language processing. Built end-to-end ML pipelines using Python, TensorFlow, and cloud services.',
      achievements: [
        'Deployed 10+ ML models to production',
        'Reduced model training time by 60%',
        'Published 3 research papers'
      ]
    },
    {
      title: 'Junior Developer',
      company: 'StartupHub',
      location: 'Remote',
      period: '2019 - 2020',
      description: 'Full-stack development for startup projects. Worked with React, Node.js, and MongoDB to create scalable web applications.',
      achievements: [
        'Built 5 full-stack applications',
        'Improved code quality with testing',
        'Mentored 2 junior developers'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-aqua-blue/5 via-white to-bubble-pink/5 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bubblegum text-5xl md:text-6xl font-bold bubble-text-gradient mb-6">
            My Journey! 🚀
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-bubble-pink to-aqua-blue mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`card-hover bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-4 border-dashed border-bubble-pink/30 dark:border-purple-400/30 mb-8 transform hover:scale-105 transition-all duration-300 ${
                index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-bubble-pink to-aqua-blue rounded-full flex items-center justify-center">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h3 className="font-comic text-2xl font-bold text-bubble-pink dark:text-purple-300 mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Briefcase className="w-4 h-4 mr-2 text-aqua-blue" />
                      <span className="font-comic font-semibold">{exp.company}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <MapPin className="w-4 h-4 mr-2 text-hot-pink" />
                      <span className="font-comic">{exp.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Calendar className="w-4 h-4 mr-2 text-lemon-yellow" />
                      <span className="font-comic">{exp.period}</span>
                    </div>
                  </div>
                  
                  <p className="font-comic text-gray-700 dark:text-gray-200 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-comic font-bold text-hot-pink dark:text-pink-300 mb-2">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-bubble-pink mr-2">✨</span>
                          <span className="font-comic text-gray-700 dark:text-gray-200">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
