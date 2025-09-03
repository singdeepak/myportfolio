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
            }, index * 200);
          });
        }
      },
      { threshold: 0.3 }
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
    <section ref={sectionRef} className="py-20 bg-white relative overflow-hidden" id="skills">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, rgba(0,0,0,0.02) 1px, transparent 0)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Geometric Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full overflow-hidden">
        <div 
          className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-gray-50 to-transparent"
          style={{
            clipPath: 'polygon(60% 0%, 100% 0%, 100% 100%, 20% 100%)'
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gray-900 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex justify-center mb-12 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
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

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className={`bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${index * 100 + 300}ms`,
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Skill Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-xl hover:bg-gray-900 hover:text-white transition-colors duration-300">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{skill.name}</h3>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      skill.category === 'Frontend' 
                        ? 'bg-blue-100 text-blue-700' 
                        : 'bg-green-100 text-green-700'
                    }`}>
                      {skill.category}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">{skill.level}%</div>
                  <div className={`text-sm font-medium ${
                    skill.level >= 90 ? 'text-green-600' :
                    skill.level >= 80 ? 'text-blue-600' :
                    skill.level >= 70 ? 'text-purple-600' : 'text-orange-600'
                  }`}>
                    {getSkillRating(skill.level)}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-4 text-sm">{skill.description}</p>

              {/* Progress Bar */}
              <div className="relative">
                <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${getSkillColor(skill.level)} rounded-full transition-all duration-1000 ease-out`}
                    style={{ 
                      width: animatedSkills.has(skills.indexOf(skill)) ? `${skill.level}%` : '0%'
                    }}
                  >
                    <div className="h-full w-full bg-white bg-opacity-20 rounded-full"></div>
                  </div>
                </div>
                
                {/* Progress Indicator */}
                {animatedSkills.has(skills.indexOf(skill)) && (
                  <div 
                    className="absolute top-0 w-3 h-3 bg-white border-2 border-gray-900 rounded-full shadow-lg transition-all duration-1000 ease-out transform -translate-y-1"
                    style={{ left: `calc(${skill.level}% - 6px)` }}
                  />
                )}
              </div>

              {/* Skill Level Indicator */}
              <div className="flex justify-between items-center mt-3 text-xs text-gray-500">
                <span>Beginner</span>
                <span>Intermediate</span>
                <span>Expert</span>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className={`mt-16 bg-gray-900 rounded-2xl p-8 text-white transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">
                {skills.filter(skill => skill.category === 'Frontend').length}
              </div>
              <div className="text-gray-300">Frontend Technologies</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">
                {skills.filter(skill => skill.category === 'Backend').length}
              </div>
              <div className="text-gray-300">Backend Technologies</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">
                {Math.round(skills.reduce((sum, skill) => sum + skill.level, 0) / skills.length)}%
              </div>
              <div className="text-gray-300">Average Proficiency</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-12 transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <p className="text-lg text-gray-600 mb-6">
            Ready to work with these technologies on your next project?
          </p>
          <button className="group inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-gray-800 hover:transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
            <span className="mr-2">Let's Collaborate</span>
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}