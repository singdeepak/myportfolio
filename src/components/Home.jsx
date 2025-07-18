import React from 'react';
import hero1 from '../assets/hero-1.jpg';
import Projects  from '../components/Projects';
import Contact  from '../components/Contact';
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative bg-amber-300 overflow-hidden">
      <img
        src={hero1}
        alt="hero"
        className="w-full h-auto object-cover md:h-[calc(100vh-4rem)]"
      />

      {/* Overlay text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 p-4">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">
          Hi, I’m Deepak Singh
        </h1>
        <p className="text-white text-lg sm:text-xl md:text-2xl mb-6 text-center max-w-2xl">
          I build awesome web experiences with React & Tailwind.
        </p>
        <div className="flex space-x-4">
          <Link to="/projects">
            <button className="px-5 py-3 bg-violet-200 text-dark rounded hover:bg-violet-100 transition cursor-pointer">My Work</button>
          </Link>

          <Link to="/contact">
            <button className="px-5 py-3 bg-white text-gray-800 rounded cursor-pointer">Contact Me</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
