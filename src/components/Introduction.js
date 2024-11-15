import React from "react";
import avatar from '../avatar/avatar1.png';
import { FaRobot, FaBrain, FaGithub } from "react-icons/fa"; // Example icons

function Introduction() {
  return (
    <section className="my-4 flex flex-col lg:flex-row items-center lg:justify-between">
    {/* Text Section */}
    <div className="flex flex-col items-start lg:w-1/2 mb-4 lg:mb-0">
      <h2 className="text-3xl font-bold mb-2">Hi there! 👋🏾 Hows the going ?</h2>
      <p className="text-lg mb-4"> I'm Ochieng Rodgers, and I love AI like it's your pet 🐕. But since I don't have pets, these are my buddies.:</p>
      
      {/* Buttons Section with PNGs */}
      <div className="flex space-x-6 mb-4"> {/* Increased space between buttons */}
        {/* ChatGPT Button with PNG */}
        <button className="p-2 text-white rounded-full flex items-center">
          <img src={require('../avatar/chatgpt.png')} alt="ChatGPT" className="w-5 h-5 mr-2" />
          GPT
        </button>
        {/* Claude AI Button with PNG */}
        <button className="p-2 text-white rounded-full flex items-center">
          <img src={require('../avatar/claudeai.png')} alt="Claude AI" className="w-5 h-5 mr-2" />
           AI
        </button>
        {/* GitHub Copilot Button with PNG */}
        <button className="p-2 text-white rounded-full flex items-center">
          <img src={require('../avatar/githubcopilot.png')} alt="GitHub Copilot" className="w-5 h-5 mr-2" />Copilot
        </button>
      </div>
  
      <p className="text-md text-white">
      <h4 className="text-2xl font-bold mb-3"> I Empower Ideas, Bridging Tech and Business</h4> 

      With a background in both technical and strategic fields, I have developed a well-rounded skill set that combines software engineering, digital marketing, and user-centered design to create innovative solutions and impactful user experiences. Whether you're looking for insights on solving complex business problems, developing user-centric digital solutions, or building software applications, feel free to reach out. I bring a blend of problem-solving, design thinking, and software engineering expertise to help drive your projects forward.
      </p>
    </div>
  
    {/* Avatar Section on the Right */}
    <img 
      src={avatar} 
      alt="Avatar" 
      className="w-30 h-45 rounded-full object-cover lg:ml-6 lg:mt-0 mt-4"
    />
  </section>
  
  );
}

export default Introduction;



