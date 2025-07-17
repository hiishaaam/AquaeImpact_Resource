import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  variant = 'default',
  hover = true,
  ...props 
}) => {
  const baseClasses = `
    relative overflow-hidden transition-all duration-500 ease-out
    rounded-2xl border border-white/10
    ${hover ? 'hover:scale-105 hover:shadow-2xl' : ''}
    group
  `;

  const variants = {
    default: `
      bg-gradient-to-br from-white/10 via-white/5 to-transparent
      backdrop-blur-md shadow-lg shadow-black/10
      hover:bg-gradient-to-br hover:from-white/20 hover:via-white/10 hover:to-white/5
    `,
    glass: `
      bg-white/10 backdrop-blur-xl border border-white/20
      shadow-xl shadow-black/20
      hover:bg-white/15 hover:border-white/30
    `,
    gradient: `
      bg-gradient-to-br from-emerald-500/20 via-teal-500/15 to-cyan-500/10
      backdrop-blur-md border border-emerald-500/30
      shadow-lg shadow-emerald-500/20
      hover:from-emerald-500/30 hover:via-teal-500/25 hover:to-cyan-500/20
    `,
    dark: `
      bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/80
      backdrop-blur-md border border-slate-700/50
      shadow-xl shadow-black/30
      hover:from-slate-800/90 hover:via-slate-700/70 hover:to-slate-800/90
    `
  };

  return (
    <div className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {/* Animated border gradient */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/20 via-transparent to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};

export const CardContent = ({ 
  children, 
  className = '', 
  padding = 'default',
  ...props 
}) => {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    default: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  };

  return (
    <div className={`${paddingClasses[padding]} ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardHeader = ({ 
  children, 
  className = '', 
  ...props 
}) => (
  <div className={`pb-4 border-b border-white/10 ${className}`} {...props}>
    {children}
  </div>
);

export const CardFooter = ({ 
  children, 
  className = '', 
  ...props 
}) => (
  <div className={`pt-4 border-t border-white/10 ${className}`} {...props}>
    {children}
  </div>
);

export default Card;
