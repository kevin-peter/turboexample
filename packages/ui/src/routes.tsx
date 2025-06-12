import type { RouteObject } from "react-router";
import { AboutUs } from "./pages/AboutUs";
import { NewPage } from "./pages/NewPage";

export const sharedRoutes: RouteObject[] = [
  { path: "/about", element: <AboutUs /> },
  { path: "/new", element: <NewPage /> },
];
