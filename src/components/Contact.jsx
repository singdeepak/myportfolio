import React, { useState, useEffect, useRef } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState('');
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    await new Promise(r => setTimeout(r, 2000));
    setStatus('success');
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus(''), 3000);
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'singhdeepak84088@gmail.com',
      description: 'Send me an email anytime',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+91 8655987616',
      description: 'Call me for immediate response',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Jaipur, India',
      description: 'Available for local meetings',
      color: 'from-purple-500 to-violet-600'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/singdeepak',
      icon: '💻',
      description: 'Check out my repositories'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/deepaksing/',
      icon: '💼',
      description: 'Let\'s connect professionally'
    }
  ];

  return (
    <section ref={sectionRef} className="py-12 mb-5 sm:py-16 lg:py-20 bg-white relative overflow-hidden" id="contact">
      {/* Background Pattern - Hidden on mobile for better performance */}
      <div className="absolute inset-0 opacity-20 hidden sm:block">
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

      {/* Geometric Accent - Adjusted for mobile */}
      <div className="absolute top-0 left-0 w-1/2 sm:w-1/3 h-full overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-50 to-transparent"
          style={{
            clipPath: 'polygon(0% 0%, 70% 0%, 30% 100%, 0% 100%)'
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 px-4">
            Get In Touch
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gray-900 rounded-full mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Ready to start your next project? Let's discuss how I can help bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Form */}
          <div className={`order-2 lg:order-1 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Send Message</h3>
              
              <div className="space-y-5 sm:space-y-6">
                {[
                  { name: 'name', type: 'text', placeholder: 'Your full name' },
                  { name: 'email', type: 'email', placeholder: 'your.email@example.com' },
                  { name: 'subject', type: 'text', placeholder: 'What\'s this about?' }
                ].map((field) => (
                  <div key={field.name} className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2 capitalize">
                      {field.name}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleChange}
                      onFocus={() => setFocusedField(field.name)}
                      onBlur={() => setFocusedField('')}
                      required
                      className={`w-full px-4 py-3 sm:py-4 rounded-lg border transition-all duration-300 outline-none text-base ${
                        focusedField === field.name
                          ? 'border-gray-900 shadow-sm bg-gray-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder={field.placeholder}
                    />
                    <div className={`absolute bottom-0 left-0 h-0.5 bg-gray-900 transition-all duration-300 ${
                      focusedField === field.name ? 'w-full' : 'w-0'
                    }`}></div>
                  </div>
                ))}

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField('')}
                    required
                    className={`w-full px-4 py-3 sm:py-4 rounded-lg border transition-all duration-300 outline-none resize-none text-base ${
                      focusedField === 'message'
                        ? 'border-gray-900 shadow-sm bg-gray-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    placeholder="Tell me about your project, ideas, or just say hello..."
                  />
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-gray-900 transition-all duration-300 ${
                    focusedField === 'message' ? 'w-full' : 'w-0'
                  }`}></div>
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={status === 'sending'}
                  className="group w-full bg-gray-900 text-white py-4 sm:py-5 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-800 hover:transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none text-base"
                >
                  {status === 'sending' ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Message...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      Send Message
                      <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </span>
                  )}
                </button>

                {status === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-start sm:items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5 sm:mt-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-green-700 font-medium text-sm sm:text-base">Message sent successfully! I'll get back to you soon.</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className={`order-1 lg:order-2 space-y-4 sm:space-y-6 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            {/* Contact Methods */}
            {contactMethods.map((method, index) => (
              <div
                key={method.title}
                className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ transitionDelay: `${index * 100 + 500}ms` }}
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-lg flex items-center justify-center text-lg sm:text-xl hover:bg-gray-900 hover:text-white transition-colors duration-300 flex-shrink-0">
                    {method.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-1">{method.title}</h4>
                    <p className="text-gray-900 font-medium text-sm sm:text-base break-all sm:break-normal">{method.value}</p>
                    <p className="text-xs sm:text-sm text-gray-600">{method.description}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="bg-gray-900 rounded-xl p-4 sm:p-6 text-white">
              <h4 className="text-base sm:text-lg font-bold mb-4">Connect With Me</h4>
              <div className="space-y-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 hover:translate-x-2"
                  >
                    <span className="text-lg sm:text-xl flex-shrink-0">{link.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm sm:text-base">{link.name}</div>
                      <div className="text-xs sm:text-sm text-gray-300">{link.description}</div>
                    </div>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-auto flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 sm:p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse flex-shrink-0"></div>
                <span className="text-green-800 font-semibold text-sm sm:text-base">Currently Available</span>
              </div>
              <p className="text-green-700 text-xs sm:text-sm">
                I'm actively taking on new projects and collaborations. 
                Response time is typically within 24 hours.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-12 sm:mt-16 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              Whether you have a specific project in mind or just want to explore possibilities, 
              I'm here to help turn your vision into reality.
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {['Web Development', 'UI/UX Design', 'Consulting', 'Maintenance'].map((skill) => (
                <span 
                  key={skill}
                  className="px-3 sm:px-4 py-2 bg-white rounded-full text-xs sm:text-sm font-medium text-gray-700 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}