import "./Certification.css";

export default function Certificates() {
  const certificates = [
    {
      img: "/images/certificates/iso14001.png",
      title: "ISO 14001",
      desc: "Botanic Healthcare Private Limited is ISO 14001:2015 certified for environmental management systems.",
    },
    {
      img: "/images/certificates/iso45001.png",
      title: "ISO 45001",
      desc: "ISO 45001 certified, ensuring occupational health and safety standards.",
    },
    {
      img: "/images/certificates/gmp.png",
      title: "GMP",
      desc: "Botanic Healthcare has been awarded FSSC 22000 certification.",
    },
    {
      img: "/images/certificates/eu-organic.png",
      title: "EU Organic",
      desc: "Certified for EU Organic and fully compliant.",
    },
    {
      img: "/images/certificates/nongmo.png",
      title: "Non-GMO Certified",
      desc: "Certified by FoodChain ID.",
    },
    {
      img: "/images/certificates/great-place.png",
      title: "Great Place To Work",
      desc: "Certified as a Great Place To Work.",
    },
    {
      img: "/images/certificates/nsf.png",
      title: "NSF",
      desc: "NSF/ANSI 173, Section 8 certification.",
    },
    {
      img: "/images/certificates/brcgs.png",
      title: "BRCGS",
      desc: "Certified to BRC Global Standard.",
    },
    {
      img: "/images/certificates/fssc22000.png",
      title: "FSSC 22000",
      desc: "Awarded FSSC 22000 certification.",
    },
    {
      img: "/images/certificates/famiqs.png",
      title: "FAMI-QS",
      desc: "Certified by Swiss Cert Pvt. Ltd.",
    },
    {
      img: "/images/certificates/zed.png",
      title: "ZED GOLD MSME",
      desc: "Awarded ZED Gold certification.",
    },
    {
      img: "/images/certificates/haccp.png",
      title: "HACCP",
      desc: "HACCP certified by TÜV SÜD South Asia.",
    },
    {
      img: "/images/certificates/iso9001.png",
      title: "ISO 9001:2015",
      desc: "Certified quality management system.",
    },
    {
      img: "/images/certificates/iso22000.png",
      title: "ISO 22000:2018",
      desc: "Food safety management certification.",
    },
    {
      img: "/images/certificates/star-kosher.png",
      title: "Star-K Kosher",
      desc: "Listed on Star-K Kosher certificate.",
    },
    {
      img: "/images/certificates/uk-kosher.png",
      title: "UK Kosher",
      desc: "Certified under Orthodox Union.",
    },
    {
      img: "/images/certificates/halal.png",
      title: "Halal",
      desc: "Committed to maintaining halal quality.",
    },
    {
      img: "/images/certificates/vegetarian.png",
      title: "Global Vegetarian",
      desc: "Products listed under Global Vegetarian.",
    },
    {
      img: "/images/certificates/organic-india.png",
      title: "Organic India",
      desc: "Awarded organic certification.",
    },
    {
      img: "/images/certificates/fssai.png",
      title: "FSSAI",
      desc: "All products manufactured at FSSAI certified facility.",
    },
    {
      img: "/images/certificates/usda.png",
      title: "USDA-NOP",
      desc: "Certified under USDA National Organic Program.",
    },
    {
      img: "/images/certificates/dsir.png",
      title: "DSIR Certification",
      desc: "R&D department recognized by DSIR.",
    },
    {
      img: "/images/certificates/kcj.png",
      title: "KCJ Kosher",
      desc: "Certified by Orthodox rabbinical authorities.",
    },
    {
      img: "/images/certificates/korea-organic.png",
      title: "Korean Organic",
      desc: "Certified under Korea Organic Certification.",
    },
    {
      img: "/images/certificates/ayush.png",
      title: "Ayush",
      desc: "Certified manufacturing Ayurvedic drugs.",
    },
    {
      img: "/images/certificates/spice-board.png",
      title: "Spice Board",
      desc: "Authorized exporter of spices from India.",
    },
    {
      img: "/images/certificates/aeo.png",
      title: "Authorized Economic Operator (AEO)",
      desc: "Recognized for securing the international supply chain.",
    },
  ];

  return (
    <>
      {/* Banner */}
      <div className="cert-banner">
        <div className="cert-banner-content">
          <h1>Certificates</h1>
          <p>Home &gt; About Us &gt; Certificates</p>
        </div>
      </div>

      {/* Content */}
      <section className="cert-section">
        <h2>Certificates</h2>
        <p className="cert-desc">
          Our expertise in nutra ingredients is backed by rigorous quality
          control processes and industry-leading certifications.
        </p>

        <div className="cert-grid">
          {certificates.map((item, index) => (
            <div className="cert-card" key={index}>
              <div className="cert-img">
                <img src={item.img} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <span className="read-more">… Read More</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
