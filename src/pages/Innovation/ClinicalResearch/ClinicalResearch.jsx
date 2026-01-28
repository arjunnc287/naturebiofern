import "./ClinicalResearch.css";
import "../common/InnovationCommon.css";

export default function ClinicalResearch() {
  return (
    <>
      <section
        className="innovation-hero"
        style={{ backgroundImage: "url(/images/innovation-banner.jpg)" }}
      >
        <div className="innovation-hero-content">
          <h1>Clinical Research</h1>
          <div className="breadcrumb">
            Home &gt; Innovation &gt; Clinical Research
          </div>
        </div>
      </section>

      <section className="innovation-section">
        <div className="innovation-container">
          <div className="innovation-image">
            <img src="/images/clinical-research.jpg" alt="Clinical Research" />
          </div>

          <div className="innovation-text">
            <h2>Clinical Research</h2>
            <p>
              Botanic Healthcare is committed to advancing clinical research and
              studies on innovative ingredients.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
