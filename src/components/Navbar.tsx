
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Courses', href: '#courses' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollPosition > 10 ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">&lt;/&gt;</span>
              </div>
              <span className="font-bold text-xl">CodeMasters</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-4">
            <a href="#" className="px-4 py-2 text-codeblack-700 font-medium rounded-md hover:text-orange transition-colors duration-300">
              Login
            </a>
            <a href="#contact" className="btn-primary">
              Join Now
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-codeblack-800" />
              ) : (
                <Menu className="h-6 w-6 text-codeblack-800" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white absolute w-full border-b border-gray-200 transition-all duration-300 ease-in-out transform ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <div className="container-custom py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-2 px-3 text-codeblack-800 hover:bg-gray-50 hover:text-orange rounded-md"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 pb-2 border-t border-gray-200 flex flex-col space-y-3">
            <a
              href="#"
              className="block py-2 px-3 text-center border border-gray-300 rounded-md hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Login
            </a>
            <a
              href="#contact"
              className="block py-2 px-3 text-center bg-orange text-white rounded-md hover:bg-orange-600"
              onClick={() => setIsOpen(false)}
            >
              Join Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
