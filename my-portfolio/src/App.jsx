import AnimatedBackground from "./components/AnimatedBackground";
import Navbar from "./components/navbar.jsx";

function App() {
  return (
    
    <div className="relative w-full overflow-x-hidden">
     
      {/* Animated background should go behind everything */}
      <AnimatedBackground />
       <Navbar />
      {/* Navbar comes first, top of page */}
      

      <main className="relative z-10 text-white">
        {/* Sections for scrolling */}
        
      </main>
    </div>
  );
}

export default App;
