import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import "./Home.css";

// Animation Variants
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 18,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const popUp = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.97,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

function Home() {
  return (
    <main className="home">
      {/* HERO */}
      <section className="hero">
        <motion.div
          className="container"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero__top" variants={fadeUp}>
            <p className="eyebrow">SOFTWARE DEVELOPER</p>
            <span className="hero__availability">OPEN TO OPPORTUNITIES</span>
          </motion.div>

          <div className="hero__composition">
            <motion.h1 className="hero__title" variants={fadeUp}>
              I build software
              <br />
              with a designer&apos;s eye.
            </motion.h1>

            <motion.div className="hero__side" variants={fadeUp}>
              <p className="hero__lead">
                I combine frontend development, UI/UX thinking, and engineering
                to turn ideas into working products.
              </p>

              <div className="hero__actions">
                <a href="/work" className="button button--primary">
                  View My Work
                  <ArrowUpRight size={14} />
                </a>

                <a href="/about" className="button button--secondary">
                  About Me
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div className="hero__footer" variants={fadeUp}>
            <div className="hero__tagline">Figma → React → Product</div>

            <div className="hero__meta">
              <span>React</span>
              <span>JavaScript</span>
              <span>Figma</span>
              <span>C++</span>
              <span>ESP32</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* FROM FIGMA TO REACT */}
      <section className="workflow">
        <div className="container">
          <motion.div
            className="workflow__heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeUp}
          >
            <p className="eyebrow">From Figma to React</p>
            <h2>
              From idea to
              <br />
              working interface.
            </h2>
            <p className="workflow__intro">
              I use Figma to explore and structure interfaces, then translate
              those designs into responsive frontend experiences.
            </p>
          </motion.div>

          <motion.div
            className="workflow__steps"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={staggerContainer}
          >
            {[
              {
                num: "1",
                title: "Think",
                desc: "Understand the problem, users, requirements, and product goals.",
              },
              {
                num: "2",
                title: "Design",
                desc: "Explore interfaces, flows, components, and visual systems in Figma.",
              },
              {
                num: "3",
                title: "Build",
                desc: "Translate designs into reusable frontend components and responsive layouts.",
              },
              {
                num: "4",
                title: "Refine",
                desc: "Improve responsiveness, interaction, accessibility, consistency, and usability.",
              },
            ].map((step, index) => (
              <motion.article
                className="workflow__step"
                key={index}
                variants={popUp}
                whileHover={{
                  y: -14,
                  scale: 1.015,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
              >
                <span className="workflow__number">{step.num}.</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" className="final-cta">
        <motion.div
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div className="final-cta__eyebrow" variants={fadeUp}>
            <p className="eyebrow">CONTACT</p>
          </motion.div>

          <div className="final-cta__grid">
            <motion.div className="final-cta__main" variants={fadeUp}>
              <h2>
                Let&apos;s build
                <br />
                something useful.
              </h2>
              <p>
                I&apos;m currently open to software development opportunities
                and interesting projects.
              </p>
              <a
                href="mailto:amrkhaled2010@gmail.com"
                className="button button--primary"
              >
                Let&apos;s Talk
                <ArrowUpRight size={14} />
              </a>
            </motion.div>

            <motion.div className="final-cta__contact" variants={fadeUp}>
              <div className="final-cta__contact-item">
                <span>Email</span>
                <a href="mailto:amrkhaled2010@gmail.com">
                  amrkhaled2010@gmail.com
                  <ArrowUpRight size={13} />
                </a>
              </div>
              <div className="final-cta__contact-item">
                <span>LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/amr-khaled-869210225/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                  <ArrowUpRight size={13} />
                </a>
              </div>
              <div className="final-cta__contact-item">
                <span>GitHub</span>
                <a
                  href="https://github.com/GOBL1NN"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

export default Home;
