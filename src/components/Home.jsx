import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen bg-violet-200 overflow-hidden">
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-gray-900 text-5xl sm:text-6xl font-bold mb-4">
          Hi, I’m Deepak Singh
        </h1>
        <p className="text-gray-800 text-lg sm:text-xl md:text-2xl mb-6 max-w-2xl">
          I build awesome web experiences with React & Tailwind.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/projects" className="group relative inline-block px-6 py-3 rounded-md">
            <div className="absolute inset-0 bg-white opacity-20 group-hover:opacity-30 transition duration-300 rounded-md"></div>
            <span className="relative text-gray-900 font-semibold">My Work</span>
          </Link>
          <Link to="/contact" className="px-6 py-3 bg-white text-gray-900 rounded-md hover:bg-gray-100 transition">
            Contact Me
          </Link>
        </div>
      </div>

      {/* Decorative bottom wave using SVG */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,0 C600,100 600,0 1200,100 L1200,120 L0,120 Z"
            fill="rgba(255,255,255,0.5)"
          />
        </svg>
      </div>
    </section>
  );
}
