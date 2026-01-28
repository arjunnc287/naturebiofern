import "./Infrastructure.css";

export default function Infrastructure() {
  return (
    <>
      {/* Banner */}
      <div className="infra-banner">
        <div className="infra-banner-content">
          <h1>Infrastructure</h1>
          <p>Home &gt; About Us &gt; Infrastructure</p>
        </div>
      </div>

      {/* Main Content */}
      <section className="infra-section">
        <div className="infra-wrapper">
          {/* Left Image */}
          <div className="infra-image">
            <img src="/images/infrastructure.jpg" alt="Infrastructure" />
          </div>

          {/* Right Content */}
          <div className="infra-content">
            <h2>World-Class Manufacturing Infrastructure</h2>

            <p>
              Botanic Healthcare has established state-of-the-art manufacturing
              facilities designed to meet global quality, safety, and regulatory
              standards. Our infrastructure supports scalable production while
              ensuring precision, purity, and consistency across all products.
            </p>

            <p>
              Equipped with advanced extraction units, automated processing
              lines, and modern quality control laboratories, our facilities
              enable us to deliver high-quality herbal extracts and
              nutraceutical ingredients worldwide.
            </p>

            <p>
              We follow strict GMP guidelines, maintain cleanroom environments,
              and adopt sustainable manufacturing practices to minimize
              environmental impact while maximizing operational efficiency.
            </p>

            <p>
              Continuous investments in technology, automation, and skilled
              manpower ensure that our infrastructure evolves with industry
              advancements and customer expectations.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
