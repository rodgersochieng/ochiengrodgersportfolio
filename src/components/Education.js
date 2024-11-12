// import React from "react";
// import ibm from '../avatar/ibm.png'; // Example image import, replace with actual paths

// const certificates = [
//   {
//     institution: 'IBM',
//     title: 'Enterprise Design Thinking Practitioner',
//     description: 'The earner has acquired knowledge of applying Enterprise Design Thinking and its value. As a Practitioner, the badge earner finds opportunities to try it out in their everyday work.',
//     skills: ['Design', 'Empathy', 'Experience Design', 'Ideation', 'PWID-B0495200', 'User-Centered Design', 'User-Centric', 'User Experience', 'User Research', 'UX'],
//     image: ibm
//   },
//   // Add more certificates here
// ];

// function Certificates() {
//   return (
//     <section className="text-center my-8">
//       <h2 className="text-2xl font-bold mb-4">What i have learned</h2>
//       <div className="space-y-8">
//         {certificates.map((cert, index) => (
//           <div key={index} className="flex flex-col md:flex-row items-center p-4">
//             <img src={cert.image} alt={`${cert.institution} logo`} className="w-24 h-24 md:mr-4 mb-4 md:mb-0"/>
//             <div className="text-left">
//               <h3 className="text-xl font-semibold">{cert.title}</h3>
//               <p className="mt-2">{cert.description}</p>
//               <p className="mt-2 font-bold">Issued by {cert.institution}</p>
//               <div className="mt-2">
//                 <p className="font-semibold">Skills:</p>
//                 <ul className="list-disc list-inside">
//                   {cert.skills.map((skill, i) => (
//                     <li key={i}>{skill}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Certificates;

import React from "react";
import ibm from '../avatar/ibm.png'; 
import mckinsey from '../avatar/mckinsey-forward-program.png'

const certificates = [
  {
    institution: 'IBM',
    title: 'Enterprise Design Thinking Practitioner',
    description: 'The earner has acquired knowledge of applying Enterprise Design Thinking and its value. As a Practitioner, the badge earner finds opportunities to try it out in their everyday work.',
    skills: ['Design', 'Empathy', 'Experience Design', 'Ideation', 'PWID-B0495200', 'User-Centered Design', 'User-Centric', 'User Experience', 'User Research', 'UX'],
    image: ibm
  },
  {
    institution: 'McKinsey & Company',
    title: 'McKinsey Forward Program',
    description: 'Earners of this badge have completed the McKinsey Forward online learning program. This program enables participants to develop practical skills for success in the future of work. Participants learn how to apply the McKinsey approach to problem-solving, become more effective and influential communicators and develop adaptable and resilience mindsets and habits. They also learn how to plan for and develop a foundational digital toolkit.',
    skills: ['Problem solving', 'Empathy', 'Experience Design', 'Ideation','User-Centered Design', 'User-Centric', 'User Experience', 'User Research', 'UX'],
    image: mckinsey
  },
  
];

function Certificates() {
  return (
    <section className="text-center my-8">
      <h2 className="text-3xl font-bold mb-4">Certifications</h2>
      <div className="space-y-8">
        {certificates.map((cert, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center p-4">
            <img src={cert.image} alt={`${cert.institution} logo`} className="w-35 h-35 md:mr-4 mb-4 md:mb-0"/>
            <div className="text-left">
              <h3 className="text-xl font-semibold">{cert.title}</h3>
              <p className="mt-2">{cert.description}</p>
              <p className="mt-2 font-bold">Issued by {cert.institution}</p>
              <div className="mt-2">
                <p className="font-semibold">Skills:</p>
                <div className="flex flex-wrap">
                  {cert.skills.map((skill, i) => (
                    <span key={i} className="bg-gray-200 text-black rounded-full px-3 py-1 m-1 text-sm font-semibold">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
