import React, { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
// import logo from "/audiophile.png";
import { CartDialog } from "./CartDialog";

interface NavLink {
  label: string;
  path: string;
}

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const location = useLocation();

  const navLinks: NavLink[] = [
    { label: "home", path: "/" },
    { label: "headphones", path: "/headphones" },
    { label: "speakers", path: "/speakers" },
    { label: "earphones", path: "/earphones" },
  ];

  return (
    <header className="w-full bg-[#141414] text-white relative z-50 px-7">
      <div className="container mx-auto px-4 border-b border-white/20 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            className="lg:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <Link to="/" className="flex items-center justify-center">
            <img
              src={"/audiophile.png"}
              alt="audiophile logo"
              className="w-32 sm:w-36 md:w-40"
            />
          </Link>
        </div>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-12">
            {navLinks.map(({ label, path }) => (
              <Link
                key={label}
                to={path}
                className={`font-bold text-sm uppercase tracking-[2px] transition-colors duration-300 ${
                  location.pathname === path
                    ? "text-[#D87d4a]"
                    : "hover:text-[#D87d4a]"
                }`}
              >
                {label}
              </Link>
            ))}
          </ul>
        </nav>

        <CartDialog />
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#1f1f1f]/95 backdrop-blur-md text-center z-40">
          <ul className="flex flex-col items-center gap-6 py-10 animate-fadeIn">
            {navLinks.map(({ label, path }) => (
              <Link
                key={label}
                to={path}
                onClick={() => setMenuOpen(false)}
                className={`font-bold text-sm uppercase tracking-[2px] transition-colors duration-300 ${
                  location.pathname === path
                    ? "text-[#D87d4a]"
                    : "hover:text-[#D87d4a]"
                }`}
              >
                {label}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
