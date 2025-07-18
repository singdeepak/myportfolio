import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="p-5 bg-violet-100 flex justify-between items-center">
  <p className="uppercase text-2xl font-bold">Portfolio</p>

  <nav className="flex gap-3">
    <Link to="/" className="hover:text-violet-600 cursor-pointer">Home</Link>
    <Link to="/about" className="hover:text-violet-400 cursor-pointer">About</Link>
    <Link to="/skills" className="hover:text-violet-400 cursor-pointer">Skills</Link>
    <Link to="/projects" className="hover:text-violet-400 cursor-pointer">Projects</Link>
    <Link to="/contact" className="hover:text-violet-400 cursor-pointer">Contact</Link>
  </nav>
    </header>
  );
}

export default Navbar
