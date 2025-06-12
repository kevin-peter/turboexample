import React, { lazy, Suspense, ReactNode } from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { sharedRoutes } from "./routes";

// Dynamically import all layouts inside ./themes
const layoutMap = import.meta.glob("./themes/*/Layout.tsx");

// Load the theme layout based on VITE_THEME
const getLayoutComponent = (theme: string) => {
  const path = `./themes/${theme}/Layout.tsx`;
  const loader = layoutMap[path];

  if (!loader) {
    throw new Error(`Layout for theme "${theme}" not found at ${path}`);
  }

  return lazy(() => loader() as Promise<{ default: React.ComponentType<{ children: ReactNode }> }>);
};

const AppRoutes = () => useRoutes(sharedRoutes);

export const App = () => {
  const theme = import.meta.env.VITE_THEME || "betday";
  const Layout = getLayoutComponent(theme);

  return (
    <Router>
      <Suspense fallback={<div>Loading layout...</div>}>
        <Layout>
          <AppRoutes />
        </Layout>
      </Suspense>
    </Router>
  );
};
