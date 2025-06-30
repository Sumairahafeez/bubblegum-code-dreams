
import { Heart, Calendar, MapPin, Users } from 'lucide-react';

const Volunteer = () => {
  const experiences = [
    {
      organization: "Girls Who Code",
      role: "Volunteer Instructor",
      duration: "2023 - Present",
      location: "Remote",
      description: "Teaching young girls programming fundamentals and inspiring them to pursue careers in tech.",
      impact: "Mentored 50+ students",
      skills: ["Teaching", "Mentoring", "JavaScript", "Python"],
      color: "from-bubble-pink to-hot-pink dark:from-purple-500 dark:to-pink-500"
    },
    {
      organization: "Code for Good",
      role: "Frontend Developer",
      duration: "2022 - 2023",
      location: "San Francisco, CA",
      description: "Developed responsive websites for local non-profits to increase their online presence and donations.",
      impact: "Built 8 websites",
      skills: ["React", "UI/UX Design", "Responsive Design"],
      color: "from-aqua-blue to-neon-green dark:from-blue-500 dark:to-green-500"
    },
    {
      organization: "Tech Women Network",
      role: "Workshop Facilitator",
      duration: "2022 - Present",
      location: "Bay Area, CA",
      description: "Organizing and facilitating AI/ML workshops for women transitioning into tech careers.",
      impact: "Trained 200+ women",
      skills: ["Machine Learning", "Public Speaking", "Curriculum Design"],
      color: "from-lemon-yellow to-bubble-pink dark:from-yellow-500 dark:to-purple-500"
    },
    {
      organization: "Local Animal Shelter",
      role: "Web Developer",
      duration: "2021 - 2022",
      location: "San Francisco, CA",
      description: "Created an adoption management system to streamline the pet adoption process.",
      impact: "Increased adoptions by 30%",
      skills: ["Full Stack Development", "Database Design", "User Research"],
      color: "from-hot-pink to-aqua-blue dark:from-pink-500 dark:to-blue-500"
    }
  ];

  return (
    <section id="volunteer" className="py-20 bg-gradient-to-br from-hot-pink/10 via-white to-aqua-blue/10 dark:from-pink-900/20 dark:via-gray-900 dark:to-blue-900/20 polka-dots-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bubblegum text-5xl md:text-6xl font-bold bubble-text-gradient mb-6">
            Volunteer Experience! 💝
          </h2>
          <p className="font-comic text-xl text-gray-700 dark:text-gray-300">
            Giving back to the community through tech! 🌟
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-hot-pink to-aqua-blue dark:from-pink-400 dark:to-blue-400 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={exp.organization}
              className={`card-hover bg-white dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl transform hover:scale-102 transition-all duration-500 delay-${index * 100}`}
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Icon and Organization */}
                <div className="flex-shrink-0">
                  <div className={`bg-gradient-to-r ${exp.color} rounded-full p-4 w-16 h-16 flex items-center justify-center`}>
                    <Heart className="w-8 h-8 text-white animate-pulse-glow" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="font-bubblegum text-2xl font-bold text-gray-800 dark:text-gray-200 mb-1">
                        {exp.role}
                      </h3>
                      <p className="font-comic text-lg text-bubble-pink dark:text-purple-400 font-bold mb-2">
                        {exp.organization}
                      </p>
                    </div>
                    <div className="flex flex-col md:items-end text-sm text-gray-600 dark:text-gray-400 font-comic">
                      <div className="flex items-center gap-1 mb-1">
                        <Calendar className="w-4 h-4" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="font-comic text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2 bg-gradient-to-r from-bubble-pink/20 to-aqua-blue/20 dark:from-purple-500/20 dark:to-blue-500/20 rounded-full px-4 py-2 border border-dashed border-bubble-pink/50 dark:border-purple-400/50">
                      <Users className="w-4 h-4 text-bubble-pink dark:text-purple-400" />
                      <span className="font-comic font-bold text-gray-700 dark:text-gray-300 text-sm">
                        {exp.impact}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="bg-gradient-to-r from-lemon-yellow/20 to-bubble-pink/20 dark:from-yellow-500/20 dark:to-purple-500/20 rounded-full px-3 py-1 text-xs font-comic font-bold text-gray-700 dark:text-gray-300 border border-dashed border-bubble-pink/50 dark:border-purple-400/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="card-hover bg-white dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl inline-block">
            <h3 className="font-comic text-2xl font-bold bubble-text-gradient mb-4">
              Want to volunteer together? 🤝
            </h3>
            <p className="font-comic text-gray-700 dark:text-gray-300 mb-6">
              I'm always looking for new opportunities to give back to the tech community!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bounce-button bg-gradient-to-r from-bubble-pink to-hot-pink dark:from-purple-600 dark:to-pink-600 hover:from-hot-pink hover:to-bubble-pink dark:hover:from-purple-700 dark:hover:to-pink-700 text-white font-comic text-lg px-6 py-3 rounded-full border-4 border-black dark:border-white shadow-lg">
                <Heart className="w-5 h-5 mr-2 inline" />
                Let's Collaborate!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;
