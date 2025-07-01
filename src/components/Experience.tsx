
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer Apprentice',
      company: 'Headstarter AI',
      location: 'Remote',
      period: 'July 2024 - September 2024',
      description: 'Lead frontend development for enterprise applications using React, JavaScript, and modern web technologies. Collaborated with cross-functional teams to deliver pixel-perfect user experiences.',
      achievements: [
      'Developed a landing page that increased user engagement',
      'Improved Communication with other teams',
      'Implemented responsive design systems'
      ]
    },
    {
      title: 'Teaching Assistant',
      company: 'UET Lahore',
      location: 'Lahore, Pakistan',
      period: 'sep,2024 - June,2025',
      description: 'Assisted students in understanding core programming concepts, debugging code, and improving problem-solving skills. Conducted lab sessions and provided one-on-one mentoring.',
      achievements: [
      'Provided guidance on Programming Fundamentals, Object-Oriented Programming (OOP) concepts.',
      'Helped students with debugging and code optimization.',
      'Organized coding workshops and study groups to enhance learning outcomes.',
      'Evaluated assignments, provided constructive feedback, and helped students improve their coding efficiency.'
      ]
    },
    {
      title: 'Game UI/UX Designer',
      company: 'UET Game Studio',
      location: 'Lahore, Pakistan',
      period: 'March,2025 - present',
      description: 'Developed user interfaces and experiences for web games, focusing on intuitive navigation and engaging visuals. Collaborated with game developers to ensure seamless integration of UI elements.',
      achievements: [
      'Designed and implemented UI for unity based web games',
      'Conducted user research and testing to improve gameplay experience',
      'Collaborated with artists to create visually appealing game assets'
      ]
    },
     {
      title: 'odoo Developer trainee',
      company: 'Ustadam',
      location: 'Lahore, Pakistan',
      period: 'May,2024 - June,2024',
      description: 'Assisted in the development of Odoo modules and customizations, focusing on enhancing user experience and functionality. Collaborated with senior developers to implement best practices in Odoo development.',
      achievements: [
      'Gained hands-on experience with Odoo framework and development environment',
      'Contributed to the customization of Odoo modules to meet client requirements',
      'Participated in code reviews and learned about Odoo best practices'
      ]
    },
    {
      title: 'Marketing Intern',
      company: 'Bayyinah TV',
      location: 'Remote',
      period: 'July,2025 - present',
      description: 'Currently interning with the marketing team to design and execute digital campaigns for educational content. Responsible for creating engaging graphics, managing social media posts, and analyzing campaign performance to optimize reach and engagement.',
      achievements: [
      'Designed promotional graphics and visual assets for digital campaigns',
      'Managed and scheduled social media content to increase audience engagement',
      'Analyzed campaign metrics and provided insights for optimization',
      'Collaborated with the team to brainstorm and implement creative marketing strategies'
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
