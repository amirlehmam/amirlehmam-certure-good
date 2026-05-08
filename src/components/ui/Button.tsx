import React from "react";

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'on-dark';
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export const Button = ({ variant, children, href, onClick, className = "" }: ButtonProps) => {
  const baseClasses = "px-5 py-3 rounded-md font-medium text-base transition-all duration-fast inline-flex items-center justify-center gap-2";
  
  const variantClasses = {
    primary: "bg-blue text-text-on-dark hover:bg-blue-hover",
    secondary: "bg-transparent text-text-title border border-border-strong hover:bg-bg-secondary",
    'on-dark': "bg-white text-navy hover:bg-bg-secondary"
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
