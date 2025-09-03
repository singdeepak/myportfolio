import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section) => {
    console.log(`Navigate to ${section}`);
    // Replace with your navigation logic
  };

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30">
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
            transform: `translateY(${scrollY * 0.1}px)`,
            clipPath: 'polygon(60% 0%, 100% 0%, 100% 100%, 20% 100%)'
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Content Column */}
            <div className="space-y-8">
              {/* Professional Introduction */}
              <div className={`space-y-4 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  Available for new opportunities
                </div>
                
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Deepak Singh
                </h1>
                
                <div className="space-y-2">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-600">
                    Full-Stack Developer
                  </h2>
                  <div className="w-24 h-1 bg-gray-900 rounded-full"></div>
                </div>
              </div>

              {/* Description */}
              <div className={`space-y-6 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                  I specialize in building robust, scalable web applications using modern technologies. 
                  With expertise in React, Node.js, and cloud architecture, I help businesses transform 
                  their digital presence.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {['React', 'TypeScript', 'Node.js', 'AWS', 'MongoDB', 'Tailwind CSS'].map((tech, index) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                <button 
                  onClick={() => handleNavClick('projects')}
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-gray-800 hover:transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                >
                  <span className="mr-2">View My Work</span>
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                
                <button 
                  onClick={() => handleNavClick('contact')}
                  className="group inline-flex items-center justify-center px-8 py-4 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg transition-all duration-300 hover:bg-gray-900 hover:text-white hover:transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                >
                  <span className="mr-2">Get In Touch</span>
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>

              {/* Professional Links */}
              <div className={`flex items-center gap-6 pt-4 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                <span className="text-sm text-gray-500 font-medium">Find me on:</span>
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-gray-900 transition-colors duration-300 transform hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-gray-900 transition-colors duration-300 transform hover:scale-110"
                    aria-label="GitHub"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-gray-900 transition-colors duration-300 transform hover:scale-110"
                    aria-label="Email"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Visual Column */}
            <div className={`relative hidden lg:block transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
              <div className="relative">
                {/* Code Preview Window */}
                <div className="bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
                  {/* Window Header */}
                  <div className="flex items-center px-4 py-3 bg-gray-800">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex-1 text-center">
                      <span className="text-sm text-gray-400 font-mono">App.jsx</span>
                    </div>
                  </div>
                  
                  {/* Code Content */}
                  <div className="p-6 text-sm font-mono leading-relaxed">
                    <div className="text-purple-400">const</div>
                    <span className="text-blue-400 ml-2">developer</span>
                    <span className="text-white ml-2">=</span>
                    <span className="text-yellow-300 ml-2">{'{'}</span>
                    <br />
                    <span className="text-green-400 ml-4">name:</span>
                    <span className="text-orange-300 ml-2">'Deepak Singh'</span>
                    <span className="text-white">,</span>
                    <br />
                    <span className="text-green-400 ml-4">skills:</span>
                    <span className="text-blue-300 ml-2">['React', 'Node.js']</span>
                    <span className="text-white">,</span>
                    <br />
                    <span className="text-green-400 ml-4">passion:</span>
                    <span className="text-orange-300 ml-2">'Clean Code'</span>
                    <br />
                    <span className="text-yellow-300">{'}'}</span>
                  </div>
                </div>

                {/* Floating Stats */}
                <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-4 border">
                  <div className="text-2xl font-bold text-gray-900">2+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 border">
                  <div className="text-2xl font-bold text-gray-900">10+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col items-center text-gray-400">
            <span className="text-sm font-medium mb-2">Scroll</span>
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Clean Bottom Wave */}
      <div className="absolute bottom-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-12"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,60 L1200,80 L1200,120 L0,120 Z"
            fill="#f9fafb"
          />
        </svg>
      </div>
    </section>
  );
}