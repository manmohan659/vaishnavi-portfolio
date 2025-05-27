import React, { useRef, useEffect, useState } from 'react';
import { Mail, MapPin, Globe, Send, ArrowRight } from 'lucide-react';

const ContactSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const { top } = sectionRef.current.getBoundingClientRect();
      const isNowVisible = top < window.innerHeight * 0.8;

      if (isNowVisible && !isVisible) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);

  const contactInfo = [
    {
      icon: <Mail className="text-emerald-light" />,
      text: "vaishnavi.mandlekar24@my.stjohns.edu",
      link: "mailto:vaishnavi.mandlekar24@my.stjohns.edu"
    },
    {
      icon: <MapPin className="text-emerald-light" />,
      text: "Fresh Meadows, New York, NY",
      link: "#"
    },
    {
      icon: <Globe className="text-emerald-light" />,
      text: "US & Indian Legal Expertise",
      link: "#practice"
    }
  ];

  // Animation delays for staggered entrance
  const getDelay = (index) => ({ transitionDelay: `${index * 150}ms` });

  return (
    <div
      id="contact"
      ref={sectionRef}
      className="relative bg-rich-darker text-white py-24 md:py-32 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-[0.02] mix-blend-soft-light"></div>
      <div className="absolute -top-40 right-0 w-1/2 h-1/2 bg-emerald-dark/5 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-dark/5 blur-[120px] rounded-full"></div>

      <div className="absolute inset-0 opacity-5">
        <img
            src="/vimage.jpeg"
          alt="Background"
          className="w-full h-full object-cover object-center filter contrast-125 saturate-50"
        />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-12 gap-12 items-start">
          {/* Left side content */}
          <div
            className={`col-span-12 lg:col-span-5 transition-all duration-1000 ease-elegant transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            style={getDelay(0)}
          >
            <div className="flex items-center mb-4">
              <div className="h-px w-12 bg-emerald opacity-30 mr-4"></div>
              <span className="text-sm uppercase tracking-widest text-emerald/80">Get In Touch</span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl font-light text-white mb-6">
              Let's Discuss <span className="gradient-text">Your Requirements</span>
            </h2>

            <p className="text-silver text-lg leading-relaxed mb-12 max-w-lg">
              Schedule a consultation to discuss your legal documentation and compliance needs across US and Indian jurisdictions with an experienced professional.
            </p>

            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className={`flex items-center group transition-all duration-700 ease-elegant transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                  style={getDelay(index + 1)}
                >
                  <div className="w-12 h-12 glass-card rounded-lg flex items-center justify-center transition-all duration-300 group-hover:shadow-emerald-sm">
                    {info.icon}
                  </div>
                  <span className="ml-4 text-lg group-hover:text-emerald-light transition-colors">{info.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right side form */}
          <div
            className={`col-span-12 lg:col-span-6 lg:col-start-7 transition-all duration-1000 ease-elegant transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            style={getDelay(4)}
          >
            <form className="glass-card p-8 md:p-10 backdrop-blur-xl">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm uppercase tracking-wider text-silver-light mb-3">Full Name</label>
                  <input
                    type="text"
                    className="w-full p-4 rounded-md bg-glass-medium border border-glass-medium text-white placeholder-silver/50 focus:outline-none focus:border-emerald/50 focus:shadow-emerald-sm transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm uppercase tracking-wider text-silver-light mb-3">Email Address</label>
                  <input
                    type="email"
                    className="w-full p-4 rounded-md bg-glass-medium border border-glass-medium text-white placeholder-silver/50 focus:outline-none focus:border-emerald/50 focus:shadow-emerald-sm transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm uppercase tracking-wider text-silver-light mb-3">Service Required</label>
                  <select className="w-full p-4 rounded-md bg-glass-medium border border-glass-medium text-white focus:outline-none focus:border-emerald/50 focus:shadow-emerald-sm transition-all duration-300 appearance-none">
                    <option value="" className="text-gray-800">Select Service</option>
                    <option value="contracts" className="text-gray-800">Contract Management</option>
                    <option value="compliance" className="text-gray-800">Legal Compliance</option>
                    <option value="documentation" className="text-gray-800">Legal Documentation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm uppercase tracking-wider text-silver-light mb-3">Message</label>
                  <textarea
                    className="w-full p-4 rounded-md bg-glass-medium border border-glass-medium text-white placeholder-silver/50 focus:outline-none focus:border-emerald/50 focus:shadow-emerald-sm transition-all duration-300 h-32"
                    placeholder="Describe your requirements"
                  ></textarea>
                </div>

                <button className="w-full btn-primary py-4 group">
                  <span className="btn-primary-content">
                    Submit Inquiry
                    <Send size={18} className="ml-2 -rotate-45 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;