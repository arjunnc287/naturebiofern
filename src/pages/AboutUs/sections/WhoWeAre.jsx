import "./WhoWeAre.css";

export default function WhoWeAre() {
  return (
    <div className="who-container">
      {/* HERO */}
      <section className="who-hero">
        <div className="who-hero-overlay">
          <h1>Who We Are?</h1>
          <p>
            <span>Home</span> &gt; <span>About Us</span> &gt; Who We Are?
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="our-story">
        <div className="story-left">
          <img src="/images/company-photo.jpg" alt="Botanic Building" />
        </div>

        <div className="story-right">
          <h2>Our Story</h2>

          <p>
            Today, we are a world leader in developing and manufacturing nutra
            ingredients for complementary healthcare.
          </p>

          <p>
            Our legacy is 20 years of expertise and customer satisfaction,
            driven by revolutionary scientific methodologies and an unwavering
            commitment to quality.
          </p>

          <p>
            Today, we are a world leader in developing and manufacturing nutra
            ingredients for pharmaceuticals, health foods, personal care and
            more.
          </p>

          <p>
            We believe wellness is a way of life. Led by individuals dedicated
            to botanical research, we stay ahead of the curve to make
            nutraceuticals accessible worldwide.
          </p>
        </div>
      </section>

      {/* LEGACY */}
      <section className="legacy">
        <h2>A Legacy of Excellence</h2>
        <p>
          As we look back on our growth story, it's clear that our unwavering
          commitment to progress has been a driving force.
        </p>

        <div className="timeline">
          {/* LEFT YEARS */}
          <div className="timeline-left">
            <div>
              <h3>2013</h3>
              <p>
                Established Corporate Office in Hyderabad and Branch Office in
                New Zealand.
              </p>
            </div>

            <div>
              <h3>2019</h3>
              <p>Certified by Good Manufacturing Practices.</p>
            </div>

            <div>
              <h3>2021</h3>
              <p>Started Research & Development Center.</p>
            </div>

            <div>
              <h3>2023</h3>
              <ul>
                <li>Received Business Excellence Award</li>
                <li>Started Bangalore Branch</li>
                <li>Certified Great Place to Work</li>
              </ul>
            </div>

            <div>
              <h3>2025</h3>
              <p>Raised investment of 250 crores</p>
            </div>
          </div>

          {/* CENTER IMAGE STRIP */}
          <div className="timeline-center">
            <img src="/images/timeline-strip.png" alt="Timeline Visual" />
          </div>

          {/* RIGHT YEARS */}
          <div className="timeline-right">
            <div>
              <h3>2015</h3>
              <p>Obtained FDA & Ayush Certifications</p>
            </div>

            <div>
              <h3>2020</h3>
              <p>Launched first product in the market</p>
            </div>

            <div>
              <h3>2022</h3>
              <ul>
                <li>Launched Branded Ingredients</li>
                <li>Star-K-Kosher Certified</li>
              </ul>
            </div>

            <div>
              <h3>2024</h3>
              <ul>
                <li>Best Nutraceutical Manufacturer of the Year</li>
                <li>Germany Branch Started</li>
                <li>Expanded Manufacturing Unit</li>
                <li>Received Two Patents</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
