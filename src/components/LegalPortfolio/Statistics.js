import React, { useRef, useEffect } from 'react';
import { FileText, BookOpen, Globe, Award, ArrowUpRight } from 'lucide-react';
import useCounter from './hooks/useCounter';

const Statistics = () => {
  const sectionRef = useRef(null);
  const [documentsHandled, docRef] = useCounter(10); // Legal documents in thousands (10K)
  const [jurisdictions, jurRef] = useCounter(2); // US and India
  const [researchPapers, resRef] = useCounter(4); // Based on legal research
  const [experience, expRef] = useCounter(5); // Years of experience

  // Refs for animation
  const textRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !textRef.current || !statsRef.current) return;

      const { top } = sectionRef.current.getBoundingClientRect();
      const isVisible = top < window.innerHeight * 0.7;

      if (isVisible) {
        textRef.current.classList.add('opacity-100', 'translate-y-0');
        textRef.current.classList.remove('opacity-0', 'translate-y-8');

        setTimeout(() => {
          statsRef.current.classList.add('opacity-100');
          statsRef.current.classList.remove('opacity-0');
        }, 400);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const stats = [
    {
      id: 'documents',
      icon: <FileText size={32} strokeWidth={1.5} />,
      value: documentsHandled,
      label: "Legal Documents",
      ref: docRef,
      delay: 0
    },
    {
      id: 'jurisdictions',
      icon: <Globe size={32} strokeWidth={1.5} />,
      value: jurisdictions,
      label: "Jurisdictions",
      ref: jurRef,
      delay: 200
    },
    {
      id: 'papers',
      icon: <BookOpen size={32} strokeWidth={1.5} />,
      value: researchPapers,
      label: "Research Papers",
      ref: resRef,
      delay: 400
    },
    {
      id: 'experience',
      icon: <Award size={32} strokeWidth={1.5} />,
      value: experience,
      label: "Years Experience",
      ref: expRef,
      delay: 600
    }
  ];

  return (
    <div
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 bg-rich-darker relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-emerald-dark/5 blur-[100px] rounded-full"></div>
      <div className="absolute -left-20 bottom-0 w-64 h-64 bg-emerald-dark/5 blur-[120px] rounded-full"></div>

      <div className="container relative z-10">
        {/* Symmetrical layout with grid */}
        <div className="grid grid-cols-12 gap-y-16 gap-x-6">
          {/* Centered text content */}
          <div
            ref={textRef}
            className="col-span-12 text-center mb-8 transition-all duration-1000 ease-elegant transform opacity-0 translate-y-8"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="h-px w-12 bg-emerald opacity-30 mr-4"></div>
              <span className="text-sm uppercase tracking-widest text-emerald/80">Experience & Expertise</span>
              <div className="h-px w-12 bg-emerald opacity-30 ml-4"></div>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl font-light text-white mb-6">
              Legal <span className="gradient-text">Excellence</span> in Numbers
            </h2>

            <p className="text-silver text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Expertise that spans across international legal frameworks, with a focus on precision and exceptional results across every case and document.
            </p>
          </div>

          {/* Full width stats grid with symmetrical layout */}
          <div
            ref={statsRef}
            className="col-span-12 opacity-0 transition-opacity duration-1000 ease-elegant"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 max-w-5xl mx-auto">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="glass-card p-6 md:p-8 backdrop-blur-md transform hover:translate-y-[-5px] transition-all duration-500 ease-elegant"
                  style={{
                    transitionDelay: `${stat.delay}ms`,
                    margin: '0', /* Remove staggered layout */
                    height: '180px',  /* Fixed height for all cards */
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center'
                  }}
                >
                  <div className="mb-4 flex justify-center">
                    <div className="w-12 h-12 rounded-lg glass-card flex items-center justify-center text-emerald">
                      {stat.icon}
                    </div>
                  </div>

                  <div
                    ref={stat.ref}
                    className="font-serif font-light text-white mb-2 text-5xl text-center"
                  >
                    {stat.id === 'documents' ? `${stat.value}K` : stat.value}<span className="text-emerald-light">+</span>
                  </div>

                  <div className="text-silver uppercase tracking-wider text-sm text-center">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Centered experience button */}
            <div className="text-center mt-12">
              <a
                href="#experience"
                className="inline-flex items-center glass-card px-6 py-3 text-emerald-light border-emerald/20 hover:border-emerald/60 transition-all duration-300 group"
              >
                <span className="mr-3 text-sm uppercase tracking-wider">View Experience</span>
                <div className="w-8 h-8 rounded-full bg-emerald/10 flex items-center justify-center group-hover:bg-emerald/20 transition-colors duration-300">
                  <ArrowUpRight size={16} className="text-emerald-light" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;