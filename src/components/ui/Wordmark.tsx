import React from "react";

interface WordmarkProps {
  variant?: 'black' | 'navy' | 'white';
  className?: string;
}

export const Wordmark = ({ className = "" }: WordmarkProps) => {
  return (
    <div className={`relative ${className}`}>
      <img 
        src="https://i.ibb.co/pj4Yk0dS/LOGO-CERTURE.png" 
        alt="Certure" 
        className="h-14 md:h-16 w-auto object-contain"
        referrerPolicy="no-referrer"
        loading="eager"
      />
    </div>
  );
};
