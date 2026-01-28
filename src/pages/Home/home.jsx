// import React from "react";
import "./home.css";
import React, { useRef, useState } from "react";
import QualiltyLab from "../../assets/Images/Quality-Lab.jpeg";
import WelcomeBanner from "../../assets/Images/welcome-banner.jpg";
import videoThumb from "/public/images/botanic-video-thumb.jpg";

const eventsData = [
  {
    img: "/images/event-vitafoods-europe.jpg",
    meta: "Booth No : UWB24 / May 05 - 07, 2026",
    title: "Vitafoods Europe 2026",
    location: "Fira de Barcelona",
  },
  {
    img: "/images/event-suppliers-day.jpg",
    meta: "Booth No : 979 / May 19 - 20, 2026",
    title: "Suppliers Day 2026",
    location: "Jacob K. Javits convention center, New York, NY",
  },
  {
    img: "/images/event-vitafoods-india.jpg",
    meta: "Booth No : G22 / Feb 11 - 13, 2026",
    title: "Vitafoods India 2026",
    location: "Jio World Convention Center, Mumbai",
  },
  {
    img: "/images/event-4.jpg",
    meta: "Booth No : A12 / Mar 10 - 12, 2026",
    title: "Nutraceutical Expo Asia",
    location: "Bangkok International Trade Center",
  },
  {
    img: "/images/event-5.jpg",
    meta: "Booth No : B45 / Apr 02 - 04, 2026",
    title: "Health Ingredients Japan",
    location: "Tokyo Big Sight",
  },
  {
    img: "/images/event-6.jpg",
    meta: "Booth No : C09 / Jun 18 - 20, 2026",
    title: "Natural Products Expo",
    location: "Anaheim Convention Center",
  },
  {
    img: "/images/event-7.jpg",
    meta: "Booth No : D21 / Jul 05 - 07, 2026",
    title: "Food Ingredients Europe",
    location: "Paris Expo Porte de Versailles",
  },
  {
    img: "/images/event-8.jpg",
    meta: "Booth No : E33 / Aug 14 - 16, 2026",
    title: "Nutraceutical Summit",
    location: "Dubai World Trade Centre",
  },
  {
    img: "/images/event-9.jpg",
    meta: "Booth No : F18 / Sep 09 - 11, 2026",
    title: "Wellness Ingredients Expo",
    location: "Singapore Expo",
  },
  {
    img: "/images/event-10.jpg",
    meta: "Booth No : G55 / Oct 20 - 22, 2026",
    title: "Global Health Expo",
    location: "Berlin Messe",
  },
  {
    img: "/images/event-11.jpg",
    meta: "Booth No : H07 / Nov 12 - 14, 2026",
    title: "Botanical Science Forum",
    location: "London Olympia",
  },
  {
    img: "/images/event-12.jpg",
    meta: "Booth No : J90 / Dec 03 - 05, 2026",
    title: "International Herbal Expo",
    location: "Sydney Convention Centre",
  },
];

export default function HomePage() {
  const carouselRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const cardsPerView = 3;
  const cardWidth = 380 + 35; // card width + gap

  const handleDotClick = (index) => {
    carouselRef.current.scrollTo({
      left: index * cardsPerView * cardWidth,
      behavior: "smooth",
    });
    setActiveDot(index);
  };
  return (
    <div className="home-container">
      {/* Hero Section */}

      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Clinically Proven Botanical Extracts</h1>
            <p>
              Where Science Meets Nature — NatureBioFern is committed to
              advancing clinical research and developing innovative botanical
              formulations that enhance health and wellness through scientific
              excellence.
            </p>
            {/* <button className="hero-btn">Explore More</button> */}
          </div>
        </div>
      </section>

      {/* Company Section */}
      <section className="company-section">
        <div className="company-container">
          {/* <!-- LEFT IMAGE --> */}
          <div className="company-image">
            <img
              src="/images/botanic-healthcare-campus.jpg"
              alt="Botanic Healthcare Facility"
            />
          </div>

          <div class="company-content">
            <h2>
              Botanic Healthcare: Pioneering Herbal and Nutraceutical Excellence
            </h2>

            <p>
              Botanic Healthcare is a globally recognized leader in
              <strong>herbal extracts</strong>, known for combining natural
              ingredients with innovative manufacturing practices. Guided by
              <strong>TGA, MEDSAFE, and EU standards</strong>, we ensure the
              precise production of high-quality extracts, earning a strong
              international reputation.
            </p>

            <p>
              In addition to supplying premium
              <strong>organic extracts, plant extracts, essential oils</strong>,
              and
              <strong>organic herbal extracts</strong>, we enhance ingredient
              <strong>bioavailability</strong> using advanced techniques,
              further reinforcing our industry leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <div className="video-container">
          {/* LEFT CONTENT */}
          <div className="video-content">
            <h2>Video: Learn about NatureBioFern</h2>
            <p>
              Discover the story behind NatureBioFern. Our corporate video
              showcases our commitment to innovation, sustainability, and
              quality in the natural ingredients industry.
            </p>

            <button
              className="watch-btn"
              onClick={() =>
                window.open(
                  "https://www.youtube.com/watch?v=s4UPS489OGU",
                  "_blank",
                )
              }
            >
              Watch Video
            </button>
          </div>

          {/* RIGHT IMAGE WITH PLAY BUTTON */}
          <div className="video-thumbnail">
            <div className="play-btn"></div>
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="cpbi-section">
        <h2 className="cpbi-title">Clinically Proven Branded Ingredients</h2>
        <p className="cpbi-subtitle">
          Botanic Healthcare manufacture branded ingredients to enhance the life
          of every person who puts their trust in us.
        </p>

        <div className="cpbi-grid">
          <a
            href="https://www.ashwamind.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="cpbi-link"
          >
            <div className="cpbi-card">
              <img src="/images/ashwamind.png" alt="AshwaMind" />
            </div>
          </a>

          <a
            href="https://www.absocurcumin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="cpbi-link"
          >
            <div className="cpbi-card">
              <img src="/images/absocurcumin.png" alt="AbsoCurcumin" />
            </div>
          </a>

          <a
            href="https://www.ashwamind.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="cpbi-link"
          >
            <div className="cpbi-card">
              <img src="/images/menosophora.jpg" alt="MenoSophora" />
            </div>
          </a>

          <a
            href="https://www.ashwamind.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="cpbi-link"
          >
            <div className="cpbi-card">
              <img src="/images/biopepper95.png" alt="BioPepper95" />
            </div>
          </a>

          <a
            href="https://www.ashwamind.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="cpbi-link"
          >
            <div className="cpbi-card">
              <img src="/images/absoperine.png" alt="Absoperine" />
            </div>
          </a>

          <a
            href="https://www.ashwamind.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="cpbi-link"
          >
            <div className="cpbi-card">
              <img src="/images/tinoimmune.png" alt="TinoImmune" />
            </div>
          </a>

          <a
            href="https://www.ashwamind.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="cpbi-link"
          >
            <div className="cpbi-card">
              <img src="/images/cipomac.png" alt="Cipomac" />
            </div>
          </a>

          <a
            href="https://www.ashwamind.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="cpbi-link"
          >
            <div className="cpbi-card">
              <img src="/images/melostacio-gold.png" alt="Melostacio Gold" />
            </div>
          </a>

          <a
            href="https://www.ashwamind.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="cpbi-link"
          >
            <div className="cpbi-card">
              <img src="/images/lutenic.png" alt="Lutenic" />
            </div>
          </a>

          <a
            href="https://www.ashwamind.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="cpbi-link"
          >
            <div className="cpbi-card">
              <img src="/images/berbix.png" alt="BerBix" />
            </div>
          </a>

          <a
            href="https://www.ashwamind.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="cpbi-link"
          >
            <div className="cpbi-card">
              <img src="/images/cornfit.png" alt="Cornfit" />
            </div>
          </a>
        </div>
      </section>

      {/* Brand Section */}
      <section className="branded-section">
        <h2 className="branded-title">Branded Ingredients</h2>

        <div className="branded-grid">
          <div className="brand-card">
            <img src="/images/salnic.jpg" alt="Salnic" />
          </div>
          <div className="brand-card">
            <img src="/images/turmalonga.png" alt="TurmaLonga" />
          </div>
          <div className="brand-card">
            <img src="/images/8loss.png" alt="8Loss" />
          </div>
          <div className="brand-card">
            <img src="/images/aquamin50.png" alt="AquaMin50" />
          </div>
          <div className="brand-card">
            <img src="/images/bacopure.png" alt="Baco Pure" />
          </div>

          <div className="brand-card">
            <img src="/images/betavive.png" alt="BetaVive" />
          </div>
          <div className="brand-card">
            <img src="/images/biolivogen.png" alt="BioLivogen" />
          </div>
          <div className="brand-card">
            <img src="/images/bioshe.png" alt="Bio-She" />
          </div>
          <div className="brand-card">
            <img src="/images/coffeelean.png" alt="CoffeeLean" />
          </div>
          <div className="brand-card">
            <img src="/images/copure.png" alt="CoQ Pure" />
          </div>

          <div className="brand-card">
            <img src="/images/forlite.png" alt="Forlite" />
          </div>
          <div className="brand-card">
            <img src="/images/garcimate.png" alt="GarciMate" />
          </div>
          <div className="brand-card">
            <img src="/images/guarsol.jpg" alt="Guarsol" />
          </div>
          <div className="brand-card">
            <img src="/images/gymsol.jpg" alt="Gymsol" />
          </div>
          <div className="brand-card">
            <img src="/images/jinger.png" alt="Jinger" />
          </div>

          <div className="brand-card">
            <img src="/images/melostacio.png" alt="Melostacio" />
          </div>
          <div className="brand-card">
            <img src="/images/mucojoint-s.png" alt="MucoJoint-S" />
          </div>
          <div className="brand-card">
            <img src="/images/mucojoint.jpg" alt="MucoJoint" />
          </div>
          <div className="brand-card">
            <img src="/images/salibio.png" alt="SaliBio" />
          </div>
          <div className="brand-card">
            <img src="/images/lipsobio.png" alt="LipsoBio" />
          </div>
        </div>
      </section>

      {/* Signature Section */}

      <section className="signature-section">
        <h2 className="signature-title">Signature Ingredients</h2>

        <div className="signature-grid">
          <div className="signature-item">
            <img src="/images/coffee-arabica.jpg" alt="Coffea arabica" />
            <p>
              <em>Coffea arabica</em>
              <br />
              [Green Coffee Bean]
            </p>
          </div>

          <div className="signature-item">
            <img src="/images/withania.jpg" alt="Withania somnifera" />
            <p>
              <em>Withania somnifera</em>
              <br />
              [Ashwagandha Extract]
            </p>
          </div>

          <div className="signature-item">
            <img src="/images/bacopa.jpg" alt="Bacopa monnieri" />
            <p>
              <em>Bacopa monnieri</em>
              <br />
              [Brahmi Extract]
            </p>
          </div>

          <div className="signature-item">
            <img src="/images/bromelain.jpg" alt="Bromelain" />
            <p>
              <em>Bromelain</em>
              <br />
              [Pineapple Enzymes]
            </p>
          </div>

          <div className="signature-item">
            <img src="/images/coleus.jpg" alt="Coleus forskohlii" />
            <p>
              <em>Coleus forskohlii</em>
              <br />
              [Coleus Extract]
            </p>
          </div>

          <div className="signature-item">
            <img src="/images/pistacia.jpg" alt="Pistacia vera" />
            <p>
              <em>Pistacia vera</em>
              <br />
              [Pista Extract]
            </p>
          </div>

          <div className="signature-item">
            <img src="/images/salacia.jpg" alt="Salacia reticulata" />
            <p>
              <em>Salacia reticulata</em>
              <br />
              [Kothala himbutu Extract]
            </p>
          </div>

          <div className="signature-item">
            <img src="/images/tulsi.jpg" alt="Ocimum sanctum" />
            <p>
              <em>Ocimum sanctum</em>
              <br />
              [Tulsi Extract]
            </p>
          </div>

          <div className="signature-item">
            <img src="/images/greentea.jpg" alt="Camellia sinensis" />
            <p>
              <em>Camellia sinensis</em>
              <br />
              [Green Tea Extract]
            </p>
          </div>

          <div className="signature-item">
            <img src="/images/curcuma.jpg" alt="Curcuma longa" />
            <p>
              <em>Curcuma longa</em>
              <br />
              [Curcumin Extract]
            </p>
          </div>

          <div className="signature-item">
            <img src="/images/boswellia.jpg" alt="Boswellia serrata" />
            <p>
              <em>Boswellia serrata</em>
              <br />
              [Indian frankincense Extract]
            </p>
          </div>

          <div className="signature-item">
            <img src="/images/piper.jpg" alt="Piper nigrum" />
            <p>
              <em>Piper nigrum</em>
              <br />
              [Black Pepper Extract]
            </p>
          </div>
        </div>
      </section>

      {/* Lipso Section */}

      <section className="lipso-section">
        <div className="lipso-container">
          {/* LEFT CONTENT */}
          <div className="lipso-content">
            <h2>
              Introducing{" "}
              <span>
                Lipso<span className="orange">Bio</span>
              </span>
            </h2>

            <p>
              Optimizing nutrient delivery through liposomal technology. Choose
              LipsoBio® where nature meets innovation in liposomal grades
            </p>

            <div className="lipso-buttons">
              <button className="btn-primary">Read More</button>
              <button className="btn-primary">Watch Video</button>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="lipso-panel">
            <img src="/images/lipsobio-panel.png" alt="LipsoBio Products" />
          </div>
        </div>
      </section>

      {/* Event Section */}
      <section className="events-section">
        <div className="events-header">
          <h2>Upcoming Global Nutraceutical Events</h2>
          <p>
            We make your business stand out by let you discover the secrets of
            herbal extracts at our events, where you can learn how nature can
            heal your body and mind.
          </p>
        </div>

        {/* CAROUSEL */}
        <div className="events-carousel" ref={carouselRef}>
          <div className="events-track">
            {eventsData.map((event, index) => (
              <div className="event-card" key={index}>
                <img src={event.img} alt={event.title} />
                <span className="event-meta">{event.meta}</span>
                <h3>{event.title}</h3>
                <p className="event-location">{event.location}</p>
                <a
                  href="#"
                  className="event-link"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowForm(true);
                  }}
                >
                  Click here to schedule your meeting <span>+</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* DOTS */}
        <div className="events-dots">
          {Array.from({
            length: Math.ceil(eventsData.length / cardsPerView),
          }).map((_, index) => (
            <span
              key={index}
              className={`dot ${activeDot === index ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </section>
      {/* Quality Section */}

      <section className="quality-section">
        <div className="quality-container">
          {/* LEFT IMAGE */}
          <div className="quality-image">
            <img src="/images/quality-lab.jpg" alt="Quality Assurance Lab" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="quality-content">
            <h2>
              Uncompromising
              <br />
              Quality Assurance
            </h2>

            <p>
              Our Quality Control Lab is equipped with cutting-edge technology,
              including HPLC, GC-headspace, and spectrophotometry, to guarantee
              the highest quality standards for our products. Our expert
              technicians conduct thorough testing for identity, potency,
              purity, and microbiological safety, ensuring that each product
              meets rigorous safety and effectiveness criteria. Our advanced R&D
              center seamlessly integrates state-of-the-art technology and
              scientific expertise to drive the development of innovative
              healthcare solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Dialogue Box */}
      {/* ================= FORM MODAL ================= */}
      {showForm && (
        <div className="form-modal-overlay" onClick={() => setShowForm(false)}>
          <div className="form-modal" onClick={(e) => e.stopPropagation()}>
            {/* HEADER */}
            <div className="form-modal-header">
              <h3>Upcoming Global Nutraceutical Events</h3>
              <span className="close-icon" onClick={() => setShowForm(false)}>
                ×
              </span>
            </div>

            {/* FORM BODY */}
            <div className="form-modal-body">
              <form className="meeting-form">
                <input type="text" placeholder="Company" />
                <input type="text" placeholder="Name" />

                <input type="email" placeholder="Email" />
                <input type="tel" placeholder="Phone" />

                <select>
                  <option>Select Date</option>
                  <option>May 05, 2026</option>
                  <option>May 06, 2026</option>
                  <option>May 07, 2026</option>
                </select>

                <select>
                  <option>Available Slots</option>
                  <option>10:00 AM - 11:00 AM</option>
                  <option>11:00 AM - 12:00 PM</option>
                  <option>02:00 PM - 03:00 PM</option>
                </select>

                <button type="submit" className="submit-btn">
                  Submit Now
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
