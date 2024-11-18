import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="bg-zinc-800 py-8">
      {/* Footer Information (Name and Contact) */}
      <div className="text-center text-white mt-4">
        <p className="text-lg font-semibold">Chavada Harsh</p>
        <p>Email: <a href="mailto:chavada.harsh@example.com" className="text-teal-400 hover:underline">chavada.harsh@example.com</a></p>
        <p>Contact:8401247733</p>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-6 mt-4">
        <a
          href="https://www.facebook.com/chavada.harsh.56"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500 transition duration-300"
        >
          <FaFacebook size={30} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-pink-500 transition duration-300"
        >
          <FaInstagram size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/chavada-harsh-4b453a292/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-700 transition duration-300"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/Harsh122002"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-700 transition duration-300"
        >
          <FaGithub size={30} />
        </a>
      </div>

      {/* Footer Copyright */}
      <div className="text-center text-white mt-4">
        <p>© 2024 Chavada Harsh. All rights reserved.</p>
      </div>
    </div>
  );
}
