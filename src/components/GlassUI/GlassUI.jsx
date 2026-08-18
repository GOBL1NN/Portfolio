import React from "react";
import { Link } from "react-router-dom";
import "./GlassUI.css";

// Navigation Header
export function GlassNav({ logo, links = [], ctaText, onCtaClick }) {
  return (
    <header className="glass-nav">
      <Link to="/" className="glass-nav__logo-link">
        <div className="glass-nav__logo">{logo}</div>
      </Link>
      <nav className="glass-nav__links">
        {links.map((link, idx) =>
          link.href.startsWith("http") || link.href.startsWith("mailto:") ? (
            <a key={idx} href={link.href} className="glass-nav__link">
              {link.label}
            </a>
          ) : (
            <Link key={idx} to={link.href} className="glass-nav__link">
              {link.label}
            </Link>
          ),
        )}
      </nav>
      {ctaText && (
        <button className="glass-nav__cta" onClick={onCtaClick}>
          {ctaText}
        </button>
      )}
    </header>
  );
}

// Generic Glass Panel Wrapper
export function GlassPanel({ children, className = "", spotlight = false }) {
  return (
    <div
      className={`glass-panel ${
        spotlight ? "glass-panel--spotlight" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

// Grid Container for Cards
export function GlassGrid({ children, columns = 4, className = "" }) {
  return (
    <div
      className={`glass-grid ${className}`}
      style={{ "--grid-cols": columns }}
    >
      {children}
    </div>
  );
}

// Individual Glass Card
export function GlassCard({
  step,
  title,
  description,
  children,
  className = "",
  onClick,
}) {
  return (
    <div className={`glass-card ${className}`} onClick={onClick}>
      {step && <div className="glass-card__step">{step}</div>}
      {title && <h3 className="glass-card__title">{title}</h3>}
      {description && <p className="glass-card__desc">{description}</p>}
      {children}
    </div>
  );
}

// Glass Footer
export function GlassFooter({ leftText, rightText, className = "" }) {
  return (
    <footer className={`glass-footer ${className}`}>
      <div>{leftText || `© ${new Date().getFullYear()} Amr Khaled.`}</div>
      <div>{rightText || "Built with React & Canvas"}</div>
    </footer>
  );
}
