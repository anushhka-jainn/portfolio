import { FiLinkedin, FiGithub, FiTwitter, FiInstagram, FiArrowUp } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import React from 'react'
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Check scroll position to show/hide scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();
  
  // Social media links
  const socialLinks = [
    {
      icon: <FiLinkedin />,
      url: "https://www.linkedin.com/in/anushka-jain-7a7431249/",
      label: "LinkedIn"
    },
    {
      icon: <FiGithub />,
      url: "https://github.com/anushhka-jainn",
      label: "GitHub"
    },
    {
      icon: <SiLeetcode />,
      url: "https://leetcode.com/u/anushhka_jainn/",
      label: "Leetcode"
    }
    // {
    //   icon: <FiInstagram />,
    //   url: "",
    //   label: "Instagram"
    // }
  ];
  
  // Footer navigation links
  const navLinks = [
    { name: "Home", url: "#home" },
    { name: "About", url: "#about" },
    { name: "Projects", url: "#projects" },
    { name: "Skills", url: "#skills" },
    { name: "Contact", url: "#contact" }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Anushka Jain</h3>
            <p className="text-gray-400 mb-4">
              Frontend Developer passionate about creating intuitive and engaging web experiences with modern technologies.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-xl font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Web Development</li>
              {/* <li>UI/UX Design</li> */}
              <li>React Applications</li>
              <li>Frontend Architecture</li>
              <li>Code Reviews</li>
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <address className="not-italic text-gray-400">
              <p className="mb-2">Ghaziabad, India</p>
              <p className="mb-2">
                <a href="#" className="hover:text-white transition-colors">
                  anushkajain3985@gmail.com
                </a>
              </p>
              <p>
                <a href="#" className="hover:text-white transition-colors">
                  +91 8269191128
                </a>
              </p>
            </address>
          </div>
        </div>
        
        {/* Divider */}
        <div className="h-px bg-gray-800 mb-8"></div>
        
        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Anushka Jain. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Designed & Built with <span className="text-red-500">♥</span> using React & Tailwind
          </p>
        </div>
      </div>
      
      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg hover:bg-indigo-700 transition-colors duration-300 z-50"
        >
          <FiArrowUp className="text-xl" />
        </button>
      )}
    </footer>
  );
};

export default Footer;