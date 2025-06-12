import React, { lazy, Suspense, ReactNode } from "react";

const layoutMap = import.meta.glob("./../themes/*/Layout.tsx");
const getLayoutComponent = (theme: string) => {
  const path = `./../themes/${theme}/Layout.tsx`;
  const loader = layoutMap[path];

  if (!loader) {
    throw new Error(`Layout for theme "${theme}" not found at ${path}`);
  }

  return lazy(() => loader() as Promise<{ default: React.ComponentType<{ children: ReactNode }> }>);
};
export default getLayoutComponent;