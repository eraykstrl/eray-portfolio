import {Link,useLocation} from "react-router-dom"

const links = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Experience", path: "/experience" },
];

function Navbar() {

  const location = useLocation();

  return(
    <nav className="sticky top-0 z-10 flex items-center justify-between px-12 h-15 bg-[#0a0e17]/85 backdrop-blur-md">
      <span className="font-mono text-xs text-white trackink-widest text-white">
        Developer
      </span>

      <div className="flex gap-8">
        {links.map((link) => (
          <Link 
          key={link.name}
          to = {link.path}>
            {link.name}
          </Link>
        ))}
        
      </div>

      <button className="font-mono text-white px-4 py-2 border border-white/20 text-xs rounded">
        Connect
      </button>

    </nav>
  );
}

export default Navbar