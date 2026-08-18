import { useEffect, useState } from "react";
import "./CureShowcase.css";

import homeScreen from "../../assets/cure/Home.png";
import scheduleScreen from "../../assets/cure/Schedule.png";
import controlScreen from "../../assets/cure/Control.png";
import emergencyScreen from "../../assets/cure/Emergency.png";
import notificationScreen from "../../assets/cure/Notification.png";
import settingsScreen from "../../assets/cure/Settings.png";
import voiceActivityScreen from "../../assets/cure/Voice Activity.png";

const screens = [
  {
    title: "Home",
    description:
      "The central dashboard gives the patient a clear overview of the system, upcoming medication, and the most important actions.",
    image: homeScreen,
  },
  {
    title: "Medication Schedule",
    description:
      "Schedule medication in advance and let the system handle the delivery at the required time.",
    image: scheduleScreen,
  },
  {
    title: "Robot Control",
    description:
      "Take manual control of the delivery robot whenever direct movement or positioning is required.",
    image: controlScreen,
  },
  {
    title: "Emergency",
    description:
      "Trigger an emergency response immediately when urgent medication is needed.",
    image: emergencyScreen,
  },
  {
    title: "Notifications",
    description:
      "Stay informed about medication deliveries, system events, and important alerts.",
    image: notificationScreen,
  },
  {
    title: "Settings",
    description:
      "Manage the application and configure the experience around the patient's needs.",
    image: settingsScreen,
  },
  {
    title: "Voice Activity",
    description:
      "Use voice interaction as another way to interact with the Cure system.",
    image: voiceActivityScreen,
  },
];

function CureShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(null);
  const [direction, setDirection] = useState("next");
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const currentScreen = screens[activeIndex];

  const previousScreen = previousIndex !== null ? screens[previousIndex] : null;

  const changeScreen = (newIndex, newDirection) => {
    if (newIndex === activeIndex || isAnimating) {
      return;
    }

    setDirection(newDirection);
    setPreviousIndex(activeIndex);
    setActiveIndex(newIndex);
    setIsAnimating(true);

    setTimeout(() => {
      setPreviousIndex(null);
      setIsAnimating(false);
    }, 900);
  };

  const next = () => {
    const nextIndex = activeIndex === screens.length - 1 ? 0 : activeIndex + 1;

    changeScreen(nextIndex, "next");
  };

  const previous = () => {
    const previousIndex =
      activeIndex === 0 ? screens.length - 1 : activeIndex - 1;

    changeScreen(previousIndex, "previous");
  };

  useEffect(() => {
    if (isPaused || isAnimating) {
      return;
    }

    const timer = setInterval(() => {
      const nextIndex =
        activeIndex === screens.length - 1 ? 0 : activeIndex + 1;

      changeScreen(nextIndex, "next");
    }, 5000);

    return () => clearInterval(timer);
  }, [activeIndex, isPaused, isAnimating]);

  return (
    <section
      className="cure-showcase"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="cure-showcase__visual">
        <button
          className="cure-showcase__arrow cure-showcase__arrow--left"
          onClick={previous}
          disabled={isAnimating}
          aria-label="Previous screen"
        >
          ←
        </button>

        <div className="cure-showcase__screen-stage">
          {previousScreen && (
            <img
              className={`cure-showcase__screen cure-showcase__screen--exit-${direction}`}
              src={previousScreen.image}
              alt=""
            />
          )}

          <img
            className={`cure-showcase__screen cure-showcase__screen--enter-${direction}`}
            src={currentScreen.image}
            alt={currentScreen.title}
          />
        </div>

        <button
          className="cure-showcase__arrow cure-showcase__arrow--right"
          onClick={next}
          disabled={isAnimating}
          aria-label="Next screen"
        >
          →
        </button>
      </div>

      <div className="cure-showcase__info">
        <div className="cure-showcase__counter">
          <span>{String(activeIndex + 1).padStart(2, "0")}</span>

          <span>/</span>

          <span>{String(screens.length).padStart(2, "0")}</span>
        </div>

        <h3>{currentScreen.title}</h3>

        <p>{currentScreen.description}</p>
      </div>

      <div className="cure-showcase__controls">
        <div className="cure-showcase__dots">
          {screens.map((screen, index) => (
            <button
              key={screen.title}
              className={
                index === activeIndex
                  ? "cure-showcase__dot cure-showcase__dot--active"
                  : "cure-showcase__dot"
              }
              onClick={() =>
                changeScreen(index, index > activeIndex ? "next" : "previous")
              }
              disabled={isAnimating}
              aria-label={`Show ${screen.title}`}
            />
          ))}
        </div>

        <span className="cure-showcase__status">
          {isPaused ? "PAUSED" : "AUTO PLAY"}
        </span>
      </div>
    </section>
  );
}

export default CureShowcase;
