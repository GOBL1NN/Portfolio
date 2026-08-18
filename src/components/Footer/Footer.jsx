import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import logo from "../../assets/logo/AK-logo.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <img src={logo} alt="Amr Khaled" />
            <span>AMR KHALED</span>
          </Link>

          <p>© 2026 Amr Khaled. All rights reserved.</p>
        </div>

        <div className="footer__column">
          <p className="footer__label">Navigation</p>

          <Link to="/work">Work</Link>
          <Link to="/about">About</Link>
          <Link to="/#contact">Contact</Link>
        </div>

        <div className="footer__column">
          <p className="footer__label">Connect</p>

          <a
            href="https://www.linkedin.com/in/amr-khaled-869210225/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
            <ArrowUpRight size={12} />
          </a>

          <a href="https://github.com/GOBL1NN" target="_blank" rel="noreferrer">
            GitHub
            <ArrowUpRight size={12} />
          </a>

          <a href="mailto:amrkhaled2010@gmail.com">
            Email
            <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
