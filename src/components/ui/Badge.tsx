import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'outline' | 'soft' | 'pin' | 'terre';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'soft', className = "" }) => {
  const baseClasses = "text-[11px] px-2.5 py-1 rounded-[6px] font-bold tracking-widest uppercase inline-flex items-center gap-1.5 transition-colors";
  
  const variantClasses = {
    outline: "border border-border text-text-tertiary",
    soft: "bg-bg-secondary text-text-tertiary",
    pin: "bg-blue-soft text-blue",
    terre: "bg-bg-secondary text-text-primary border border-border"
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;
  
  return <span className={classes}>{children}</span>;
};
