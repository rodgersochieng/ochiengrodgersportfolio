// import React from "react";
// import { FaReact, FaFigma, FaNodeJs } from "react-icons/fa"; // Add icons for other tech you use

// function Skills() {
//   return (
//     <section className="text-center my-8">
//       <h2 className="text-2xl font-bold">What I Use</h2>
//       <div className="flex justify-center space-x-6 mt-4">
//         <FaReact className="text-5xl" />
//         <FaFigma className="text-5xl" />
//         <FaNodeJs className="text-5xl" />
//         {/* Add more icons as needed */}
//       </div>
//     </section>
//   );
// }

// export default Skills;


import React from "react";
import { FaReact, FaFigma, FaNodeJs, FaGitAlt, FaJs, FaBootstrap, FaTrello } from "react-icons/fa";
import { SiGoogle, SiGooglemeet, SiGmail, SiGoogledocs, SiGooglesheets, SiGoogleforms, SiGoogleads, SiCanva, SiTailwindcss, SiMicrosoftonenote, SiMicrosoftoutlook, SiMicrosoftteams, SiMicrosoftword, SiMicrosoftexcel, SiMicrosoftpowerpoint, SiMicrosoft } from "react-icons/si";
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
      </div>
    </section>
  );
}

export default Skills;
