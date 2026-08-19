import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Capture the exact timestamp when the JS file is first parsed by the browser
const moduleLoadTime = Date.now();

function ScrollToTop() {
  const location = useLocation();
  const navigate = useNavigate();

  // Disable default browser scroll restoration
  if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }

  useEffect(() => {
    // 1. Determine if we are within the first 500ms of a hard page load or refresh
    const isInitialPageLoad = Date.now() - moduleLoadTime < 500;

    if (isInitialPageLoad) {
      // Force the screen to the top
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });

      // If the browser restored a "scroll" state after a refresh, wipe it clean
      if (location.state?.scrollTo || window.location.hash) {
        navigate(location.pathname, { replace: true, state: {} });
      }
      
      return; 
    }

    // --- Handle subsequent routing (normal clicks within the app) ---
    
    // Support both state-based scrolling and hash-based scrolling (like the Footer's /#contact)
    const hashTarget = location.hash ? location.hash.replace("#", "") : null;
    const targetId = location.state?.scrollTo || hashTarget;

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

        // Retry up to 20 times to account for Framer Motion transitions
        if (attempts < 20) {
          timer = setTimeout(tryScroll, 50);
        }
      };

      timer = setTimeout(tryScroll, 0);

      return () => clearTimeout(timer);
    } else {
      // Normal route change without a target -> jump to top
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [location.pathname, location.hash, location.state, navigate]);

  return null;
}

export default ScrollToTop;