// src/pages/AboutUs/sections/ManagementTeam.jsx
import React from "react";
import "./ManagementTeam.css";

const ManagementTeam = () => {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section
        className="mt-hero"
        style={{ backgroundImage: "url(/images/about-building.jpg)" }}
      >
        <div className="mt-hero-overlay">
          <h1>Management Team</h1>
          <p>
            <span>Home</span> &gt; <span>Management Team</span>
          </p>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="mt-container">
        <h2 className="mt-title">Management Team</h2>

        <p className="mt-description">
          Our team of dedicated professionals is committed to delivering
          exceptional results. Each individual brings unique skills and
          expertise to the table, working together to achieve our shared goals.
        </p>

        <div className="mt-grid">
          {[
            ["Dr. H. N. Shivaprasad", "Chief Scientific Officer"],
            ["Narahari Naidu", "Group Chief Financial Officer"],
            ["Sandeep Reddy", "Chief Financial Officer"],
            ["Krishna Murthy", "Chief Operating Officer"],
            ["Dr. Saji Vasudevan", "Vice President - Quality"],
            ["Noela González", "Vice President, Marketing & Sales - Americas"],
            [
              "Luca Gelardi",
              "Vice President, Business Development & Sales - Europe and MEA",
            ],
            [
              "Keshob Banerjee",
              "Vice President - Business Development - APAC Region",
            ],
            [
              "Dr. Syed Dawood Noor",
              "Sr. General Manager - ASEAN & Regulatory Affairs",
            ],
            ["Senthil Kumar", "Sr. General Manager - Operations"],
            ["Viswanadh Sarma", "General Manager - Corporate HR"],
          ].map((member, index) => (
            <div className="mt-card" key={index}>
              <img src={`/images/team${index + 1}.jpg`} alt={member[0]} />
              <h3>{member[0]}</h3>
              <p>{member[1]}</p>
            </div>
          ))}
        </div>

        <p className="mt-footer">
          Together, we are committed to making a positive impact on the world by
          providing natural, effective, and sustainable nutraceutical
          ingredients.
        </p>
      </section>
    </>
  );
};

export default ManagementTeam;
