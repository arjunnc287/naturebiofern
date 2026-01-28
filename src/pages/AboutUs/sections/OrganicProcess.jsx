import "./OrganicProcess.css";

export default function OrganicProcess() {
  return (
    <div className="organic-process">
      {/* ===== Banner Section ===== */}
      <div
        className="organic-banner"
        style={{
          backgroundImage: "url(/images/about-building.jpg)",
        }}
      >
        <div className="banner-overlay">
          <h1>Organic Process</h1>
          <p>
            <span>Home</span> &gt; <span>About Us</span> &gt;{" "}
            <span>Sustainable Synergy</span> &gt; Organic Process
          </p>
        </div>
      </div>

      {/* ===== Image + Content Section ===== */}
      <div className="organic-top-section">
        <div className="organic-image">
          <img src="/images/organic-process.jpg" alt="Organic Farming" />
        </div>

        <div className="organic-content">
          <p className="small-text">
            We maintain enduring partnerships with farmers and farm communities
            across the country.
          </p>

          <h2>We Are What We Eat</h2>

          <p>
            Organic farming principles are not new to India. They are deeply
            rooted in our ancient culture as “Vrikshayurveda” – Ayurveda for
            Plants.
          </p>

          <p>
            Botanic Healthcare has brought these principles into the 21st
            Century and helped pioneer the organic cultivation of botanicals in
            India. We firmly believe in preserving farmlands and biodiversity.
          </p>

          <p>
            We maintain enduring partnerships with farmers and farm communities
            across the country. Botanic Healthcare makes pivotal contributions
            to empowering farmers and improving the quality of life in rural
            communities through extensive backward integration and crop
            development programmes.
          </p>
        </div>
      </div>

      {/* ===== Bottom Section ===== */}
      <div className="organic-bottom-section">
        <div className="bottom-left">
          <h2>Experiencing Nature At Its Best</h2>

          <p>
            Botanic Healthcare is a leading Indian herbal extract manufacturing
            company, and a globally preferred producer of high-quality ISO
            certified products. Known for our ground-breaking development and
            innovation in the herbal industry, we are also invested in making
            positive impacts on the livelihood of rural India.
          </p>

          <p>
            A leading domestic player and exporter, spanning a comprehensive
            range of herbal products, Botanic Healthcare meets international
            food safety regulations and guarantees full traceability.
          </p>

          <h3>Farm To Fork Traceability</h3>

          <p>
            We maintain a robust supply chain, ensuring organic compliance and
            quality control from the source to the final destination.
          </p>
        </div>

        <div className="bottom-right">
          <h2>Our Approach</h2>
          <img src="/images/approach-diagram.jpg" alt="Our Approach" />
        </div>
      </div>
    </div>
  );
}
