import React from "react";

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'on-dark';
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export const Button = ({ variant, children, href, onClick, className = "" }: ButtonProps) => {
  const baseClasses = "px-10 py-3 rounded-none font-semibold text-[14px] uppercase tracking-widest transition-all duration-500 inline-flex items-center justify-center gap-3 active:scale-95";
  
  const variantClasses = {
    primary: "bg-text-primary text-white hover:bg-blue",
    secondary: "bg-white text-text-primary border border-text-primary/10 hover:border-text-primary/[0.3] hover:shadow-sm",
    'on-dark': "bg-white text-text-primary hover:bg-bg-secondary"
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;
  
  if (href) {
    if (href.startsWith('http')) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return <a href={href} className={classes}>{children}</a>;
  }
  
  return <button onClick={onClick} className={classes}>{children}</button>;
};
