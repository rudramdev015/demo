import React from "react";

const Science = () => (
  <section className="science-section">
    <div className="science-bg">
       <img src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2000&auto=format&fit=crop" alt="Clouds" className="cloud-bg" />
    </div>
    
    <div className="science-container">
       <div className="science-image">
         <img src="https://www.drinkcollider.com/cdn/shop/files/palesmall_48074979-a874-4548-8554-ee4444af8017.png?v=1741635648&width=480" alt="Science Can" />
       </div>
       
       <div className="science-content">
         <h2>Our Mood-Boosting Blend</h2>
         <p>UnwindBlend™, our unique blend of functional mushrooms and mood-boosting botanicals works to increase your body's natural production of GABA.</p>
         
         <div className="stats-row">
            <div className="stat-box">
              <span className="big-num">73%</span>
              <span className="desc">of customers felt more relaxed</span>
            </div>
            <div className="stat-box">
              <span className="big-num">35+</span>
              <span className="desc">Clinical Studies</span>
            </div>
         </div>

         <div className="ingredients-row">
           <div className="ing-item">
             <div className="icon-circle">🍄</div>
             <span>LIONS MANE<br/><small>Functional Mushroom</small></span>
           </div>
           <div className="ing-item">
             <div className="icon-circle">🌿</div>
             <span>ASHWAGANDHA<br/><small>Root</small></span>
           </div>
           <div className="ing-item">
             <div className="icon-circle">🍵</div>
             <span>L-THEANINE<br/><small>Tea</small></span>
           </div>
         </div>
         
         <div className="btn-group">
            <button className="btn-outline-white">DISCOVER HOW IT WORKS ➜</button>
            <button className="btn-white">SHOP NOW ➜</button>
         </div>
       </div>
    </div>
  </section>
);

export default Science;