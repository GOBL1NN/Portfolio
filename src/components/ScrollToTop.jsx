import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    const targetId = location.state?.scrollTo;

    const scrollToContact = () => {
      const element = document.getElementById(targetId);

      if (!element) {
        return false;
      }

      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      return true;
    };

    let attempts = 0;
    let timer;

    const tryScroll = () => {
      attempts += 1;

      if (targetId) {
        const found = scrollToContact();

        if (found) {
          return;
        }

        // Keep checking briefly until Home has rendered.
        if (attempts < 20) {
          timer = setTimeout(tryScroll, 50);
          return;
        }
      }

      // Normal page navigation
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    };

    timer = setTimeout(tryScroll, 0);

    return () => {
      clearTimeout(timer);
    };
  }, [location.pathname, location.key, location.state]);

  return null;
}

export default ScrollToTop;
