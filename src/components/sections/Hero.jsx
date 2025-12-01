import React from "react";

const Hero = () => (
  <header className="hero-section">
    {/* Background Video */}
    <div className="video-wrapper">
      <video autoPlay loop muted playsInline className="hero-video">
        <source src="https://cdn.shopify.com/videos/c/o/v/981856146d1145d483dca453516384c3.mp4" type="video/mp4" />
      </video>
      <div className="overlay-gradient"></div>
    </div>

    {/* Giant Background Text */}
    <div className="hero-big-text">COLLIDER</div>

    <div className="hero-content-layer">
      {/* Left: Text Content */}
      <div className="hero-text-box">
        <h1>Mood-Boosting Beer<br/>Without the Alcohol</h1>
        <p>Get your evening buzz without the hangover. A proper-tasting beer that helps you unwind and feel genuinely relaxed.</p>
        
        <div className="benefit-badges">
          <div className="badge"><i className="fas fa-ban"></i> No Hangover</div>
          <div className="badge"><i className="fas fa-bed"></i> Better Sleep</div>
          <div className="badge"><i className="fas fa-beer"></i> Real Taste</div>
        </div>

        <button className="btn-primary">SHOP NOW ➜</button>
        
        <div className="rating-small">
          <span style={{color: "#FFB800", marginRight: "5px"}}>★★★★★</span> 
          4.9/5 from 350+ reviews
        </div>
      </div>

      {/* Center: Image */}
      <div className="hero-center-image">
         <img 
           src="https://www.drinkcollider.com/cdn/shop/files/lagersmall_c6dda373-f53f-44a0-92b4-5507a7643261.png?v=1741638264&width=480" 
           alt="Collider Can" 
           className="floating-can"
         />
      </div>

      {/* Right: Review (Hidden on Mobile) */}
      <div className="hero-review-box desktop-only">
        <p>"Was a little sceptical when we ordered, but very pleasantly surprised. Gives you a lovely little buzz without the hangover."</p>
        <div className="reviewer">
          <strong>Kim D.</strong> <span className="verified">Verified Buyer</span>
        </div>
      </div>
    </div>
  </header>
);

export default Hero;