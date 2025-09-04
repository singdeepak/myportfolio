import React, { useState, useEffect, useRef } from 'react';

const skills = [
  { name: 'HTML', level: 95, category: 'Frontend', icon: '🏗️', description: 'Semantic markup & accessibility' },
  { name: 'CSS', level: 90, category: 'Frontend', icon: '🎨', description: 'Modern layouts & animations' },
  { name: 'JavaScript', level: 85, category: 'Frontend', icon: '⚡', description: 'ES6+ & DOM manipulation' },
  { name: 'React', level: 70, category: 'Frontend', icon: '⚛️', description: 'Component-based architecture' },
  { name: 'Tailwind CSS', level: 75, category: 'Frontend', icon: '🌊', description: 'Utility-first styling' },
  { name: 'PHP', level: 80, category: 'Backend', icon: '🐘', description: 'Server-side development' },
  { name: 'Laravel', level: 60, category: 'Backend', icon: '🔧', description: 'MVC framework & APIs' },
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState(new Set());
  const [activeCategory, setActiveCategory] = useState('All');
  const sectionRef = useRef(null);

  const categories = ['All', 'Frontend', 'Backend'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skills one by one
          skills.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedSkills(prev => new Set([...prev, index]));
            }, index * 150);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const getSkillColor = (level) => {
    if (level >= 90) return 'from-green-500 to-emerald-600';
    if (level >= 80) return 'from-blue-500 to-cyan-600';
    if (level >= 70) return 'from-purple-500 to-violet-600';
    return 'from-orange-500 to-red-500';
  };

  const getSkillRating = (level) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Intermediate';
    return 'Learning';
  };

  return (
    <section ref={sectionRef} className="py-12 mb-5 sm:py-16 lg:py-20 bg-white relative overflow-hidden" id="skills">
      {/* Background Pattern - Mobile Optimized */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, rgba(0,0,0,0.02) 1px, transparent 0)
            `,
            backgroundSize: '30px 30px'
          }}
        />
      </div>

      {/* Geometric Accent - Mobile Responsive */}
      <div className="absolute top-0 right-0 w-1/2 sm:w-1/3 h-full overflow-hidden">
        <div 
          className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-gray-50 to-transparent"
          style={{
            clipPath: 'polygon(40% 0%, 100% 0%, 100% 100%, 0% 100%)'
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header - Mobile Responsive */}
        <div className={`text-center mb-12 sm:mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Technical Skills
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gray-900 rounded-full mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        {/* Category Filter - Mobile Optimized */}
        <div className={`flex justify-center mb-8 sm:mb-12 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="inline-flex bg-gray-100 rounded-lg p-1 w-full max-w-sm sm:max-w-none sm:w-auto overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 sm:px-6 py-2 rounded-md font-medium transition-all duration-300 whitespace-nowrap text-sm sm:text-base ${
                  activeCategory === category
                    ? 'bg-gray-900 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid - Mobile First Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className={`bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${index * 100 + 300}ms`,
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Skill Header - Mobile Layout */}
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-lg flex items-center justify-center text-lg sm:text-xl hover:bg-gray-900 hover:text-white transition-colors duration-300 flex-shrink-0">
                    {skill.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 truncate">{skill.name}</h3>
                    <span className={`inline-block text-xs sm:text-sm px-2 py-1 rounded-full mt-1 ${
                      skill.category === 'Frontend' 
                        ? 'bg-blue-100 text-blue-700' 
                        : 'bg-green-100 text-green-700'
                    }`}>
                      {skill.category}
                    </span>
                  </div>
                </div>
                <div className="text-right flex-shrink-0 ml-2">
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">{skill.level}%</div>
                  <div className={`text-xs sm:text-sm font-medium ${
                    skill.level >= 90 ? 'text-green-600' :
                    skill.level >= 80 ? 'text-blue-600' :
                    skill.level >= 70 ? 'text-purple-600' : 'text-orange-600'
                  }`}>
                    {getSkillRating(skill.level)}
                  </div>
                </div>
              </div>

              {/* Description - Mobile Friendly */}
              <p className="text-gray-600 mb-3 sm:mb-4 text-sm leading-relaxed">{skill.description}</p>

              {/* Progress Bar - Mobile Responsive */}
              <div className="relative">
                <div className="w-full bg-gray-100 rounded-full h-2.5 sm:h-3 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${getSkillColor(skill.level)} rounded-full transition-all duration-1000 ease-out relative`}
                    style={{ 
                      width: animatedSkills.has(skills.indexOf(skill)) ? `${skill.level}%` : '0%'
                    }}
                  >
                    <div className="h-full w-full bg-white bg-opacity-20 rounded-full"></div>
                  </div>
                </div>
                
                {/* Progress Indicator - Mobile Adjusted */}
                {animatedSkills.has(skills.indexOf(skill)) && (
                  <div 
                    className="absolute top-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white border-2 border-gray-900 rounded-full shadow-lg transition-all duration-1000 ease-out transform -translate-y-0.5 sm:-translate-y-1"
                    style={{ left: `calc(${skill.level}% - 5px)` }}
                  />
                )}
              </div>

              {/* Skill Level Indicator - Mobile Responsive */}
              <div className="flex justify-between items-center mt-2 sm:mt-3 text-xs text-gray-500">
                <span>Beginner</span>
                <span className="hidden sm:inline">Intermediate</span>
                <span className="sm:hidden">Inter.</span>
                <span>Expert</span>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary - Mobile Responsive */}
        <div className={`mt-12 sm:mt-16 bg-gray-900 rounded-2xl p-6 sm:p-8 text-white transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div className="sm:border-r sm:border-gray-700 pb-4 sm:pb-0">
              <div className="text-2xl sm:text-3xl font-bold mb-2">
                {skills.filter(skill => skill.category === 'Frontend').length}
              </div>
              <div className="text-gray-300 text-sm sm:text-base">Frontend Technologies</div>
            </div>
            <div className="sm:border-r sm:border-gray-700 pb-4 sm:pb-0">
              <div className="text-2xl sm:text-3xl font-bold mb-2">
                {skills.filter(skill => skill.category === 'Backend').length}
              </div>
              <div className="text-gray-300 text-sm sm:text-base">Backend Technologies</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold mb-2">
                {Math.round(skills.reduce((sum, skill) => sum + skill.level, 0) / skills.length)}%
              </div>
              <div className="text-gray-300 text-sm sm:text-base">Average Proficiency</div>
            </div>
          </div>
        </div>

        {/* Call to Action - Mobile Responsive */}
        <div className={`text-center mt-8 sm:mt-12 transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 px-4">
            Ready to work with these technologies on your next project?
          </p>
          <button className="group inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-gray-800 hover:transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 text-sm sm:text-base">
            <span className="mr-2">Let's Collaborate</span>
            <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}