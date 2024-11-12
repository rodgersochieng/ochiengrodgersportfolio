// import React from "react";
// import { FaGithub } from "react-icons/fa";

// function Projects() {
//   return (
//     <section className="text-center my-8">
//       <h2 className="text-2xl font-bold">Check My GitHub for Projects</h2>
//       <div className="flex justify-center space-x-4 mt-4">
//         <FaGithub className="text-3xl" />
//         <FaGithub className="text-3xl" />
//         <FaGithub className="text-3xl" />
//       </div>
//     </section>
//   );
// }

// export default Projects;

import React from "react";

const projects = [
  {
    name: 'Project One',
    description: 'This project is a web application that helps users track their tasks efficiently. Built with React and Node.js, it offers a clean and intuitive interface.',
    features: ['Task Management', 'User Authentication', 'Responsive Design'],
    github: 'https://github.com/username/project-one',
    live: 'https://project-one-live-link.com',
    image: 'project-one.png', // Replace with actual image paths
  },
  {
    name: 'Project One',
    description: 'This project is a web application that helps users track their tasks efficiently. Built with React and Node.js, it offers a clean and intuitive interface.',
    features: ['Task Management', 'User Authentication', 'Responsive Design'],
    github: 'https://github.com/username/project-one',
    live: 'https://project-one-live-link.com',
    image: 'project-one.png', // Replace with actual image paths
  },
  {
    name: 'Project Two',
    description: 'An e-commerce platform that provides seamless shopping experiences. It includes product listings, user reviews, and a secure checkout process.',
    features: ['Product Listings', 'User Reviews', 'Secure Checkout'],
    github: 'https://github.com/username/project-two',
    live: 'https://project-two-live-link.com',
    image: 'project-two.png', // Replace with actual image paths
  },
  // Add more projects here
];

function Projects() {
  return (
    <section className="text-center my-8">
      <h2 className="text-3xl font-bold mb-6">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="rounded-lg overflow-hidden">
            <img src={project.image} alt={`${project.name} screenshot`} className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="mb-4">
                <h4 className="font-semibold">Features:</h4>
                <ul className="list-disc list-inside text-left">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="flex space-x-4">
                <a href={project.github} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={project.live} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
