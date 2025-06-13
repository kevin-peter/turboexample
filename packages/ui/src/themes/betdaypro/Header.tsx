import React from "react";

export const Header = () => (
  <header className="header theme2 bg-green-500">
   <h1>🟦{import.meta.env.VITE_THEME}</h1>
    <nav>
      <a href="/features">Features</a>
      <a href="/pricing">Pricing</a>
    </nav>
  </header>
);
