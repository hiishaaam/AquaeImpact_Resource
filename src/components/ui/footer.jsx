import React from 'react';
import Button from './button';

const Footer = ({ 
  logo = "AquaeImpact",
  email = "contact@aquaeimpact.com",
  className = '' 
}) => {
  const footerLinks = [
    { title: "Company", links: ["Home", "Who We Are", "What We Do", "Resources", "Green Credits"] },
    { title: "Support", links: ["Help Center", "Contact Us", "Privacy Policy", "Terms of Service"] },
    { title: "Resources", links: ["Blog", "Case Studies", "Documentation", "API Reference"] }
  ];

  const socialLinks = [
    { name: "Twitter", icon: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" },
    { name: "LinkedIn", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
    { name: "GitHub", icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" }
  ];

  return (
    <footer className={`
      relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900
      border-t border-white/10
      ${className}
    `}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/AQUAE.Impact-LOGO-REC-removebg-preview (2).svg" 
                alt="AquaeImpact Logo" 
                className="w-10 h-10"
              />
              <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                {logo}
              </div>
            </div>
            <div className="text-white text-center lg:text-left mb-6">
              <p className="text-lg font-medium mb-2">hello@aquaeimpact.org</p>
              <p className="text-sm text-white/70">©2025 by AQUAE LABS PTE. LTD</p>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-md">
              Transforming environmental impact through innovative sustainable solutions. 
              Join us in creating a greener, more sustainable future for generations to come.
            </p>
            
            {/* Email */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-white/80 text-sm">{email}</span>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center 
                           border border-white/20 hover:bg-white/20 hover:border-white/30 
                           transition-all duration-300 group"
                >
                  <svg className="w-5 h-5 text-white/60 group-hover:text-emerald-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-white/60 hover:text-emerald-400 transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="max-w-md">
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <p className="text-white/60 text-sm mb-4">
              Get the latest insights on sustainable development and environmental innovation.
            </p>
            <div className="flex space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg
                         text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500
                         transition-all duration-200"
              />
              <Button variant="primary" size="md">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6">
            <a href="#" className="text-white/50 hover:text-emerald-400 text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-white/50 hover:text-emerald-400 text-sm transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-white/50 hover:text-emerald-400 text-sm transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 