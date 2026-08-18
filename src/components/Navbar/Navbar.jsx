import "./Navbar.css";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

import logo from "../../assets/logo/AK-logo.png";
import Magnetic from "../Magnetic/Magnetic";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const isWorkActive =
    location.pathname === "/work" || location.pathname.startsWith("/projects/");

  const isAboutActive = location.pathname === "/about";

  const handleContactClick = (event) => {
    event.preventDefault();

    navigate("/", {
      state: {
        scrollTo: "contact",
      },
    });
  };

  return (
    <motion.header
      className="navbar"
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{
        duration: 0.35,
        ease: "easeInOut",
      }}
    >
      <div className="navbar__inner">
        {/* LOGO */}

        <Magnetic>
          <Link to="/" className="navbar__logo">
            <img src={logo} alt="Amr Khaled" />

            <span>Amr Khaled</span>
          </Link>
        </Magnetic>

        {/* NAVIGATION */}

        <nav className="navbar__links">
          <Magnetic>
            <Link
              to="/work"
              className={`navbar__link ${
                isWorkActive ? "navbar__link--active" : ""
              }`}
            >
              Work
            </Link>
          </Magnetic>

          <Magnetic>
            <Link
              to="/about"
              className={`navbar__link ${
                isAboutActive ? "navbar__link--active" : ""
              }`}
            >
              About
            </Link>
          </Magnetic>

          <Magnetic>
            <a
              href="/#contact"
              className="navbar__link"
              onClick={handleContactClick}
            >
              Contact
            </a>
          </Magnetic>
        </nav>

        {/* CTA */}

        <Magnetic>
          <a
            href="/#contact"
            className="navbar__cta"
            onClick={handleContactClick}
          >
            Let&apos;s Talk
          </a>
        </Magnetic>
      </div>
    </motion.header>
  );
}

export default Navbar;
