import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { sharedRoutes } from "./routes";

const BetdayProLayout = React.lazy(() => import("./themes/betdaypro/Layout"));
const BetdayLayout = React.lazy(() => import("./themes/betday/Layout"));

const AppRoutes = () => useRoutes(sharedRoutes);

export const App = () => {

  const Layout = import.meta.env.VITE_THEME === "betday" ? BetdayLayout : BetdayProLayout;

  return (
    <Router>
      <React.Suspense fallback={""}>
        <Layout>
          <AppRoutes />
        </Layout>
      </React.Suspense>
    </Router>
  );
};
