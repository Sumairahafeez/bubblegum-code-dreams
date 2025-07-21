
import { Heart, Calendar, MapPin, Users, OrigamiIcon } from 'lucide-react';

const Volunteer = () => {
  const experiences = [
    {
      organization: "Bayyinah TV",
      role: "Marketing Intern",
      duration: "July-2025 - present",
      location: "Remote",
      description: "Currently interning with the marketing team to design and execute digital campaigns for educational content. Responsible for creating engaging graphics, managing social media posts, and analyzing campaign performance to optimize reach and engagement.",
      impact: "Designed promotional graphics and visual assets for digital campaigns",
      skills: ["Graphic Design", "Social Media Management", "Data Analysis","Subtitles"],
      color: "from-bubble-pink to-hot-pink dark:from-purple-500 dark:to-pink-500"
    },
    {
      organization: "UET Lahore",
      role: "Teaching Assistant",
      duration: "2023 - 2024",
      location: "Lahore, Pakistan",
      description: "Assisted students in understanding core programming concepts, debugging code, and improving problem-solving skills. Conducted lab sessions and provided one-on-one mentoring.",
      impact: "Provided guidance on Programming Fundamentals, Object-Oriented Programming (OOP) concepts.",
      skills: ["Programming", "Mentoring", "Debugging","Leadership"],
      color: "from-aqua-blue to-neon-green dark:from-blue-500 dark:to-green-500"
    },
    {
      organization: "UET XNEWS",
      role: "Photographer",
      duration: "2023 - present",
      location: "Lahore, Pakistan",
      description: "Capturing and editing high-quality images for university events, news articles, and social media. Collaborating with the editorial team to create visually compelling stories.",
      impact: "Contributed to the visual storytelling of university events and news, enhancing the overall engagement of the university community.",
      skills: ["Photography", "Photo Editing", "Visual Storytelling"],
      color: "from-lemon-yellow to-bubble-pink dark:from-yellow-500 dark:to-purple-500"
    }
    // {
    //   organization: "Code for Good",
    //   role: "Frontend Developer",
    //   duration: "2022 - 2023",
    //   location: "San Francisco, CA",
    //   description: "Developed responsive websites for local non-profits to increase their online presence and donations.",
    //   impact: "Built 8 websites",
    //   skills: ["React", "UI/UX Design", "Responsive Design"],
    //   color: "from-aqua-blue to-neon-green dark:from-blue-500 dark:to-green-500"
    // },
    // {
    //   organization: "Tech Women Network",
    //   role: "Workshop Facilitator",
    //   duration: "2022 - Present",
    //   location: "Bay Area, CA",
    //   description: "Organizing and facilitating AI/ML workshops for women transitioning into tech careers.",
    //   impact: "Trained 200+ women",
    //   skills: ["Machine Learning", "Public Speaking", "Curriculum Design"],
    //   color: "from-lemon-yellow to-bubble-pink dark:from-yellow-500 dark:to-purple-500"
    // },
    // {
    //   organization: "Local Animal Shelter",
    //   role: "Web Developer",
    //   duration: "2021 - 2022",
    //   location: "San Francisco, CA",
    //   description: "Created an adoption management system to streamline the pet adoption process.",
    //   impact: "Increased adoptions by 30%",
    //   skills: ["Full Stack Development", "Database Design", "User Research"],
    //   color: "from-hot-pink to-aqua-blue dark:from-pink-500 dark:to-blue-500"
    // }
  ];

  return (
    <section id="volunteer" className="py-20 bg-gradient-to-br from-hot-pink/10 via-white to-aqua-blue/10 dark:from-pink-900/20 dark:via-gray-900 dark:to-blue-900/20 polka-dots-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-bubblegum text-4xl md:text-5xl font-bold bubble-text-gradient mb-4">
            Volunteer Experience! 💝
          </h2>
          <p className="font-comic text-lg text-gray-700 dark:text-gray-300 opacity-0 hover:opacity-100 transition-opacity duration-300">
            Giving back to the community through tech! 🌟
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-hot-pink to-aqua-blue dark:from-pink-400 dark:to-blue-400 mx-auto rounded-full mt-3"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <div 
              key={exp.organization}
              className={`group card-hover bg-white dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer border border-gray-200/50 dark:border-gray-700/50`}
            >
              {/* Header */}
              <div className="flex items-start gap-3 mb-4">
                <div className={`bg-gradient-to-r ${exp.color} rounded-xl p-2 flex-shrink-0`}>
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bubblegum text-lg font-bold text-gray-800 dark:text-gray-200 truncate">
                    {exp.role}
                  </h3>
                  <p className="font-comic text-sm text-bubble-pink dark:text-purple-400 font-bold truncate">
                    {exp.organization}
                  </p>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-2 mb-4 text-xs text-gray-600 dark:text-gray-400 font-comic">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span className="truncate">{exp.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  <span className="truncate">{exp.location}</span>
                </div>
              </div>

              {/* Description - Hidden by default, shown on hover */}
              <p className="font-comic text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-3">
                {exp.description}
              </p>

              {/* Impact */}
              <div className="mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center gap-2 bg-gradient-to-r from-bubble-pink/20 to-aqua-blue/20 dark:from-purple-500/20 dark:to-blue-500/20 rounded-lg px-3 py-1.5 border border-dashed border-bubble-pink/50 dark:border-purple-400/50">
                  <Users className="w-3 h-3 text-bubble-pink dark:text-purple-400" />
                  <span className="font-comic font-bold text-gray-700 dark:text-gray-300 text-xs truncate">
                    {exp.impact}
                  </span>
                </div>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-1">
                {exp.skills.slice(0, 3).map((skill) => (
                  <span 
                    key={skill}
                    className="bg-gradient-to-r from-lemon-yellow/20 to-bubble-pink/20 dark:from-yellow-500/20 dark:to-purple-500/20 rounded-full px-2 py-1 text-xs font-comic font-bold text-gray-700 dark:text-gray-300 border border-dashed border-bubble-pink/50 dark:border-purple-400/50"
                  >
                    {skill}
                  </span>
                ))}
                {exp.skills.length > 3 && (
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-comic px-2 py-1">
                    +{exp.skills.length - 3}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="group card-hover bg-white dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg inline-block cursor-pointer">
            <h3 className="font-comic text-xl font-bold bubble-text-gradient mb-3">
              Want to volunteer together? 🤝
            </h3>
            <p className="font-comic text-gray-700 dark:text-gray-300 mb-4 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              I'm always looking for new opportunities to give back to the tech community!
            </p>
            <button className="bounce-button bg-gradient-to-r from-bubble-pink to-hot-pink dark:from-purple-600 dark:to-pink-600 hover:from-hot-pink hover:to-bubble-pink dark:hover:from-purple-700 dark:hover:to-pink-700 text-white font-comic text-sm px-5 py-2.5 rounded-full border-2 border-black/20 dark:border-white/20 shadow-md transition-all duration-300" onClick={() => window.open('https://www.linkedin.com/in/sumaira-hafeez-9974a6290/', '_blank')}>
              <Heart className="w-4 h-4 mr-2 inline" />
              Let's Collaborate!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;
