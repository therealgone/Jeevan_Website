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
    
    <div className="grid grid-cols-5 gap-9  mt-5 p-3 max-w-6xl w-full font-mono tracking-wider  ">
      <h1 className="border w-40 h-50 rounded-2xl bg-animated-gradient opacity-40 stack-animation flex flex-col items-center python-animation "><img src={pythonLogo} alt="Python" className="w-16 h-16 mx-auto mt-10 mb-4  " /> Python </h1>
      
      <h1 className=" border  w-40 h-50 rounded-2xl bg-animated-gradient opacity-40 stack-animation flex flex-col items-center html-animation  "><img src={html} alt="HTML" className="w-16 h-16 mx-auto mt-10 mb-4 " /> HTML </h1>
      <h1 className="border w-40 h-50 rounded-2xl bg-animated-gradient opacity-40 stack-animation flex flex-col items-center css-animation "><img src={css} alt="css" className="w-16 h-16 mx-auto mt-10 mb-4 " /> CSS </h1>
      <h1 className="border w-40 h-50 rounded-2xl bg-animated-gradient opacity-40 stack-animation flex flex-col items-center react-animation "><img src={react} alt="react" className="w-16 h-16 mx-auto mt-10 mb-4 " /> React </h1>
      <h1 className="border w-40 h-50 rounded-2xl bg-animated-gradient opacity-40 stack-animation flex flex-col items-center sql-animation "><img src={sql} alt="SQL" className="w-16 h-16 mx-auto mt-10 mb-4 " /> SQL </h1>
      <h1 className="border w-40 h-50 rounded-2xl bg-animated-gradient opacity-40 stack-animation flex flex-col items-center js-animation "><img src={js} alt="js" className="w-16 h-16 mx-auto mt-10 mb-4 " /> Java Script </h1>
      


   </div>
   </div>

    <div className="pl-80 mt-20 tracking-wide">
    <h1 className="pl-5 text-glow-white font-mono text-4xl">Framework / Tools </h1>
    
    <div className="grid grid-cols-5 gap-9  mt-5 p-3 max-w-6xl w-full font-mono tracking-wider ">
      <h1 className="border w-40 h-50 rounded-6xl bg-animated-gradient opacity-40 stack-animation flex flex-col items-center tailwind-animation  "><img src={tailwind} alt="tailwind" className="w-16 h-16 mx-auto mt-10 mb-4 " /> Tailwind </h1>
      
      <h1 className="border w-40 h-50 rounded-6xl bg-animated-gradient opacity-40 stack-animation flex flex-col items-center typescript-animation  "><img src={typescripte} alt="typescripte" className="w-16 h-16 mx-auto mt-10 mb-4 " /> Typescripte </h1>
      <h1 className="border w-40 h-50 rounded-2xl bg-animated-gradient opacity-40 stack-animation flex flex-col items-center vite-animation  "><img src={vita} alt="vita" className="w-16 h-16 mx-auto mt-10 mb-4 " /> Vite </h1>
      <h1 className="border w-40 h-50 rounded-2xl bg-animated-gradient opacity-40 stack-animation flex flex-col items-center cuda-animation "><img src={cuda} alt="cuda" className="w-16 h-16 mx-auto mt-10 mb-4 " /> Cuda </h1>
      <h1 className="border w-40 h-50 rounded-2xl bg-animated-gradient opacity-40 stack-animation flex flex-col items-center  postman-animation"><img src={postman} alt="SQL" className="w-16 h-16 mx-auto mt-10 mb-4 " /> Postman </h1>
      <h1 className="border w-40 h-50 rounded-2xl bg-animated-gradient opacity-40 stack-animation flex flex-col items-center  nodejs-animation"><img src={nodejs} alt="nodejs" className="w-16 h-16 mx-auto mt-10 mb-4 " /> Node JS </h1>
      <h1 className="border w-40 h-50 rounded-2xl bg-animated-gradient opacity-40 stack-animation flex flex-col items-center git-animation "><img src={git} alt="git" className="w-16 h-16 mx-auto mt-10 mb-4 " /> GIT</h1>
      


   </div>
    
   

    
    
    
</div>
   
   </div>
   
  );
}

export default Stack;