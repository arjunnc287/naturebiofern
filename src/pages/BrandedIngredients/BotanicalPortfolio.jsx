import "./BotanicalPortfolio.css";

const portfolioItems = [
  {
    name: "AshwalMind",
    img: "/images/ashwalmind.jpg",
  },
  {
    name: "AbosCurcumin",
    img: "/images/aboscurcumin.jpg",
  },
  {
    name: "MenoSphora",
    img: "/images/menosphora.jpg",
  },
  {
    name: "BioPepper95",
    img: "/images/biopepper95.jpg",
  },
  {
    name: "Absoperine",
    img: "/images/absoperine.jpg",
  },
  {
    name: "Tinoimmune",
    img: "/images/tinoimmune.jpg",
  },
  {
    name: "Lipomac",
    img: "/images/lipomac.jpg",
  },
  {
    name: "Melostacio Gold",
    img: "/images/melostacio-gold.jpg",
  },
];

export default function BotanicalPortfolio() {
  return (
    <section className="portfolio-section">
      <div className="portfolio-container">
        <h1 className="portfolio-title">Our Botanical Portfolio</h1>

        <p className="portfolio-subtitle">
          Discover our range of clinically tested botanical extracts — each
          designed to enhance health, backed by science, and inspired by nature.
        </p>

        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <div className="portfolio-card" key={index}>
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
