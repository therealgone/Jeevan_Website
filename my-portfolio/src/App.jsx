import AnimatedBackground from "./components/AnimatedBackground";
import Navbar from "./components/navbar.jsx";
import About from "./components/about.jsx";
import Info from "./components/info.jsx";
import Stack from "./components/stack.jsx";

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
      </main>
    </div>
  );
}

export default App;
