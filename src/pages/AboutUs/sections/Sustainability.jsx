import "./Sustainability.css";

export default function Sustainability() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="sustainability-hero"
        style={{
          backgroundImage: "url(/images/about-building.jpg)",
        }}
      >
        <div className="hero-overlay">
          <h1>Sustainability</h1>
          <p>
            Home &nbsp;&gt;&nbsp; About Us &nbsp;&gt;&nbsp; Sustainable Synergy
            &nbsp;&gt;&nbsp; Sustainability
          </p>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="sustainability-intro">
        <div className="intro-grid">
          <div className="intro-image">
            <img src="/images/sustainability.jpg" alt="Sustainability" />
          </div>

          <div className="intro-content">
            <h2>Sustainability</h2>
            <p>
              At Botanic Healthcare, sustainability is a way of life. We believe
              that sustainable sourcing should be supported by our customers,
              employees and stakeholders.
            </p>
            <p>
              At Botanic Healthcare, sustainability is woven into everything we
              do. We source ethically, prioritising local ingredients wherever
              possible. We minimise waste through innovative manufacturing
              techniques and promote responsible resource management throughout
              our global supply chain.
            </p>

            <h3>Responsibility</h3>
            <p>
              At Botanic Healthcare, sustainability isn't just a strategy, it's
              a core value that guides our relationships with partners, the
              community, and the environment. We use innovative technologies to
              minimise our environmental footprint, reduce raw material
              consumption and implement practices that preserve natural
              resources.
            </p>
          </div>
        </div>
      </section>

      {/* INTEGRATED MANAGEMENT SYSTEM */}
      <section className="ims-section">
        <h2>Integrated Management System</h2>
        <p className="ims-subtitle">
          Explore how our sustainable practices ensure the highest quality &
          safety in natural ingredients.
        </p>

        <ul className="ims-list">
          <li>
            <h4>Quality & Safety</h4>
            <p>
              Quality and safety are paramount. We use only 100% natural and
              authentic ingredients, free from solvent residues, ensuring the
              purity of our extracts. Our manufacturing processes adhere to
              rigorous World Health Organization guidelines.
            </p>
          </li>

          <li>
            <h4>Traceability</h4>
            <p>
              From partnering with farmers to rigorous testing, we control the
              entire supply chain, ensuring every ingredient is traceable back
              to its source.
            </p>
          </li>

          <li>
            <h4>Environment</h4>
            <p>
              Minimizing our environmental impact is a core principle. We adhere
              to ISO 9001:2015 standards and implement sustainable practices
              throughout our operations.
            </p>
          </li>

          <li>
            <h4>Kosher</h4>
            <p>
              Botanic Healthcare offers a range of Kosher-certified branded
              ingredients, meeting the strictest global standards.
            </p>
          </li>

          <li>
            <h4>Halal</h4>
            <p>
              We provide halal-certified ingredients worldwide, ensuring
              religious compliance through meticulous traceability.
            </p>
          </li>

          <li>
            <h4>Organic</h4>
            <p>
              We offer organic branded ingredients that meet national and
              international standards, promoting eco-friendly farming practices.
            </p>
          </li>
        </ul>
      </section>

      {/* COMMUNITY SECTION */}
      <section className="community-section">
        <h2>Community</h2>
        <p>
          At Botanic Healthcare, we are committed to human rights, equality and
          diversity. We partner with stakeholders to foster a sustainable
          future, prioritizing their needs and well-being.
        </p>

        <h3>Projects</h3>

        <h4>SOLAR PROJECT</h4>
        <p>
          We initiated a rooftop solar power plant at Choutuppal, Telangana,
          with an installed capacity of 300 kilowatts, significantly reducing
          our carbon footprint and electricity consumption.
        </p>

        <h4>SAFE DRINKING WATER PROJECT</h4>
        <p>
          Our engineering team renovated a reverse osmosis water plant near our
          Hyderabad factory, supplying clean drinking water to over 10,000
          people.
        </p>

        <h4>POSH</h4>
        <p>
          Botanic Healthcare introduced the POSH (Prevention of Sexual
          Harassment) policy to ensure a safe, respectful, and inclusive
          workplace for all employees.
        </p>
      </section>
    </>
  );
}
