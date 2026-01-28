import "./CSR.css";

export default function CSR() {
  return (
    <>
      {/* Banner Section */}
      <section
        className="csr-banner"
        style={{
          backgroundImage: "url(/images/about-building.jpg)",
        }}
      >
        <div className="csr-banner-content">
          <h1>Corporate Social Responsibility</h1>
          <p>
            <span>Home</span> &gt; <span>About Us</span> &gt; Corporate Social
            Responsibility
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="csr-container">
        <div className="csr-grid">
          {/* Image */}
          <div className="csr-image">
            <img
              src="/images/csr-children.jpg"
              alt="Corporate Social Responsibility"
            />
          </div>

          {/* Text */}
          <div className="csr-text">
            <h2>Corporate Social Responsibility</h2>
            <p>
              <strong>Botanic Healthcare</strong> takes a multi-pronged approach
              to achieving the best outcomes for us and our stakeholders. Our
              team is committed to upholding the United Nations Global Compact
              and its principles on human rights, labour, the environment and
              anti-corruption.
            </p>
          </div>
        </div>

        {/* Details */}
        <div className="csr-details">
          <h3>Farming and Sustainable Harvesting</h3>
          <p>
            We support ethical and sustainable sourcing and production that
            minimises environmental impact and conserves natural resources.
          </p>

          <h3>Raw Herb Suppliers Education and Audits</h3>
          <p>
            One of our key business priorities is to source the highest quality
            raw materials through an environmentally sustainable supply chain.
            We benefit from long-standing, strong relationships with local
            farmers across India.
          </p>

          <h3>Global Stakeholders for Supplying Raw Herbs</h3>
          <p>
            We also work with farmers in international markets to source
            specific raw materials that are only available in those regions.
            Each international partner undergoes a thorough remote audit.
          </p>

          <h3>Regulations and Compliance</h3>
          <p>
            We are aggressive in our commitment to the highest quality
            standards. We carefully select and work with farmers and herb
            suppliers who hold internationally recognised compliance
            certifications.
          </p>

          <h3>Social Responsibility</h3>
          <p>
            As a Better Future Through Responsible Business, we work closely
            with farmers to source high-quality raw materials for our herbal
            extracts.
          </p>

          <h3>Enabling Global Wellness</h3>
          <p>
            Through our deep expertise in the extraction of herbal
            phytochemicals for nutraceutical use, Botanic Healthcare is helping
            people around the world embrace a culture of wellness.
          </p>

          <h3>Responsible Sourcing</h3>
          <p>
            All of our raw materials are sourced through sustainable farming
            practices in traditional and organic agriculture.
          </p>

          <h3>Empowering Communities</h3>
          <p>
            By working at the grassroots with farmers, we give back to the
            community by providing a stable demand for their produce and a
            livelihood.
          </p>
        </div>
      </section>
    </>
  );
}
