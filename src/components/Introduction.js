
import React, { useEffect, useRef,useState } from 'react';
import { FaLinkedin, FaGithub,FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";


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
          <a href="#" className="text-3xl font-bold text-[#e63946] no-underline font-['Montserrat',sans-serif]">O Rodgers</a>
          
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
            I'm <span className="text-[#e63946] relative inline-block after:content-[''] after:absolute after:h-2 after:w-full after:left-0 after:-bottom-1 after:bg-[rgba(230,57,70,0.1)] after:-z-10">Ochieng Rodgers</span>, Your Tech-Business Magician
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-gray-700 font-light">Empowering ideas, bridging technology and business with a touch of magic.</p>
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
            {/* Text Overlay */}
            {/* <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-5xl md:text-4xl flex flex-col md:flex-row gap-4 md:gap-8 text-[#e63946] font-['Montserrat',sans-serif] font-bold">
                <span>GPT</span>
                <span>DeepSeek</span>
                <span>Claude</span>
              </div>
            </div> */}
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
              <h3 className="text-2xl md:text-3xl mb-5 text-[#e63946] font-['Montserrat',sans-serif] leading-tight">
                "I turn ambitious ideas into things that actually work, with a few laughs along the way."
              </h3>
              <p className="mb-4 text-gray-700">Ever had an idea so brilliant you wondered if you'd need a wizard to make it real? Well, I'm not quite a wizard, but I come pretty close. Think of me as your personal tech-business magician minus the hat and wand.</p>
              <p className="mb-4 text-gray-700">Got something complex that needs simplifying? Or a wild concept that's just begging to come to life? I'm here to make it happen and make it fun. If we hit a snag, don't worry, I promise not to pull a rabbit out of the hat (unless you're into that sort of thing).</p>
              <p className="text-gray-700">I love AI like it's my pet 🐕. But since I don't have pets, GPT, AI, and Copilot are my buddies. Together, we create solutions that matter.</p>
            </div>
          </div>
          
          <div className="relative bg-white p-6 md:p-10 rounded-lg shadow-xl opacity-0 transform translate-y-5" id="about-skills">
            <h3 className="text-xl md:text-2xl mb-5 text-[#1d3557] font-['Montserrat',sans-serif] font-semibold">My Expertise</h3>
            <p className="text-gray-700">I've honed my expertise through rigorous programs and hands-on experiences designed to develop a comprehensive understanding of both business and technology.</p>
            <div className="mt-5 flex flex-wrap">
              <span className="inline-block bg-[rgba(230,57,70,0.1)] text-[#e63946] py-2 px-4 rounded-full m-1 font-medium text-sm">React</span>
              <span className="inline-block bg-[rgba(230,57,70,0.1)] text-[#e63946] py-2 px-4 rounded-full m-1 font-medium text-sm">JavaScript</span>
              <span className="inline-block bg-[rgba(230,57,70,0.1)] text-[#e63946] py-2 px-4 rounded-full m-1 font-medium text-sm">Ruby on Rails</span>
              <span className="inline-block bg-[rgba(230,57,70,0.1)] text-[#e63946] py-2 px-4 rounded-full m-1 font-medium text-sm">MySQL</span>
              <span className="inline-block bg-[rgba(230,57,70,0.1)] text-[#e63946] py-2 px-4 rounded-full m-1 font-medium text-sm">PostgreSQL</span>
              <span className="inline-block bg-[rgba(230,57,70,0.1)] text-[#e63946] py-2 px-4 rounded-full m-1 font-medium text-sm">Digital Marketing</span>
              <span className="inline-block bg-[rgba(230,57,70,0.1)] text-[#e63946] py-2 px-4 rounded-full m-1 font-medium text-sm">Design Thinking</span>
              <span className="inline-block bg-[rgba(230,57,70,0.1)] text-[#e63946] py-2 px-4 rounded-full m-1 font-medium text-sm">UX Research</span>
              <span className="inline-block bg-[rgba(230,57,70,0.1)] text-[#e63946] py-2 px-4 rounded-full m-1 font-medium text-sm">Business Strategy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-[#f1faee] px-4 md:px-0">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-3xl md:text-4xl text-center mb-12 md:mb-16 relative pb-4 font-['Montserrat',sans-serif] font-bold after:content-[''] after:absolute after:w-20 after:h-1 after:bg-[#e63946] after:bottom-0 after:left-1/2 after:-translate-x-1/2">My Journey</h2>
        
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md relative transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl overflow-hidden opacity-0 transform translate-y-5 before:content-[''] before:absolute before:w-1 before:h-12 before:bg-[#e63946] before:left-0 before:top-8" id="exp-1">
            <h3 className="text-xl md:text-2xl mb-3 md:mb-4 text-[#1d3557] font-['Montserrat',sans-serif] font-semibold">McKinsey Forward Program</h3>
            <p className="text-gray-600 text-sm md:text-base">Gained critical thinking and problem-solving strategies tailored for the future of business, with a focus on effective communication and resilient leadership.</p>
          </div>
          
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md relative transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl overflow-hidden opacity-0 transform translate-y-5 before:content-[''] before:absolute before:w-1 before:h-12 before:bg-[#e63946] before:left-0 before:top-8" id="exp-2">
            <h3 className="text-xl md:text-2xl mb-3 md:mb-4 text-[#1d3557] font-['Montserrat',sans-serif] font-semibold">Coursera - Project Management</h3>
            <p className="text-gray-600 text-sm md:text-base">Learned how to leverage digital platforms and tools to create targeted strategies that drive business growth, build brand awareness, and enhance customer engagement.</p>
          </div>
          
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md relative transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl overflow-hidden opacity-0 transform translate-y-5 before:content-[''] before:absolute before:w-1 before:h-12 before:bg-[#e63946] before:left-0 before:top-8" id="exp-3">
            <h3 className="text-xl md:text-2xl mb-3 md:mb-4 text-[#1d3557] font-['Montserrat',sans-serif] font-semibold">IBM Enterprise Design Thinking Practitioner</h3>
            <p className="text-gray-600 text-sm md:text-base">Equipped with the tools to design products and services that meet real user needs, delivering exceptional user experiences while aligning with business objectives.</p>
          </div>
          
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md relative transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl overflow-hidden opacity-0 transform translate-y-5 before:content-[''] before:absolute before:w-1 before:h-12 before:bg-[#e63946] before:left-0 before:top-8" id="exp-4">
            <h3 className="text-xl md:text-2xl mb-3 md:mb-4 text-[#1d3557] font-['Montserrat',sans-serif] font-semibold">Moringa School Software Engineering</h3>
            <p className="text-gray-600 text-sm md:text-base">Completed a comprehensive Software Engineering course, including both front-end and back-end development. Proficient in modern technologies that help turn business ideas into tangible digital solutions.</p>
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
            <p className="mb-5 text-base md:text-lg text-gray-700">Whether you have a wild idea that needs taming or a business challenge that requires a tech solution, I'm here to help transform your vision into reality.</p>
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
      document.getElementById('contact-form')
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