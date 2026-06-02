import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const links = [
  { key: "home", path: "/" },
  { key: "projects", path: "/projects" },
  { key: "skills", path: "/skills" },
  { key: "experience", path: "/experience" },
];

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const {t,i18n} = useTranslation();

  const language = i18n.language === "tr" ? "TR" : "EN";

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "tr" ? "en" : "tr";

    i18n.changeLanguage(newLanguage);
  }

  return (
    <nav className="sticky top-0 z-10 bg-[#0a0e17]/85 backdrop-blur-md">
      <div className="flex items-center justify-between px-8 h-14">
        
        <span className="font-mono text-xs text-white tracking-widest">
          {t(`navbar.developer`)}
        </span>

        {/* Masaüstü linkler */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link
              key={link.key}
              to={link.path}
              className={`text-xs tracking-wide transition-colors ${
                location.pathname === link.path
                  ? "text-white"
                  : "text-white/40 hover:text-white/85"
              }`}
            >
              {t(`navbar.${link.key}`)}
            </Link>
          ))}
        </div>

        <button
          onClick={toggleLanguage}
          className="hidden md:block font-mono text-white px-4 py-2 border border-white/20 text-xs rounded hover:bg-[#002113] hover:cursor-pointer">
            {language}
        </button>

        {/* Mobil hamburger butonu */}
        <button
          className="md:hidden text-white text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobil menü */}
      {menuOpen && (
        <div className="md:hidden flex flex-col px-8 pb-6 gap-4 bg-[#0a0e17]">
          {links.map((link) => (
            <Link
              key={link.key}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`text-sm tracking-wide transition-colors ${
                location.pathname === link.path
                  ? "text-white"
                  : "text-white/40"
              }`}
            >
              {t(`navbar.${link.key}`)}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;