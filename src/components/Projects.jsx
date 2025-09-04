import React, { useState, useEffect, useRef } from 'react';

const projectList = [
  {
    title: 'Laravel Backend',
    description: 'A comprehensive backend web application for vehicle inspection management with robust API endpoints.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop',
    liveUrl: 'https://digitalauto-vahan.com/',
    repoUrl: 'https://github.com/singdeepak/Digital_Auto_Vahan',
    tech: ['Laravel', 'PHP', 'MySQL'],
    category: 'Backend',
    status: 'Live'
  },
  {
    title: 'Weather App',
    description: 'An intuitive weather application built with React, featuring real-time weather data and forecasts.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop',
    liveUrl: 'https://react-weather-app-psi-lilac.vercel.app/',
    repoUrl: 'https://github.com/singdeepak/React-Weather-App',
    tech: ['React', 'API', 'CSS'],
    category: 'Frontend',
    status: 'Live'
  },
  {
    title: 'Todo App',
    description: 'A sleek task management application for daily productivity, built with modern React patterns.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&h=300&fit=crop',
    liveUrl: 'https://todo-app-khaki-rho.vercel.app/',
    repoUrl: 'https://github.com/singdeepak/Todo-App',
    tech: ['React', 'JavaScript', 'CSS'],
    category: 'Frontend',
    status: 'Live'
  }
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedProjects, setAnimatedProjects] = useState(new Set());
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);
  const sectionRef = useRef(null);

  const categories = ['All', 'Frontend', 'Backend'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate projects one by one
          projectList.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedProjects(prev => new Set([...prev, index]));
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

  const filteredProjects = activeFilter === 'All' 
    ? projectList 
    : projectList.filter(project => project.category === activeFilter);

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 mt-9 lg:py-20 bg-gray-50 relative overflow-hidden" id="projects">
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
      <div className="absolute top-0 left-0 w-1/2 sm:w-1/3 h-full overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white to-transparent"
          style={{
            clipPath: 'polygon(0% 0%, 100% 0%, 60% 100%, 0% 100%)'
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header - Mobile Responsive */}
        <div className={`text-center mb-12 sm:mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Featured Projects
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gray-900 rounded-full mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            A showcase of my recent work, demonstrating technical expertise and creative problem-solving
          </p>
        </div>

        {/* Category Filter - Mobile Optimized */}
        <div className={`flex justify-center mb-8 sm:mb-12 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="inline-flex bg-white rounded-lg p-1 shadow-sm border border-gray-200 w-full max-w-sm sm:max-w-none sm:w-auto overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 sm:px-6 py-2 rounded-md font-medium transition-all duration-300 whitespace-nowrap text-sm sm:text-base ${
                  activeFilter === category
                    ? 'bg-gray-900 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid - Mobile First Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-3 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${index * 100 + 300}ms`,
              }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image - Mobile Responsive */}
              <div className="relative overflow-hidden h-40 sm:h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Status Badge - Mobile Responsive */}
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                  <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full mr-1 sm:mr-2 animate-pulse"></div>
                    {project.status}
                  </span>
                </div>

                {/* Overlay Actions - Mobile & Desktop */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex gap-3 sm:gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white/90 rounded-full text-gray-900 hover:bg-white transition-colors duration-200"
                      title="View Live"
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white/90 rounded-full text-gray-900 hover:bg-white transition-colors duration-200"
                      title="View Code"
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content - Mobile Responsive */}
              <div className="p-4 sm:p-6">
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full font-medium ${
                    project.category === 'Frontend' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'bg-green-100 text-green-700'
                  }`}>
                    {project.category}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-gray-700 transition-colors duration-200 line-clamp-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-3 sm:mb-4 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack - Mobile Responsive */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons - Mobile Optimized */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-gray-100">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 group/btn inline-flex items-center justify-center px-4 py-2.5 sm:py-2 bg-gray-900 text-white text-sm font-medium rounded-lg transition-all duration-200 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                  >
                    <span className="mr-2">Live Demo</span>
                    <svg className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sm:flex-shrink-0 inline-flex items-center justify-center px-4 py-2.5 sm:py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  >
                    <svg className="w-4 h-4 sm:mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span className="hidden sm:inline">Code</span>
                    <span className="sm:hidden">View Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Projects Stats - Mobile Responsive */}
        <div className={`mt-12 sm:mt-16 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div className="sm:border-r sm:border-gray-200 pb-4 sm:pb-0">
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                {projectList.length}
              </div>
              <div className="text-gray-600 text-sm sm:text-base">Projects Completed</div>
            </div>
            <div className="sm:border-r sm:border-gray-200 pb-4 sm:pb-0">
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                {new Set(projectList.flatMap(p => p.tech)).size}
              </div>
              <div className="text-gray-600 text-sm sm:text-base">Technologies Used</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                100%
              </div>
              <div className="text-gray-600 text-sm sm:text-base">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Call to Action - Mobile Responsive */}
        <div className={`text-center mt-8 sm:mt-12 transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 px-4">
            Interested in working together on your next project?
          </p>
          <button className="group inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-gray-800 hover:transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 text-sm sm:text-base">
            <span className="mr-2">Get In Touch</span>
            <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Custom CSS for line clamping */}
      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}