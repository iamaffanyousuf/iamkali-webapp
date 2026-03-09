import { Outlet } from "react-router";
import { ScrollToTop } from "./ScrollToTop";
import React from "react";

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
