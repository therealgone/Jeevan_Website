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
import { motion } from "framer-motion";

function Stack() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen tracking-wide px-4 md:px-8 lg:px-16">
      <div className="items-center flex flex-col p-10">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-mono tracking-widest bg-gradient-to-l from-indigo-600 via-purple-600 to-violet-600 dark:from-indigo-400 dark:via-purple-400 dark:to-violet-400 bg-clip-text text-transparent font-extrabold"
        >
          Technology Stack
        </motion.h1>
      </div>

      <div className="mt-20 tracking-wide max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-glow-white font-mono text-3xl md:text-4xl mb-5 text-center"
        >
          Languages
        </motion.h1>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-9 mt-5 p-3 w-full font-mono tracking-wider transition-all duration-900 ease-in-out justify-items-center"
        >
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="border w-full max-w-[160px] h-60 rounded-2xl bg-animated-gradient opacity-40 hover:opacity-100 stack-animation flex flex-col items-center justify-center python-animation transition-all duration-300 ease-in-out group"
          >
            <img src={pythonLogo} alt="Python" className="w-16 h-16 mb-4 group-hover:scale-110 transition-transform duration-300" /> 
            <span className="text-lg group-hover:text-xl transition-all duration-300">Python</span>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="border w-full max-w-[160px] h-60 rounded-2xl bg-animated-gradient opacity-40 hover:opacity-100 stack-animation flex flex-col items-center justify-center html-animation transition-all duration-300 ease-in-out group"
          >
            <img src={html} alt="HTML" className="w-16 h-16 mb-4 group-hover:scale-110 transition-transform duration-300" /> 
            <span className="text-lg group-hover:text-xl transition-all duration-300">HTML</span>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="border w-full max-w-[160px] h-60 rounded-2xl bg-animated-gradient opacity-40 hover:opacity-100 stack-animation flex flex-col items-center justify-center css-animation transition-all duration-300 ease-in-out group"
          >
            <img src={css} alt="css" className="w-16 h-16 mb-4 group-hover:scale-110 transition-transform duration-300" /> 
            <span className="text-lg group-hover:text-xl transition-all duration-300">CSS</span>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="border w-full max-w-[160px] h-60 rounded-2xl bg-animated-gradient opacity-40 hover:opacity-100 stack-animation flex flex-col items-center justify-center react-animation transition-all duration-300 ease-in-out group"
          >
            <img src={react} alt="react" className="w-16 h-16 mb-4 group-hover:scale-110 transition-transform duration-300" /> 
            <span className="text-lg group-hover:text-xl transition-all duration-300">React</span>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="border w-full max-w-[160px] h-60 rounded-2xl bg-animated-gradient opacity-40 hover:opacity-100 stack-animation flex flex-col items-center justify-center sql-animation transition-all duration-300 ease-in-out group"
          >
            <img src={sql} alt="SQL" className="w-16 h-16 mb-4 group-hover:scale-110 transition-transform duration-300" /> 
            <span className="text-lg group-hover:text-xl transition-all duration-300">SQL</span>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="border w-full max-w-[160px] h-60 rounded-2xl bg-animated-gradient opacity-40 hover:opacity-100 stack-animation flex flex-col items-center justify-center js-animation transition-all duration-300 ease-in-out group"
          >
            <img src={js} alt="js" className="w-16 h-16 mb-4 group-hover:scale-110 transition-transform duration-300" /> 
            <span className="text-lg group-hover:text-xl transition-all duration-300">JavaScript</span>
          </motion.div>
        </motion.div>
      </div>

      <div className="mt-20 tracking-wide max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-glow-white font-mono text-3xl md:text-4xl mb-5 text-center"
        >
          Frameworks & Tools
        </motion.h1>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-9 mt-5 p-3 w-full font-mono tracking-wider transition-all duration-900 ease-in-out justify-items-center"
        >
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="border w-full max-w-[160px] h-60 rounded-2xl bg-animated-gradient opacity-40 hover:opacity-100 stack-animation flex flex-col items-center justify-center tailwind-animation transition-all duration-300 ease-in-out group"
          >
            <img src={tailwind} alt="tailwind" className="w-16 h-16 mb-4 group-hover:scale-110 transition-transform duration-300" /> 
            <span className="text-lg group-hover:text-xl transition-all duration-300">Tailwind</span>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="border w-full max-w-[160px] h-60 rounded-2xl bg-animated-gradient opacity-40 hover:opacity-100 stack-animation flex flex-col items-center justify-center typescript-animation transition-all duration-300 ease-in-out group"
          >
            <img src={typescripte} alt="typescripte" className="w-16 h-16 mb-4 group-hover:scale-110 transition-transform duration-300" /> 
            <span className="text-lg group-hover:text-xl transition-all duration-300">TypeScript</span>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="border w-full max-w-[160px] h-60 rounded-2xl bg-animated-gradient opacity-40 hover:opacity-100 stack-animation flex flex-col items-center justify-center vite-animation transition-all duration-300 ease-in-out group"
          >
            <img src={vita} alt="vita" className="w-16 h-16 mb-4 group-hover:scale-110 transition-transform duration-300" /> 
            <span className="text-lg group-hover:text-xl transition-all duration-300">Vite</span>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="border w-full max-w-[160px] h-60 rounded-2xl bg-animated-gradient opacity-40 hover:opacity-100 stack-animation flex flex-col items-center justify-center cuda-animation transition-all duration-300 ease-in-out group"
          >
            <img src={cuda} alt="cuda" className="w-16 h-16 mb-4 group-hover:scale-110 transition-transform duration-300" /> 
            <span className="text-lg group-hover:text-xl transition-all duration-300">Cuda</span>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="border w-full max-w-[160px] h-60 rounded-2xl bg-animated-gradient opacity-40 hover:opacity-100 stack-animation flex flex-col items-center justify-center postman-animation transition-all duration-300 ease-in-out group"
          >
            <img src={postman} alt="Postman" className="w-16 h-16 mb-4 group-hover:scale-110 transition-transform duration-300" /> 
            <span className="text-lg group-hover:text-xl transition-all duration-300">Postman</span>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="border w-full max-w-[160px] h-60 rounded-2xl bg-animated-gradient opacity-40 hover:opacity-100 stack-animation flex flex-col items-center justify-center nodejs-animation transition-all duration-300 ease-in-out group"
          >
            <img src={nodejs} alt="nodejs" className="w-16 h-16 mb-4 group-hover:scale-110 transition-transform duration-300" /> 
            <span className="text-lg group-hover:text-xl transition-all duration-300">Node.js</span>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="border w-full max-w-[160px] h-60 rounded-2xl bg-animated-gradient opacity-40 hover:opacity-100 stack-animation flex flex-col items-center justify-center git-animation transition-all duration-300 ease-in-out group"
          >
            <img src={git} alt="git" className="w-16 h-16 mb-4 group-hover:scale-110 transition-transform duration-300" /> 
            <span className="text-lg group-hover:text-xl transition-all duration-300">Git</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Stack;