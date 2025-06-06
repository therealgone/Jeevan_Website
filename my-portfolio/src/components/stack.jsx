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
   <div className="min-h-screen tracking-wide">
   <div className="items-center flex flex-col p-10">
    <h1 className="pruple-font items-center ">Technology Stack</h1>
   </div>
   <div className="pl-80 mt-20 tracking-wide">
    <h1 className="pl-5 text-glow-white font-mono text-4xl">Language</h1>
    
    <div className="grid grid-cols-5 gap-9 mt-5 p-3 max-w-6xl w-full font-mono tracking-wider transition-all duration-900 ease-in-out">
      <h1 className="border w-40 h-60 rounded-2xl bg-animated-gradient opacity-40 stack-animation flex flex-col items-center justify-center python-animation transition-all duration-900 ease-in-out">
        <img src={pythonLogo} alt="Python" className="w-16 h-16 mb-4" /> 
        <span>Python</span>
      </h1>
      
      <h1 className="border w-40 h-60 rounded-2xl bg-animated-gradient opacity-40 stack-animation flex flex-col items-center justify-center html-animation transition-all duration-900 ease-in-out ">
        <img src={html} alt="HTML" className="w-16 h-16 mb-4" /> 
        <span>HTML</span>
      </h1>

      <h1 className="border w-40 h-60 rounded-2xl bg-animated-gradient opacity-40 stack-animation flex flex-col items-center justify-center css-animation transition-all duration-900 ease-in-out">
        <img src={css} alt="css" className="w-16 h-16 mb-4" /> 
        <span>CSS</span>
      </h1>

      <h1 className="border w-40 h-60 rounded-2xl bg-animated-gradient opacity-40 stack-animation flex flex-col items-center justify-center react-animation transition-all duration-900 ease-in-out">
        <img src={react} alt="react" className="w-16 h-16 mb-4" /> 
        <span>React</span>
      </h1>

      <h1 className="border w-40 h-60 rounded-2xl bg-animated-gradient opacity-40 stack-animation flex flex-col items-center justify-center sql-animation transition-all duration-900 ease-in-out">
        <img src={sql} alt="SQL" className="w-16 h-16 mb-4" /> 
        <span>SQL</span>
      </h1>

      <h1 className="border w-40 h-60 rounded-2xl bg-animated-gradient opacity-40 stack-animation flex flex-col items-center justify-center js-animation transition-all duration-900 ease-in-out">
        <img src={js} alt="js" className="w-16 h-16 mb-4" /> 
        <span>JavaScript</span>
      </h1>
    </div>
   </div>

    <div className="pl-80 mt-20 tracking-wide">
    <h1 className="pl-5 text-glow-white font-mono text-4xl">Framework / Tools</h1>
    
    <div className="grid grid-cols-5 gap-9 mt-5 p-3 max-w-6xl w-full font-mono tracking-wider transition-all duration-900 ease-in-out">
      <h1 className="border w-40 h-60 rounded-2xl bg-animated-gradient opacity-40 stack-animation flex flex-col items-center justify-center tailwind-animation transition-all duration-900 ease-in-out">
        <img src={tailwind} alt="tailwind" className="w-16 h-16 mb-4" /> 
        <span>Tailwind</span>
      </h1>
      
      <h1 className="border w-40 h-60 rounded-2xl bg-animated-gradient opacity-40 stack-animation flex flex-col items-center justify-center typescript-animation transition-all duration-900 ease-in-out">
        <img src={typescripte} alt="typescripte" className="w-16 h-16 mb-4" /> 
        <span>TypeScript</span>
      </h1>

      <h1 className="border w-40 h-60 rounded-2xl bg-animated-gradient opacity-40 stack-animation flex flex-col items-center justify-center vite-animation transition-all duration-900 ease-in-out">
        <img src={vita} alt="vita" className="w-16 h-16 mb-4" /> 
        <span>Vite</span>
      </h1>

      <h1 className="border w-40 h-60 rounded-2xl bg-animated-gradient opacity-40 stack-animation flex flex-col items-center justify-center cuda-animation transition-all duration-900 ease-in-out">
        <img src={cuda} alt="cuda" className="w-16 h-16 mb-4" /> 
        <span>Cuda</span>
      </h1>

      <h1 className="border w-40 h-60 rounded-2xl bg-animated-gradient opacity-40 stack-animation flex flex-col items-center justify-center postman-animation transition-all duration-900 ease-in-out">
        <img src={postman} alt="Postman" className="w-16 h-16 mb-4" /> 
        <span>Postman</span>
      </h1>

      <h1 className="border w-40 h-60 rounded-2xl bg-animated-gradient opacity-40 stack-animation flex flex-col items-center justify-center nodejs-animation transition-all duration-900 ease-in-out">
        <img src={nodejs} alt="nodejs" className="w-16 h-16 mb-4" /> 
        <span>Node.js</span>
      </h1>

      <h1 className="border w-40 h-60 rounded-2xl bg-animated-gradient opacity-40 stack-animation flex flex-col items-center justify-center git-animation transition-all duration-900 ease-in-out">
        <img src={git} alt="git" className="w-16 h-16 mb-4" /> 
        <span>Git</span>
      </h1>
    </div>
   </div>
   </div>
  );
}

export default Stack;