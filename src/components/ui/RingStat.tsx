import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";

interface RingStatProps {
  percentage: number;
  label: string;
  description: string;
  color: 'blue' | 'terre' | 'pin';
}

export const RingStat = ({ percentage, label, description, color }: RingStatProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.4 }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const circumference = 2 * Math.PI * 58; // r=58
  const offset = circumference - (circumference * percentage) / 100;
  
  const colorMap = {
    blue: '#155DFB',
    terre: '#993C1D',
    pin: '#0F6E56'
  };
  
  return (
    <div ref={ref} className="bg-bg-secondary rounded-lg p-8 flex flex-col items-center text-center h-full">
      <div className="text-sm font-semibold tracking-wide text-text-title mb-6 uppercase">{label}</div>
      <div className="relative flex justify-center items-center py-4 mb-6">
        <svg viewBox="0 0 140 140" width="140" height="140">
          <circle cx="70" cy="70" r="58" fill="none" stroke="rgba(33,46,85,0.08)" strokeWidth="9"/>
          <circle 
            cx="70" cy="70" r="58" 
            fill="none" 
            stroke={colorMap[color]} 
            strokeWidth="9" 
            strokeLinecap="round"
            strokeDasharray={isVisible ? `${circumference - offset} ${offset}` : `0 ${circumference}`}
            transform="rotate(-90 70 70)"
            className="transition-all duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
          />
          <text x="70" y="74" textAnchor="middle" dominantBaseline="middle" fontSize="32" fontWeight="800" fill="#212E55" fontFamily="Inter, sans-serif">
            {percentage}%
          </text>
        </svg>
      </div>
      <div className="text-sm font-medium text-text-secondary leading-relaxed max-w-[200px]">{description}</div>
    </div>
  );
};
