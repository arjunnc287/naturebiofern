// src/pages/AboutUs/sections/KeyManagement.jsx
import React from "react";
import "./KeyManagement.css";

const KeyManagement = () => {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section
        className="km-hero"
        style={{
          backgroundImage: "url(/images/about-building.jpg)",
        }}
      >
        <div className="km-hero-overlay">
          <h1>Key Management</h1>
          <p>
            <span>Home</span> &gt; <span>Key Management</span>
          </p>
        </div>
      </section>

      {/* ===== CONTENT SECTION ===== */}
      <section className="km-container">
        <h2 className="km-title">Key Management</h2>

        <div className="km-cards">
          {/* CARD 1 */}
          <div className="km-card">
            <img src="/images/gaurav.jpg" alt="Mr. Gaurav Soni" />
            <h3>Mr. Gaurav Soni</h3>
            <p className="km-role">FOUNDER AND MANAGING DIRECTOR</p>
          </div>

          {/* CARD 2 */}
          <div className="km-card">
            <img src="/images/madhu.jpg" alt="Mr. Madhu Krishnamani" />
            <h3>Mr. Madhu Krishnamani</h3>
            <p className="km-role">FOUNDER AND MANAGING DIRECTOR</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default KeyManagement;
