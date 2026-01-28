import "./QualityControl.css";
import "../common/InnovationCommon.css";

export default function QualityControl() {
  return (
    <>
      <section
        className="innovation-hero"
        style={{ backgroundImage: "url(/images/innovation-banner.jpg)" }}
      >
        <div className="innovation-hero-content">
          <h1>Quality Control</h1>
          <div className="breadcrumb">
            Home &gt; Innovation &gt; Quality Control
          </div>
        </div>
      </section>

      <section className="innovation-section">
        <div className="innovation-container">
          <div className="innovation-image">
            <img src="/images/quality-lab.jpg" alt="Quality Control Lab" />
          </div>

          <div className="innovation-text">
            <h2>Quality Control</h2>
            <p>
              Consistent quality is intrinsic to our corporate ethic. Our
              rigorous quality system ensures safety, efficacy, and
              traceability.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
