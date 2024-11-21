import React from "react";
import ibm from '../avatar/ibm.png'; 
import mckinsey from '../avatar/mckinsey-forward-program.png'
import linkedin from '../avatar/linkedin.png'
import moringa from '../avatar/moringa.png'
import ffa from '../avatar/ffa.png'
import uop from '../avatar/uop.png'
import ALX from '../avatar/ALX.png' 


const certificates = [
    {
        institution: 'University of the People',
        title: 'BSc. Computer Science',
        description: "I’m currently pursuing my BSc. in Computer Science at the University of the People, and let me tell you, it’s been an exciting journey so far. I’m getting comfortable with code that doesn’t make me cry… most of the time. From programming to algorithms, I’m diving deep into the tech world and loving every minute of it (well, almost every minute). It’s like being in a constant state of “I can’t believe I’m learning this” and 'Oh wow, I just fixed that bug!'",
        skills: ['Ongoing python programming language','ongoing programs'],
        image: uop
      },
      {
        institution: 'ALX Africa',
        title: 'Virtual Assistant',
        description: "I’m a graduate of the ALX Africa Virtual Assistant Program, and let’s just say if you need someone to keep your life organized without losing their mind in the process, I’m your person. I’ve got the skills to keep your inbox from overflowing, your calendar from becoming a hot mess, and your appointments running like clockwork. Honestly, I might be the superhero of administrative support... without the cape (though I do have a killer sense of timing).",
        skills: ['Email Management & Correspondence','Calendar & Appointment Management','Customer Support & Client Relations','Social Media Management','Data Entry & Record Keeping','Document Preparation & Editing','Project Coordination','Online Research & Information Gathering','Multitasking & Time Management','Problem Solving & Adaptability'],
        image: ALX
      },
    {
        institution: '54 Collective',
        title: 'Entreprenuership Building and Launching a Startup',
        description: "So, here’s a fun fact: I didn’t just learn about startups; I helped launch one. As a graduate of Founders Factory Africa (now rebranded as 54Collective), I got my hands dirty in the wild, unpredictable world of entrepreneurship. From scribbling down ideas to seeing them come to life, I had a front-row seat to the entire rollercoaster ride. And trust me, I’ve picked up a few tricks that could make even the scrappiest of startups feel like a lean, mean business machine.  My time at 54Collective taught me to handle everything from startup strategy to launch support. I learned the importance of market research (and how to tell when the numbers are actually telling a story), perfected the art of pitching without breaking into a cold sweat, and became the go-to person for making sure clients and customers feel like VIPs. In startup life, “wearing multiple hats” is an understatement, but it turns out I look pretty good in all of them ",
        skills: ['Startup Strategy & Launch Support','Market Research & Insights','Pitching & Fundraising Assistance','Customer & Client Relationship Management','Team Collaboration & Coordination','Data & Reporting','Technology Integration & Tools','Problem Solving & Critical Thinking','Adaptability & Growth Mindset'],
        image: ffa
      },
    {
        institution: 'Moringa school',
        title: 'Software Engineering',
        description: "I’ve completed the Software Engineering Course from Moringa School, which was like a boot camp for building digital worlds. This wasn’t just any course it covered both Back-End and Front-End technologies, so now I’m as comfortable wrangling databases as I am designing slick user interfaces. Oh, and did I mention it included some content from Flatiron School? That’s right, I got the best of both worlds. ",
        skills: ['Web development','React','Javascript','Ruby/Rails','Mysql','sqlite','postgress','Empathy', 'Figma','User-Centered Design', 'User-Centric', 'User Experience', 'User Research', 'UI/UX'],
        image: moringa
      },
  {
    institution: 'IBM',
    title: 'Enterprise Design Thinking Practitioner',
    description: <p>When it comes to Enterprise Design Thinking, I'm officially a card-carrying Practitioner (okay, it’s a badge, but still). Thanks to IBM, I’ve learned the ropes of turning business goals into user-friendly solutions that people actually want to use not just click once and bounce. Now, I see every project as a chance to flex my design skills and sprinkle a little empathy into the process (who knew empathy could be a superpower?).With this training, I’m all about finding those “aha” moments where design meets real user needs. Need a digital experience that doesn’t just look good but actually makes sense?

    </p>,
    skills: ['Design', 'Empathy', 'Experience Design', 'Ideation', 'PWID-B0495200', 'User-Centered Design', 'User-Centric', 'User Experience', 'User Research', 'UX'],
    image: ibm
  },
  {
    institution: 'McKinsey & Company',
    title: 'McKinsey Forward Program',
    description: <p>So, I earned my McKinsey Forward badge, which basically means I went through an intense online boot camp on how to thrive in the future of work (spoiler: it’s all about being adaptable and digitally savvy). I learned the famous McKinsey way of problem-solving, so now I’m pretty much a troubleshooting ninja. The course also threw in some solid communication skills apparently, there’s more to it than just speaking loudly and hoping for the best.
    They didn’t stop there, though. I got resilience training, a digital toolkit, and tips on how to stay cool and flexible no matter what chaos the workday throws my way</p>,
    skills: ['Problem solving', 'Empathy', 'Experience Design', 'Ideation','User-Centered Design', 'User-Centric', 'User Experience', 'User Research', 'UX'],
    image: mckinsey
  },
  {
    institution: 'Linkedin Learning',
    title: 'Digital Marketing',
    description: 'I’ve recently completed the Digital Marketing Foundations course from LinkedIn Learning, and I’m ready to dive into the world of online marketing! While I’m still at the start of my digital marketing journey, I’ve already learned the ropes of using tools like Hootsuite and running Meta ads to get the word out. Think of me as the marketing rookie who’s gearing up to take on the digital world one click at a time.',
    skills: ['Digital marketing','hootsuite','Meta adds'],
    image: linkedin
  },
  
];

function Certificates() {
  return (
    <section className="text-center my-8">
      <h2 className="text-3xl font-bold mb-4">What I have Learned So Far</h2>
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
