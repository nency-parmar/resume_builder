// src/App.js
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// 🧩 Pages
import Splash from "./pages/Splash";
import Dashboard from "./pages/Dashboard";
import Form from "./pages/Form";
import Preview from "./pages/Preview";
import ThankYou from "./pages/ThankYou";
import MyResumes from "./pages/MyResumes";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ColorSelector from "./pages/templates/colorSelector";

// 🧭 Layout Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// 🎨 Styles
import "./App.css";

function App() {
  const location = useLocation();

  // ✅ Hide Navbar & Footer only on Splash page
  const hideLayout = location.pathname === "/";

  return (
    <>
      {!hideLayout && <Navbar />}

      <main style={{ minHeight: "calc(100vh - 150px)" }}>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/color/:templateId" element={<ColorSelector />} /> {/* ✅ Added route */}
          <Route path="/form" element={<Form />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/myresumes" element={<MyResumes />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* 🚫 Custom 404 Page */}
          <Route
            path="*"
            element={
              <div
                style={{
                  textAlign: "center",
                  marginTop: "180px",
                  color: "#7b2ff7",
                  fontSize: "36px",
                  fontWeight: "700",
                }}
              >
                🚫 404 - Page Not Found
                <p
                  style={{
                    fontSize: "18px",
                    color: "#666",
                    marginTop: "8px",
                    fontWeight: "500",
                  }}
                >
                  The page you’re looking for doesn’t exist or might have been moved.
                </p>
              </div>
            }
          />
        </Routes>
      </main>

      {!hideLayout && <Footer />}
    </>
  );
}

export default App;
