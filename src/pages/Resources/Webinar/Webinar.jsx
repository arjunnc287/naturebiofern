import "./Webinar.css";

export default function Webinar() {
  return (
    <>
      {/* Banner */}
      <section className="resource-banner webinar-banner">
        <div className="banner-content">
          <h1>Webinar</h1>
          <p>
            <span>Home</span> &gt; <span>Resources</span> &gt; Webinar
          </p>
        </div>
      </section>

      {/* Webinar List */}
      <section className="webinar-container">
        <div className="webinar-card">
          <img src="/images/webinar1.jpg" alt="Webinar" />
        </div>

        <div className="webinar-card">
          <img src="/images/webinar2.jpg" alt="Webinar" />
        </div>
      </section>
    </>
  );
}
