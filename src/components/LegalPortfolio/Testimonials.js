import React, { useRef, useEffect, useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef(null);

  const testimonials = [
    {
      name: "Legal Expert in Automotive Industry",
      role: "Senior Executive at Leading Automotive Firm",
      text: "Vaishnavi's legal expertise was instrumental in our company's successful international expansion. Her deep understanding of both US and Indian legal frameworks provided us with the clarity and strategic advantage we needed in complex negotiations.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23065f46'/%3E%3Ctext x='50' y='60' font-family='Arial' font-size='24' fill='white' text-anchor='middle'%3ELE%3C/text%3E%3C/svg%3E"
    },
    {
      name: "Startup Founder in Tech Sector",
      role: "Founder at Emerging Technology Company",
      text: "Working with Vaishnavi was transformative for our startup. Her guidance helped us navigate complex regulatory challenges with confidence. The contracts she drafted were comprehensive yet clear, saving us from potential pitfalls in our early-stage growth.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%2310b981'/%3E%3Ctext x='50' y='60' font-family='Arial' font-size='24' fill='white' text-anchor='middle'%3ESF%3C/text%3E%3C/svg%3E"
    },
    {
      name: "Financial Services Executive",
      role: "Senior Leader at Top Financial Institution",
      text: "Vaishnavi's understanding of both legal intricacies and business needs makes her an invaluable partner in our corporate dealings. Her cross-border expertise has been essential for our international transactions, minimizing risk while maximizing opportunity.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23047857'/%3E%3Ctext x='50' y='60' font-family='Arial' font-size='24' fill='white' text-anchor='middle'%3EFS%3C/text%3E%3C/svg%3E"
    },
    {
      name: "Business Leader in Innovation Sector",
      role: "Executive at Technology Innovation Firm",
      text: "I've worked with many legal professionals, but Vaishnavi stands out for her meticulous attention to detail and proactive approach. Her ability to anticipate legal challenges before they arise has saved our business both time and resources.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%2334d399'/%3E%3Ctext x='50' y='60' font-family='Arial' font-size='24' fill='white' text-anchor='middle'%3EBL%3C/text%3E%3C/svg%3E"
    }
  ];

  useEffect(() => {
    // Animation on scroll
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

    // Auto-advance testimonials
    const interval = setInterval(() => {
      if (!isDragging) {
        setActiveIndex(prev => (prev + 1) % testimonials.length);
      }
    }, 5000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, [testimonials.length, isVisible, isDragging]);

  // Handle drag functionality for mobile
  const handleMouseDown = (e) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Snap to nearest testimonial
    if (sliderRef.current) {
      const itemWidth = sliderRef.current.clientWidth;
      const newIndex = Math.round(sliderRef.current.scrollLeft / itemWidth);
      setActiveIndex(Math.min(newIndex, testimonials.length - 1));

      // Smooth scroll to the active testimonial
      sliderRef.current.scrollTo({
        left: newIndex * itemWidth,
        behavior: 'smooth'
      });
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiply for faster scroll
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !sliderRef.current) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleNavigation = (direction) => {
    let newIndex = activeIndex + direction;

    // Loop around when reaching the end
    if (newIndex < 0) newIndex = testimonials.length - 1;
    if (newIndex >= testimonials.length) newIndex = 0;

    setActiveIndex(newIndex);

    // Smooth scroll to the active testimonial
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: newIndex * sliderRef.current.clientWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div
      id="testimonials"
      ref={sectionRef}
      className="py-24 md:py-32 bg-rich-darkest relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-[0.02] mix-blend-soft-light"></div>
      <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-emerald-dark/5 blur-[80px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-emerald-dark/5 blur-[100px] rounded-full"></div>

      <div className="container relative z-10">
        {/* Asymmetrical header section */}
        <div className="grid grid-cols-12 mb-16 md:mb-24 items-end">
          <div className="col-span-12 md:col-span-7 mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <div className="h-px w-12 bg-emerald opacity-30 mr-4"></div>
              <span className="text-sm uppercase tracking-widest text-emerald/80">Client Experiences</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-white">
              Trusted by <span className="gradient-text">Industry Leaders</span>
            </h2>
          </div>

          <div className="col-span-12 md:col-span-5 flex justify-end">
            {/* Navigation controls */}
            <div className="flex space-x-4">
              <button
                onClick={() => handleNavigation(-1)}
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-silver hover:text-emerald-light hover:border-emerald/40 transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => handleNavigation(1)}
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-silver hover:text-emerald-light hover:border-emerald/40 transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonial carousel */}
        <div
          className="relative overflow-hidden"
          style={{
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            opacity: isVisible ? 1 : 0,
            transition: 'transform 0.8s ease-out, opacity 0.8s ease-out'
          }}
        >
          <div
            ref={sliderRef}
            className="flex snap-x snap-mandatory overflow-x-auto scrollbar-hide -mx-4 px-4 pb-6"
            style={{ scrollbarWidth: 'none', scrollBehavior: 'smooth' }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleMouseUp}
            onTouchMove={handleTouchMove}
          >
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                ref={el => cardsRef.current[i] = el}
                className="min-w-full snap-center px-4"
              >
                <div
                  className={`glass-card p-8 md:p-10 lg:p-12 transition-all duration-500 ease-elegant ${
                    i === activeIndex ? 'shadow-emerald-sm' : ''
                  }`}
                >
                  <div className="grid md:grid-cols-5 lg:grid-cols-3 gap-10">
                    {/* Testimonial content */}
                    <div className="md:col-span-3 lg:col-span-2 order-2 md:order-1">
                      <div className="mb-8 relative">
                        <Quote
                          size={36}
                          className="text-emerald-dark opacity-20 absolute -top-6 -left-4"
                        />
                        <p className="text-silver text-lg md:text-xl font-light leading-relaxed italic">
                          "{testimonial.text}"
                        </p>
                      </div>

                      <div className="flex items-center">
                        <div className="hidden sm:block w-12 h-12 rounded-full overflow-hidden mr-4 border border-emerald/20">
                          <img
                            src={testimonial.image}
                            alt={`Avatar for ${testimonial.name}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-serif text-white text-lg">{testimonial.name}</div>
                          <div className="text-silver text-sm">{testimonial.role}</div>
                        </div>
                      </div>
                    </div>

                    {/* Quote accent */}
                    <div className="hidden md:flex md:col-span-2 lg:col-span-1 order-1 md:order-2 items-center justify-center opacity-5">
                      <Quote size={160} className="text-emerald-light transform rotate-180" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicator dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? 'bg-emerald-light scale-100'
                    : 'bg-emerald-dark/30 scale-75'
                }`}
                onClick={() => {
                  setActiveIndex(i);
                  if (sliderRef.current) {
                    sliderRef.current.scrollTo({
                      left: i * sliderRef.current.clientWidth,
                      behavior: 'smooth'
                    });
                  }
                }}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;