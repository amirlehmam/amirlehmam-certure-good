import React from "react";
import { Link, useLocation } from "react-router-dom";

interface HeaderProps {
  variant?: "light" | "dark";
}

const Header = ({ variant = "dark" }: HeaderProps) => {
  const location = useLocation();
  
  const navItems = [
    { name: "Accueil", path: "/" },
    { name: "Nos Services", path: "/services" },
    { name: "Événement", path: "/evenement" },
  ];

  const textColor = variant === "light" ? "text-white" : "text-gray-900";
  const mutedColor = variant === "light" ? "text-gray-300" : "text-gray-500";
  const hoverColor = variant === "light" ? "hover:text-white" : "hover:text-black";

  return (
    <nav className="sticky top-0 z-[100] flex w-full items-center justify-between py-4 md:py-6 px-4 md:px-8">
      <Link to="/" className={`text-2xl md:text-3xl font-black uppercase tracking-tighter font-jakarta leading-none ${textColor}`} style={{ letterSpacing: "-0.04em" }}>
        CERTURE.
      </Link>
      <div className="hidden md:flex items-center gap-10">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`text-sm font-semibold transition-colors font-sans ${
              location.pathname === item.path ? textColor : `${mutedColor} ${hoverColor}`
            }`}
          >
            {item.name}
          </Link>
        ))}
        <a 
          href="#registration-form" 
          className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-blue-700 transition-all font-sans"
        >
          Je réserve ma place
        </a>
      </div>
      {/* Mobile Register Link */}
      <a 
        href="#registration-form" 
        className="md:hidden bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-bold"
      >
        Réserver
      </a>
    </nav>
  );
};

export default Header;
