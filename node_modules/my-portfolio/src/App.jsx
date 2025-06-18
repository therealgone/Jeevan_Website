import AnimatedBackground from "./components/AnimatedBackground.tsx";
import Navbar from "./components/Navbar.jsx";
import About from "./components/about.jsx";
import Info from "./components/info.jsx";
import Stack from "./components/stack.jsx";
import Project from "./components/project.jsx";
import Contact from "./components/contact.jsx";
import { useEffect, useRef, useState } from "react";

function App() {
  const crosshairRef = useRef(null);
  const [showCrosshair, setShowCrosshair] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (window.innerWidth >= 768 && crosshairRef.current) {
        crosshairRef.current.style.transform = `translate3d(${e.clientX - 24}px, ${e.clientY - 24}px, 0)`;
      }
    };
    const handleResize = () => {
      setShowCrosshair(window.innerWidth >= 768);
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative w-full  scroll-smooth">
      {showCrosshair && <div ref={crosshairRef} className="custom-crosshair" />}
      <AnimatedBackground />
      <Navbar />

      <main className="relative z-10 text-white pt-16">
        {/* Each section wrapped with an ID */}
        <section id="about" className="scroll-mt-20">
          <About />
        </section>

        <section id="info" className="scroll-mt-20">
          <Info />
        </section>
        <section id="stack" className="scroll-mt-20">
          <Stack />
        </section>
        <section id="project" className="scroll-mt-20">
          <Project />
        </section>

        <section id="contact" className="scroll-mt-20">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
