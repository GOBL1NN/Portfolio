import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import InspectableImage from "../../components/InspectableImage/InspectableImage";

import carLinkHero from "../../assets/carLink/Hero.png";
import dashboardImage from "../../assets/carLink/dashboard.png";
import garageImage from "../../assets/carLink/garage.png";
import partBuyImage from "../../assets/carLink/partbuy.png";
import checkoutImage from "../../assets/carLink/checkout.png";
import cartImage from "../../assets/carLink/cart.png";
import billingImage from "../../assets/carLink/billing.png";
import hero1Image from "../../assets/carLink/Hero1.png";
import hero2Image from "../../assets/carLink/Hero2.png";
import cureHero from "../../assets/cure/Cure.png";

import "./CarLink.css";

import { fadeUp, fadeScale, stagger } from "../../animations/variants";

function CarLink() {
  return (
    <main className="carlink-page">
      {/* =========================================
          HERO
      ========================================= */}

      <motion.section
        className="carlink-hero"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <div className="container">
          <Link to="/work" className="case-study-back">
            <ArrowLeft size={14} />
            Back to Work
          </Link>

          <div className="carlink-hero__header">
            <div>
              <p className="eyebrow">01 — CARLINK</p>

              <h1>
                Connecting
                <br />
                Every Drive.
              </h1>

              <p className="carlink-hero__intro">
                A premium automotive parts marketplace and digital garage
                experience designed to make finding, managing, and purchasing
                car parts simpler.
              </p>
            </div>

            <div className="carlink-hero__meta">
              <div>
                <span>Role</span>
                <strong>UX/UI Designer</strong>
              </div>

              <div>
                <span>Platform</span>
                <strong>React Web Application</strong>
              </div>

              <div>
                <span>Status</span>
                <strong>Completed · Deployed</strong>
              </div>
            </div>
          </div>

          <InspectableImage
            src={carLinkHero}
            alt="CarLink web application interface"
            className="carlink-hero__image"
          />
        </div>
      </motion.section>

      {/* =========================================
          OVERVIEW
      ========================================= */}

      <motion.section
        className="carlink-overview"
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: false,
          amount: 0.2,
        }}
      >
        <div className="container">
          <div className="case-section-heading">
            <p className="eyebrow">Overview</p>

            <h2>
              A connected experience
              <br />
              for car owners.
            </h2>
          </div>

          <motion.div className="carlink-overview__grid" variants={fadeUp}>
            <div className="carlink-overview__text">
              <p>
                CarLink brings automotive parts discovery, vehicle management,
                and purchasing into one connected digital experience.
              </p>

              <p>
                The product combines a marketplace with a digital garage,
                allowing users to manage their vehicles, discover compatible
                parts, and move through the purchasing process with less
                friction.
              </p>
            </div>

            <div className="carlink-overview__facts">
              <div>
                <span>My Role</span>
                <strong>UX/UI Designer</strong>
              </div>

              <div>
                <span>Design Tool</span>
                <strong>Figma</strong>
              </div>

              <div>
                <span>Product</span>
                <strong>Automotive Marketplace</strong>
              </div>

              <div>
                <span>Implementation</span>
                <strong>React Web Application</strong>
              </div>
            </div>
          </motion.div>

          <a href="#product-breadth" className="case-study-scroll">
            Explore Case Study
            <ArrowUpRight size={14} />
          </a>
        </div>
      </motion.section>

      {/* =========================================
          PRODUCT BREADTH
      ========================================= */}

      <motion.section
        id="product-breadth"
        className="carlink-breadth"
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: false,
          amount: 0.12,
        }}
      >
        <div className="container">
          <div className="case-section-heading">
            <p className="eyebrow">Product Breadth</p>

            <h2>
              One experience.
              <br />
              Multiple connected flows.
            </h2>

            <p className="case-section-heading__description">
              CarLink connects product discovery, performance, vehicle
              management, and the digital garage into one automotive experience.
            </p>
          </div>

          <motion.div className="breadth-showcase" variants={stagger}>
            {/* 01 — MARKETPLACE */}

            <motion.article className="breadth-feature" variants={fadeUp}>
              <div className="breadth-feature__header">
                <div>
                  <span>01 — Marketplace</span>

                  <h3>
                    Explore every part
                    <br />
                    of your vehicle.
                  </h3>
                </div>

                <p>
                  A structured marketplace experience that helps drivers browse
                  automotive categories and discover the parts they need to
                  upgrade, maintain, or personalize their vehicle.
                </p>
              </div>

              <InspectableImage
                src={hero1Image}
                alt="CarLink automotive parts marketplace"
                className="breadth-feature__image"
              />
            </motion.article>

            {/* 02 — PRODUCT DISCOVERY */}

            <motion.article
              className="breadth-feature breadth-feature--second"
              variants={fadeUp}
            >
              <div className="breadth-feature__header">
                <div>
                  <span>02 — Product Discovery</span>

                  <h3>
                    Performance picks
                    <br />
                    for enthusiasts.
                  </h3>
                </div>

                <p>
                  Curated performance products make it easier to compare
                  high-end components and discover upgrades suited to different
                  driving needs.
                </p>
              </div>

              <InspectableImage
                src={hero2Image}
                alt="CarLink performance product discovery"
                className="breadth-feature__image"
              />
            </motion.article>

            {/* 03 + 04 — MANAGEMENT */}

            <div className="breadth-supporting">
              <motion.article
                className="breadth-supporting__card"
                variants={fadeScale}
              >
                <InspectableImage
                  src={dashboardImage}
                  alt="CarLink vehicle management dashboard"
                  className="breadth-supporting__image"
                />

                <div className="breadth-supporting__content">
                  <span>03 — Vehicle Management</span>

                  <h3>Everything about your vehicle.</h3>

                  <p>
                    A central dashboard for vehicle health, diagnostics,
                    activity, and important ownership information.
                  </p>
                </div>
              </motion.article>

              <motion.article
                className="breadth-supporting__card"
                variants={fadeScale}
              >
                <InspectableImage
                  src={garageImage}
                  alt="CarLink digital garage"
                  className="breadth-supporting__image"
                />

                <div className="breadth-supporting__content">
                  <span>04 — Garage</span>

                  <h3>Your vehicle, organized.</h3>

                  <p>
                    A dedicated space for managing vehicles and keeping
                    important automotive information accessible.
                  </p>
                </div>
              </motion.article>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* =========================================
          PURCHASE FLOW
      ========================================= */}

      <motion.section
        className="carlink-purchase"
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: false,
          amount: 0.12,
        }}
      >
        <div className="container">
          <div className="case-section-heading">
            <p className="eyebrow">Purchase Flow</p>

            <h2>
              From selected part
              <br />
              to completed order.
            </h2>

            <p className="case-section-heading__description">
              The purchasing experience connects the cart, checkout, and billing
              stages into one continuous flow.
            </p>
          </div>

          <motion.div className="purchase-flow" variants={stagger}>
            <motion.article
              className="purchase-flow__step"
              variants={fadeScale}
            >
              <InspectableImage
                src={partBuyImage}
                alt="CarLink part selection"
                className="purchase-flow__image"
              />

              <div className="purchase-flow__info">
                <span>01</span>

                <h3>Select</h3>

                <p>
                  The user identifies the part they need and moves forward with
                  a clear product selection.
                </p>
              </div>
            </motion.article>

            <motion.article
              className="purchase-flow__step"
              variants={fadeScale}
            >
              <InspectableImage
                src={cartImage}
                alt="CarLink shopping cart"
                className="purchase-flow__image"
              />

              <div className="purchase-flow__info">
                <span>02</span>

                <h3>Review</h3>

                <p>
                  The cart provides a dedicated checkpoint to review the
                  selected items before checkout.
                </p>
              </div>
            </motion.article>

            <motion.article
              className="purchase-flow__step"
              variants={fadeScale}
            >
              <InspectableImage
                src={billingImage}
                alt="CarLink billing and order confirmation"
                className="purchase-flow__image"
              />

              <div className="purchase-flow__info">
                <span>03</span>

                <h3>Checkout</h3>

                <p>
                  The user moves through the final purchase details in a focused
                  checkout experience.
                </p>
              </div>
            </motion.article>

            <motion.article
              className="purchase-flow__step"
              variants={fadeScale}
            >
              <InspectableImage
                src={checkoutImage}
                alt="CarLink checkout"
                className="purchase-flow__image"
              />

              <div className="purchase-flow__info">
                <span>04</span>

                <h3>Complete</h3>

                <p>
                  Billing completes the final stage of the purchasing journey.
                </p>
              </div>
            </motion.article>
          </motion.div>
        </div>
      </motion.section>

      {/* =========================================
          NEXT PROJECT
      ========================================= */}

      <motion.section
        className="next-project"
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: false,
          amount: 0.2,
        }}
        variants={fadeScale}
      >
        <div className="container">
          <div className="next-project__top">
            <span className="eyebrow">Next Project</span>

            <span className="next-project__number">02 — CURE</span>
          </div>

          <div className="next-project__content">
            <div className="next-project__visual">
              <img src={cureHero} alt="Cure smart medical delivery system" />
            </div>

            <div className="next-project__info">
              <h2>
                Smart Medical
                <br />
                Delivery System
              </h2>

              <p>
                A connected medical delivery system combining a mobile
                application, wearable sensor, and autonomous robot for scheduled
                medication delivery and emergency response.
              </p>

              <Link to="/projects/cure" className="next-project__link">
                View Case Study
                <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

export default CarLink;
