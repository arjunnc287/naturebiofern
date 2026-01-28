import "./product.css";

const products = [
  {
    name: "Ashwagandha Extract",
    img: "images/withania.jpg",
    desc: "Renowned adaptogen that helps reduce stress, improve energy levels, and support overall vitality.",
  },
  {
    name: "Curcumin (Turmeric)",
    img: "images/curcuma.jpg",
    desc: "Contains powerful anti-inflammatory and antioxidant properties promoting joint and immune health.",
  },
  {
    name: "Green Coffee Bean",
    img: "images/coffee-arabica.jpg",
    desc: "Rich in chlorogenic acids that support healthy metabolism and assist in weight management.",
  },
  {
    name: "Boswellia Serrata",
    img: "images/boswellia.jpg",
    desc: "Traditionally used for its anti-inflammatory benefits, especially for joint and respiratory health.",
  },
  {
    name: "Garcinia Cambogia",
    img: "images/garcinia.jpg",
    desc: "Supports healthy appetite control and weight management with natural hydroxycitric acid (HCA).",
  },
  {
    name: "Bacopa Monnieri",
    img: "images/bacopa.jpg",
    desc: "Enhances memory, cognitive function, and promotes mental clarity through natural compounds.",
  },
];

export default function Home() {
  return (
    <div className="home-container">
      {/* Products Section */}
      <section className="products-section">
        <h2>Our Botanical Portfolio</h2>
        <p className="subtitle">
          Discover our range of clinically tested botanical extracts — each
          designed to enhance health, backed by science, and inspired by nature.
        </p>

        <div className="product-grid">
          {products.map((p, i) => (
            <div className="product-card" key={i}>
              <img src={p.img} alt={p.name} />
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
