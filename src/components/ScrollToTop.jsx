import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const targetId = location.state?.scrollTo;

    // Check whether this navigation is a page reload.
    const navigation = performance.getEntriesByType("navigation")[0];
    const isReload = navigation?.type === "reload";

    // On refresh, always start at the top.
    if (isReload) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });

      return;
    }

    // If this navigation contains a scroll target,
    // wait for the destination page to render.
    if (targetId) {
      let attempts = 0;
      let timer;

      const tryScroll = () => {
        attempts += 1;

        const element = document.getElementById(targetId);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

          return;
        }

        if (attempts < 20) {
          timer = setTimeout(tryScroll, 50);
        }
      };

      timer = setTimeout(tryScroll, 0);

      return () => {
        clearTimeout(timer);
      };
    }

    // Normal navigation → top.
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location.pathname, location.key, location.state]);

  return null;
}

export default ScrollToTop;