import React from "react";

interface CitationBlockProps {
  source: string;
  text: string;
  className?: string;
}

export const CitationBlock = ({ source, text, className = "" }: CitationBlockProps) => {
  return (
    <blockquote className={`flex gap-4 items-stretch ${className}`}>
      <div className="w-1 bg-blue rounded-sm flex-shrink-0"></div>
      <div>
        <div className="text-xs uppercase tracking-wider text-text-tertiary font-medium mb-1.5">{source}</div>
        <div className="font-serif italic text-lg leading-relaxed text-text-primary">{text}</div>
      </div>
    </blockquote>
  );
};
