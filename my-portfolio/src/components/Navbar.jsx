import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

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
        ? "font-bold border font-mono p-2 scale-[1.05] bg-animated-g rounded-full transition-all duration-200 ease-in-out"
        : ""
    }`;

  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    const navHeight = document.querySelector('nav').offsetHeight;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "about", label: "Home" },
    { id: "info", label: "About" },
    { id: "stack", label: "Stack" },
    { id: "project", label: "Project" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <nav className="flex sticky top-0 z-[9999] justify-center p-2 md:p-4 py-4 md:py-6 text-xl font-mono bg-gray-900/30 backdrop-blur-md">
      {/* Desktop Menu */}
      <ul className="hidden md:flex list-none space-x-11 border rounded-full px-8 py-4 border-gray-500 bg-gray-900 tracking-widest opacity-80 backdrop-blur-md">
        {navItems.map((item, index) => (
          <motion.li 
            key={item.id}
            initial={{opacity: 0, y: -50 - (index * 10)}}
            animate={{opacity: 1, y: 0}}
            transition={{ duration: 0.3 + (index * 0.1), ease: 'easeInOut'}}
          >
            <a 
              href={`#${item.id}`} 
              onClick={(e) => handleClick(e, item.id)} 
              className={linkClass(item.id)}
            >
              {item.label}
            </a>
          </motion.li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden w-full flex justify-end px-4">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white p-2 hover:bg-gray-800 rounded-lg transition-colors"
        >
          {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md border-b border-gray-700 md:hidden"
          >
            <ul className="flex flex-col items-center py-4 space-y-4">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleClick(e, item.id)}
                    className={`${linkClass(item.id)} block px-6 py-2`}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
