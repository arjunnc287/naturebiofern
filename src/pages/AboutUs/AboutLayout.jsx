import { Outlet, NavLink } from "react-router-dom";
import "./aboutus.css";

export default function AboutLayout() {
  return (
    <div className="about-us-container">
      <aside className="about-us-sidebar">
        {/* <h2>About Us</h2> */}

        {/* <nav>
          <NavLink to="who-we-are">Who We Are</NavLink>
          <NavLink to="vision-mission">Vision & Mission</NavLink>
          <NavLink to="key-management">Key Management</NavLink>
          <NavLink to="management-team">Management Team</NavLink>
          <NavLink to="csr">CSR</NavLink>
          <NavLink to="sustainability">Sustainability</NavLink>
          <NavLink to="organic-process">Organic Process</NavLink>
          <NavLink to="certification">Certification</NavLink>
          <NavLink to="infrastructure">Infrastructure</NavLink>
        </nav> */}
      </aside>

      <section className="about-us-content">
        <Outlet />
      </section>
    </div>
  );
}
