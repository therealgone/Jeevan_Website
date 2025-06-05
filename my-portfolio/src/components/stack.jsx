import pythonLogo from "../assets/python.svg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import react from "../assets/react.svg";
import sql from "../assets/sql-svgrepo-com.svg";
import js from "../assets/js.svg";
import tailwind from "../assets/tailwindsvg.svg";
import typescripte from "../assets/typescript.svg";
import vita from "../assets/vite.svg";
import cuda from "../assets/cuda-svgrepo-com.svg";
import postman from "../assets/postman.svg";
import nodejs from "../assets/nodejs.svg";
import git from "../assets/git.svg";

function Stack() {
  return (
   <div className="min-h-screen tracking-wide px-4 sm:px-6 lg:px-8">
     <div className="items-center flex flex-col p-4 sm:p-10">
       <h1 className="pruple-font items-center text-2xl sm:text-3xl md:text-4xl">Technology Stack</h1>
     </div>
     <div className="mt-10 sm:mt-20 tracking-wide">
       <h1 className="text-glow-white font-mono text-2xl sm:text-3xl md:text-4xl mb-5">Language</h1>
       
       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-9 p-3 max-w-6xl mx-auto font-mono tracking-wider">
         <h1 className="border w-full h-40 sm:h-50 rounded-2xl bg-animated-gradient opacity-40 stack-animation flex flex-col items-center python-animation">
           <img src={pythonLogo} alt="Python" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mt-6 sm:mt-10 mb-2 sm:mb-4" /> 
           <span className="text-sm sm:text-base">Python</span>
         </h1>
         
         <h1 className="border w-full h-40 sm:h-50 rounded-2xl bg-animated-gradient opacity-40 stack-animation flex flex-col items-center html-animation">
           <img src={html} alt="HTML" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mt-6 sm:mt-10 mb-2 sm:mb-4" /> 
           <span className="text-sm sm:text-base">HTML</span>
         </h1>

         <h1 className="border w-full h-40 sm:h-50 rounded-2xl bg-animated-gradient opacity-40 stack-animation flex flex-col items-center css-animation">
           <img src={css} alt="css" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mt-6 sm:mt-10 mb-2 sm:mb-4" /> 
           <span className="text-sm sm:text-base">CSS</span>
         </h1>

         <h1 className="border w-full h-40 sm:h-50 rounded-2xl bg-animated-gradient opacity-40 stack-animation flex flex-col items-center react-animation">
           <img src={react} alt="react" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mt-6 sm:mt-10 mb-2 sm:mb-4" /> 
           <span className="text-sm sm:text-base">React</span>
         </h1>

         <h1 className="border w-full h-40 sm:h-50 rounded-2xl bg-animated-gradient opacity-40 stack-animation flex flex-col items-center sql-animation">
           <img src={sql} alt="SQL" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mt-6 sm:mt-10 mb-2 sm:mb-4" /> 
           <span className="text-sm sm:text-base">SQL</span>
         </h1>

         <h1 className="border w-full h-40 sm:h-50 rounded-2xl bg-animated-gradient opacity-40 stack-animation flex flex-col items-center js-animation">
           <img src={js} alt="js" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mt-6 sm:mt-10 mb-2 sm:mb-4" /> 
           <span className="text-sm sm:text-base">JavaScript</span>
         </h1>
       </div>
     </div>

     <div className="mt-10 sm:mt-20 tracking-wide">
       <h1 className="text-glow-white font-mono text-2xl sm:text-3xl md:text-4xl mb-5">Framework / Tools</h1>
       
       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-9 p-3 max-w-6xl mx-auto font-mono tracking-wider">
         <h1 className="border w-full h-40 sm:h-50 rounded-2xl bg-animated-gradient opacity-40 stack-animation flex flex-col items-center tailwind-animation">
           <img src={tailwind} alt="tailwind" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mt-6 sm:mt-10 mb-2 sm:mb-4" /> 
           <span className="text-sm sm:text-base">Tailwind</span>
         </h1>
         
         <h1 className="border w-full h-40 sm:h-50 rounded-2xl bg-animated-gradient opacity-40 stack-animation flex flex-col items-center typescript-animation">
           <img src={typescripte} alt="typescripte" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mt-6 sm:mt-10 mb-2 sm:mb-4" /> 
           <span className="text-sm sm:text-base">TypeScript</span>
         </h1>

         <h1 className="border w-full h-40 sm:h-50 rounded-2xl bg-animated-gradient opacity-40 stack-animation flex flex-col items-center vite-animation">
           <img src={vita} alt="vita" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mt-6 sm:mt-10 mb-2 sm:mb-4" /> 
           <span className="text-sm sm:text-base">Vite</span>
         </h1>

         <h1 className="border w-full h-40 sm:h-50 rounded-2xl bg-animated-gradient opacity-40 stack-animation flex flex-col items-center cuda-animation">
           <img src={cuda} alt="cuda" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mt-6 sm:mt-10 mb-2 sm:mb-4" /> 
           <span className="text-sm sm:text-base">Cuda</span>
         </h1>

         <h1 className="border w-full h-40 sm:h-50 rounded-2xl bg-animated-gradient opacity-40 stack-animation flex flex-col items-center postman-animation">
           <img src={postman} alt="Postman" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mt-6 sm:mt-10 mb-2 sm:mb-4" /> 
           <span className="text-sm sm:text-base">Postman</span>
         </h1>

         <h1 className="border w-full h-40 sm:h-50 rounded-2xl bg-animated-gradient opacity-40 stack-animation flex flex-col items-center nodejs-animation">
           <img src={nodejs} alt="nodejs" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mt-6 sm:mt-10 mb-2 sm:mb-4" /> 
           <span className="text-sm sm:text-base">Node.js</span>
         </h1>

         <h1 className="border w-full h-40 sm:h-50 rounded-2xl bg-animated-gradient opacity-40 stack-animation flex flex-col items-center git-animation">
           <img src={git} alt="git" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mt-6 sm:mt-10 mb-2 sm:mb-4" /> 
           <span className="text-sm sm:text-base">Git</span>
         </h1>
       </div>
     </div>
   </div>
  );
}

export default Stack;