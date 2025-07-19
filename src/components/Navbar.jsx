import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

function Navbar() {
  const [navOpen, setNavOpen] = useState(false)

  useEffect(() => {
    // Prevent body scroll when nav is open
    document.body.classList.toggle('overflow-hidden', navOpen)
    return () => {
      document.body.classList.remove('overflow-hidden')
    }
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
      <header className="p-5 bg-violet-100 flex justify-between items-center fixed w-full top-0 z-50">
        <p className="uppercase text-2xl font-bold">Portfolio</p>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-3">
          {navItems.map(item => (
            <Link
              key={item.to}
              to={item.to}
              className="hover:text-violet-400 cursor-pointer"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger icon */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </header>

      {/* Mobile navigation */}
      <nav
        className={`fixed top-0 left-0 h-full w-[60%] bg-violet-50 p-5 transform transition-transform duration-300 md:hidden z-50
          ${navOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <ul className="flex flex-col gap-4 mt-16">
          {navItems.map(item => (
            <li key={item.to}>
              <Link
                to={item.to}
                onClick={() => setNavOpen(false)}
                className="text-lg hover:text-violet-600"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Navbar
