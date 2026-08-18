import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./About.css";
import profileImage from "../../assets/profile/Amr.jpg";

import { fadeUp, fadeScale, stagger } from "../../animations/variants";

function About() {
  return (
    <main className="about-page">
      {/* =========================================
          ABOUT HERO
      ========================================= */}

      <section className="about-hero">
        <div className="container">
          <motion.div
            className="about-hero__top"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.3,
            }}
            variants={fadeUp}
          >
            <p className="eyebrow">1 — ABOUT</p>
          </motion.div>

          <div className="about-hero__composition">
            {/* MAIN HEADLINE */}

            <motion.div
              className="about-hero__headline"
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: false,
                amount: 0.25,
              }}
              variants={fadeUp}
            >
              <span>I BUILD</span>
              <span>SOFTWARE</span>
              <span className="about-hero__headline-accent">WITH</span>
              <span>A DESIGNER&apos;S EYE</span>
            </motion.div>

            {/* PORTRAIT */}

            <motion.div
              className="about-hero__portrait"
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: false,
                amount: 0.3,
              }}
              variants={fadeScale}
            >
              <div className="about-hero__portrait-glow" />

              <div className="about-hero__portrait-circle">
                <img
                  src={profileImage}
                  alt="Amr Khaled"
                  className="about-hero__portrait-image"
                />
              </div>

              <div className="about-hero__portrait-meta">
                <span>AMR KHALED</span>
                <span>SOFTWARE DEVELOPER</span>
              </div>
            </motion.div>

            {/* FLOATING TEXT */}

            <motion.div
              className="about-hero__floating about-hero__floating--engineering"
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: false,
                amount: 0.3,
              }}
              variants={fadeUp}
            >
              <span>ENGINEERING</span>

              <p>
                Software that connects
                <br />
                with the real world.
              </p>
            </motion.div>

            {/* DESCRIPTION */}

            <motion.div
              className="about-hero__description"
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: false,
                amount: 0.2,
              }}
              variants={fadeUp}
            >
              <p className="about-hero__lead">
                I&apos;m Amr, a Computer Engineering graduate focused on
                building software and digital experiences.
              </p>

              <p>
                I enjoy taking an idea from a rough concept to a working product
                — designing the interface, building the frontend, and thinking
                about how the software works behind it.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================
          WHAT I DO
      ========================================= */}

      <section className="about-capabilities">
        <div className="container">
          <motion.div
            className="about-capabilities__heading"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.25,
            }}
            variants={fadeUp}
          >
            <p className="eyebrow">2 — WHAT I DO</p>

            <h2>
              I design.
              <br />
              I build.
              <br />I connect.
            </h2>
          </motion.div>

          <motion.div
            className="about-capabilities__list"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.15,
            }}
            variants={stagger}
          >
            <motion.article className="about-capability" variants={fadeScale}>
              <div className="about-capability__number">1</div>

              <div className="about-capability__main">
                <h3>Frontend Development</h3>

                <p>
                  Building responsive interfaces and translating designs into
                  functional web experiences with modern frontend technologies.
                </p>
              </div>

              <div className="about-capability__tools">
                <span>React</span>
                <span>JavaScript</span>
                <span>CSS</span>
                <span>Responsive UI</span>
              </div>
            </motion.article>

            <motion.article className="about-capability" variants={fadeScale}>
              <div className="about-capability__number">2</div>

              <div className="about-capability__main">
                <h3>UI / UX Design</h3>

                <p>
                  Designing interfaces, user flows, and visual systems with a
                  focus on clarity, usability, and consistency.
                </p>
              </div>

              <div className="about-capability__tools">
                <span>Figma</span>
                <span>UI / UX</span>
                <span>Prototyping</span>
                <span>Design Systems</span>
              </div>
            </motion.article>

            <motion.article className="about-capability" variants={fadeScale}>
              <div className="about-capability__number">3</div>

              <div className="about-capability__main">
                <h3>Software Development</h3>

                <p>
                  Working with application logic, APIs, reusable components, and
                  the software structure behind the interface.
                </p>
              </div>

              <div className="about-capability__tools">
                <span>JavaScript</span>
                <span>React</span>
                <span>REST APIs</span>
                <span>Git</span>
              </div>
            </motion.article>

            <motion.article className="about-capability" variants={fadeScale}>
              <div className="about-capability__number">4</div>

              <div className="about-capability__main">
                <h3>Systems & Embedded</h3>

                <p>
                  Experience with C++, microcontrollers, ESP32, Arduino, and
                  software that interacts with physical systems.
                </p>
              </div>

              <div className="about-capability__tools">
                <span>C++</span>
                <span>ESP32</span>
                <span>Arduino</span>
                <span>Embedded Systems</span>
              </div>
            </motion.article>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          SKILLS
      ========================================= */}

      <section className="about-skills">
        <div className="container">
          <div className="about-skills__layout">
            {/* INTRO */}

            <motion.div
              className="about-skills__intro"
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: false,
                amount: 0.2,
              }}
              variants={fadeUp}
            >
              <p className="eyebrow">3 — SKILLS & TECHNOLOGIES</p>

              <h2>
                The tools
                <br />
                behind my work.
              </h2>

              <p className="about-skills__summary">
                A practical set of technologies I use across design, frontend
                development, software, and engineering projects.
              </p>
            </motion.div>

            {/* SKILLS */}

            <motion.div
              className="about-skills__list"
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: false,
                amount: 0.15,
              }}
              variants={stagger}
            >
              {/* FRONTEND */}

              <motion.article className="about-skill" variants={fadeScale}>
                <div className="about-skill__number">1</div>

                <div className="about-skill__content">
                  <h3>Frontend</h3>

                  <div className="about-skill__items">
                    <span>React</span>
                    <span>JavaScript</span>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>Responsive Design</span>
                  </div>
                </div>
              </motion.article>

              {/* DESIGN */}

              <motion.article className="about-skill" variants={fadeScale}>
                <div className="about-skill__number">2</div>

                <div className="about-skill__content">
                  <h3>Design</h3>

                  <div className="about-skill__items">
                    <span>Figma</span>
                    <span>UI / UX</span>
                    <span>Prototyping</span>
                    <span>Wireframing</span>
                    <span>Design Systems</span>
                  </div>
                </div>
              </motion.article>

              {/* SOFTWARE */}

              <motion.article className="about-skill" variants={fadeScale}>
                <div className="about-skill__number">3</div>

                <div className="about-skill__content">
                  <h3>Software</h3>

                  <div className="about-skill__items">
                    <span>REST APIs</span>
                    <span>Git</span>
                    <span>GitHub</span>
                    <span>Application Logic</span>
                    <span>Integration</span>
                  </div>
                </div>
              </motion.article>

              {/* ENGINEERING */}

              <motion.article className="about-skill" variants={fadeScale}>
                <div className="about-skill__number">4</div>

                <div className="about-skill__content">
                  <h3>Engineering</h3>

                  <div className="about-skill__items">
                    <span>C++</span>
                    <span>Arduino</span>
                    <span>ESP32</span>
                    <span>Embedded Systems</span>
                    <span>Hardware Interaction</span>
                  </div>
                </div>
              </motion.article>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================
          ENGINEERING BACKGROUND
      ========================================= */}

      <section className="about-background">
        <div className="container">
          <motion.div
            className="about-background__top"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.25,
            }}
            variants={fadeUp}
          >
            <p className="eyebrow">4 — ENGINEERING BACKGROUND</p>

            <h2>
              I think beyond
              <br />
              the interface.
            </h2>
          </motion.div>

          <div className="about-background__content">
            <motion.div
              className="about-background__statement"
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: false,
                amount: 0.2,
              }}
              variants={fadeUp}
            >
              <span>MY BACKGROUND</span>

              <p>
                My Computer Engineering background shapes the way I approach
                software.
              </p>
            </motion.div>

            <motion.div
              className="about-background__details"
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: false,
                amount: 0.15,
              }}
              variants={stagger}
            >
              <motion.div className="about-background__point" variants={fadeUp}>
                <span>01</span>

                <div>
                  <h3>Systems Thinking</h3>

                  <p>
                    Understanding how different parts of a product communicate
                    and work together, rather than treating the interface as an
                    isolated layer.
                  </p>
                </div>
              </motion.div>

              <motion.div className="about-background__point" variants={fadeUp}>
                <span>02</span>

                <div>
                  <h3>Software + Hardware</h3>

                  <p>
                    Experience with C++, microcontrollers, ESP32, Arduino,
                    communication protocols, and systems where software
                    interacts with physical devices.
                  </p>
                </div>
              </motion.div>

              <motion.div className="about-background__point" variants={fadeUp}>
                <span>03</span>

                <div>
                  <h3>Real-World Constraints</h3>

                  <p>
                    Thinking about performance, communication, reliability,
                    responsiveness, and how a product behaves beyond the screen.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="about-background__link-row"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.2,
            }}
            variants={fadeUp}
          >
            <span>APPLIED IN</span>

            <Link to="/projects/cure" className="about-background__link">
              Cure
              <ArrowUpRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          CURRENTLY
      ========================================= */}

      <section className="about-currently">
        <div className="container">
          <div className="about-currently__layout">
            <motion.div
              className="about-currently__label"
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: false,
                amount: 0.25,
              }}
              variants={fadeUp}
            >
              <p className="eyebrow">5 — CURRENTLY</p>

              <span>OPEN TO</span>
            </motion.div>

            <motion.div
              className="about-currently__content"
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: false,
                amount: 0.2,
              }}
              variants={fadeUp}
            >
              <h2>
                Looking for the next
                <br />
                opportunity to build.
              </h2>

              <p>
                I&apos;m looking for a software development opportunity where I
                can contribute to real products, learn from experienced teams,
                and keep growing as a developer.
              </p>

              <div className="about-currently__actions">
                <Link to="/#contact" className="button button--primary">
                  Let&apos;s Talk
                  <ArrowUpRight size={14} />
                </Link>

                <Link to="/work" className="about-currently__secondary">
                  View My Work
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
