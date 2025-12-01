import React, { useState } from "react";

const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const faqs = [
    { q: "WHAT ARE ADAPTOGENS?", a: "Adaptogens are natural substances that help your body adjust to stress, promoting balance and calm without the crash." },
    { q: "WHAT DOES IT FEEL LIKE?", a: "It provides a subtle, calming buzz. You feel relaxed, social, and in control without intoxication." },
    { q: "HOW LONG DOES IT TAKE TO FEEL THE EFFECTS?", a: "Most people report feeling a calming effect within 20-30 minutes of finishing their first can." },
    { q: "IS COLLIDER LEGAL?", a: "Yes. 0.5% ABV is legally classified as alcohol-free." },
    { q: "CAN YOU GET DRUNK FROM DRINKING 0.5% BEER?", a: "No. Your body processes the alcohol as fast as you drink it." },
  ];

  const toggleFaq = (index) => setActiveFaq(activeFaq === index ? null : index);

  return (
    <section className="faq-section">
      <div className="faq-layout">
         <div className="faq-title">
           <h2>FAQs</h2>
         </div>
         <div className="faq-list">
           {faqs.map((f, i) => (
             <div key={i} className={`faq-item ${activeFaq === i ? 'active' : ''}`} onClick={() => toggleFaq(i)}>
               <div className="faq-q">
                 {f.q}
                 <span className="arrow-box">
                   <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor"><path d="M1 1L6 6L11 1" strokeWidth="2"/></svg>
                 </span>
               </div>
               <div className="faq-a">
                 <p>{f.a}</p>
               </div>
             </div>
           ))}
           <button className="btn-outline-black">VIEW ALL FAQS →</button>
         </div>
      </div>
    </section>
  );
};

export default FAQ;