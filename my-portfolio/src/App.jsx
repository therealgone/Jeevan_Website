import AnimatedBackground from "./components/AnimatedBackground.tsx";
import Navbar from "./components/Navbar.jsx";
import About from "./components/about.jsx";
import Info from "./components/info.jsx";
import Stack from "./components/stack.jsx";
import Project from "./components/project.jsx";
import Contact from "./components/contact.jsx";

function App() {
  return (
    <div className="relative w-full  scroll-smooth">
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
