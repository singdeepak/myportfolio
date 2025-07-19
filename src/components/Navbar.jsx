import React, { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false)
  const containerRef = useRef(null)

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
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/skills', label: 'Skills' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <>
      {/* Navbar container wraps both button + mobile menu */}
      <div ref={containerRef}>
        <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
          <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <p className="uppercase text-2xl font-bold">Portfolio</p>

            {/* Desktop Links */}
            <nav className="hidden md:flex gap-8">
              {navItems.map(item => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `transition-colors duration-200 ${
                      isActive ? 'text-violet-600' : 'text-gray-700 hover:text-violet-400'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Mobile Toggle Button */}
            <button
              className="md:hidden text-3xl p-2 z-50"
              onClick={() => setNavOpen(o => !o)}
              aria-label="Toggle navigation menu"
            >
              {navOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
          </div>
        </header>

        {/* Mobile Sidebar Menu */}
        <nav
          className={`fixed top-0 left-0 h-full w-2/3 max-w-xs bg-violet-50/90 backdrop-blur-md p-6
                       transform transition-transform duration-300 z-40 md:hidden
                       ${navOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <ul className="flex flex-col gap-6 mt-16">
            {navItems.map(item => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={() => setNavOpen(false)}
                  className={({ isActive }) =>
                    `text-lg transition-colors duration-200 ${
                      isActive ? 'text-violet-600' : 'text-gray-700 hover:text-violet-600'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}
