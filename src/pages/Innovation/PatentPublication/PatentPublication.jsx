import "./PatentPublication.css";
import "../common/InnovationCommon.css";

export default function PatentPublication() {
  return (
    <>
      <section
        className="innovation-hero"
        style={{ backgroundImage: "url(/images/innovation-banner.jpg)" }}
      >
        <div className="innovation-hero-content">
          <h1>Patent &amp; Publication</h1>
          <div className="breadcrumb">
            Home &gt; Innovation &gt; Patent &amp; Publication
          </div>
        </div>
      </section>

      <section className="innovation-section">
        <div className="innovation-container">
          <div className="innovation-image">
            <img src="/images/patent-1.jpg" alt="Patent" />
          </div>

          <div className="innovation-text">
            <h2>Patent &amp; Publication</h2>
            <p>
              Patent protection is granted for an invention, product, or
              process. Botanic Healthcare R&amp;D has many innovations under
              patent filing globally.
            </p>
            <p>
              The company has publications in international journals of high
              repute and has registered several trademarks for branded
              ingredients.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
