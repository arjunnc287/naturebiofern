import "./Career.css";

export default function Career() {
  return (
    <>
      {/* Banner */}
      <section className="resource-banner career-banner">
        <div className="banner-content">
          <h1>Career</h1>
          <p>
            <span>Home</span> &gt; <span>About Us</span> &gt; Career
          </p>
        </div>
      </section>

      {/* Job Section */}
      <section className="career-container">
        <div className="career-box">
          <div className="filters">
            <h4>Job Type</h4>
            <label>
              <input type="checkbox" /> Full time (4)
            </label>

            <h4>Work Experience</h4>
            <label>
              <input type="checkbox" /> 12–20 years
            </label>
            <label>
              <input type="checkbox" /> 8–12 years
            </label>

            <h4>Salary</h4>
            <label>
              <input type="checkbox" /> 25L–30L
            </label>
          </div>

          <div className="jobs">
            <div className="job">
              <h3>Assistant Manager - Business Development</h3>
              <p>Hyderabad, Telangana, India</p>
            </div>

            <div className="job">
              <h3>Senior Manager - Techno Commercial</h3>
              <p>Hyderabad, Telangana, India</p>
            </div>

            <div className="job">
              <h3>Vice President – Supply Chain Management</h3>
              <p>Hyderabad, Telangana, India</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
