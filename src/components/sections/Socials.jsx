import React from "react";

const Socials = () => {
  const socialImages = [
    "https://www.drinkcollider.com/cdn/shop/files/socials10.jpg?v=1705917351&width=380",
    "https://www.drinkcollider.com/cdn/shop/files/socials11.jpg?v=1705917351&width=380",
    "https://www.drinkcollider.com/cdn/shop/files/socials8.jpg?v=1705917351&width=380",
    "https://www.drinkcollider.com/cdn/shop/files/socials9.jpg?v=1705917351&width=380",
    "https://www.drinkcollider.com/cdn/shop/files/socials7.jpg?v=1705917351&width=380",
  ];

  return (
    <section className="socials-section">
       <h2 className="socials-bg-text">SOCIALS</h2>
       <div className="socials-collage">
          {socialImages.map((src, i) => (
            <div key={i} className={`collage-item item-${i}`}>
               <img src={src} alt="Social content" />
            </div>
          ))}
          <div className="center-cta">
            <p>FOLLOW @DRINKCOLLIDER</p>
          </div>
       </div>
    </section>
  );
};

export default Socials;