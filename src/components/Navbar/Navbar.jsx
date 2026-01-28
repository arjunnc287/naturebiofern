import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/organic.png";
// import WhoWeAre from "../../pages/AboutUs/sections/WhoWeAre";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const closeMenu = () => setMenuOpen(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Handle search functionality here
      console.log("Searching for:", searchQuery);
      // You can redirect to search results page or perform search action
      alert(`Searching for: ${searchQuery}`);
      setSearchQuery("");
      setSearchOpen(false);
    }
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (!searchOpen) {
      // Close mobile menu when opening search on mobile
      setMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo-container">
          <div className="logo-icon">
            {/* Replace with your actual logo image */}
            <img
              src={logo}
              alt="NatureBioFern Logo"
              width="40"
              height="40"
              onError={(e) => {
                // Fallback if image fails to load
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "block";
              }}
            />
            {/* Fallback SVG in case image doesn't load */}
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: "none" }}
            >
              <path
                d="M20 2C10.059 2 2 10.059 2 20C2 29.941 10.059 38 20 38C29.941 38 38 29.941 38 20C38 10.059 29.941 2 20 2Z"
                fill="#064e3b"
              />
              <path
                d="M20 10L15 20L20 25L25 20L20 10Z"
                fill="#4caf50"
                stroke="#ffffff"
                strokeWidth="1"
              />
              <path
                d="M20 25L25 30L20 35L15 30L20 25Z"
                fill="#2e7d32"
                stroke="#ffffff"
                strokeWidth="1"
              />
            </svg>
          </div>
          <div className="logo-text">
            <div className="logo-main">NatureBioFern</div>
            <div className="logo-tagline">
              Nature's Wisdom, Scientific Excellence
            </div>
          </div>
        </div>

        <div className="nav-right">
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li>
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>

            <li className="dropdown">
              <span>About Us ▾</span>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/about/who-we-are" onClick={closeMenu}>
                    Who We Are
                  </Link>
                </li>
                <li>
                  <Link to="/about/vision-mission" onClick={closeMenu}>
                    Vision & Mission
                  </Link>
                </li>

                <li className="dropdown-sub">
                  <span>Management ▸</span>
                  <ul className="dropdown-submenu">
                    <li>
                      <Link to="/about/key-management" onClick={closeMenu}>
                        Key Management
                      </Link>
                    </li>
                    <li>
                      <Link to="/about/management-team" onClick={closeMenu}>
                        Management Team
                      </Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link to="/about/csr" onClick={closeMenu}>
                    CSR
                  </Link>
                </li>

                <li className="dropdown-sub">
                  <span>Sustainable Synergy ▸</span>
                  <ul className="dropdown-submenu">
                    <li>
                      <Link to="/about/sustainability" onClick={closeMenu}>
                        Sustainability
                      </Link>
                    </li>
                    <li>
                      <Link to="/about/organic-process" onClick={closeMenu}>
                        Organic Process
                      </Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link to="/about/certification" onClick={closeMenu}>
                    Certification
                  </Link>
                </li>
                <li>
                  <Link to="/about/infrastructure" onClick={closeMenu}>
                    Infrastructure
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/products" onClick={closeMenu}>
                Products
              </Link>
            </li>

            <li className="dropdown">
              <span>Branded Ingredients ▾</span>
              <ul className="dropdown-menu">
                <li className="dropdown-sub">
                  <span>Clinically Proven ▸</span>
                  <ul className="dropdown-submenu">
                    <li>
                      <a href="https://www.ashwamind.com/" onClick={closeMenu}>
                        AshwalMind
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.absocurcumin.com/"
                        onClick={closeMenu}
                      >
                        AbosCurcumin
                      </a>
                    </li>
                    <li>
                      <Link
                        to="/branded-ingredients/menosphora"
                        onClick={closeMenu}
                      >
                        MenoSphora
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/branded-ingredients/biopepper95"
                        onClick={closeMenu}
                      >
                        BioPepper95
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/branded-ingredients/absoperine"
                        onClick={closeMenu}
                      >
                        Absoperine
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/branded-ingredients/tinoimmune"
                        onClick={closeMenu}
                      >
                        Tinoimmune
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/branded-ingredients/lipomac"
                        onClick={closeMenu}
                      >
                        Lipomac
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/branded-ingredients/melostaciogold"
                        onClick={closeMenu}
                      >
                        Melostacio Gold
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="dropdown-sub">
                  <span>Branded Ingredients ▸</span>
                  <ul className="dropdown-submenu">
                    <li>
                      <Link
                        to="/branded-ingredients#salnic"
                        onClick={closeMenu}
                      >
                        Salnic
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/branded-ingredients/turmalonga"
                        onClick={closeMenu}
                      >
                        Turmalonga
                      </Link>
                    </li>
                    <li>
                      <Link to="/branded-ingredients/8loss" onClick={closeMenu}>
                        8Loss
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/branded-ingredients/aquamin50"
                        onClick={closeMenu}
                      >
                        AquaMin50
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/branded-ingredients/barcpure"
                        onClick={closeMenu}
                      >
                        Barcpure
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/branded-ingredients/berbix"
                        onClick={closeMenu}
                      >
                        Berbix
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/branded-ingredients/lutenic"
                        onClick={closeMenu}
                      >
                        Lutenic
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/branded-ingredients/betavive"
                        onClick={closeMenu}
                      >
                        BetaVive
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/branded-ingredients/biolivogen"
                        onClick={closeMenu}
                      >
                        BioLivogen
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/branded-ingredients/coffeelean"
                        onClick={closeMenu}
                      >
                        Coffee Lean
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/branded-ingredients/coqpure"
                        onClick={closeMenu}
                      >
                        CoQPure
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/branded-ingredients/cornfit"
                        onClick={closeMenu}
                      >
                        Cornfit
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/branded-ingredients/forlite"
                        onClick={closeMenu}
                      >
                        Forlite
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/branded-ingredients/garcimate"
                        onClick={closeMenu}
                      >
                        GarciMate
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/branded-ingredients/guarsol"
                        onClick={closeMenu}
                      >
                        Guarsol
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/branded-ingredients/gymsol"
                        onClick={closeMenu}
                      >
                        Gymsol
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/branded-ingredients/melostacio"
                        onClick={closeMenu}
                      >
                        Melostacio
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/branded-ingredients/mucojoint"
                        onClick={closeMenu}
                      >
                        Mucojoint
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/branded-ingredients/sillbio"
                        onClick={closeMenu}
                      >
                        SillBio
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/branded-ingredients/lipsobio"
                        onClick={closeMenu}
                      >
                        LipsoBio
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="dropdown">
              <span>Innovation ▾</span>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/innovation/rnd" onClick={closeMenu}>
                    R&D
                  </Link>
                </li>
                <li>
                  <Link to="/innovation/patent" onClick={closeMenu}>
                    Patent & Publication
                  </Link>
                </li>
                <li>
                  <Link to="/innovation/phytochemistry" onClick={closeMenu}>
                    Phytochemistry
                  </Link>
                </li>
                <li>
                  <Link to="/innovation/new-product" onClick={closeMenu}>
                    New Product Development
                  </Link>
                </li>
                <li>
                  <Link to="/innovation/clinical-research" onClick={closeMenu}>
                    Clinical Research
                  </Link>
                </li>
                <li>
                  <Link to="/innovation/quality-control" onClick={closeMenu}>
                    Quality Control
                  </Link>
                </li>
              </ul>
            </li>

            <li className="dropdown">
              <span>Resources ▾</span>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/resources/news-blogs" onClick={closeMenu}>
                    News & Blogs
                  </Link>
                </li>
                <li>
                  <Link to="/resources/webinar" onClick={closeMenu}>
                    Webinar
                  </Link>
                </li>
                <li>
                  <Link to="/resources/events" onClick={closeMenu}>
                    Events
                  </Link>
                </li>
                <li>
                  <Link to="/resources/career" onClick={closeMenu}>
                    Career
                  </Link>
                </li>

                <li className="dropdown-sub left">
                  <span>Brochure</span>
                  <ul className="dropdown-submenu">
                    <li>
                      <li>
                        <a
                          href="https://www.botanichealthcare.net/default/assets/img/LipsobioBrochure.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={closeMenu}
                        >
                          Lipso Bio Brochure
                        </a>
                      </li>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/contact" onClick={closeMenu}>
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Search Bar */}
          <div className={`search-container ${searchOpen ? "open" : ""}`}>
            {searchOpen ? (
              <form className="search-form" onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="Search products, ingredients..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                  autoFocus
                />
                <button type="submit" className="search-submit">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  className="search-close"
                  onClick={toggleSearch}
                >
                  ×
                </button>
              </form>
            ) : (
              <button className="search-toggle" onClick={toggleSearch}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            )}
          </div>

          <div
            className={`menu-toggle ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
}
