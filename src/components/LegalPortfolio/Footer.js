import React, { useRef, useEffect, useState } from 'react';
import { ArrowUp, MapPin, Clock, Mail, Phone, Linkedin, Mail as MailIcon, Globe } from 'lucide-react';

const Footer = () => {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // For scroll-to-top
  const [showScrollTop, setShowScrollTop] = useState(false);

  const quickLinks = ['About', 'Practice Areas', 'Experience', 'Testimonials', 'Contact'];
  const practiceAreas = [
    'Contract Management',
    'International Compliance',
    'Legal Documentation',
    'Corporate Law'
  ];

  useEffect(() => {
    const handleScroll = () => {
      // For footer animations
      if (footerRef.current) {
        const { top } = footerRef.current.getBoundingClientRect();
        if (top < window.innerHeight * 0.9 && !isVisible) {
          setIsVisible(true);
        }
      }

      // For scroll-to-top button
      setShowScrollTop(window.pageYOffset > 500);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Animation classes based on visibility
  const animateUp = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8';
  const animationDelay = (index) => ({ transitionDelay: `${index * 150}ms` });

  return (
    <footer
      ref={footerRef}
      className="bg-rich-darker text-white py-20 md:py-24 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-[0.02] mix-blend-soft-light"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-emerald-dark/3 blur-[150px] rounded-full"></div>
      <div className="absolute top-1/4 left-1/4 w-1/3 h-1/3 bg-emerald-dark/2 blur-[120px] rounded-full"></div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed right-8 bottom-8 w-12 h-12 rounded-full glass-card flex items-center justify-center text-emerald-light border-emerald/30 hover:border-emerald-light hover:shadow-emerald-glow z-50 transition-all duration-500 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'
        }`}
      >
        <ArrowUp size={20} />
      </button>

      <div className="container relative z-10">
        <div className="grid grid-cols-12 gap-y-12 gap-x-6 md:gap-x-8">
          {/* Logo & Description */}
          <div
            className={`col-span-12 lg:col-span-4 xl:col-span-5 transition-all duration-1000 ease-elegant transform ${animateUp}`}
            style={animationDelay(0)}
          >
            <span className="text-3xl font-serif tracking-wider inline-flex items-center">
              <span className="gradient-text">Vaishnavi</span>
            </span>

            <p className="mt-6 text-silver max-w-md">
              Dedicated to providing exceptional legal services with integrity and personalized attention.
              Specializing in international legal frameworks across US and Indian jurisdictions.
            </p>

            <div className="mt-8 flex space-x-5">
              {/* Social icons */}
              <a
                href="https://www.linkedin.com/in/vaishnavi-mandlekar-385158167/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-silver hover:text-emerald-light hover:border-emerald/40 transition-all duration-300"
                style={{ transitionDelay: '0ms' }}
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:vaishnavi.mandlekar24@my.stjohns.edu"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-silver hover:text-emerald-light hover:border-emerald/40 transition-all duration-300"
                style={{ transitionDelay: '100ms' }}
                aria-label="Email"
              >
                <MailIcon size={18} />
              </a>
              <a
                href="#practice"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-silver hover:text-emerald-light hover:border-emerald/40 transition-all duration-300"
                style={{ transitionDelay: '200ms' }}
                aria-label="Practice Areas"
              >
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div
            className={`col-span-6 md:col-span-4 lg:col-span-2 xl:col-span-2 transition-all duration-1000 ease-elegant transform ${animateUp}`}
            style={animationDelay(1)}
          >
            <h3 className="text-base font-serif uppercase tracking-wider text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((item, i) => (
                <li key={item} className="transform transition-all duration-500" style={{ transitionDelay: `${i * 50 + 100}ms` }}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                    className="text-silver hover:text-emerald-light transition-colors group flex items-center"
                  >
                    <span className="w-0 h-px bg-emerald-light mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div
            className={`col-span-6 md:col-span-4 lg:col-span-2 xl:col-span-2 transition-all duration-1000 ease-elegant transform ${animateUp}`}
            style={animationDelay(2)}
          >
            <h3 className="text-base font-serif uppercase tracking-wider text-white mb-6">Practice Areas</h3>
            <ul className="space-y-4">
              {practiceAreas.map((item, i) => (
                <li key={item} className="transform transition-all duration-500" style={{ transitionDelay: `${i * 50 + 100}ms` }}>
                  <a
                    href="#practice"
                    className="text-silver hover:text-emerald-light transition-colors group flex items-center"
                  >
                    <span className="w-0 h-px bg-emerald-light mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div
            className={`col-span-12 md:col-span-4 lg:col-span-4 xl:col-span-3 transition-all duration-1000 ease-elegant transform ${animateUp}`}
            style={animationDelay(3)}
          >
            <h3 className="text-base font-serif uppercase tracking-wider text-white mb-6">Contact</h3>
            <ul className="space-y-5">
              <li className="flex items-start text-silver">
                <MapPin className="mr-3 text-emerald flex-shrink-0 mt-1" size={18} />
                <address className="not-italic">
                  <p>Fresh Meadows, New York</p>
                  <p>NY 11365</p>
                </address>
              </li>
              <li className="flex items-center text-silver">
                <Clock className="mr-3 text-emerald flex-shrink-0" size={18} />
                <div>
                  <p>Monday - Friday</p>
                  <p>9:00 AM - 6:00 PM EST</p>
                </div>
              </li>
              <li className="flex items-center text-silver">
                <Mail className="mr-3 text-emerald flex-shrink-0" size={18} />
                <a href="mailto:vaishnavi.mandlekar24@my.stjohns.edu" className="hover:text-emerald-light transition-colors">
                  vaishnavi.mandlekar24@my.stjohns.edu
                </a>
              </li>
              <li className="flex items-center text-silver">
                <Phone className="mr-3 text-emerald flex-shrink-0" size={18} />
                <a href="tel:+19297891156" className="hover:text-emerald-light transition-colors">
                  (929) 789-1156
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div
          className={`mt-16 pt-8 border-t border-glass-medium text-center text-silver-dark transition-all duration-1000 ease-elegant transform ${animateUp}`}
          style={animationDelay(5)}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Vaishnavi Legal. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-6 text-sm">
              <a href="#" className="hover:text-emerald-light transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-emerald-light transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-emerald-light transition-colors">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;