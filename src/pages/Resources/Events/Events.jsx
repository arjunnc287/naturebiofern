import "./Events.css";

export default function Events() {
  return (
    <>
      {/* Banner */}
      <section className="resource-banner events-banner">
        <div className="banner-content">
          <h1>Event</h1>
          <p>
            <span>Home</span> &gt; <span>Resources</span> &gt; Event
          </p>
        </div>
      </section>

      {/* Title */}
      <section className="events-title">
        <h2>
          FUTURE OF HERBAL EXTRACT <span>REIMAGINED</span>
        </h2>
        <p>
          We make your business stand out by letting you discover the secrets of
          herbal extracts at our events.
        </p>
      </section>

      {/* Map */}
      <section className="events-map">
        <img src="/images/world-map.png" alt="World Events Map" />
      </section>
    </>
  );
}
