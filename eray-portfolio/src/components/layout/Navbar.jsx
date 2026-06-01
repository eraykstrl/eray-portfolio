import { Link, useLocation } from "react-router-dom"
import { useState } from "react"

const links = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Experience", path: "/experience" },
];

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-10 bg-[#0a0e17]/85 backdrop-blur-md">
      <div className="flex items-center justify-between px-8 h-14">
        
        <span className="font-mono text-xs text-white tracking-widest">
          Developer
        </span>

        {/* Masaüstü linkler */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-xs tracking-wide transition-colors ${
                location.pathname === link.path
                  ? "text-white"
                  : "text-white/40 hover:text-white/85"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button className="hidden md:block font-mono text-white px-4 py-2 border border-white/20 text-xs rounded">
          Connect
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
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`text-sm tracking-wide transition-colors ${
                location.pathname === link.path
                  ? "text-white"
                  : "text-white/40"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;