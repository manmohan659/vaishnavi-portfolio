import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight, ChevronDown, Shield, FileText, Globe, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Fade in animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    // Fixed parallax scroll effect
    const handleScroll = () => {
      if (heroRef.current && imageRef.current && textRef.current) {
        const scrolled = Math.max(0, window.pageYOffset);

        // Limit the translateY to avoid image moving too far
        const maxTranslate = 200; // maximum pixels to translate
        const translateY = Math.min(scrolled * 0.3, maxTranslate);

        // Cap the scale to prevent distortion
        const maxScale = 1.1;
        const scale = Math.min(1 + scrolled * 0.0003, maxScale);

        // Keep transform within bounds and ensure image always covers the viewport
        imageRef.current.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
        textRef.current.style.transform = `translate3d(0, ${translateY * 0.4}px, 0)`;

        // Adjust opacity with a smoother fade
        const opacity = Math.max(1 - (scrolled * 0.0015), 0);
        textRef.current.style.opacity = opacity;
      }
    };

    // Mouse move effect for subtle 3D
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;

      const { clientX, clientY } = e;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (clientX - rect.left) / rect.width;
      const y = (clientY - rect.top) / rect.height;

      setMousePosition({ x, y });

      // Subtle movement for image, but preserve scroll transform
      if (imageRef.current) {
        // Get just the X and Y movement, without changing the scroll effect
        const moveX = (x - 0.5) * 10; // reduced intensity for smoother effect
        const moveY = (y - 0.5) * 10;

        // Only update mouse-based motion, scroll effect is handled by scroll handler
        const scrolled = Math.max(0, window.pageYOffset);
        const maxTranslate = 200;
        const translateY = Math.min(scrolled * 0.3, maxTranslate);
        const maxScale = 1.1;
        const scale = Math.min(1 + scrolled * 0.0003, maxScale);

        imageRef.current.style.transform = `translate3d(${moveX}px, ${translateY + moveY}px, 0) scale(${scale})`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Calculate spotlight position based on mouse
  const spotlightStyle = {
    background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(52, 211, 153, 0.15) 0%, transparent 50%)`
  };

  return (
    <div ref={heroRef} className="relative h-screen overflow-hidden">
      {/* Artistic spotlight overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-1000"
        style={spotlightStyle}
      ></div>

      {/* Background image with artistic treatment */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={imageRef}
          className="absolute inset-0 overflow-hidden transition-transform duration-700 ease-elegant will-change-transform"
          style={{ transform: 'translate3d(0, 0, 0) scale(1)' }}
        >
          {/* Dark overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-rich-darker/95 via-rich-black/90 to-emerald-darkest/50 z-10"></div>

          {/* Noise texture overlay */}
          <div className="absolute inset-0 bg-noise-pattern opacity-[0.03] mix-blend-soft-light z-20"></div>

          {/* Glow effects */}
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-emerald-dark/20 rounded-full blur-[100px] z-0"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-rich-darkest to-transparent z-10"></div>

          {/* Portrait with dramatic crop and filter */}
          <img
            src="/vimage.jpeg"
            alt="Vaishnavi"
            className={`w-[120%] h-[120%] -ml-[10%] -mt-[10%] object-cover object-center transition-all duration-1000 ease-elegant ${isLoaded ? 'blur-0' : 'blur-sm'}`}
        />
        </div>
      </div>

      {/* Content with asymmetrical layout */}
      <div
        ref={textRef}
        className={`relative z-30 h-full transition-all duration-1000 ease-elegant ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
      >
        <div className="container h-full grid grid-cols-12 items-center">
          <div className="col-span-12 lg:col-span-7 xl:col-span-6 space-y-8 xl:space-y-12 py-16">
            {/* Subtitle with gradient effect */}
            <div className="overflow-hidden">
              <p className="text-sm md:text-base uppercase tracking-ultra-wide font-light text-emerald/80 mb-4 ml-1">
                Legal Excellence
              </p>
            </div>

            {/* Main headline with dramatic typography */}
            <div className="overflow-hidden">
              <h1 className="font-serif font-light leading-tight">
                <span className="block opacity-90">Expert Legal</span>
                <span className="block gradient-text mt-1">Counsel Across Borders</span>
              </h1>
            </div>

            <div className="overflow-hidden delay-300">
              <p className="text-silver max-w-xl font-light leading-relaxed">
                Bridging legal frameworks between <span className="text-emerald-light font-normal">US and Indian jurisdictions</span> with specialized expertise in international compliance, contract management, and corporate documentation.
              </p>
            </div>

            {/* Practice area indicators */}
            <div className="flex flex-wrap gap-6 md:gap-10 mt-2 opacity-80">
              <div className="flex items-center gap-2">
                <FileText size={18} className="text-emerald-light" />
                <span className="text-silver-light text-sm">Contract Management</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe size={18} className="text-emerald-light" />
                <span className="text-silver-light text-sm">International Compliance</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield size={18} className="text-emerald-light" />
                <span className="text-silver-light text-sm">Legal Documentation</span>
              </div>
            </div>

            {/* CTA Buttons with glass effect */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 sm:pt-6">
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-primary group"
              >
                <span className="btn-primary-content">
                  Schedule Consultation
                  <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
              <button
                onClick={() => scrollToSection('practice')}
                className="btn-secondary group"
              >
                <span className="flex items-center">
                  View Practice Areas
                  <ArrowRight size={18} className="ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links - Floating */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col space-y-4">
        <a
          href="https://www.linkedin.com/in/vaishnavi-mandlekar-385158167/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-silver hover:text-emerald-light hover:border-emerald/40 hover:shadow-emerald-glow transition-all duration-300 group"
          aria-label="LinkedIn Profile"
        >
          <Linkedin size={20} className="group-hover:scale-110 transition-transform duration-300" />
        </a>
        <a
          href="mailto:vaishnavi.mandlekar24@my.stjohns.edu"
          className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-silver hover:text-emerald-light hover:border-emerald/40 hover:shadow-emerald-glow transition-all duration-300 group"
          aria-label="Email"
        >
          <Mail size={20} className="group-hover:scale-110 transition-transform duration-300" />
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="text-silver-light hover:text-emerald-light transition-colors flex flex-col items-center"
          aria-label="Scroll down"
        >
          <span className="text-xs uppercase tracking-widest mb-2 opacity-70">Scroll</span>
          <ChevronDown size={20} />
        </button>
      </div>
    </div>
  );
};

export default Hero;