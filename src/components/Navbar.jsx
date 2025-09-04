import React, { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const containerRef = useRef(null)

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      setScrolled(isScrolled)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Detect clicks outside of the menu/button container
  useEffect(() => {
    const handleClickOutside = e => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setNavOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', navOpen)
    return () => document.body.classList.remove('overflow-hidden')
  }, [navOpen])

  const navItems = [
    { to: '/', label: 'Home', id: 'home' },
    { to: '/about', label: 'About', id: 'about' },
    { to: '/skills', label: 'Skills', id: 'skills' },
    { to: '/projects', label: 'Projects', id: 'projects' },
    { to: '/contact', label: 'Contact', id: 'contact' },
  ]

  return (
    <>
      {/* Background overlay for mobile menu */}
      {navOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
          onClick={() => setNavOpen(false)}
        />
      )}

      {/* Navbar container */}
      <div ref={containerRef}>
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
            : 'bg-white/70 backdrop-blur-sm'
        }`}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-between h-16">
              
              {/* Logo */}
              <div className="flex items-center">
                <div className="relative">
                  <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
                    Portfolio
                  </h1>
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-gray-900 to-gray-600 rounded-full"></div>
                </div>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-1">
                {navItems.map((item, index) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `relative px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-gray-100 group ${
                        isActive 
                          ? 'text-gray-900 bg-gray-100' 
                          : 'text-gray-600 hover:text-gray-900'
                      }`
                    }
                  >
                    <span className="relative z-10">{item.label}</span>
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gray-900 rounded-lg opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                    {/* Active indicator */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gray-900 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </NavLink>
                ))}
              </nav>

              {/* CTA Button (Desktop) */}
              <div className="hidden md:block">
                <NavLink
                  to="/contact"
                  className="group inline-flex items-center px-6 py-2.5 bg-gray-900 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-gray-800 hover:transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                >
                  <span className="mr-2">Let's Talk</span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </NavLink>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                className={`md:hidden relative w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  navOpen 
                    ? 'bg-gray-900 text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setNavOpen(prev => !prev)}
                aria-label="Toggle navigation menu"
              >
                <div className="relative w-5 h-5">
                  <AiOutlineMenu className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
                    navOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                  }`} />
                  <AiOutlineClose className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
                    navOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                  }`} />
                </div>
              </button>
            </div>
          </div>
        </header>

        {/* Mobile Sidebar Menu */}
        <nav className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 md:hidden transform transition-all duration-300 ease-in-out ${
          navOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Navigation</h2>
            <button
              onClick={() => setNavOpen(false)}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors duration-200"
            >
              <AiOutlineClose className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="p-6">
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <li key={item.to} style={{ animationDelay: `${index * 50}ms` }} className={`${navOpen ? 'animate-fade-in-up' : ''}`}>
                  <NavLink
                    to={item.to}
                    onClick={() => setNavOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center px-4 py-3 rounded-xl font-medium transition-all duration-200 group ${
                        isActive 
                          ? 'bg-gray-900 text-white shadow-sm' 
                          : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                      }`
                    }
                  >
                    <span className="flex-1">{item.label}</span>
                    <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Mobile CTA */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <NavLink
                to="/contact"
                onClick={() => setNavOpen(false)}
                className="group w-full flex items-center justify-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-gray-800 hover:transform hover:scale-105"
              >
                <span className="mr-2">Start a Project</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </NavLink>
            </div>

            {/* Contact Info in Mobile Menu */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm font-medium text-gray-900 mb-3">Get in touch</p>
              <div className="space-y-2">
                <a 
                  href="mailto:singhdeepak84088@gmail.com" 
                  className="flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  <span className="mr-2">📧</span>
                  singhdeepak84088@gmail.com
                </a>
                <a 
                  href="tel:+918655453456" 
                  className="flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  <span className="mr-2">📱</span>
                  +91 8655453456
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.3s ease-out forwards;
        }
      `}</style>
    </>
  )
}