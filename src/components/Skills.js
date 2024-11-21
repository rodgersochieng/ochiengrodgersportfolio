
import React from "react";
import { FaReact, FaFigma, FaNodeJs, FaGitAlt, FaJs, FaBootstrap, FaTrello, FaTerminal, FaBrain, FaSlack,FaDropbox, FaGoogleDrive, FaMicrophone  } from "react-icons/fa";
import { SiGoogle, SiGooglemeet, SiGmail, SiGoogledocs, SiGooglesheets, SiGoogleforms, SiGoogleads, SiCanva, SiTailwindcss, SiMicrosoftonenote, SiMicrosoftoutlook, SiMicrosoftteams, SiMicrosoftword, SiMicrosoftexcel, SiMicrosoftpowerpoint, SiMicrosoft, SiGooglecalendar, SiGoogleslides, SiGithub, SiZoom, SiHootsuite,SiAsana, SiZapier, SiLastpass, SiClickup, SiToggltrack,SiGrammarly,SiOpenai } from "react-icons/si";
import { MdOutlineCalendarToday } from "react-icons/md";  // Importing calendar icon

function Skills() {
  return (
    <section className="text-center my-8">
      <h2 className="text-2xl font-bold mb-4">What I Use</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        <div className="flex flex-col items-center">
          <FaReact className="text-5xl" />
          <span className="mt-2">React</span>
        </div>
        <div className="flex flex-col items-center">
          <FaFigma className="text-5xl" />
          <span className="mt-2">Figma</span>
        </div>
        <div className="flex flex-col items-center">
          <FaNodeJs className="text-5xl" />
          <span className="mt-2">Node.js</span>
        </div>
        <div className="flex flex-col items-center">
          <FaGitAlt className="text-5xl" />
          <span className="mt-2">Git</span>
        </div>
        <div className="flex flex-col items-center">
          <FaJs className="text-5xl" />
          <span className="mt-2">JavaScript</span>
        </div>
        <div className="flex flex-col items-center">
          <SiTailwindcss className="text-5xl" />
          <span className="mt-2">Tailwind CSS</span>
        </div>
        <div className="flex flex-col items-center">
          <FaBootstrap className="text-5xl" />
          <span className="mt-2">Bootstrap</span>
        </div>
        <div className="flex flex-col items-center">
          <SiGoogle className="text-5xl" />
          <span className="mt-2">Google</span>
        </div>
        <div className="flex flex-col items-center">
          <MdOutlineCalendarToday className="text-5xl" />
          <span className="mt-2">Calendly</span>
        </div>
        <div className="flex flex-col items-center">
          <FaTrello className="text-5xl" />
          <span className="mt-2">Trello</span>
        </div>
        <div className="flex flex-col items-center">
          <SiGooglemeet className="text-5xl" />
          <span className="mt-2">Google Meet</span>
        </div>
        <div className="flex flex-col items-center">
          <SiGmail className="text-5xl" />
          <span className="mt-2">Gmail</span>
        </div>
        <div className="flex flex-col items-center">
          <SiGoogledocs className="text-5xl" />
          <span className="mt-2">Google Docs</span>
        </div>
        <div className="flex flex-col items-center">
          <SiGooglesheets className="text-5xl" />
          <span className="mt-2">Google Sheets</span>
        </div>
        <div className="flex flex-col items-center">
          <SiGoogleforms className="text-5xl" />
          <span className="mt-2">Google Forms</span>
        </div>
        <div className="flex flex-col items-center">
          <SiGoogleads className="text-5xl" />
          <span className="mt-2">Google Ads</span>
        </div>
        <div className="flex flex-col items-center">
          <SiCanva className="text-5xl" />
          <span className="mt-2">Canva</span>
        </div>
        <div className="flex flex-col items-center">
          <SiMicrosoftonenote className="text-5xl" />
          <span className="mt-2">OneNote</span>
        </div>
        <div className="flex flex-col items-center">
          <SiMicrosoftoutlook className="text-5xl" />
          <span className="mt-2">Outlook</span>
        </div>
        <div className="flex flex-col items-center">
          <SiMicrosoftteams className="text-5xl" />
          <span className="mt-2">Teams</span>
        </div>
        <div className="flex flex-col items-center">
          <SiMicrosoftword className="text-5xl" />
          <span className="mt-2">Word</span>
        </div>
        <div className="flex flex-col items-center">
          <SiMicrosoftexcel className="text-5xl" />
          <span className="mt-2">Excel</span>
        </div>
        <div className="flex flex-col items-center">
          <SiMicrosoftpowerpoint className="text-5xl" />
          <span className="mt-2">PowerPoint</span>
        </div>
        <div className="flex flex-col items-center">
          <SiMicrosoft className="text-5xl" />
          <span className="mt-2">Microsoft</span>
        </div>
        <div className="flex flex-col items-center">
          <SiGooglecalendar className="text-5xl" />
          <span className="mt-2">Google Calendar</span>
        </div>
        <div className="flex flex-col items-center">
          <SiGoogleslides className="text-5xl" />
          <span className="mt-2">Google Slides</span>
        </div>
        <div className="flex flex-col items-center">
          <FaTerminal className="text-5xl" />
          <span className="mt-2">Terminal</span>
        </div>
        <div className="flex flex-col items-center">
          <SiOpenai className="text-5xl" />
          <span className="mt-2">ChatGPT</span>
        </div>
        <div className="flex flex-col items-center">
          <SiGithub className="text-5xl" />
          <span className="mt-2">GitHub Copilot</span>
        </div>
        <div className="flex flex-col items-center">
          <FaBrain className="text-5xl" />
          <span className="mt-2">Microsoft Copilot</span>
        </div>
        <div className="flex flex-col items-center">
          <FaSlack className="text-5xl" />
          <span className="mt-2">Slack</span>
        </div>       
        <div className="flex flex-col items-center">
          <SiZoom className="text-5xl" />
          <span className="mt-2">Zoom</span>
        </div>
        <div className="flex flex-col items-center">
          <SiHootsuite className="text-5xl" />
          <span className="mt-2">Hootsuite</span>
        </div>
        {/* LastPass */}
        <div className="flex flex-col items-center">
          <SiLastpass className="text-5xl" />
          <span className="mt-2">LastPass</span>
        </div>
        {/* Dropbox */}
        <div className="flex flex-col items-center">
          <FaDropbox className="text-5xl" />
          <span className="mt-2">Dropbox</span>
        </div>
        {/* Google Drive */}
        <div className="flex flex-col items-center">
          <FaGoogleDrive className="text-5xl" />
          <span className="mt-2">Google Drive</span>
        </div>
        {/* Asana */}
        <div className="flex flex-col items-center">
          <SiAsana className="text-5xl" />
          <span className="mt-2">Asana</span>
        </div>
        {/* Zapier */}
        <div className="flex flex-col items-center">
          <SiZapier className="text-5xl" />
          <span className="mt-2">Zapier</span>
        </div>
        {/* Otter.ai */}
        <div className="flex flex-col items-center">
          <FaMicrophone className="text-5xl" />
          <span className="mt-2">Otter.ai</span>
        </div>
        {/* ClickUp */}
        <div className="flex flex-col items-center">
          <SiClickup className="text-5xl" />
          <span className="mt-2">ClickUp</span>
        </div>
        {/* Toggl Track */}
        <div className="flex flex-col items-center">
          <SiToggltrack className="text-5xl" />
          <span className="mt-2">Toggl Track</span>
        </div>
        {/* Grammarly */} 
        <div className="flex flex-col items-center"> 
          <SiGrammarly className="text-5xl" /> 
          <span className="mt-2">Grammarly</span> </div>
        
      </div>
    </section>
  );
}

export default Skills;
