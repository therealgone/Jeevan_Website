import profilePic from './Profile Pic.png';
import Lottie from "lottie-react";
import handWave from "./hand-wave.json";

function Info()

{
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-10">
  <h1 className="text-5xl font-mono tracking-widest bg-gradient-to-l from-indigo-600 via-purple-600 to-violet-600 dark:from-indigo-400 dark:via-purple-400 dark:to-violet-400 bg-clip-text text-transparent font-extrabold">
    About Me
  </h1>

  <div className="grid grid-cols-3 gap-4 p-6">
  {/* Left Column - Two stacked boxes */} 
  <div className="grid grid-rows-2 gap-4">
    <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/90 to-white/50 dark:from-gray-800/90 dark:to-gray-900/50 backdrop-blur-xl border border-white/30 dark:border-gray-700/40 shadow-2xl">
      <img src={profilePic} alt="Profile" className=" w-90 h-60 object-cover object-top rounded-3xl"></img>
      <h1 className='text-center p-4 mt- text-blue-600 dark:text-blue-400 font-bold font-mono tracking-widest'>Jeevan Baabu Murugan</h1>
    </div>
    <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/10 dark:from-gray-800/10 dark:to-gray-900/10 backdrop-blur-xl border border-white/10 dark:border-gray-700/10 shadow-2xl">
      Small Box 2
    </div>
  </div>

  {/* Right Side - One big box */}
  <div className="row-span-2 col-span-2">
    <div className="h-full relative p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/10 dark:from-gray-800/10 dark:to-gray-900/10 backdrop-blur-xl border border-white/10 dark:border-gray-700/10 shadow-2xl font-mono tracking-wide ">
      <h1 className='font-bold text-2xl flex items-center gap-3 justify-center mt-2'><Lottie animationData={handWave} style={{ width: 50, height: 50 }} className='items-center' />Hello, I'm Jeevan Baabu Murugan</h1>

      <h2>Computer Science Engineering student in my 4th year at <span>SRM Institute of Science and Technology Kattankulathur,</span> with a strong focus on Artificial Intelligence and Machine Learning.</h2>
    </div>
  </div>
</div>

  
  
  </div>




    
  );
}

export default Info;
