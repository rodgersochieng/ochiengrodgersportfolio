import React, { useState } from "react";
import avatar from '../avatar/avatar2.png';

function AboutAndContact() {
  const [notification, setNotification] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement the email sending logic here, e.g., using an email API service like EmailJS
    setNotification('This is my safe space haha. I can’t allow roasting 😂😂.');
    setTimeout(() => {
      setNotification('');
    }, 5000);

    // Reset the form
    e.target.reset();
  };

  return (
    <section className="my-8 p-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <div className="text-left max-w-prose mx-auto mb-12">
          <p className="mb-4">
          I have honed my expertise through a combination of rigorous programs and hands-on experiences designed to develop a comprehensive understanding of both business and technology. As a graduate of the McKinsey Forward Program, I’ve gained critical thinking and problem-solving strategies tailored for the future of business, with a focus on being an effective communicator and resilient leader.
          </p>
          <p className="mb-4">
          Through LinkedIn Learning’s Digital Marketing course, I’ve learned how to leverage digital platforms and tools to create targeted strategies that drive business growth, build brand awareness, and enhance customer engagement. This knowledge empowers me to help businesses refine their marketing efforts and reach their target audiences more effectively.
          </p>
          <p className="mb-4">
          In addition, my IBM Enterprise Design Thinking Practitioner certification equipped me with the tools to design products and services that meet real user needs, delivering exceptional user experiences while aligning with business objectives. This focus on user-centric design allows me to bridge business goals with technical development in ways that maximize both efficiency and impact.
          </p>
          <p className="mb-4">
          At Moringa School, I completed a comprehensive Software Engineering course, which included both front-end and back-end development. I am proficient in modern technologies such as React, JavaScript, Ruby on Rails, and database management systems like MySQL, PostgreSQL, and SQLite. These technical skills allow me to turn business ideas into tangible digital solutions that are scalable, functional, and user-friendly.
          </p>
          <p className="mb-4">
          Beyond my technical proficiency, I am deeply invested in creating business strategies that prioritize user experience and business outcomes. By utilizing user-centered design, UX research, and ideation, I ensure that the solutions I build not only solve problems but also enhance the overall experience for users. My experience in digital marketing, brand strategy, and business operations ensures that I always approach each project with the long-term business impact in mind.
          </p>
          <p>
          Whether working with startups or established companies, my mission is to help businesses evolve by combining design thinking, technical development, and business strategy. I aim to provide innovative solutions that drive operational efficiencies, elevate user experiences, and deliver measurable results.
          </p>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">You wanna roast me ?</h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <img src={avatar} alt="Avatar" className="w-49 h-48 rounded-full object-cover mb-4 md:mb-0 md:mr-6"/>
          <form className="w-full max-w-lg" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input className="border rounded w-full py-2 px-3 bg-transparent text-white leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your name" required/>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input className="border rounded w-full py-2 px-3 bg-transparent text-white leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your email" required/>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea className="border rounded w-full py-2 px-3 bg-transparent text-white leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Your message here..." rows="4" required></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button className="bg--500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Roast Me
              </button>
            </div>
          </form>
        </div>
        {notification && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 text-white py-2 px-4 rounded shadow-lg transition-opacity duration-300 ease-in-out">
            {notification}
          </div>
        )}
      </div>
    </section>
  );
}

export default AboutAndContact;
