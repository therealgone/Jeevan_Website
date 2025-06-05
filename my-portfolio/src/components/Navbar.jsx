import { useState, useEffect } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (window.scrollY >= top - height / 3) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id) =>
    `text-white/90 ${
      activeSection === id
        ? "text-glow-white font-bold border p-2 rounded-2xl scale-[1.05] bg-animated-g"
        : ""
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex justify-center w-full">
            <ul className="list-none flex space-x-4 md:space-x-8 lg:space-x-11 border rounded-full px-4 md:px-8 py-2 border-gray-500 tracking-widest">
              <li>
                <a href="#about" className={linkClass("about")}>Home</a>
              </li>
              <li>
                <a href="#info" className={linkClass("info")}>About</a>
              </li>
              <li>
                <a href="#stack" className={linkClass("stack")}>Stack</a>
              </li>
              <li>
                <a href="#project" className={linkClass("project")}>Project</a>
              </li>
              <li>
                <a href="#contact" className={linkClass("contact")}>Contact</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#about"
                className={`block px-3 py-2 rounded-md text-base font-medium ${linkClass("about")}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#info"
                className={`block px-3 py-2 rounded-md text-base font-medium ${linkClass("info")}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#stack"
                className={`block px-3 py-2 rounded-md text-base font-medium ${linkClass("stack")}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Stack
              </a>
              <a
                href="#project"
                className={`block px-3 py-2 rounded-md text-base font-medium ${linkClass("project")}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Project
              </a>
              <a
                href="#contact"
                className={`block px-3 py-2 rounded-md text-base font-medium ${linkClass("contact")}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
