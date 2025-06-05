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
    `text-gray-400 hover:text-glow-white transition  ${
      activeSection === id
        ? "text-glow-white font-bold border p-2  rounded-full bg-gray-800 border-gray-500"
        : ""
    }`;

  return (
    <nav className="flex sticky top-0  z-100 justify-center p-4 py-9 text-xl font-mono ">
      <ul className="list-none flex space-x-11 border rounded-full px-8 py-4 border-gray-500 bg-gray-900 tracking-widest opacity-80 backdrop-blur-md">
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
