import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./home";
import AboutPage from "./about";
import ServicesPage from "./services";
import ExperiencePage from "./experience";
import ContactPage from "./contact";
import CareersPage from "./careers";
import logo from "./img/logo1.png";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Home");
  const [activeService, setActiveService] = useState("AI Services");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const tabs = ["Home","About Us", "Services", "Experience", "Careers", "Contact"];
  const serviceOptions = ["AI Services", "Data Services", "Cloud Services"];
  console.log(setActiveTab, setActiveService)

  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  interface ServicesPageProps {
    activeService: string;
  }

  return (
    <Router>
      <div className="min-h-screen bg-[#0a192f] text-white transition-all duration-500 ">
        {/* Navbar */}
        <nav className="sticky top-0 bg-opacity-90 backdrop-blur-lg bg-[#0a192f] text-white flex justify-between items-center p-5 shadow-lg z-50">
          <img src={logo} alt="IMPARVISH Logo" className="h-12 w-50 mr-3" />
          <div className="flex space-x-6">
            {tabs.map((tab) => (
              tab === "Services" ? (
                <div key={tab} className="relative" ref={dropdownRef}>
                  <button className="px-4 py-2 rounded-md hover:bg-white hover:text-[#0a192f]" onClick={() => setShowDropdown(!showDropdown)}>
                      Services
                    </button>
                    {showDropdown && (
                      <div className="absolute right-0 top-full mt-1 w-48 z-50 hover:bg-[#09354a] hover:text-white shadow-lg rounded-md overflow-hidden border border-gray-600">
                        {serviceOptions.map((option) => (
                          <Link 
                            key={option} 
                            className="block px-4 py-2 text-left hover:bg-gray-700" 
                            to={`/services/${option}`} 
                            onClick={() => setShowDropdown(false)}
                          >
                            {option}
                          </Link>
                        ))}
                      </div>
                    )}
                </div>
              ) : (
                <Link key={tab} className="px-4 py-2 rounded-md hover:bg-red hover:text-[#09354a]" to={tab === "Home" ? "/" : `/${tab.toLowerCase().replace(/\s+/g, "-")}`}>{tab}</Link>
              )
            ))}
          </div>
        </nav>

        {/* Page Content */}
        <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.8 }}>
          {activeTab === "Services" ? (
            <section className="py-16 px-10">
              <h2 className="text-4xl font-bold mb-6">{activeService}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ServicesPage activeService={activeService} />
              </div>
            </section>
          ) : (
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about-us" element={<AboutPage />} />
              <Route path="/services/:serviceType" element={<ServicesPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          )}
        </motion.div>
        {/* Footer */}
        <footer style={{ backgroundColor: "#a8416a" }} className="text-white py-6 mt-10">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            
            {/* Horizontal Layout */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
              
              {/* Company Info */}
              <div>
                <img src={logo} alt="IMPARVISH Logo" className="h-12 w-50 mr-3" />
                <p className="mt-2 text-white w-64">Empowering Your Enterprise with Future-Ready Innovations</p>
              </div>
              {/* Quick Links */}
              <div>
                <h3 className="text-xl font-bold">Quick Links</h3>
                <ul className="mt-2 flex flex-wrap space-x-4">
                  <li><Link to="/about-us" className="hover:underline">About Us</Link></li>
                  <li><Link to="/services/AI Services" className="hover:underline">AI Services</Link></li>
                  <li><Link to="/services/Data Services" className="hover:underline">Data Services</Link></li>
                  <li><Link to="/services/Cloud Services" className="hover:underline">Cloud Services</Link></li>
                  <li><Link to="/careers" className="hover:underline">Careers</Link></li>
                  <li><Link to="/contact" className="hover:underline">Contact</Link></li>
                </ul>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-bold">Follow Us</h3>
                <div className="mt-2 flex space-x-4">
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                    Twitter
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                    LinkedIn
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                    Facebook
                  </a>
                </div>
              </div>
            </div>

            {/* Copyright Section */}
            <div className="mt-6 text-center text-white text-sm">
              <p>&copy; {new Date().getFullYear()} IMPARVISH. All rights reserved.</p>
              <p>
                <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link> | 
                <Link to="/terms-of-service" className="hover:underline"> Terms of Service</Link> |
                <Link to="/registration-details" className="hover:underline"> Registration Details</Link>
              </p>
              <p>Site Developed & Maintained by IMPARVISH Technologies Pvt. Ltd.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

/**
 return (
    <Router>
      <div className="min-h-screen bg-[#0a192f] text-white transition-all duration-500">
        <nav className="sticky top-0 bg-opacity-90 backdrop-blur-lg bg-[#0a192f] text-white flex justify-between items-center p-5 shadow-lg z-50">
          <h1 className="text-2xl font-semibold tracking-wide">IMPARVISH</h1>
          <div className="flex space-x-6">
            {tabs.map((tab) => (
              tab === "Services" ? (
                <div key={tab} className="relative" ref={dropdownRef}>
                  <button className="px-4 py-2 rounded-md hover:bg-white hover:text-[#0a192f]" onClick={() => setShowDropdown(!showDropdown)}>Services</button>
                  {showDropdown && (
                    <div className="absolute right-0 top-full mt-1 w-48 z-50 bg-[#0a192f] text-white shadow-lg rounded-md overflow-hidden border border-gray-600">
                      {serviceOptions.map((option) => (
                        <button key={option} className="block w-full px-4 py-2 text-left hover:bg-gray-700" onClick={() => { setActiveService(option); setShowDropdown(false); }}>
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={tab} className="px-4 py-2 rounded-md hover:bg-white hover:text-[#0a192f]" to={tab === "Home" ? "/" : `/${tab.toLowerCase().replace(/\s+/g, "-")}`}>{tab}</Link>
              )
            ))}
          </div>
        </nav>
        <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.8 }}>
          {activeTab === "Services" ? (
            <section className="py-16 px-10">
              <h2 className="text-4xl font-bold mb-6">{activeService}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ServicesPage activeService={activeService} />
              </div>
            </section>
          ) : (
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about-us" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          )}
        </motion.div>
      </div>
    </Router>
  );**/

