import React from "react";

interface WordmarkProps {
  variant?: 'black' | 'navy' | 'white';
  className?: string;
}

export const Wordmark = ({ variant = 'black', className = "" }: WordmarkProps) => {
  const colorMap = {
    black: 'text-black',
    navy: 'text-navy',
    white: 'text-white'
  };
  
  return (
    <div className={`text-2xl md:text-3xl font-heavy tracking-tighter ${colorMap[variant]} ${className}`}>
      CERTURE<span className="text-blue">.</span>
    </div>
  );
};
