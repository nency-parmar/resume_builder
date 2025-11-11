import { Routes, Route, useLocation } from "react-router-dom";
import Splash from "./pages/Splash";
import Dashboard from "./pages/Dashboard";
import Form from "./pages/Form";
import Preview from "./pages/Preview";
import ThankYou from "./pages/ThankYou";
import MyResumes from "./pages/MyResumes";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Templates from "./pages/Templates";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  const hideLayout = location.pathname === "/";

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/form" element={<Form />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/myresumes" element={<MyResumes />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="*"
          element={
            <div
              style={{
                textAlign: "center",
                marginTop: "200px",
                color: "#5B3CC4",
                fontSize: "40px",
                fontWeight: "600",
              }}
            >
              🚫 404 - Page Not Found
              <p style={{ fontSize: "18px", color: "#555" }}>
                The page you’re looking for doesn’t exist or might have been moved.
              </p>
            </div>
          }
        />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

export default App;
