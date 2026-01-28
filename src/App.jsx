import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

import HomePage from "./pages/Home/home";
import Contact from "./pages/ContactUs/contact";
import Products from "./pages/Products/product";

import AboutLayout from "./pages/AboutUs/AboutLayout";
import WhoWeAre from "./pages/AboutUs/sections/WhoWeAre";
import VisionMission from "./pages/AboutUs/sections/VisionMission";
import KeyManagement from "./pages/AboutUs/sections/KeyManagement";
import ManagementTeam from "./pages/AboutUs/sections/ManagementTeam";
import CSR from "./pages/AboutUs/sections/CSR";
import Sustainability from "./pages/AboutUs/sections/Sustainability";
import OrganicProcess from "./pages/AboutUs/sections/OrganicProcess";
import Certification from "./pages/AboutUs/sections/Certification";
import Infrastructure from "./pages/AboutUs/sections/Infrastructure";

import BotanicalPortfolio from "./pages/BrandedIngredients/BotanicalPortfolio";

import InnovationLayout from "./pages/Innovation/InnovationLayout";
import RnD from "./pages/Innovation/RnD/RnD";
import PatentPublication from "./pages/Innovation/PatentPublication/PatentPublication";
import Phytochemistry from "./pages/Innovation/Phytochemistry/Phytochemistry";
import NewProductDevelopment from "./pages/Innovation/NewProductDevelopment/NewProductDevelopment";
import ClinicalResearch from "./pages/Innovation/ClinicalResearch/ClinicalResearch";
import QualityControl from "./pages/Innovation/QualityControl/QualityControl";

import ResourcesLayout from "./pages/Resources/ResourcesLayout";
import NewsBlogs from "./pages/Resources/NewsBlogs/NewsBlogs";
import Webinar from "./pages/Resources/Webinar/Webinar";
import Events from "./pages/Resources/Events/Events";
import Career from "./pages/Resources/Career/Career";
import LipsoBioBrochure from "./pages/Resources/Brochure/LipsoBioBrochure";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<Products />} />
          <Route path="contact" element={<Contact />} />

          <Route path="about" element={<AboutLayout />}>
            <Route index element={<WhoWeAre />} />
            <Route path="who-we-are" element={<WhoWeAre />} />
            <Route path="vision-mission" element={<VisionMission />} />
            <Route path="key-management" element={<KeyManagement />} />
            <Route path="management-team" element={<ManagementTeam />} />
            <Route path="csr" element={<CSR />} />
            <Route path="sustainability" element={<Sustainability />} />
            <Route path="organic-process" element={<OrganicProcess />} />
            <Route path="certification" element={<Certification />} />
            <Route path="infrastructure" element={<Infrastructure />} />
          </Route>

          <Route path="branded-ingredients" element={<BotanicalPortfolio />} />

          <Route path="innovation" element={<InnovationLayout />}>
            <Route path="rnd" element={<RnD />} />
            <Route path="patent" element={<PatentPublication />} />
            <Route path="phytochemistry" element={<Phytochemistry />} />
            <Route path="new-product" element={<NewProductDevelopment />} />
            <Route path="clinical-research" element={<ClinicalResearch />} />
            <Route path="quality-control" element={<QualityControl />} />
          </Route>

          <Route path="resources" element={<ResourcesLayout />}>
            <Route path="news-blogs" element={<NewsBlogs />} />
            <Route path="webinar" element={<Webinar />} />
            <Route path="events" element={<Events />} />
            <Route path="career" element={<Career />} />
            <Route path="brochure/lipso-bio" element={<LipsoBioBrochure />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
