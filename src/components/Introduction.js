
import React, { useEffect, useRef,useState } from 'react';
import { FaLinkedin, FaGithub,FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';



const App = () => {
  return (
    <div className="bg-[#f1faee] text-[#1d3557] leading-relaxed overflow-x-hidden font-['Poppins',sans-serif]">
      <Header />
      <Hero />
      <About />
      <Experience />
      <StarterProjects />
      <Contact />
      <Footer />
    </div>
  );
};

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header className="bg-[#f1faee] py-5 fixed w-full top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-5">
        <nav className="flex justify-between items-center">
          <a href="#" className="text-3xl font-bold text-[#e63946] no-underline font-['Montserrat',sans-serif]">O. Rodgers</a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8">
            <a href="#about" className="no-underline text-[#1d3557] font-medium relative transition-colors duration-300 hover:text-[#e63946] after:content-[''] after:absolute after:w-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-[#e63946] after:transition-all after:duration-300 hover:after:w-full">About</a>
            <a href="#experience" className="no-underline text-[#1d3557] font-medium relative transition-colors duration-300 hover:text-[#e63946] after:content-[''] after:absolute after:w-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-[#e63946] after:transition-all after:duration-300 hover:after:w-full">Experience</a>
            <a href="#contact" className="no-underline text-[#1d3557] font-medium relative transition-colors duration-300 hover:text-[#e63946] after:content-[''] after:absolute after:w-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-[#e63946] after:transition-all after:duration-300 hover:after:w-full">Contact</a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#1d3557] focus:outline-none" 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </nav>
        
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden py-4 px-2 mt-2 bg-white rounded-lg shadow-lg animate-fadeIn">
            <a href="#about" className="block py-2 px-4 text-[#1d3557] hover:bg-[rgba(230,57,70,0.1)] hover:text-[#e63946] rounded-md transition-colors duration-300" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#experience" className="block py-2 px-4 text-[#1d3557] hover:bg-[rgba(230,57,70,0.1)] hover:text-[#e63946] rounded-md transition-colors duration-300" onClick={() => setMenuOpen(false)}>Experience</a>
            <a href="#contact" className="block py-2 px-4 text-[#1d3557] hover:bg-[rgba(230,57,70,0.1)] hover:text-[#e63946] rounded-md transition-colors duration-300" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        )}
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative pt-20 px-4 md:px-0">
      <div className="max-w-7xl mx-auto px-5 w-full">
        <div className="max-w-xl relative z-10 opacity-0 transform translate-y-5 md:pt-0 pt-16" id="hero-content">
          <h1 className="text-4xl sm:text-5xl md:text-6xl mb-5 leading-tight font-['Montserrat',sans-serif] font-bold tracking-tight">
            I'm <span className="text-[#e63946] relative inline-block after:content-[''] after:absolute after:h-2 after:w-full after:left-0 after:-bottom-1 after:bg-[rgba(230,57,70,0.1)] after:-z-10">Ochieng Rodgers</span>, Your Tech-Business Strategist
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-gray-700 font-light">Navigating the space between what is and what could be, building solutions that feel natural in every way.</p>
          <a href="#contact" className="inline-block bg-[#e63946] text-[#f1faee] py-3 px-8 rounded-full no-underline font-semibold transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#e63946] focus:ring-opacity-50">
            Let's Create Magic
          </a>
        </div>
        {/* Right Section - Visible on All Screens */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 h-4/5 bg-[rgba(230,57,70,0.1)] rounded-l-3xl z-0 flex items-center justify-center overflow-hidden">
          {/* Shapes Section */}
          <motion.div
            className="relative w-full h-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Circle */}
            <motion.div
              className="absolute w-32 h-32 bg-[rgba(230,57,70,0.2)] rounded-full top-1/4 left-1/4"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            {/* Triangle */}
            <motion.div
              className="absolute w-0 h-0 border-l-[60px] border-l-transparent border-b-[100px] border-b-[rgba(230,57,70,0.2)] border-r-[60px] border-r-transparent bottom-1/4 right-1/4"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            {/* Wave */}
            <motion.div
              className="absolute w-48 h-48 bg-[rgba(230,57,70,0.1)] rounded-full bottom-1/4 left-1/4"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            {/* Square */}
            <motion.div
              className="absolute w-24 h-24 bg-[rgba(230,57,70,0.15)] top-1/3 right-1/3"
              animate={{ rotate: [0, 90, 180, 270, 360] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            {/* Hexagon */}
            <motion.div
              className="absolute w-28 h-28 bg-[rgba(230,57,70,0.15)] clip-hexagon bottom-1/3 left-1/3"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            {/* Diamond */}
            <motion.div
              className="absolute w-20 h-20 bg-[rgba(230,57,70,0.15)] rotate-45 top-1/2 left-1/2"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            {/* Ellipse */}
            <motion.div
              className="absolute w-40 h-24 bg-[rgba(230,57,70,0.15)] rounded-full bottom-1/2 right-1/2"
              animate={{ x: [-20, 20, -20] }}
              transition={{ duration: 7, repeat: Infinity }}
            />          
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative px-4 md:px-0">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-3xl md:text-4xl text-center mb-12 md:mb-16 relative pb-4 font-['Montserrat',sans-serif] font-bold after:content-[''] after:absolute after:w-20 after:h-1 after:bg-[#e63946] after:bottom-0 after:left-1/2 after:-translate-x-1/2">About Me</h2>
        
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="relative opacity-0 transform translate-y-5" id="about-text">
            <div className="relative before:content-[''] before:absolute before:text-8xl md:before:text-9xl before:text-[rgba(230,57,70,0.1)] before:-top-12 md:before:-top-20 before:-left-2 md:before:-left-10 before:-z-10 before:font-serif">
              <h3 className="text-2xl md:text-2xl mb-5 text-[#e63946] font-['Montserrat',sans-serif] leading-tight">
             " Think of me as your guide, helping you go from “why is this so complicated?” to “ohhh, that makes sense,” turning your idea into something real.
              </h3>
              <p className="mb-4 text-gray-700">Ever seen a product that looked great but didn’t actually solve a problem? That’s what I don’t do.I turn real needs into solutions that work not just for businesses, but for the people using them. Whether it’s simplifying a complex idea, designing a seamless user experience, or launching a product that actually sells, I bring a mix of tech, business, and strategy to the table.</p>
              <p className="mb-4 text-gray-700">I’m here to ask the right questions, challenge assumptions, and make sure we’re building something that actually works no fluff, no overpromising, just real, user-focused solutions. And yes, I’ll keep things light along the way. Because solving problems shouldn’t feel like pulling teeth (or rabbits out of hats).</p>
              <p className="text-gray-700">Oh, and I’m obsessed with AI and automation. GPT, Claude, DeepSeek, and other AI tools are my secret weapons for streamlining workflows, solving problems faster, and building smarter solutions.</p>
            </div>
          </div>
          
          <div className="relative bg-white p-6 md:p-10 rounded-lg shadow-xl opacity-0 transform translate-y-5" id="about-skills">
            <h3 className="text-xl md:text-2xl mb-5 text-[#1d3557] font-['Montserrat',sans-serif] font-semibold">My Expertise</h3>
            <p className="text-gray-700">I’ve built my skills through rigorous programs and hands-on experience, blending business strategy, design thinking, and user-focused problem-solving to create solutions that work. Whether it’s simplifying complexity or driving growth, I bring a well-rounded approach to every project</p>
            <div className="mt-5 flex flex-wrap">
              <span className="inline-block bg-[rgba(230,57,70,0.1)] text-[#e63946] py-2 px-4 rounded-full m-1 font-medium text-sm">Project Management & Execution</span>
              <span className="inline-block bg-[rgba(230,57,70,0.1)] text-[#e63946] py-2 px-4 rounded-full m-1 font-medium text-sm">Front-End Development</span>
              <span className="inline-block bg-[rgba(230,57,70,0.1)] text-[#e63946] py-2 px-4 rounded-full m-1 font-medium text-sm">User-Centered Problem-Solving</span>
              <span className="inline-block bg-[rgba(230,57,70,0.1)] text-[#e63946] py-2 px-4 rounded-full m-1 font-medium text-sm">Business Strategy & Entrepreneurship </span>
              <span className="inline-block bg-[rgba(230,57,70,0.1)] text-[#e63946] py-2 px-4 rounded-full m-1 font-medium text-sm">Critical Thinking & Adaptability</span>
              <span className="inline-block bg-[rgba(230,57,70,0.1)] text-[#e63946] py-2 px-4 rounded-full m-1 font-medium text-sm">Communication & Stakeholder Management</span>
              <span className="inline-block bg-[rgba(230,57,70,0.1)] text-[#e63946] py-2 px-4 rounded-full m-1 font-medium text-sm">Visual Storytelling & Content Creation </span>
              <span className="inline-block bg-[rgba(230,57,70,0.1)] text-[#e63946] py-2 px-4 rounded-full m-1 font-medium text-sm">Creative Digital Marketing </span>
              <span className="inline-block bg-[rgba(230,57,70,0.1)] text-[#e63946] py-2 px-4 rounded-full m-1 font-medium text-sm">UI Design </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const Experience = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <section id="experience" className="py-20 md:py-32 bg-[#f1faee] px-4 md:px-0">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-3xl md:text-4xl text-center mb-12 md:mb-16 relative pb-4 font-['Montserrat',sans-serif] font-bold after:content-[''] after:absolute after:w-20 after:h-1 after:bg-[#e63946] after:bottom-0 after:left-1/2 after:-translate-x-1/2">My Journey</h2>
        
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">  
          <div 
            className="bg-white p-6 md:p-8 rounded-lg shadow-md relative transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl overflow-hidden before:content-[''] before:absolute before:w-1 before:h-12 before:bg-[#e63946] before:left-0 before:top-8"
            data-aos="fade-up"
          >
            <h3 className="text-xl md:text-2xl mb-3 md:mb-4 text-[#1d3557] font-['Montserrat',sans-serif] font-semibold">Coursera - Project Management</h3>
            <p className="text-gray-600 text-sm md:text-base">This certification equipped me with the tools and methodologies to manage projects effectively, ensuring they’re delivered on time, within scope, and aligned with business goals. From planning and execution to risk management and stakeholder communication, I gained hands-on experience in leading projects that drive results.</p>
          </div>
          <div 
            className="bg-white p-6 md:p-8 rounded-lg shadow-md relative transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl overflow-hidden before:content-[''] before:absolute before:w-1 before:h-12 before:bg-[#e63946] before:left-0 before:top-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3 className="text-xl md:text-2xl mb-3 md:mb-4 text-[#1d3557] font-['Montserrat',sans-serif] font-semibold">Moringa School - Software Engineering</h3>
            <p className="text-gray-600 text-sm md:text-base">Completed a comprehensive Software Engineering course, including both front-end and back-end development. Proficient in modern technologies that help turn business ideas into tangible digital solutions.</p>
          </div>
          <div 
            className="bg-white p-6 md:p-8 rounded-lg shadow-md relative transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl overflow-hidden before:content-[''] before:absolute before:w-1 before:h-12 before:bg-[#e63946] before:left-0 before:top-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="text-xl md:text-2xl mb-3 md:mb-4 text-[#1d3557] font-['Montserrat',sans-serif] font-semibold">Founders Factory Africa - Venture Building & Startup Acceleration</h3>
            <p className="text-gray-600 text-sm md:text-base">I gained hands-on experience in launching and scaling startups, working at the intersection of business, technology, and user needs. This program sharpened my ability to validate ideas quickly, navigate uncertainty, and turn concepts into viable, user-focused solutions. From customer research to product development and growth strategies, I learned what it takes to build something that truly works—beyond just an idea.</p>
          </div>
          <div 
            className="bg-white p-6 md:p-8 rounded-lg shadow-md relative transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl overflow-hidden before:content-[''] before:absolute before:w-1 before:h-12 before:bg-[#e63946] before:left-0 before:top-8"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h3 className="text-xl md:text-2xl mb-3 md:mb-4 text-[#1d3557] font-['Montserrat',sans-serif] font-semibold">ALX Africa - Virtual Assistant Program</h3>
            <p className="text-gray-600 text-sm md:text-base">Think of me as the person who keeps things moving smoothly and efficiently. At ALX Africa, I mastered the art of handling projects, organizing information, and making sure nothing falls through the cracks. Whether it’s managing stakeholders, streamlining workflows, or just bringing order to the daily chaos, I learned how to get things done without the overwhelm.</p>
          </div>
          <div 
            className="bg-white p-6 md:p-8 rounded-lg shadow-md relative transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl overflow-hidden before:content-[''] before:absolute before:w-1 before:h-12 before:bg-[#e63946] before:left-0 before:top-8"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h3 className="text-xl md:text-2xl mb-3 md:mb-4 text-[#1d3557] font-['Montserrat',sans-serif] font-semibold">IBM - Enterprise Design Thinking Practitioner</h3>
            <p className="text-gray-600 text-sm md:text-base">This certification equipped me with a user-first framework to design products and services that solve real problems. By prioritizing the needs of real users, fostering collaboration, and using iterative prototyping, I create solutions that deliver exceptional experiences while aligning with business goals.</p>
          </div>
          <div 
            className="bg-white p-6 md:p-8 rounded-lg shadow-md relative transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl overflow-hidden before:content-[''] before:absolute before:w-1 before:h-12 before:bg-[#e63946] before:left-0 before:top-8"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <h3 className="text-xl md:text-2xl mb-3 md:mb-4 text-[#1d3557] font-['Montserrat',sans-serif] font-semibold">McKinsey Forward Program</h3>
            <p className="text-gray-600 text-sm md:text-base">This program equipped me with critical thinking, problem-solving, and leadership skills tailored for the future of business. Through hands-on training, I learned to navigate complexity, communicate effectively, and lead with resilience in a rapidly evolving landscape.</p>
          </div>
        </div>
      </div>
    </section>
  );
};


const StarterProjects = () => {
  return (
    <section id="starter-projects" className="py-12 md:py-20 relative overflow-hidden px-4 md:px-0">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-3xl md:text-4xl text-center mb-8 md:mb-12 relative pb-4 font-['Montserrat',sans-serif] font-bold after:content-[''] after:absolute after:w-20 after:h-1 after:bg-[#e63946] after:bottom-0 after:left-1/2 after:-translate-x-1/2">
          Starter Projects
        </h2>
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-start">
          {/* Project 1 */}
          <div className="bg-[#f1faee] p-5 md:p-8 rounded-lg shadow-xl border border-[rgba(230,57,70,0.1)] animate-fade-in-up">
            <h3 className="text-2xl md:text-3xl mb-4 text-[#1d3557] font-['Montserrat',sans-serif] font-semibold">
              Tipsy Tales
            </h3>
            <p className="mb-4 text-base md:text-lg text-gray-700">
            Welcome to Nai Nights! Explore our fun and interactive games to spice up your party.
            </p>
            <a
              href="https://tipsytales.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#e63946] text-[#f1faee] py-2 md:py-3 px-6 rounded-full font-semibold transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#e63946] focus:ring-opacity-50"
            >
              View Project
            </a>
          </div>

          {/* Project 2 */}
          <div className="bg-[#f1faee] p-5 md:p-8 rounded-lg shadow-xl border border-[rgba(230,57,70,0.1)] animate-fade-in-up">
            <h3 className="text-2xl md:text-3xl mb-4 text-[#1d3557] font-['Montserrat',sans-serif] font-semibold">
              Golden Archive
            </h3>
            <p className="mb-4 text-base md:text-lg text-gray-700">
              A custom website that allows my youtube subscribers to access/download my content.
            </p>
            <a
              href="https://goldenarchive.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#e63946] text-[#f1faee] py-2 md:py-3 px-6 rounded-full font-semibold transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#e63946] focus:ring-opacity-50"
            >
              View Project
            </a>
          </div>
        </div>
      </div>

      {/* Add custom animation styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = "Name cannot be empty.";
    }

    // Validate email
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    } else if (formData.email.toLowerCase() === "user@example.com") {
      newErrors.email = "Please use a valid email address.";
    }

    // Validate message
    if (!formData.message || formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mqaeblnw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden px-4 md:px-0">
      <div className="absolute w-72 h-72 bg-[rgba(230,57,70,0.1)] rounded-full -top-36 -left-36 z-0"></div>
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-3xl md:text-4xl text-center mb-12 md:mb-16 relative pb-4 font-['Montserrat',sans-serif] font-bold after:content-[''] after:absolute after:w-20 after:h-1 after:bg-[#e63946] after:bottom-0 after:left-1/2 after:-translate-x-1/2">
          Let's Connect
        </h2>
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-start">
          <div className="opacity-0 transform translate-y-5 order-2 lg:order-1" id="contact-info">
            <h3 className="text-2xl md:text-3xl mb-6 md:mb-8 text-[#1d3557] font-['Montserrat',sans-serif] font-semibold">
              Ready to Make <span className="text-[#e63946]">Some Magic</span>?
            </h3>
            <p className="mb-5 text-base md:text-lg text-gray-700">Got an idea that feels a little out of reach? Or a challenge that needs a fresh perspective?
            I’m here to help you break it down, find the right approach, and turn it into something real and impactful.</p>
            <p className="text-base md:text-lg text-gray-700">Let's dive in and make some magic happen together! ✨</p>
          </div>
          <div className="bg-[#f1faee] p-6 md:p-10 rounded-lg shadow-xl border border-[rgba(230,57,70,0.1)] opacity-0 transform translate-y-5 order-1 lg:order-2" id="contact-form">
            {isSubmitted ? (
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#e63946] mb-4">Thank you!</h3>
                <p className="text-gray-700">Your message has been sent successfully. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full py-3 md:py-4 px-4 border border-gray-300 rounded-md text-sm md:text-base transition-colors duration-300 focus:outline-none focus:border-[#e63946] focus:ring-1 focus:ring-[#e63946]"
                    placeholder="Your Name"
                  />
                  {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
                </div>
                <div className="mb-5">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full py-3 md:py-4 px-4 border border-gray-300 rounded-md text-sm md:text-base transition-colors duration-300 focus:outline-none focus:border-[#e63946] focus:ring-1 focus:ring-[#e63946]"
                    placeholder="Your Email"
                  />
                  {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
                </div>
                <div className="mb-5">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full py-3 md:py-4 px-4 border border-gray-300 rounded-md text-sm md:text-base transition-colors duration-300 focus:outline-none focus:border-[#e63946] focus:ring-1 focus:ring-[#e63946]"
                    placeholder="Tell me about your project"
                  />
                  {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#e63946] text-[#f1faee] py-3 px-8 rounded-full font-semibold transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg border-none cursor-pointer w-full focus:outline-none focus:ring-2 focus:ring-[#e63946] focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-8 md:py-10 bg-[#1d3557] text-[#f1faee] text-center">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-5">
          <div className="text-xl md:text-2xl font-bold text-[#f1faee] font-['Montserrat',sans-serif]">
            Ochieng O. Rodgers
          </div>
          <div className="flex flex-wrap justify-center gap-3 md:gap-5">
            <a
              href="https://www.linkedin.com/in/ochieng-o-rodgers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f1faee] text-base md:text-lg transition-colors duration-300 hover:text-[#e63946]"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/rodgersochieng"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f1faee] text-base md:text-lg transition-colors duration-300 hover:text-[#e63946]"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="mailto:sirrodgers21@gmail.com"
              className="text-[#f1faee] text-base md:text-lg transition-colors duration-300 hover:text-[#e63946]"
            >
              <FaEnvelope size={24} />
            </a>
            <a
              href="https://wa.me/254729942447"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f1faee] text-base md:text-lg transition-colors duration-300 hover:text-[#e63946]"
            >
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>
        <div className="mt-5 text-xs md:text-sm text-[rgba(255,255,255,0.7)]">
          &copy; 2025 Ochieng Rodgers. All rights reserved.
        </div>
      </div>
    </footer>
  );
};


// Animation styles
const animationStyles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeIn {
    animation: fadeIn 0.3s ease forwards;
  }
`;

// Animation Observer
const AnimateOnScroll = () => {
  useEffect(() => {
    // Add animation styles to head
    const styleElement = document.createElement('style');
    styleElement.innerHTML = animationStyles;
    document.head.appendChild(styleElement);
    
    const animateElements = [
      document.getElementById('hero-content'),
      document.getElementById('about-text'),
      document.getElementById('about-skills'),
      document.getElementById('exp-1'),
      document.getElementById('exp-2'),
      document.getElementById('exp-3'),
      document.getElementById('exp-4'),
      document.getElementById('contact-info'),
      document.getElementById('contact-form'),
      document.getElementById('starter-projects'),


    ];
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    animateElements.forEach(element => {
      if (element) {
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(element);
      }
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const headerOffset = 80;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });

    return () => {
      animateElements.forEach(element => {
        if (element) observer.unobserve(element);
      });
      document.head.removeChild(styleElement);
    };
  }, []);

  return null;
};

// React hook to load Google Fonts
const FontLoader = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Poppins:wght@300;400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);
  
  return null;
};

const MainApp = () => {
  return (
    <>
      <FontLoader />
      <App />
      <AnimateOnScroll />
    </>
  );
};

export default MainApp;