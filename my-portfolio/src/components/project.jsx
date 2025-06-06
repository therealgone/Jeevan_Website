
function project() {
 return (
  <div className="min-h-screen flex flex-col items-center justify-center font-mono tracking-wider space-y-12">
  <h1 className="text-4xl mt-8 text-white">Projects</h1>

  {/* 🔹 Project 1: Fake News Detection */}
  <a
    href="https://github.com/therealgone/FAKE-NEWS-DETECTION"
    target="_blank"
    rel="noopener noreferrer"
    className="block"
  >
    <div className="relative w-[900px] h-[700px] rounded-3xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-300 cursor-pointer hover:shadow-white/10">
      <img
        src="https://github.com/therealgone/FAKE-NEWS-DETECTION/raw/main/Fake%20News%20Detector%20UI.png"
        className="w-full h-full object-cover"
        alt="Fake News Detector"
      />
      <div className="absolute bottom-0 w-full h-[200px] bg-gradient-to-br from-white/10 to-white/10 dark:from-gray-800/10 dark:to-gray-900/10 backdrop-blur-xl border-t border-white/10 dark:border-gray-700/10 p-5">
        <h1 className="text-white text-xl">Fake News Detection Project</h1>
        <p className="text-white/70 mt-2 text-xl">
          A modern web application that uses AI to detect and verify fake news articles.
          Built with FastAPI, React, CUDA ML, and Google's Gemini AI.
        </p>
      </div>
    </div>
  </a>

  {/* 🔹 Project 2: Medical Insurance Analysis */}
  <a
    href="https://github.com/therealgone/Medical-Insurance-Report-"
    target="_blank"
    rel="noopener noreferrer"
    className="block"
  >
    <div className="relative w-[900px] h-[700px] rounded-3xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-300 cursor-pointer hover:shadow-white">
      <img
        src="https://github.com/therealgone/Medical-Insurance-Report-/raw/main/UI1.png"
        className="w-full h-full object-cover"
        alt="Medical Insurance Report"
      />
      <div className="absolute bottom-0 w-full h-[200px] bg-gradient-to-br from-white/10 to-white/10 dark:from-gray-800/10 dark:to-gray-900/10 backdrop-blur-xl border-t border-white/10 dark:border-gray-700/10 p-5">
        <h1 className="text-black text-xl">Medical Insurance Report Analysis System</h1>
        <p className="text-black/70 mt-2 text-xl">
          This system analyzes medical reports and scans for insurance claims using OCR,
          AI image analysis, and NLP to extract and understand health data.
        </p>
      </div>
    </div>
  </a>

  {/* 🔹 Project 3: Sign Language Detection */}
  <a
    href="https://github.com/therealgone/Hand-Gesture-Based-Communication-System-for-Disabled-Individual"
    target="_blank"
    rel="noopener noreferrer"
    className="block"
  >
    <div className="relative w-[900px] h-[700px] rounded-3xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-300 cursor-pointer hover:shadow-white transition-all duration-900 ease-in-out">
      <img
        src="https://github.com/therealgone/Hand-Gesture-Based-Communication-System-for-Disabled-Individual/raw/main/UI.jpg"
        className="w-full h-full object-cover"
        alt="Sign Language Detection"
      />
      <div className="absolute bottom-0 w-full h-[200px] bg-gradient-to-br from-white/10 to-white/10 dark:from-gray-800/10 dark:to-gray-900/10 backdrop-blur-xl border-t border-white/10 dark:border-gray-700/10 p-5 transition-all duration-900 ease-in-out">
        <h1 className="text-black text-xl">Sign Language Detection System</h1>
        <p className="text-black/70 mt-2 text-xl">
          A real-time system using computer vision and ML to translate sign language gestures
          into speech and text for accessible communication.
        </p>
      </div>
    </div>
  </a>

  {/* 🔹 Coming Soon */}
  <div className="w-[900px] h-[250px] rounded-3xl flex items-center justify-center border-2 border-dashed border-white/20 text-white/60 text-xl tracking-widest hover:scale-[1.03]  transition-all duration-900 ease-in-out  ">
   <span className=" animate-bounce ">🚀</span>  More Projects Coming Soon...
  </div>
</div>
);

}

export default project;
