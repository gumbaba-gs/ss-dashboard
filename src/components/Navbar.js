import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container-padding flex justify-between items-center">
        <div className="flex items-center">
          <a href="#home" className="text-2xl font-bold text-blue-900 hover:text-blue-700 transition-colors">
            Spanex Sciences
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-blue-900 hover:text-blue-600 transition-colors">Home</a>
          <a href="#about" className="text-blue-900 hover:text-blue-600 transition-colors">About</a>
          <a href="#products" className="text-blue-900 hover:text-blue-600 transition-colors">Products</a>
          <a href="#contact" className="text-blue-900 hover:text-blue-600 transition-colors">Contact</a>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-blue-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="container-padding flex flex-col space-y-4">
            <a 
              href="#home" 
              className="text-blue-900 hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-blue-900 hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a 
              href="#products" 
              className="text-blue-900 hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Products
            </a>
            <a 
              href="#contact" 
              className="text-blue-900 hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;