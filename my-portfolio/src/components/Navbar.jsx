import { useState, useEffect } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("");

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
    `text-gray-400 hover:text-white transition ${
      activeSection === id
        ? "text-white drop-shadow-[0_0_10px_#fff] font-bold"
        : ""
    }`;

  return (
    <nav className="flex sticky top-0  z-100 justify-center p-4 py-9 text-xl font-mono ">
      <ul className="list-none flex space-x-10 border rounded-full px-6 py-3 border-gray-500 bg-gray-900 tracking-widest opacity-80 backdrop-blur-md">
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
    </nav>
  );
}

export default Navbar;
