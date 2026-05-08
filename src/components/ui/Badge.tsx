import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'outline' | 'soft' | 'pin' | 'terre';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'soft', className = "" }) => {
  const baseClasses = "text-xs px-3 py-1 rounded-pill font-medium tracking-wider uppercase inline-flex items-center gap-1.5";
  
  const variantClasses = {
    outline: "border border-border-default text-text-tertiary",
    soft: "bg-bg-tertiary text-text-tertiary",
    pin: "bg-pin-soft text-pin",
    terre: "bg-terre-soft text-terre"
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;
  
  return <span className={classes}>{children}</span>;
};
