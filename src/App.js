import React, { useEffect } from "react";

/* --- IMPORT THE CSS FILE HERE --- */
import "./styles/App.css";

/* --- Common Components --- */
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

/* --- Page Sections --- */
import Hero from "./components/sections/Hero";
import Marquee from "./components/sections/Marquee";
import Products from "./components/sections/Products";
import Science from "./components/sections/Science";
import Humans from "./components/sections/Humans";
import Comparison from "./components/sections/Comparison";
import FAQ from "./components/sections/FAQ";
import Socials from "./components/sections/Socials";

const App = () => {
  // Scroll to top on refresh/load for a clean start
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="app-layout">
      
      {/* Navigation (Fixed/Sticky) */}
      <Navbar />

      {/* Main Page Content */}
      <main className="main-content">
        <Hero />
        <Marquee />
        <Products />
        <Science />
        <Humans />
        <Comparison />
        <FAQ />
        <Socials />
      </main>

      {/* Footer Area */}
      <Footer />
      
    </div>
  );
};

export default App;