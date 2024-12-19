import React, { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const logoRef = useRef(null);
  const navLinksRef = useRef([]);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    // GSAP animation for logo
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, rotate: -180 },
      {
        opacity: 1,
        rotate: 0,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)",
      }
    );

    // GSAP staggered animation for navigation links (desktop)
    gsap.fromTo(
      navLinksRef.current,
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);

  useEffect(() => {
    if (menuOpen) {
      // Open menu animation
      gsap.to(menuRef.current, {
        duration: 0.5,
        opacity: 1,
        y: 0,
        display: "block",
        ease: "power3.out",
      });

      // GSAP staggered animation for mobile navigation links
      gsap.fromTo(
        menuRef.current.children,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
        }
      );
    } else {
      // Close menu animation
      gsap.to(menuRef.current, {
        duration: 0.5,
        opacity: 0,
        y: -50,
        display: "none",
        ease: "power3.in",
      });
    }
  }, [menuOpen]);

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
          {["Home", "About", "Education", "Portfolio", "Contact"].map(
            (item, index) => (
              <Link
                key={index}
                ref={(el) => (navLinksRef.current[index] = el)}
                to={
                  item === "Home"
                    ? "/"
                    : item === "Portfolio"
                    ? "/Portfolio1"
                    : `/${item}`
                }
                className="text-lg hover:text-yellow-400"
              >
                {item}
              </Link>
            )
          )}
        </div>
      </div>

      {/* Mobile Menu (Visible when the menu is open on small screens) */}
      <div
        ref={menuRef}
        className="sm:block md:hidden bg-zinc-800 p-5 text-center shadow-lg absolute top-full left-0 right-0 hidden"
      >
        {["Home", "About", "Education", "Portfolio", "Contact"].map(
          (item, index) => (
            <Link
              key={index}
              to={
                item === "Home"
                  ? "/portfolio"
                  : item === "Portfolio"
                  ? "/Portfolio1"
                  : `/${item}`
              }
              className="block py-2 text-lg hover:text-yellow-400"
            >
              {item}
            </Link>
          )
        )}
      </div>
    </div>
  );
}
