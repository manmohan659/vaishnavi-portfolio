import React, { useRef, useEffect } from 'react';
import { FileText, Globe, Shield, ChevronRight, ArrowRight } from 'lucide-react';

const PracticeAreas = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const { top } = sectionRef.current.getBoundingClientRect();
      const isVisible = top < window.innerHeight * 0.8;

      if (isVisible) {
        cardsRef.current.forEach((card, index) => {
          if (!card) return;
          setTimeout(() => {
            card.classList.add('opacity-100', 'translate-y-0');
            card.classList.remove('opacity-0', 'translate-y-16');
          }, 100 * index);
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const areas = [
    {
      icon: <FileText className="text-emerald" size={32} />,
      title: "Contract Management",
      desc: "Expertise in drafting and managing complex legal agreements and documentation across multiple jurisdictions.",
      features: [
        "Service Agreements",
        "Amendment/Addendum Agreements",
        "Commercial Contracts"
      ]
    },
    {
      icon: <Globe className="text-emerald" size={32} />,
      title: "International Legal Compliance",
      desc: "Specialized knowledge in US and Indian legal frameworks ensuring cross-border regulatory compliance.",
      features: [
        "COPPA Compliance",
        "GDPR Compliance",
        "Cross-border Agreements"
      ]
    },
    {
      icon: <Shield className="text-emerald" size={32} />,
      title: "Legal Documentation",
      desc: "Comprehensive experience preparing sophisticated legal documents and policies with precision and clarity.",
      features: [
        "Website Policies",
        "Legal Agreements",
        "Corporate Documentation"
      ]
    }
  ];

  return (
    <div
      id="practice"
      ref={sectionRef}
      className="py-24 md:py-32 bg-rich-black relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-emerald-dark/5 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-emerald-dark/5 blur-[100px] rounded-full"></div>
      <div className="absolute top-40 right-40 w-24 h-24 bg-emerald/5 blur-lg rounded-full"></div>

      <div className="container relative z-10">
        {/* Asymmetrical header layout */}
        <div className="grid grid-cols-12 mb-16 items-end">
          <div className="col-span-12 md:col-span-8 lg:col-span-6">
            <div className="flex items-center mb-4">
              <div className="h-px w-12 bg-emerald opacity-30 mr-4"></div>
              <span className="text-sm uppercase tracking-widest text-emerald/80">Specialized Services</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-white mb-4">
              Areas of <span className="gradient-text">Expertise</span>
            </h2>
          </div>
          <div className="hidden md:block md:col-span-4 lg:col-span-5 lg:col-start-8">
            <p className="text-silver leading-relaxed">
              Bridging complex legal challenges with specialized expertise and a global perspective.
            </p>
          </div>
        </div>

        {/* Aligned card layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-20 lg:gap-x-10">
          {areas.map((area, i) => (
            <div
              key={i}
              ref={el => cardsRef.current[i] = el}
              className="glass-card p-8 md:p-10 transition-all duration-700 ease-elegant transform opacity-0 translate-y-16"
            >
              <div className="mb-8 relative">
                <div className="w-16 h-16 flex items-center justify-center rounded-lg glass-card backdrop-blur-xl emerald-glow">
                  {area.icon}
                </div>
                <div className="absolute w-full h-full -inset-1 bg-emerald/5 rounded-lg blur-lg -z-10"></div>
              </div>

              <h3 className="text-xl md:text-2xl font-light text-white mb-4">
                {area.title}
              </h3>

              <p className="text-silver mb-8 leading-relaxed">
                {area.desc}
              </p>

              <ul className="space-y-4">
                {area.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-silver-light group">
                    <div className="w-8 h-8 rounded-full border border-emerald/20 flex items-center justify-center mr-3 group-hover:border-emerald/70 transition-colors duration-300">
                      <ChevronRight className="text-emerald w-4 h-4" />
                    </div>
                    <span className="group-hover:text-white transition-colors duration-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 pt-6 border-t border-glass-medium">
                <a href="#contact" className="inline-flex items-center text-emerald-light text-sm uppercase tracking-wider group">
                  <span>Learn More</span>
                  <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PracticeAreas;