"use client";

export default function Sidebar({ view, theme, onViewChange, onThemeChange }) {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <button
          type="button"
          className={`sidebar-button ${view === "noticias" ? "active" : ""}`}
          onClick={() => onViewChange("noticias")}
        >
          Noticias
        </button>
        <button
          type="button"
          className={`sidebar-button ${view === "Formulas" ? "active" : ""}`}
          onClick={() => onViewChange("Formulas")}
        >
          Formulas
        </button>
        <button
          type="button"
          className={`sidebar-button ${view === "trivias" ? "active" : ""}`}
          onClick={() => onViewChange("trivias")}
        >
          Trivias
        </button>
        <button
          type="button"
          className={`sidebar-button ${view === "ejercicios" ? "active" : ""}`}
          onClick={() => onViewChange("ejercicios")}
        >
          Ejercicios
        </button>
        <button
          type="button"
          className={`sidebar-button ${view === "juegos" ? "active" : ""}`}
          onClick={() => onViewChange("juegos")}
        >
          Juegos
        </button>
      </nav>
      <div className="theme-switch-wrapper">
        <button
          type="button"
          className={`theme-toggle-button ${theme}`}
          onClick={() => onThemeChange(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </div>
    </aside>
  );
}
