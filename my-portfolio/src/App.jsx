import AnimatedBackground from "./components/AnimatedBackground";
import Navbar from "./components/navbar.jsx";
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

      <main className="relative z-10 text-white pt-20">
        {/* Each section wrapped with an ID */}
        <section id="about">
          <About />
        </section>

        <section id="info">
          <Info />
        </section>
        <section id="stack">
          <Stack />
        </section>
        <section id="project">
          <Project />
        </section>

        <section id="contact">
          <Contact />

        </section>
      </main>
    </div>
  );
}

export default App;
