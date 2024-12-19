import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useGSAP } from './gsap'; // Import the context

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { animateMenu, logoRef, menuRef, navLinksRef } = useGSAP(); // Consume the context

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    animateMenu(menuOpen); // Trigger GSAP animation on menu toggle
  }, [menuOpen, animateMenu]);

  return (
    <div className="fixed top-0 left-0 right-0 bg-zinc-700 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <h1 ref={logoRef} className="text-xl lg:text-5xl font-semibold">
            Harsh
          </h1>
        </div>

        {/* Menu Icon (for small screens) */}
        <div className="sm:hidden md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {menuOpen ? <AiOutlineClose /> : <FaBars />}
          </button>
        </div>

        {/* Navigation (Visible on medium screens and up) */}
        <div className="hidden sm:flex md:flex space-x-4">
          {['Home', 'About', 'Education', 'Portfolio', 'Contact'].map((item, index) => (
            <Link
              key={index}
              ref={(el) => (navLinksRef.current[index] = el)}
              to={item === 'Home' ? '/' : item === 'Portfolio' ? '/Portfolio1' : `/${item}`}
              className="text-lg hover:text-yellow-400"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu (Visible when the menu is open on small screens) */}
      <div
        ref={menuRef}
        className="sm:block md:hidden bg-zinc-800 p-5 text-center shadow-lg absolute top-full left-0 right-0"
        style={{ visibility: menuOpen ? 'visible' : 'hidden' }}
      >
        {['Home', 'About', 'Education', 'Portfolio', 'Contact'].map((item, index) => (
          <Link
            key={index}
            to={item === 'Home' ? '/portfolio' : item === 'Portfolio' ? '/Portfolio1' : `/${item}`}
            className="block py-2 text-lg hover:text-yellow-400"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}
