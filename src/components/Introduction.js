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
      Ever had an idea so brilliant you wondered if you’d need a wizard to make it real? Well, I’m not quite a wizard, but I come pretty close. Think of me as your personal tech-business magician minus the hat and wand. I turn ambitious ideas into things that actually work, with a few laughs along the way.Got something complex that needs simplifying? Or a wild concept that's just begging to come to life? I’m here to make it happen and make it fun. If we hit a snag, don’t worry, I promise not to pull a rabbit out of the hat (unless you’re into that sort of thing).
     Curious? Let’s dive in and make some magic happen. 😊✨
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



