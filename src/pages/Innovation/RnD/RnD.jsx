import "./RnD.css";
import "../common/InnovationCommon.css";

export default function RnD() {
  return (
    <>
      <section
        className="innovation-hero"
        style={{ backgroundImage: "url(/images/innovation-banner.jpg)" }}
      >
        <div className="innovation-hero-content">
          <h1>R&amp;D</h1>
          <div className="breadcrumb">Home &gt; Innovation &gt; R&amp;D</div>
        </div>
      </section>

      <section className="innovation-section">
        <div className="innovation-container">
          <div className="innovation-image">
            <img src="/images/rnd-lab.jpg" alt="R&D Lab" />
          </div>

          <div className="innovation-text">
            <h2>Research And Innovation</h2>
            <p>
              Our passionate team of researchers and innovators are transforming
              how holistic health is achieved, using robust bioavailable active
              ingredients to create dietary and food supplements.
            </p>
            <p>
              Research and innovation are imperative for any organization’s
              growth. We take pride in our trailblazing approach to medicinal
              nutraceuticals.
            </p>
            <p>
              Consistent high-quality delivery is a cornerstone of our business
              model, supported by world-class instruments and advanced
              procedures.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
