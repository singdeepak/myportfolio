import React from 'react';

export default function ProjectCard({ title, description, image, liveUrl, repoUrl }) {
  return (
    <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="space-x-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-violet-300 text-black rounded hover:bg-violet-400 transition cursor-pointer"
            >
              Live Demo
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 border border-violet-300 text-violet-400 rounded hover:bg-violet-50 transition cursor-pointer"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
