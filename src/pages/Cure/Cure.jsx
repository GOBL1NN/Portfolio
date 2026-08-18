import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import "./Cure.css";
import CureShowcase from "../../components/CureShowcase/CureShowcase";

import cureLogo from "../../assets/cure/Cure.png";
import claddingHero from "../../assets/cladding/Hero.png";

import { fadeUp, fadeScale, stagger } from "../../animations/variants";

function Cure() {
  return (
    <main className="cure-page">
      {/* =========================================
          HERO
      ========================================= */}

      <section className="cure-hero">
        <div className="container">
          <motion.div
            className="cure-hero__meta"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <span>02 — CURE</span>
            <span>GRADUATION PROJECT</span>
          </motion.div>

          <motion.div
            className="cure-hero__content"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <div className="cure-hero__info">
              <p className="eyebrow">
                PRODUCT DESIGN · UX/UI · EMBEDDED SYSTEM
              </p>

              <h1>
                Smart Medical
                <br />
                Delivery System
              </h1>

              <p className="cure-hero__description">
                A connected medical delivery system combining a mobile
                application, wearable sensor, and autonomous robot for scheduled
                medication delivery and emergency response.
              </p>

              <div className="cure-hero__details">
                <div>
                  <span>MY ROLE</span>
                  <p>UX/UI Design · Frontend · Embedded System</p>
                </div>

                <div>
                  <span>PROJECT TYPE</span>
                  <p>Graduation Project</p>
                </div>
              </div>
            </div>

            <motion.div className="cure-hero__visual" variants={fadeScale}>
              <img src={cureLogo} alt="Cure medical delivery system" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          THE PROBLEM
      ========================================= */}

      <section className="cure-problem">
        <div className="container">
          <motion.div
            className="cure-section-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.2,
            }}
            variants={fadeUp}
          >
            <p className="eyebrow">1 — THE PROBLEM</p>

            <h2>
              Medication at home
              <br />
              shouldn&apos;t be complicated.
            </h2>

            <p className="cure-section-heading__intro">
              Managing medication can become difficult when timing,
              accessibility, and emergency response all depend on constant human
              intervention.
            </p>
          </motion.div>

          <motion.div
            className="cure-problem__grid"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.12,
            }}
            variants={stagger}
          >
            {/* 1 */}

            <motion.article
              className="cure-problem__item"
              variants={fadeScale}
              whileHover={{
                y: -8,
                scale: 1.015,
                transition: {
                  type: "spring",
                  stiffness: 280,
                  damping: 20,
                },
              }}
            >
              <span>1</span>

              <h3>Scheduled Medication</h3>

              <p>
                Medication needs to reach the patient at the right time without
                relying on someone being available for every delivery.
              </p>
            </motion.article>

            {/* 02 */}

            <motion.article
              className="cure-problem__item"
              variants={fadeScale}
              whileHover={{
                y: -8,
                scale: 1.015,
                transition: {
                  type: "spring",
                  stiffness: 280,
                  damping: 20,
                },
              }}
            >
              <span>2</span>

              <h3>Emergency Response</h3>

              <p>
                When an emergency occurs, the system needs a fast way to respond
                and deliver the required medication.
              </p>
            </motion.article>

            {/* 3 */}

            <motion.article
              className="cure-problem__item"
              variants={fadeScale}
              whileHover={{
                y: -8,
                scale: 1.015,
                transition: {
                  type: "spring",
                  stiffness: 280,
                  damping: 20,
                },
              }}
            >
              <span>3</span>

              <h3>Health Monitoring</h3>

              <p>
                Vital health information can help the system recognize
                situations that may require immediate attention.
              </p>
            </motion.article>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          THE SYSTEM
      ========================================= */}

      <section className="cure-system">
        <div className="container">
          <motion.div
            className="cure-section-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.2,
            }}
            variants={fadeUp}
          >
            <p className="eyebrow">2 — THE SYSTEM</p>

            <h2>One connected system.</h2>

            <p className="cure-section-heading__intro">
              Cure connects the mobile application, autonomous delivery robot,
              and wearable health sensor into one coordinated system designed
              for medication delivery and emergency response.
            </p>
          </motion.div>

          {/* SYSTEM DIAGRAM */}

          <motion.div
            className="cure-system__diagram"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.12,
            }}
            variants={stagger}
          >
            {/* MOBILE APPLICATION */}

            <motion.div
              className="cure-system__node cure-system__node--app"
              variants={fadeScale}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: {
                  type: "spring",
                  stiffness: 280,
                  damping: 20,
                },
              }}
            >
              <span>1</span>

              <h3>Mobile Application</h3>

              <p>
                Schedule medication, control the robot, trigger emergencies, and
                receive system notifications.
              </p>
            </motion.div>

            {/* WIFI */}

            <motion.div className="cure-system__connection" variants={fadeUp}>
              <span>WI-FI</span>
              <i></i>
            </motion.div>

            {/* ESP32 MAIN */}

            <motion.div
              className="cure-system__node cure-system__node--main"
              variants={fadeScale}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: {
                  type: "spring",
                  stiffness: 280,
                  damping: 20,
                },
              }}
            >
              <span>2</span>

              <h3>ESP32 Main</h3>

              <p>
                Acts as the communication hub between the mobile application,
                robot controller, and wearable sensor.
              </p>
            </motion.div>

            {/* BRANCH CONNECTIONS */}

            <div className="cure-system__connections">
              <div className="cure-system__connection cure-system__connection--vertical">
                <span>UART</span>
                <i></i>
              </div>

              <div className="cure-system__connection cure-system__connection--vertical">
                <span>ESP-NOW</span>
                <i></i>
              </div>
            </div>

            {/* BOTTOM NODES */}

            <div className="cure-system__bottom">
              <motion.div
                className="cure-system__node"
                variants={fadeScale}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: {
                    type: "spring",
                    stiffness: 280,
                    damping: 20,
                  },
                }}
              >
                <span>3</span>

                <h3>Autonomous Robot</h3>

                <p>
                  Arduino Mega controls movement, line following, obstacle
                  detection, and medication drawers.
                </p>
              </motion.div>

              <motion.div
                className="cure-system__node"
                variants={fadeScale}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: {
                    type: "spring",
                    stiffness: 280,
                    damping: 20,
                  },
                }}
              >
                <span>4</span>

                <h3>Wearable Sensor</h3>

                <p>
                  ESP32-C3 Mini and MAX30102 collect health signals and
                  communicate them wirelessly to the main controller.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* SYSTEM PRINCIPLES */}

          <motion.div
            className="cure-system__principles"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.15,
            }}
            variants={stagger}
          >
            <motion.div
              variants={fadeUp}
              whileHover={{
                y: -5,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                },
              }}
            >
              <span>COMMUNICATION</span>

              <p>Wi-Fi · UART · ESP-NOW</p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              whileHover={{
                y: -5,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                },
              }}
            >
              <span>CONTROLLER</span>

              <p>ESP32 + Arduino Mega</p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              whileHover={{
                y: -5,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                },
              }}
            >
              <span>HEALTH SENSOR</span>

              <p>MAX30102</p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              whileHover={{
                y: -5,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                },
              }}
            >
              <span>DELIVERY</span>

              <p>4 Medication Drawers</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          MOBILE APPLICATION
      ========================================= */}

      <section className="cure-app">
        <div className="container">
          <motion.div
            className="cure-section-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.2,
            }}
            variants={fadeUp}
          >
            <p className="eyebrow">3 — MOBILE APPLICATION</p>

            <h2>
              The entire system,
              <br />
              from the patient&apos;s phone.
            </h2>

            <p className="cure-section-heading__intro">
              The Cure application brings medication scheduling, robot control,
              emergency response, and system notifications into one connected
              experience.
            </p>
          </motion.div>

          <CureShowcase />
        </div>
      </section>

      {/* =========================================
          NEXT PROJECT
      ========================================= */}

      <motion.section
        className="cure-next-project"
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: false,
          amount: 0.2,
        }}
        variants={fadeScale}
      >
        <div className="container">
          <div className="cure-next-project__top">
            <span className="eyebrow">Next Project</span>

            <span className="cure-next-project__number">3 — CLADDING</span>
          </div>

          <div className="cure-next-project__content">
            <div className="cure-next-project__visual">
              <img src={claddingHero} alt="Cladding website project" />
            </div>

            <div className="cure-next-project__info">
              <h2>
                Architectural
                <br />
                Cladding
              </h2>

              <p>
                A premium architectural cladding website focused on strong
                visual presentation and a refined digital experience.
              </p>

              <Link to="/projects/cladding" className="cure-next-project__link">
                View Case Study
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

export default Cure;
