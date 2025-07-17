import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary',
  size = 'md',
  ...props 
}) => {
  const baseClasses = `
    relative overflow-hidden transition-all duration-300 ease-out
    font-medium tracking-wide rounded-xl
    before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
    before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent
    active:scale-95 transform
  `;

  const variants = {
    primary: `
      bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500
      hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600
      text-white shadow-lg shadow-emerald-500/25
      focus:ring-emerald-500
    `,
    secondary: `
      bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800
      hover:from-slate-700 hover:via-slate-600 hover:to-slate-700
      text-white shadow-lg shadow-slate-500/25
      focus:ring-slate-500
      border border-slate-600/50
    `,
    glass: `
      bg-white/10 backdrop-blur-md border border-white/20
      hover:bg-white/20 hover:border-white/30
      text-white shadow-lg shadow-black/10
      focus:ring-white/50
    `,
    outline: `
      bg-transparent border-2 border-emerald-500
      hover:bg-emerald-500/10 hover:border-emerald-400
      text-emerald-500 hover:text-emerald-400
      focus:ring-emerald-500
    `
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;
