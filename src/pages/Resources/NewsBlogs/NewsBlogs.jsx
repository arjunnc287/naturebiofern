import "./NewsBlogs.css";

export default function NewsBlogs() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="resource-hero">
        <div className="resource-hero-overlay">
          <h1>News And Blog</h1>
          <p>
            <span>Home</span> &gt; <span>Resources</span> &gt; News And Blog
          </p>
        </div>
      </section>

      {/* UNDER UPGRADE SECTION */}
      <section className="resource-upgrade">
        <div className="upgrade-card">
          <span className="upgrade-badge">🚧 Under Enhancement</span>

          <h2>We’re Crafting Something Exceptional</h2>

          <p>
            Our team is currently upgrading this section to deliver richer
            insights, enhanced visuals, and a more immersive experience.
          </p>

          <div className="upgrade-line"></div>

          <p className="upgrade-sub">
            Please check back soon — innovation is in progress.
          </p>
        </div>
      </section>
    </>
  );
}
