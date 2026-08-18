import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import InteractiveBackground from "./components/InteractiveBackground/InteractiveBackground";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home/Home";
import CarLink from "./pages/CarLink/CarLink";
import Cure from "./pages/Cure/Cure";
import About from "./pages/About/About";
import Work from "./pages/Work/Work";

// Placeholder for pending case study
function Cladding() {
  return (
    <div
      style={{
        padding: "160px 20px 100px",
        textAlign: "center",
        minHeight: "60vh",
      }}
    >
      <h1>Aluminto / Cladding</h1>
      <p style={{ color: "var(--text-muted, #888)", marginTop: "12px" }}>
        Case study under development.
      </p>
    </div>
  );
}

// Global page animation wrapper
function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// Route mapping configuration
const routes = [
  { path: "/", element: <Home /> },
  { path: "/projects/carlink", element: <CarLink /> },
  { path: "/projects/cure", element: <Cure /> },
  { path: "/projects/cladding", element: <Cladding /> },
  { path: "/about", element: <About /> },
  { path: "/work", element: <Work /> },
];

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {routes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<PageTransition>{element}</PageTransition>}
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <InteractiveBackground />
      <div className="site">
        <div className="site-content">
          <Navbar />
          <AnimatedRoutes />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}
