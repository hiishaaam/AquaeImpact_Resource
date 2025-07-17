import React, { useEffect, useRef } from 'react';
import Button from './button';

const Hero = ({ 
  title = "Transform Your Impact",
  subtitle = "Join the future of sustainable development with cutting-edge environmental solutions",
  ctaText = "Get Started",
  backgroundImage = null,
  className = '' 
}) => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleParallax = () => {
      if (heroRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        heroRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  return (
    <section className={`
      relative min-h-screen flex items-center justify-center overflow-hidden
      bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900
      ${className}
    `}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-2000" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      {/* Background Image with Parallax */}
      {backgroundImage && (
        <div 
          ref={heroRef}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm">
            <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse" />
            <span className="text-emerald-400 text-sm font-medium">Innovation in Action</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-white via-emerald-100 to-cyan-100 bg-clip-text text-transparent">
              {title}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="primary" size="lg" className="group">
              {ctaText}
              <svg 
                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { number: "10K+", label: "Projects Completed" },
              { number: "95%", label: "Success Rate" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-white/60 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero; 