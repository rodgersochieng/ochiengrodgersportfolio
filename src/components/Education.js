import React from "react";
import ibm from '../avatar/ibm.png'; 
import mckinsey from '../avatar/mckinsey-forward-program.png'
import linkedin from '../avatar/linkedin.png'
import moringa from '../avatar/moringa.png'
import ffa from '../avatar/ffa.png'
import uop from '../avatar/uop.png'


const certificates = [
    {
        institution: 'University of the People',
        title: 'Bsc Computer Science',
        description: "Ongoing computer science course ",
        skills: ['python programming language','ongoing'],
        image: uop
      },
    {
        institution: '54 Collective',
        title: 'Entreprenuership Building and Launching a Startup',
        description: " building startup ",
        skills: ['Customer research','Building MVP',],
        image: ffa
      },
    {
        institution: 'Moringa school',
        title: 'Software Engineering',
        description: "successfully completing the SOFTWARE ENGINEERING COURSE,which covers both Back-End and Front-End programming technologies.The course was delivered by Moringa School and included certain content from Flatiron School ",
        skills: ['Web development','React','Javascript','Ruby/Rails','Mysql','sqlite','postgress','Empathy', 'Figma','User-Centered Design', 'User-Centric', 'User Experience', 'User Research', 'UI/UX'],
        image: moringa
      },
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
  {
    institution: 'Linkedin Learning',
    title: 'Digital Marketing',
    description: 'foundations  digital marketing.',
    skills: ['Digital marketing'],
    image: linkedin
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
