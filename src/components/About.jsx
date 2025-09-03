import React, { useState, useEffect } from 'react';

const ProfileImage = 'https://i.ibb.co/abcd123/profile.jpg';
const resume = '/path/to/resume.pdf';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'Laravel', level: 85, icon: '⚡' },
    { name: 'React', level: 90, icon: '⚛️' },
    { name: 'Tailwind CSS', level: 95, icon: '🎨' },
    { name: 'PHP', level: 80, icon: '🐘' },
    { name: 'Javascript', level: 88, icon: '📜' },
    { name: 'REST APIs', level: 85, icon: '🔗' },
    { name: 'GIT', level: 82, icon: '📂' },
    { name: 'Postman', level: 80, icon: '📮' }
  ];

  const experiences = [
    {
      title: 'Web Development Intern',
      duration: '2 months',
      technologies: ['PHP', 'Laravel', 'MySQL', 'React'],
      description: 'Developed full-stack web applications with focus on clean code and user experience.'
    }
  ];

  return (
    <section id="about-section" className="py-20 bg-gray-50 relative overflow-hidden">
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
      <div className="absolute top-0 left-0 w-1/4 h-full overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white to-transparent"
          style={{
            clipPath: 'polygon(0% 0%, 80% 0%, 40% 100%, 0% 100%)'
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Main About Content */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
          
          {/* Profile Image */}
          <div className={`flex-shrink-0 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-gray-200 to-gray-100 rounded-full blur-lg opacity-50"></div>
              <img
                src={ProfileImage}
                alt="Deepak Singh"
                className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-white shadow-2xl"
              />
              {/* Status Indicator */}
              <div className="absolute bottom-6 right-6 bg-green-500 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className={`max-w-2xl transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  About Me
                </h2>
                <div className="w-20 h-1 bg-gray-900 rounded-full mb-6"></div>
              </div>

              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  I'm a <span className="font-semibold text-gray-900">passionate Web Developer</span> dedicated to building 
                  efficient, engaging, and accessible web applications. With hands-on experience in modern web technologies, 
                  I enjoy transforming complex problems into intuitive digital solutions.
                </p>
                <p>
                  My expertise spans from <span className="font-semibold text-gray-900">frontend development</span> with 
                  React and Tailwind CSS to <span className="font-semibold text-gray-900">backend systems</span> using 
                  PHP and Laravel. I specialize in crafting pixel-perfect user interfaces, seamless API integrations, 
                  and performance-optimized applications.
                </p>
              </div>

              {/* Experience Highlight */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Recent Experience</h4>
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-gray-700">Web Development Intern</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">2 months</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Developed full-stack applications with PHP, Laravel, MySQL, and React, 
                  focusing on clean architecture and user experience.
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <a
                  href={resume}
                  download="Deepak-Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-gray-800 hover:transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                  <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Technical Expertise</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I work with modern technologies to deliver robust, scalable solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                onMouseEnter={() => setActiveSkill(index)}
                onMouseLeave={() => setActiveSkill(null)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-lg group-hover:bg-gray-900 group-hover:text-white transition-colors duration-300">
                      {skill.icon}
                    </div>
                    <span className="font-semibold text-gray-900">{skill.name}</span>
                  </div>
                  <span className="text-sm text-gray-500 font-medium">{skill.level}%</span>
                </div>
                
                {/* Skill Level Bar */}
                <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-full bg-gray-900 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: activeSkill === index ? `${skill.level}%` : '0%',
                      transitionDelay: activeSkill === index ? '200ms' : '0ms'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy/Values Section */}
        <div className={`mt-20 text-center transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">My Approach</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center text-white text-xl mx-auto">
                  🎯
                </div>
                <h4 className="font-semibold text-gray-900">Problem-Focused</h4>
                <p className="text-gray-600">I believe in understanding the problem deeply before crafting the solution.</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center text-white text-xl mx-auto">
                  🚀
                </div>
                <h4 className="font-semibold text-gray-900">Performance-Driven</h4>
                <p className="text-gray-600">Every line of code is written with performance and scalability in mind.</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center text-white text-xl mx-auto">
                  👥
                </div>
                <h4 className="font-semibold text-gray-900">User-Centric</h4>
                <p className="text-gray-600">The end user's experience is at the heart of every design decision.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Transition */}
      <div className="absolute bottom-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-12"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,60 L1200,80 L1200,120 L0,120 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}