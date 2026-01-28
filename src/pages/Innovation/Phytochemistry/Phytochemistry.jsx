import "./Phytochemistry.css";
import "../common/InnovationCommon.css";

export default function Phytochemistry() {
  return (
    <>
      <section
        className="innovation-hero"
        style={{ backgroundImage: "url(/images/innovation-banner.jpg)" }}
      >
        <div className="innovation-hero-content">
          <h1>Phytochemistry</h1>
          <div className="breadcrumb">
            Home &gt; Innovation &gt; Phytochemistry
          </div>
        </div>
      </section>

      <section className="innovation-section">
        <div className="innovation-container">
          <div className="innovation-image">
            <img src="/images/phytochemistry.jpg" alt="Phytochemistry Lab" />
          </div>

          <div className="innovation-text">
            <h2>Phytochemistry</h2>
            <p>
              Our Phytochemistry Laboratory specializes in isolating and
              characterizing high-purity phytochemical markers.
            </p>
            <p>
              We focus on developing standardized extracts with bioactive
              markers for gut health, skin health, hair health, and sleep.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
