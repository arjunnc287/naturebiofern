import "./VisionMission.css";

export default function VisionMission() {
  return (
    <div className="vm-container">
      {/* HERO SECTION */}
      <section className="vm-hero">
        <div className="vm-hero-overlay">
          <h1>Vision And Mission</h1>
          <p>
            <span>Home</span> &gt; <span>About Us</span> &gt; Vision And Mission
          </p>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="vm-section">
        <div className="vm-box">
          <h2>Vision</h2>
          <p>
            Unlocking the full potential of well-being through transformative,
            research-based nutra ingredients.
          </p>
        </div>

        <div className="vm-box">
          <h2>Mission</h2>
          <p>
            Empowering healthier lives through responsible innovation and the
            delivery of science-backed, high-quality nutraceutical ingredients.
          </p>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="core-values">
        <h2>Our Core Values</h2>

        <div className="values-wrapper">
          <div className="value-card dark-blue">
            <h3>Passion</h3>
            <p>
              Is a belief, an internal motivation, energy comes from within and
              is a key differentiator between daily tasks and daily “joys”.
            </p>
            <ul>
              <li>Ownership</li>
              <li>Commitment</li>
              <li>Accountability</li>
              <li>Focus</li>
              <li>Self-Motivation</li>
            </ul>
          </div>

          <div className="value-card green">
            <h3>Innovation</h3>
            <p>
              Is to embrace change with constant value addition by improving
              processes & systems to achieve our goals & objectives.
            </p>
            <ul>
              <li>Continuous Improvement</li>
              <li>Learning Organization</li>
              <li>Adapt</li>
              <li>Risk Taking</li>
              <li>Curiosity</li>
            </ul>
          </div>

          <div className="value-card dark-blue">
            <h3>Integrity</h3>
            <p>
              Conducting business in an ethical, honest, reliable & fair manner.
            </p>
            <ul>
              <li>Honesty</li>
              <li>Credibility</li>
              <li>Walk the talk</li>
              <li>Ethics</li>
              <li>Transparency</li>
            </ul>
          </div>

          <div className="value-card green">
            <h3>Teamwork</h3>
            <p>Is a synergy one team, one goal one value.</p>
            <ul>
              <li>Common Goal</li>
              <li>Appreciation</li>
              <li>Trust</li>
              <li>Empathy</li>
              <li>Respect</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
