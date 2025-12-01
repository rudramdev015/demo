import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-wrapper">
      
      {/* --- TOP SECTION: Links & Newsletter --- */}
      <div className="footer-top-content">
        
        {/* Navigation Links */}
        <div className="footer-nav">
          <div className="nav-col">
            <h4>Help</h4>
            <a href="#">FAQs</a>
            <a href="#">Returns</a>
            <a href="#">Contact Us</a>
            <a href="#">Shipping</a>
          </div>

          <div className="nav-col">
            <h4>Explore</h4>
            <a href="#">Services</a>
            <a href="#">Tracking</a>
            <a href="#">Mission</a>
            <a href="#">Careers</a>
          </div>

          <div className="nav-col">
            <h4>Social</h4>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
            <a href="#">Facebook</a>
          </div>
        </div>

        {/* Newsletter Box */}
        <div className="footer-newsletter">
          <div className="newsletter-box">
            <h4>Get Up To 25% Off</h4>
            <div className="input-group">
              <input type="email" placeholder="ENTER EMAIL ADDRESS" />
              <button aria-label="Subscribe">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13"/><path d="M22 2L15 22L11 13L2 9L22 2Z"/></svg>
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* --- BOTTOM SECTION: THE MASSIVE DOTGANGA LOGO --- */}
      <div className="footer-giant-logo">
        <svg viewBox="0 0 900 180" className="brand-svg" preserveAspectRatio="xMidYMax meet">
          
          {/* FONT STYLES: Using Arial/Inter Bold to match the geometric look */}
          <g style={{ fontFamily: "'Inter', 'Arial', sans-serif", fontWeight: "bold" }}>
            
            {/* 1. The 'D' (Blue) */}
            <text x="50" y="140" fontSize="160" fill="#005CA9">D</text>

            {/* 2. The Icon 'o' (Red Circle + White Arrow) */}
            <g transform="translate(235, 95)">
               {/* The Red Circle */}
               <circle r="55" fill="#E41E26" />
               
               {/* The White Up Arrow (Exact shape from image) */}
               <g transform="translate(0, -5)"> 
                 {/* Arrow Head */}
                 <path d="M0 -25 L-18 0 H-7 V25 H7 V0 H18 Z" fill="white" />
               </g>
            </g>

            {/* 3. The 't' (Blue) */}
            <text x="310" y="140" fontSize="160" fill="#005CA9">t</text>

            {/* 4. 'Ganga' (Red) */}
            {/* Tightly kerned to match the image logo style */}
            <text x="380" y="140" fontSize="160" fill="#E41E26" letterSpacing="-2">Ganga</text>
            
          </g>
        </svg>
      </div>

    </div>
  </footer>
);

export default Footer;