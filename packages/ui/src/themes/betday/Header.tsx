export const Header = () => (
  <header className="bg-red-500 text-white p-4">
    <h1>🟦{import.meta.env.VITE_THEME}</h1>
    <nav>
      <a href="/">Home</a>
      <a href="/contact">Contact</a>
    </nav>
  </header>
);
