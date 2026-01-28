import "./NewProductDevelopment.css";
import "../common/InnovationCommon.css";

export default function NewProductDevelopment() {
  return (
    <>
      <section
        className="innovation-hero"
        style={{ backgroundImage: "url(/images/innovation-banner.jpg)" }}
      >
        <div className="innovation-hero-content">
          <h1>New Product Development</h1>
          <div className="breadcrumb">
            Home &gt; Innovation &gt; New Product Development
          </div>
        </div>
      </section>

      <section className="innovation-section">
        <div className="innovation-container">
          <div className="innovation-image">
            <img src="/images/new-product.jpg" alt="New Product Development" />
          </div>

          <div className="innovation-text">
            <h2>New Product Development</h2>
            <p>
              The company is dedicated to new product development, specializing
              in liposomal formulations with botanicals, nutraceuticals,
              vitamins, and minerals.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
