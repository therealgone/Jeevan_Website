import profilePic from './Profile Pic.png';
import Lottie from "lottie-react";
import handWave from "./hand-wave.json";
import ring from './ringlight.json'
function Info()

{
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-2">
  <h1 className="text-5xl font-mono tracking-widest bg-gradient-to-l from-indigo-600 via-purple-600 to-violet-600 dark:from-indigo-400 dark:via-purple-400 dark:to-violet-400 bg-clip-text text-transparent font-extrabold hover:animate-pulse ">
    About Me
  </h1>
 <h1 className='border border-4  w-50 rounded-full mb-5 border-purple-600 opacity-60 '></h1>
  <div className="flex justify-center items-center w-full">
  <div className="grid grid-cols-4 gap-4 p-10 max-w-6xl w-full">
    {/* Left Column - Two stacked boxes */}
    <div className="grid grid-rows-2 grid-cols-1 gap-5 mt-30">
      <div className="relative p-7 rounded-2xl bg-gradient-to-br from-white/90 to-white/50 dark:from-gray-800/90 dark:to-gray-900/50 backdrop-blur-xl border border-white/30 dark:border-gray-700/40 shadow-2xl shadow-inner spin-x ">
        <img
          src={profilePic}
          alt="Profile"
          className="w-100 h-50 object-cover object-top rounded-3xl mx-auto "
        />
        <h1 className="text-center p-4 text-black-600 dark:text-black-400 font-bold font-mono tracking-widest">
          Jeevan Baabu Murugan
        </h1>
      </div>

      <div className="">
       
      <Lottie animationData={ring} style={{ width: 265, height: 300   }}  />

        
      </div>
    </div>

    {/* Right Side - One big box */}
    <div className="row-span-1 col-span-2 col-start-2 col-end-5">
      <div className="text-justify h-full relative p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/10 dark:from-gray-800/10 dark:to-gray-900/10 backdrop-blur-xl border border-white/10 dark:border-gray-700/10 shadow-2xl font-mono tracking-wide">
        <h1 className="font-bold text-2xl flex items-center gap-3 justify-center mt-2">
          <Lottie animationData={handWave} style={{ width: 50, height: 50 }} />
          Hi, I'm Jeevan Baabu Murugan
        </h1>
        <div className="mt-7 mb-3 border border-gray-600"></div>

        <h2 className="py-5">
          <span className="font-bold text-purple-600 dark:text-purple-400">
            Computer Science Engineering (AI & ML)
          </span>{" "}
          student in my 4th year at{" "}
          <span className="font-bold text-green-600 dark:text-green-400">
            SRM Institute of Science and Technology Kattankulathur
          </span>{" "}
          with a strong focus on Artificial Intelligence and Machine Learning.
        </h2>

        <h2 className='mt-3 mb-3'>I specialize in building smart, efficient applications using tools like <span class="font-bold text-blue-600 dark:text-blue-400">Python, TensorFlow, MediaPipe, and LSTM</span> and I enjoy crafting intelligent systems — from gesture-based interfaces to real-time ML models on edge devices like Raspberry Pi.</h2>
        <h2 className='mt-3 mb-3'>I'm skilled in optimizing PC performance, overclocking hardware, and adapting quickly to new technologies with the help of AI tools. My development toolkit also includes<span class="font-bold text-blue-600 dark:text-blue-400"> React, Next.js, Tailwind CSS, and Framer Motion </span> and I'm exploring the power of TypeScript and modern web development frameworks.</h2>
        <h2 className='mt-3 mb-3'>Beyond academics, I’m constantly learning — whether it's through hands-on projects, certifications <span class="font-bold text-blue-600 dark:text-blue-400">Oracle Cloud, Red Hat Linux, JPMorgan Forage</span> or contributing to collaborative builds. I enjoy mentoring peers, exploring open-source ecosystems, and staying on the edge of tech trends.</h2>
        <div className="mt-7 mb-3 border border-gray-600"></div>
      </div>
    </div>
  </div>
</div>
</div>
    
  );
}

export default Info;
