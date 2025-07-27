import React from 'react';
import ProjectCard from '../components/ProjectCard';
import proj1 from '../assets/laravel.png';
import proj2 from '../assets/todo.png';
import proj3 from '../assets/weather.jpg';

const projectList = [
  {
    title: 'Laravel Backend',
    description: 'A backend web app to inspection of vehicles.',
    image: proj1,
    liveUrl: 'https://digitalauto-vahan.com/',
    repoUrl: 'https://github.com/singdeepak/Digital_Auto_Vahan'
  },
  {
    title: 'Weather App',
    description: 'A web app to know weather built with React.',
    image: proj2,
    liveUrl: 'https://react-weather-app-psi-lilac.vercel.app/',
    repoUrl: 'https://github.com/singdeepak/React-Weather-App'
  },
  {
    title: 'Todo App',
    description: 'A web app for daily task built with React.',
    image: proj3,
    liveUrl: 'https://todo-app-khaki-rho.vercel.app/',
    repoUrl: 'https://github.com/singdeepak/Todo-App'
  }
];

export default function Projects() {
  return (
    <section className="py-16 bg-violet-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((proj) => (
            <ProjectCard key={proj.title} {...proj} />
          ))}
        </div>
      </div>
    </section>
  );
}
