import React from 'react';
import ProfileImage from '../assets/profile.jpg';
import resume from "../assets/Deepak-Resume.pdf";

export default function About() {
  return (
    <section className="py-16 bg-violet-100">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center gap-10">
        
        <div className="flex-shrink-0">
          <img
            src={ProfileImage} 
            alt="Deepak Singh"
            className="w-48 h-48 rounded-full object-cover border-4 border-violet-300 mx-auto lg:mx-0"
          />
        </div>

        <div className="max-w-xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Hello, I’m Deepak Singh
          </h2>
          <p className="text-gray-600 mb-4">
            I'm a <strong>Web Developer</strong> passionate about building efficient and engaging web applications. With 2 months of internship experience in PHP, Laravel, Mysql,  React, Tailwind CSS, and responsive design, I enjoy turning complex problems into intuitive and accessible solutions.
          </p>
          <p className="text-gray-600 mb-6">
            I specialize in crafting pixel-perfect UIs, integrating APIs, and backend logic with optimizing performance.
          </p>
          <a
            href={resume}
            download="Deepak-Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-6 py-3 bg-violet-300 text-dark rounded-lg shadow hover:bg-violet-400 transition"
          >
            Download Resume
          </a>


        </div>
      </div>

      <div className="mt-16 container mx-auto px-6 lg:px-20">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">My Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {['Laravel', 'React', 'Tailwind CSS', 'PHP', 'Javascript', 'REST APIs', 'GIT', 'Postman'].map((skill) => (
            <div key={skill} className="flex items-center space-x-2 bg-white p-4 rounded-lg shadow">
              <span className="w-6 h-6 bg-violet-200 rounded-full flex items-center justify-center text-violet-500 font-semibold">
                {skill[0]}
              </span>
              <span className="text-gray-700">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
