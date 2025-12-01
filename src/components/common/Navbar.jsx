import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      // Activates the glass background after scrolling 20px
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
  }, [menuOpen]);

  return (
    <>
      {/* Top Announcement Bar - Slides away on scroll */}
      <div className={`top-bar ${isScrolled ? "hidden" : ""}`}>
        <span>GET 15% OFF FOR BLACK FRIDAY WITH CODE: <strong>BLACKFRIDAY15</strong></span>
      </div>

      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        
        {/* --- 1. Mobile Menu Trigger --- */}
        <div className="mobile-menu-trigger" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`hamburger ${menuOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* --- 2. Left Links --- */}
        <div className="nav-group left desktop-only">
          <a href="#shop" className="nav-link">Shop Now</a>
          <a href="#merch" className="nav-link">Merch</a>
          <a href="#discover" className="nav-link">Discover</a>
        </div>

        {/* --- 3. CENTER LOGO (ALWAYS BIG) --- */}
        <div className="nav-logo">
          <a href="#">
            {/* SVG Logo with precise paths */}
            <svg viewBox="0 0 340 80" className="navbar-brand-svg" aria-label="DotGanga">
              <g style={{ fontFamily: "'Inter', sans-serif", fontWeight: "900" }}>
                
                {/* 'Dot' - Brand Blue */}
                <text x="10" y="55" className="logo-text blue">Dot</text>

                {/* The Red Arrow Icon */}
                <g transform="translate(125, 20)">
                   {/* Red Circle */}
                   <circle cx="18" cy="18" r="18" className="logo-icon-circle" />
                   {/* White Arrow */}
                   <path d="M18 8 L18 26 M18 8 L11 15 M18 8 L25 15" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </g>

                {/* 'Ganga' - Brand Red */}
                <text x="170" y="55" className="logo-text red">Ganga</text>
                
              </g>
            </svg>
          </a>
        </div>

        {/* --- 4. Right Links --- */}
        <div className="nav-group right">
          <a href="#rewards" className="nav-link desktop-only">Rewards</a>
          <a href="#account" className="nav-link desktop-only">Account</a>
          <a href="#cart" className="nav-link">Cart (0)</a>
        </div>

        {/* --- 5. Mobile Menu Drawer --- */}
        <div className={`mobile-menu-overlay ${menuOpen ? "active" : ""}`}>
          <div className="mobile-links-container">
            <a href="#shop" onClick={() => setMenuOpen(false)}>Shop Now</a>
            <a href="#merch" onClick={() => setMenuOpen(false)}>Merch</a>
            <a href="#discover" onClick={() => setMenuOpen(false)}>Discover</a>
            <hr />
            <a href="#account" onClick={() => setMenuOpen(false)}>Account</a>
            <a href="#rewards" onClick={() => setMenuOpen(false)}>Rewards</a>
          </div>
        </div>

      </nav>
    </>
  );
};

export default Navbar;