import React from "react";

const Products = () => {
  const products = [
    { id: 1, name: "LAGER", image: "https://www.drinkcollider.com/cdn/shop/files/lagersmall_c6dda373-f53f-44a0-92b4-5507a7643261.png?v=1741638264&width=480", price: "From £1.87 /can", rating: 4.9 },
    { id: 2, name: "SESSION IPA", image: "https://www.drinkcollider.com/cdn/shop/files/palesmall_48074979-a874-4548-8554-ee4444af8017.png?v=1741635648&width=480", price: "From £1.87 /can", rating: 4.8 },
    { id: 3, name: "PEACH LAGER", image: "https://www.drinkcollider.com/cdn/shop/files/peach-lager-4435721.jpg?v=1755608627&width=480", price: "From £1.87 /can", rating: 5.0 },
  ];

  return (
    <section className="product-section" id="shop">
      <div className="section-header">
        <h2>Our Beers</h2>
        <div className="nav-arrows">
          <button>←</button><button>→</button>
        </div>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="card-top">
              <span className="stars">★★★★★ {product.rating}</span>
              <span className="price-pill">{product.price}</span>
            </div>
            <div className="product-image-container">
              <img src={product.image} alt={product.name} />
            </div>
            <h3>{product.name}</h3>
            <button className="btn-block">SHOP NOW ➜</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;