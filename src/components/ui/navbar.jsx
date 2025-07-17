import React, { useState, useEffect } from 'react';
import Button from './button';

const Navbar = ({ 
  logo = "AquaeImpact", 
  navigationItems = [], 
  ctaText = "Green Credits",
  className = '' 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out
      ${isScrolled 
        ? 'bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-xl' 
        : 'bg-transparent'
      }
      ${className}
    `}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Left aligned */}
          <div className="flex-shrink-0 flex items-center space-x-2">
            <img 
              src="/AQUAE.Impact-LOGO-REC-removebg-preview (2).svg" 
              alt="AquaeImpact Logo" 
              className="w-8 h-8"
            />
            <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              {logo}
            </div>
          </div>

          {/* Center Navigation */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-baseline space-x-8">
              {navigationItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.name.toLowerCase().replace(' ', '-')}`}
                  className={`
                    relative px-3 py-2 text-sm font-medium transition-all duration-300
                    ${item.active 
                      ? 'text-emerald-400' 
                      : 'text-white/80 hover:text-white'
                    }
                    group
                  `}
                >
                  {item.name}
                  <span className={`
                    absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent
                    transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300
                    ${item.active ? 'scale-x-100' : ''}
                  `} />
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button - Right aligned */}
          <div className="hidden md:block flex-shrink-0">
            <Button variant="primary" size="md">
              {ctaText}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-emerald-400 transition-colors duration-200"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`
        md:hidden transition-all duration-300 ease-out overflow-hidden
        ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
      `}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/10 backdrop-blur-xl border-t border-white/20">
          {navigationItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.name.toLowerCase().replace(' ', '-')}`}
              className={`
                block px-3 py-2 text-base font-medium transition-colors duration-200
                ${item.active 
                  ? 'text-emerald-400' 
                  : 'text-white/80 hover:text-white'
                }
              `}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <div className="pt-4">
            <Button variant="primary" size="sm" className="w-full">
              {ctaText}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 