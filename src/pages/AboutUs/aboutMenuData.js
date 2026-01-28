// src/pages/AboutUs/aboutMenuData.js

const aboutMenuData = [
  { title: "Who We Are", path: "/about/who-we-are" },
  { title: "Vision & Mission", path: "/about/vision-mission" },
  {
    title: "Management",
    submenu: [
      { title: "Key Management", path: "/about/management/key-management" },
      { title: "Management Team", path: "/about/management/management-team" },
    ],
  },
  { title: "CSR", path: "/about/csr" },
  {
    title: "Sustainable Synergy",
    submenu: [
      { title: "Sustainability", path: "/about/sustainability" },
      { title: "Organic Process", path: "/about/organic-process" },
    ],
  },
  { title: "Certification", path: "/about/certification" },
  { title: "Infrastructure", path: "/about/infrastructure" },
];

export default aboutMenuData;
