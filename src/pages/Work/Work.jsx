import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./Work.css";

import carLinkImage from "../../assets/carLink/Hero.png";
import cureImage from "../../assets/cure/Cure.png";
import claddingImage from "../../assets/cladding/Hero.png";

import { fadeUp, fadeScale, stagger } from "../../animations/variants";

const projects = [
  {
    number: "1",
    category: "UX/UI · REACT",
    title: "CarLink",
    imageClass: "carlink",
    description:
      "A premium automotive marketplace and digital garage experience connecting discovery, vehicle management, and purchasing.",
    image: carLinkImage,
    link: "/projects/carlink",
    liveLink: "https://carlink-frontend.vercel.app/home",
    status: "Completed · Deployed",
    statusType: "success",
  },
  {
    number: "2",
    category: "PRODUCT DESIGN · SOFTWARE",
    title: "Cure",
    imageClass: "cure",
    description:
      "A connected medical delivery system combining a mobile application, wearable sensor, and autonomous robot.",
    image: cureImage,
    link: "/projects/cure",
    status: "Graduation Project",
    statusType: "highlight",
  },
  {
    number: "3",
    category: "UX/UI · WEB DESIGN",
    title: "Cladding",
    imageClass: "cladding",
    description:
      "A premium architectural cladding website focused on strong visual presentation and a refined digital experience.",
    image: claddingImage,
    link: "/projects/cladding",
    status: "In Progress",
    statusType: "neutral",
  },
];

function Work() {
  return (
    <main className="work-page">
      {/* =========================================
          HERO
      ========================================= */}

      <section className="work-hero">
        <div className="container">
          <motion.div
            className="work-hero__top"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.3,
            }}
            variants={fadeUp}
          >
            <p className="eyebrow">WORK</p>
          </motion.div>

          <motion.div
            className="work-hero__content"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.25,
            }}
            variants={fadeUp}
          >
            <h1>Selected work.</h1>

            <div className="work-hero__side">
              <p>
                Software, product, and interface projects I&apos;ve designed and
                built.
              </p>

              <div className="work-hero__badge">
                <span className="work-hero__pulse"></span>
                <span>{projects.length} FEATURED PROJECTS</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          PROJECT GRID
      ========================================= */}

      <section className="work-projects">
        <div className="container">
          <motion.div
            className="work-projects__grid"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.12,
            }}
            variants={stagger}
          >
            {projects.map((project) => (
              <motion.article
                className="work-card"
                key={project.number}
                variants={fadeScale}
              >
                {/* IMAGE */}

                <Link
                  to={project.link}
                  className={`work-card__image work-card__image--${project.imageClass}`}
                >
                  <img src={project.image} alt={`${project.title} project`} />

                  <div className="work-card__glass-overlay">
                    <span>Explore Case Study</span>
                    <ArrowUpRight size={18} />
                  </div>
                </Link>

                {/* CONTENT */}

                <div className="work-card__content">
                  <div className="work-card__header">
                    <span className="work-card__category">
                      {project.category}
                    </span>

                    <span className="work-card__number">{project.number}</span>
                  </div>

                  <h2 className="work-card__title">
                    <Link to={project.link}>{project.title}</Link>
                  </h2>

                  <p className="work-card__description">
                    {project.description}
                  </p>

                  {/* FOOTER */}

                  <div className="work-card__footer">
                    <span
                      className={`work-card__status work-card__status--${project.statusType}`}
                    >
                      <span className="work-card__dot"></span>
                      {project.status}
                    </span>

                    <div className="work-card__actions">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="work-card__action work-card__action--secondary"
                        >
                          Live Site
                          <ExternalLink size={13} />
                        </a>
                      )}

                      <Link
                        to={project.link}
                        className="work-card__action work-card__action--primary"
                      >
                        View Case Study
                        <ArrowUpRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default Work;
