
import React from "react";
import kihara from '../avatar/kihara.png'
import autodream from '../avatar/autodream.png'
import arika from '../avatar/arika.png'



const projects = [
  {
    name: 'Kihara Secondary',
    description: 'A comprehensive school website for Kihara Secondary School, providing students, parents, and staff with up-to-date information and resources. The site features a news section, event calendar, and student portal for accessing grades and assignments.',
    features: ['News Section', 'Event Calendar', 'Student Portal', 'Responsive Design'],
    github: 'https://github.com/rodgersochieng/kihara-secondary',
    live: 'https://kiharasecondary.vercel.app/',
    image: kihara
  },
  {
    name: 'Travel Booking Website',
    description: 'A dynamic travel booking website that allows users to search, book, and manage their travel itineraries. Built with modern web technologies, it provides a seamless and intuitive user experience for finding flights, hotels, and rental cars.',
    features: ['Flight Search', 'Hotel Booking', 'Rental Car Reservations', 'User Reviews', 'Responsive Design'],
    github: 'https://github.com/rodgersochieng/arika-le-travel',
    live: 'https://arika-le-travel.vercel.app/',
    image: arika
  },
  {
    name: 'Car Dealership Website',
    description: 'An advanced car dealership website offering a platform for users to browse, compare, and purchase vehicles. It includes features such as vehicle listings, detailed car specifications, customer reviews, and a contact form for inquiries.',
    features: ['Vehicle Listings', 'Detailed Car Specifications', 'Customer Reviews', 'Contact Form', 'Responsive Design'],
    github: 'https://github.com/rodgersochieng/autodream-dealers',
    live: 'https://autodream-dealers.vercel.app/',
    image: autodream 
  },
];

function Projects() {
  return (
    <section className="text-center my-8">
      <h2 className="text-3xl font-bold mb-6">Some Starter Projects</h2>
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
