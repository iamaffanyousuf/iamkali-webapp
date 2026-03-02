import { Outlet } from "react-router";
import { ScrollToTop } from "./ScrollToTop";

/**
 * Layout component
 * Wraps all routes and includes ScrollToTop functionality
 */
export function Layout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}
