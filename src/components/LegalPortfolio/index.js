import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import Statistics from './Statistics';
import PracticeAreas from './PracticeAreas';
import Testimonials from './Testimonials';
import ContactSection from './ContactSection';
import Footer from './Footer';
import { Scale, Calendar, Building2, GraduationCap, Plane, ChevronRight } from 'lucide-react';

const LegalPortfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Debug: Check if animations are loading
  useEffect(() => {
    console.log('🛩️ LegalPortfolio component mounted');
    console.log('🎨 Checking animation classes...');
    
    const checkAnimations = () => {
      const planeElements = document.querySelectorAll('.timeline-plane-right, .timeline-plane-left');
      const pathElements = document.querySelectorAll('.timeline-path');
      
      console.log('✈️ Found plane elements:', planeElements.length);
      console.log('🛤️ Found path elements:', pathElements.length);
      
      planeElements.forEach((el, index) => {
        const computedStyle = window.getComputedStyle(el);
        console.log(`✈️ Plane ${index}:`, {
          classes: el.className,
          animation: computedStyle.animation,
          transform: computedStyle.transform,
          color: computedStyle.color,
          filter: computedStyle.filter,
          visibility: computedStyle.visibility
        });
      });
      
      pathElements.forEach((el, index) => {
        const computedStyle = window.getComputedStyle(el);
        console.log(`🛤️ Path ${index}:`, {
          classes: el.className,
          animation: computedStyle.animation,
          backgroundColor: computedStyle.backgroundColor,
          boxShadow: computedStyle.boxShadow,
          width: computedStyle.width,
          height: computedStyle.height
        });
      });
    };
    
    // Check immediately and after a delay
    setTimeout(checkAnimations, 100);
    setTimeout(checkAnimations, 1000);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    document.documentElement.style.scrollBehavior = 'smooth';


    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  const handleMenuClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className={`min-h-screen bg-rich-black ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-1000'}`}>
      {isLoading && (
        <div className="fixed inset-0 bg-rich-darkest flex items-center justify-center z-50">
          <Scale className="text-emerald-light animate-spin" size={48} />
        </div>
      )}
      
      <Navigation 
        isScrolled={isScrolled} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen}
        onMenuClick={handleMenuClick}
      />
      
      <main>

        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <Statistics />
        </section>

        <section id="practice">
          <PracticeAreas />
        </section>

        {/* Experience Section - Divided into Education and Professional Experience */}
        <section id="experience" className="py-24 md:py-32 bg-rich-black relative overflow-visible">
          {/* Background elements */}
          <div className="absolute inset-0 bg-noise-pattern opacity-[0.02] mix-blend-soft-light"></div>
          <div className="absolute -top-40 left-0 w-1/3 h-1/3 bg-emerald-dark/5 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-40 right-20 w-64 h-64 bg-emerald-dark/5 blur-[100px] rounded-full"></div>

          <div className="container relative z-10">
            {/* Story intro */}
            <div className="mb-16 max-w-3xl mx-auto text-center">
              <p className="text-silver text-xl italic leading-relaxed">
                My journey in international legal practice has taken me from academic excellence to specialized practice,
                building expertise across jurisdictions while crafting innovative legal solutions for diverse clients.
              </p>
            </div>

            {/* Education Section */}
            <div className="mb-32">
              <div className="grid grid-cols-12 mb-16 items-end">
                <div className="col-span-12 md:col-span-7 mb-8 md:mb-0">
                  <div className="flex items-center mb-4">
                    <div className="h-px w-12 bg-emerald opacity-30 mr-4"></div>
                    <span className="text-sm uppercase tracking-widest text-emerald/80">Academic Path</span>
                  </div>
                  <h2 className="font-serif text-4xl md:text-5xl font-light text-white mb-4">
                    <span className="gradient-text">Education</span>
                  </h2>
                </div>
              </div>

              <div className="relative">
                {/* Timeline line for Education */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-transparent via-emerald-dark/30 to-transparent hidden lg:block"></div>

                {/* Education Cards */}
                <div className="space-y-12 md:space-y-20">
                  {/* DR.D.Y. PATIL UNIVERSITY - Bachelor's */}
                  <div id="patil-edu" className="glass-card p-6 md:p-8 lg:p-12 hover:shadow-emerald-sm transition-all duration-500 ease-elegant relative lg:ml-6 lg:mr-auto lg:w-[calc(50%-24px)]">
                    <div className="grid md:grid-cols-12 gap-8">
                      <div className="md:col-span-4 space-y-6">
                        <div className="inline-flex glass-card p-3 rounded-xl bg-glass-light backdrop-filter backdrop-blur-xl mb-4">
                          <GraduationCap className="text-emerald" size={24} />
                        </div>

                        <h3 className="text-2xl font-serif font-light text-white">
                          Bachelor of Legal Science and Bachelor of Law
                        </h3>

                        <div className="space-y-1 text-silver">
                          <p className="font-medium text-lg">DR.D.Y. PATIL UNIVERSITY</p>
                          <p className="font-medium text-lg">New Bombay, India</p>
                          <div className="flex items-center text-sm">
                            <Calendar className="mr-2 text-emerald-light" size={16} />
                            <span>October 2020</span>
                          </div>
                        </div>
                      </div>

                      <div className="md:col-span-8">
                        <div className="relative pl-6 border-l border-glass-medium space-y-6">
                          {[
                            'Graduated with First Class distinction, demonstrating exceptional academic performance.',
                            'Volunteer/Teacher in Rural India, contributing to legal education and community development.',
                            'Research Assistant for Bankruptcy and Insolvency Clinic, gaining practical experience in complex legal proceedings.'
                          ].map((point, index) => (
                            <div key={index} className="animated-element">
                              <p className="text-silver text-lg leading-relaxed">
                                {point}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* REVA UNIVERSITY - Master's */}
                  <div id="reva-edu" className="glass-card p-6 md:p-8 lg:p-12 hover:shadow-emerald-sm transition-all duration-500 ease-elegant relative lg:ml-auto lg:mr-6 lg:w-[calc(50%-24px)]">
                    <div className="grid md:grid-cols-12 gap-8">
                      <div className="md:col-span-4 space-y-6">
                        <div className="inline-flex glass-card p-3 rounded-xl bg-glass-light backdrop-filter backdrop-blur-xl mb-4">
                          <GraduationCap className="text-emerald" size={24} />
                        </div>

                        <h3 className="text-2xl font-serif font-light text-white">
                          Master of Laws (LL.M.)
                        </h3>

                        <div className="space-y-1 text-silver">
                          <p className="font-medium text-lg">REVA UNIVERSITY</p>
                          <p className="font-medium text-lg">Bangalore, India</p>
                          <div className="flex items-center text-sm">
                            <Calendar className="mr-2 text-emerald-light" size={16} />
                            <span>September 2021</span>
                          </div>
                        </div>
                      </div>

                      <div className="md:col-span-8">
                        <div className="relative pl-6 border-l border-glass-medium space-y-6">
                          {[
                            'Graduated in Top 5 percent with First Class distinction, demonstrating exceptional academic excellence.',
                            'Conducted comprehensive dissertation on "A study on challenges faced in strict implementation of International Labor Organization\'s Core Child Labor Conventions in India."',
                            'Specialized in international labor law and child protection frameworks with focus on policy implementation challenges.'
                          ].map((point, index) => (
                            <div key={index} className="animated-element">
                              <p className="text-silver text-lg leading-relaxed">
                                {point}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* ST JOHN'S UNIVERSITY SCHOOL OF LAW - Master's */}
                  <div id="stjohns-edu" className="glass-card p-6 md:p-8 lg:p-12 hover:shadow-emerald-sm transition-all duration-500 ease-elegant relative lg:ml-6 lg:mr-auto lg:w-[calc(50%-24px)]">
                    <div className="grid md:grid-cols-12 gap-8">
                      <div className="md:col-span-4 space-y-6">
                        <div className="inline-flex glass-card p-3 rounded-xl bg-glass-light backdrop-filter backdrop-blur-xl mb-4">
                          <GraduationCap className="text-emerald" size={24} />
                        </div>

                        <h3 className="text-2xl font-serif font-light text-white">
                          Master of Laws (LL.M.) in U.S. Legal Studies
                        </h3>

                        <div className="space-y-1 text-silver">
                          <p className="font-medium text-lg">ST JOHN'S UNIVERSITY SCHOOL OF LAW</p>
                          <p className="font-medium text-lg">Queens, NY</p>
                          <div className="flex items-center text-sm">
                            <Calendar className="mr-2 text-emerald-light" size={16} />
                            <span>Expected May 2026</span>
                          </div>
                        </div>
                      </div>

                      <div className="md:col-span-8">
                        <div className="relative pl-6 border-l border-glass-medium space-y-6">
                          {[
                            'Recipient of Partial Academic Scholarship for exceptional academic merit and potential.',
                            'Active Member of Corporate and Securities Law Society, engaging with cutting-edge business law developments.',
                            'Committee Member of Public Interest Center and volunteer with CLARO, demonstrating commitment to public service and legal aid.'
                          ].map((point, index) => (
                            <div key={index} className="animated-element">
                              <p className="text-silver text-lg leading-relaxed">
                                {point}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Experience Section */}
            <div>
              <div className="grid grid-cols-12 mb-16 items-end">
                <div className="col-span-12 md:col-span-7 mb-8 md:mb-0">
                  <div className="flex items-center mb-4">
                    <div className="h-px w-12 bg-emerald opacity-30 mr-4"></div>
                    <span className="text-sm uppercase tracking-widest text-emerald/80">Career Journey</span>
                  </div>
                  <h2 className="font-serif text-4xl md:text-5xl font-light text-white mb-4">
                    Professional <span className="gradient-text">Experience</span>
                  </h2>
                </div>
              </div>

              <div className="relative">
                {/* Timeline line for Professional Experience */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-transparent via-emerald-dark/30 to-transparent hidden lg:block"></div>

                {/* Professional Experience Cards */}
                <div className="space-y-12 md:space-y-20">
                  {/* Administrative Assistant (Legal) - Queens County Bar Association (First) */}
                  <div id="queens-exp" className="glass-card p-6 md:p-8 lg:p-12 hover:shadow-emerald-sm transition-all duration-500 ease-elegant relative lg:ml-6 lg:mr-auto lg:w-[calc(50%-24px)]">
                    <div className="grid md:grid-cols-12 gap-8">
                      <div className="md:col-span-4 space-y-6">
                        <div className="inline-flex glass-card p-3 rounded-xl bg-glass-light backdrop-filter backdrop-blur-xl mb-4">
                          <Building2 className="text-emerald" size={24} />
                        </div>

                        <h3 className="text-2xl font-serif font-light text-white">
                          Administrative Assistant (Legal)
                        </h3>

                        <div className="space-y-1 text-silver">
                          <p className="font-medium text-lg">Queens County Bar Association</p>
                          <p className="font-medium text-lg">New York, NY</p>
                          <div className="flex items-center text-sm">
                            <Calendar className="mr-2 text-emerald-light" size={16} />
                            <span>Present</span>
                          </div>
                        </div>
                      </div>

                      <div className="md:col-span-8">
                        <div className="relative pl-6 border-l border-glass-medium space-y-6">
                          {[
                            'Assisting individuals daily by offering legal guidance and addressing legal inquiries across multiple practice areas.',
                            'Researching various laws, including Family Law, Criminal Law, Landlord-Tenant Law, and Disputes for comprehensive case support.',
                            'Analyzing case studies, maintaining organized records, and ensuring efficient case management while drafting and managing legal correspondence with accuracy and clarity.'
                          ].map((point, index) => (
                            <div key={index} className="animated-element">
                              <p className="text-silver text-lg leading-relaxed">
                                {point}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Advocate Associate - I.V MERCHANT & CO. (Second) */}
                  <div id="ivmerchant-exp" className="glass-card p-6 md:p-8 lg:p-12 hover:shadow-emerald-sm transition-all duration-500 ease-elegant relative lg:ml-auto lg:mr-6 lg:w-[calc(50%-24px)]">
                    <div className="grid md:grid-cols-12 gap-8">
                      <div className="md:col-span-4 space-y-6">
                        <div className="inline-flex glass-card p-3 rounded-xl bg-glass-light backdrop-filter backdrop-blur-xl mb-4">
                          <Building2 className="text-emerald" size={24} />
                        </div>

                        <h3 className="text-2xl font-serif font-light text-white">
                          Advocate Associate
                        </h3>

                        <div className="space-y-1 text-silver">
                          <p className="font-medium text-lg">I.V MERCHANT & CO.</p>
                          <p className="font-medium text-lg">Mumbai, India</p>
                          <div className="flex items-center text-sm">
                            <Calendar className="mr-2 text-emerald-light" size={16} />
                            <span>May 2023 – July 2024</span>
                          </div>
                        </div>
                      </div>

                      <div className="md:col-span-8">
                        <div className="relative pl-6 border-l border-glass-medium space-y-6">
                          {[
                            'Drafted complex agreements including leases, purchase/sale agreements, and shareholder agreements for cross-border transactions.',
                            'Researched US laws including Small Business Entity Tax Pass Through Act and Uniform Limited Liability Company Act for Arkansas LLC compliance.',
                            'Conducted data privacy law research (COPPA, GDPR) and formulated website policies for international companies operating across US and Indian jurisdictions.'
                          ].map((point, index) => (
                            <div key={index} className="animated-element">
                              <p className="text-silver text-lg leading-relaxed">
                                {point}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Legal Associate - WRITER BUSINESS SERVICES PRIVATE LIMITED (Third/Last) */}
                  <div id="writer-exp" className="glass-card p-6 md:p-8 lg:p-12 hover:shadow-emerald-sm transition-all duration-500 ease-elegant relative lg:ml-6 lg:mr-auto lg:w-[calc(50%-24px)]">
                    <div className="grid md:grid-cols-12 gap-8">
                      <div className="md:col-span-4 space-y-6">
                        <div className="inline-flex glass-card p-3 rounded-xl bg-glass-light backdrop-filter backdrop-blur-xl mb-4">
                          <Building2 className="text-emerald" size={24} />
                        </div>

                        <h3 className="text-2xl font-serif font-light text-white">
                          Legal Associate
                        </h3>

                        <div className="space-y-1 text-silver">
                          <p className="font-medium text-lg">Writer Business Services Private Limited</p>
                          <p className="font-medium text-lg">Mumbai, India</p>
                          <div className="flex items-center text-sm">
                            <Calendar className="mr-2 text-emerald-light" size={16} />
                            <span>April 2022 – May 2023</span>
                          </div>
                        </div>
                      </div>

                      <div className="md:col-span-8">
                        <div className="relative pl-6 border-l border-glass-medium space-y-6">
                          {[
                            'Drafted international and domestic commercial and service contracts, amendments, and addendums with precision and attention to legal detail.',
                            'Worked closely with legal team, sales team and Chief Financial Officer to negotiate with clients on confidentiality, arbitration and intellectual property clauses.',
                            'Assisted in-house legal team in taking action against default customers by drafting legal notices and attended arbitration proceedings to ensure favorable outcomes.'
                          ].map((point, index) => (
                            <div key={index} className="animated-element">
                              <p className="text-silver text-lg leading-relaxed">
                                {point}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials">
          <Testimonials />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LegalPortfolio;