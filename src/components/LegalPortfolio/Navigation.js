import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

function Navigation({ isScrolled, isMenuOpen, setIsMenuOpen }) {
  const navItems = ['About', 'Practice', 'Experience', 'Testimonials', 'Contact'];
  const [activeItem, setActiveItem] = useState(null);

  // Track scroll position for section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      // Find the active section based on scroll position
      const sections = navItems.map(item => {
        const element = document.getElementById(item.toLowerCase());
        if (element) {
          return {
            id: item,
            offsetTop: element.offsetTop,
            height: element.offsetHeight
          };
        }
        return null;
      }).filter(Boolean);

      let current = null;
      for (const section of sections) {
        if (scrollPosition >= section.offsetTop &&
            scrollPosition < section.offsetTop + section.height) {
          current = section.id;
          break;
        }
      }

      setActiveItem(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ease-elegant ${
        isScrolled
          ? 'py-3 bg-glass-dark backdrop-blur-md shadow-lg'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 group relative">
            <span className="text-3xl font-serif tracking-tight flex items-center">
              <span className="gradient-text">Vaishnavi</span>
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-emerald group-hover:w-full transition-all duration-700 ease-elegant"></span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 xl:space-x-4">
            {navItems.map((item) => {
              const isActive = activeItem === item;
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`relative px-4 py-2 uppercase tracking-widest text-sm transition-all duration-300 ease-elegant group overflow-hidden ${
                    isActive
                      ? 'text-emerald-light'
                      : 'text-silver-light hover:text-emerald-light'
                  }`}
                >
                  <span className="relative z-10">{item}</span>
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[1px] bg-emerald transition-all duration-300 ease-elegant transform origin-left ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  ></span>
                  {isActive && (
                    <span className="absolute -left-1 bottom-0 w-[5px] h-[5px] rounded-full bg-emerald-light"></span>
                  )}
                </button>
              );
            })}
            <button
              onClick={() => scrollToSection('contact')}
              className="ml-4 glass-card px-6 py-2.5 text-emerald-light border-emerald/30 hover:border-emerald-light hover:shadow-emerald-glow transition-all duration-500 ease-elegant group"
            >
              <span className="flex items-center text-sm uppercase tracking-widest">
                Contact
                <ChevronRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-emerald-light transition-colors w-10 h-10 flex items-center justify-center rounded-full bg-glass-medium backdrop-blur-sm"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-rich-black/95 backdrop-blur-md transition-all duration-500 ease-elegant border-t border-glass-medium ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-6 py-4 space-y-1">
          {navItems.map((item) => {
            const isActive = activeItem === item;
            return (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`block w-full text-left px-4 py-3 transition-all duration-300 border-l-2 ${
                  isActive
                    ? 'text-emerald-light border-emerald-light pl-6'
                    : 'text-silver border-transparent hover:text-emerald-light hover:pl-6 hover:border-emerald/50'
                }`}
              >
                {item}
              </button>
            );
          })}
          <button
            onClick={() => scrollToSection('contact')}
            className="mt-4 w-full flex items-center justify-center px-6 py-3 bg-glass-medium backdrop-blur-sm text-emerald-light rounded-md hover:bg-emerald/10"
          >
            <span className="flex items-center text-sm uppercase tracking-wider">
              Contact Now
              <ChevronRight size={16} className="ml-1" />
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;