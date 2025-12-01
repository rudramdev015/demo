import React from "react";

const Humans = () => {
  const humans = [
    { user: "@gabriellefoster", img: "https://www.drinkcollider.com/cdn/shop/files/socials10.jpg?v=1705917351&width=380" },
    { user: "@tom_gilding", img: "https://www.drinkcollider.com/cdn/shop/files/socials11.jpg?v=1705917351&width=380" },
    { user: "@emmacroft", img: "https://www.drinkcollider.com/cdn/shop/files/socials8.jpg?v=1705917351&width=380" },
    { user: "@jack_wellness", img: "https://www.drinkcollider.com/cdn/shop/files/socials9.jpg?v=1705917351&width=380" },
    { user: "@sarah_runs", img: "https://www.drinkcollider.com/cdn/shop/files/socials7.jpg?v=1705917351&width=380" },
  ];

  return (
    <section className="humans-section">
      <div className="section-header-simple">
        <h2>Humans of the<br/>Colliderverse</h2>
      </div>
      <div className="humans-slider">
         {humans.map((h, i) => (
           <div className="human-card" key={i}>
              <div className="user-tag">
                 <div className="avatar"></div>
                 <span>{h.user}</span>
              </div>
              <img src={h.img} alt="User Content" />
           </div>
         ))}
      </div>
    </section>
  );
};

export default Humans;