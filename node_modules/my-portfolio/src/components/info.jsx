import Lottie from "lottie-react";
import handWave from "./hand-wave.json";


function Info() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-6">
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-mono tracking-widest bg-gradient-to-l from-indigo-600 via-purple-600 to-violet-600 dark:from-indigo-400 dark:via-purple-400 dark:to-violet-400 bg-clip-text text-transparent font-extrabold hover:animate-pulse">
        About Me
      </h1>
      <hr className="w-24 border-2 border-purple-600 opacity-60 rounded-full my-6" />

      {/* Main Content Box */}
      <div className="w-full max-w-4xl rounded-2xl p-4 md:p-6 bg-gradient-to-br from-white/10 to-white/10 dark:from-gray-800/10 dark:to-gray-900/10 backdrop-blur-xl border border-white/10 dark:border-gray-700/10 shadow-2xl font-mono tracking-wide">
        <h1 className="font-bold text-xl md:text-2xl flex items-center gap-3 justify-center mt-2">
          <Lottie animationData={handWave} style={{ width: 50, height: 50 }} />
          Hi, I'm Jeevan Baabu Murugan
        </h1>

        <div className="mt-7 mb-3 border border-gray-600"></div>

        <h2 className="py-5 text-base md:text-lg">
          <span className="font-bold text-purple-600 dark:text-purple-400">
            Computer Science Engineering (AI & ML)
          </span>{" "}
          student in my 4th year at{" "}
          <span className="font-bold text-green-600 dark:text-green-400">
            SRM Institute of Science and Technology Kattankulathur
          </span>{" "}
          with a strong focus on Artificial Intelligence and Machine Learning.
        </h2>

        <h2 className="mt-3 mb-3 text-base md:text-lg">
          I specialize in building smart, efficient applications using tools like{" "}
          <span className="font-bold text-blue-600 dark:text-blue-400">
            Python, TensorFlow, MediaPipe, and LSTM
          </span>{" "}
          and I enjoy crafting intelligent systems — from gesture-based interfaces to real-time ML models on edge devices like Raspberry Pi.
        </h2>

        <h2 className="mt-3 mb-3 text-base md:text-lg">
          I'm skilled in optimizing PC performance, overclocking hardware, and adapting quickly to new technologies with the help of AI tools. My development toolkit also includes{" "}
          <span className="font-bold text-blue-600 dark:text-blue-400">
            React, Next.js, Tailwind CSS, and Framer Motion
          </span>{" "}
          and I'm exploring the power of TypeScript and modern web development frameworks.
        </h2>

        <h2 className="mt-3 mb-3 text-base md:text-lg">
          Beyond academics, I'm constantly learning — whether it's through hands-on projects, certifications like{" "}
          <span className="font-bold text-blue-600 dark:text-blue-400">
            Oracle Cloud, Red Hat Linux, JPMorgan Forage
          </span>{" "}
          or contributing to collaborative builds. I enjoy mentoring peers, exploring open-source ecosystems, and staying on the edge of tech trends.
        </h2>

        <div className="mt-7 mb-3 border border-gray-600"></div>
      </div>
    </div>
  );
}

export default Info;
