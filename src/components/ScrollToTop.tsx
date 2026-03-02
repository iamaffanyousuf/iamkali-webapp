import { useEffect } from "react";
import { useLocation } from "react-router";

/**
 * Scrolls window to top whenever the route changes
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth" // Use "instant" for immediate scroll, or "smooth" for animated scroll
    });
  }, [pathname]);

  return null; // This component doesn't render anything
}
