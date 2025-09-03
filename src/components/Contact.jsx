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
      { threshold: 0.3 }
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
    <section ref={sectionRef} className="py-20 bg-white relative overflow-hidden" id="contact">
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
      <div className="absolute top-0 left-0 w-1/3 h-full overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-50 to-transparent"
          style={{
            clipPath: 'polygon(0% 0%, 80% 0%, 40% 100%, 0% 100%)'
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gray-900 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how I can help bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
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
                      className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 outline-none ${
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
                    rows="5"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField('')}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 outline-none resize-none ${
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
                  type="submit"
                  disabled={status === 'sending'}
                  className="group w-full bg-gray-900 text-white py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-800 hover:transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
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
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-green-700 font-medium">Message sent successfully! I'll get back to you soon.</span>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className={`space-y-6 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            {/* Contact Methods */}
            {contactMethods.map((method, index) => (
              <div
                key={method.title}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ transitionDelay: `${index * 100 + 500}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-xl hover:bg-gray-900 hover:text-white transition-colors duration-300">
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{method.title}</h4>
                    <p className="text-gray-900 font-medium">{method.value}</p>
                    <p className="text-sm text-gray-600">{method.description}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="bg-gray-900 rounded-xl p-6 text-white">
              <h4 className="text-lg font-bold mb-4">Connect With Me</h4>
              <div className="space-y-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 hover:translate-x-2"
                  >
                    <span className="text-xl">{link.icon}</span>
                    <div>
                      <div className="font-medium">{link.name}</div>
                      <div className="text-sm text-gray-300">{link.description}</div>
                    </div>
                    <svg className="w-5 h-5 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-800 font-semibold">Currently Available</span>
              </div>
              <p className="text-green-700 text-sm">
                I'm actively taking on new projects and collaborations. 
                Response time is typically within 24 hours.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Whether you have a specific project in mind or just want to explore possibilities, 
              I'm here to help turn your vision into reality.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm">
                Web Development
              </span>
              <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm">
                UI/UX Design
              </span>
              <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm">
                Consulting
              </span>
              <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm">
                Maintenance
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}