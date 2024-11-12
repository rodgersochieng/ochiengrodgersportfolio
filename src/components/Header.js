
import React from "react";
import { FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

function Header() {
  return (
    <div>
      <header className="flex justify-end space-x-4 p-4">
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/ochieng-o-rodgers" className="hover:underline" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </a>

        {/* WhatsApp */}
        <a href="https://wa.me/+254729942447" className="hover:underline" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={24} />
        </a>

        {/* Email */}
        <a href="mailto:sirrodgers21@gmail.com" className="hover:underline">
          <FaEnvelope size={24} />
        </a>
      </header>
      <hr className="border-t-1 border-white-200" /> {/* Straight line below the header */}
    </div>
  );
}

export default Header;

