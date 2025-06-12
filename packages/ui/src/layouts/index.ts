import React from "react";

// Use a typed map of themes to lazy imports
const layoutMap: Record<string, React.LazyExoticComponent<React.FC<{ children: React.ReactNode }>>> = {
  betday: React.lazy(() => import("../themes/betday/Layout")),
  betdaypro: React.lazy(() => import("../themes/betdaypro/Layout")),
};

export function getLayout(theme: string) {
  return layoutMap[theme] || layoutMap["betday"]; // fallback
}
