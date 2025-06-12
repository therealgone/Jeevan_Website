import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from "framer-motion";

function About() {
  return (
   <div className='text-center tracking-widest min-h-screen flex flex-col justify-between py-5 px-4 md:px-8 lg:px-16'>
    <div className="w-full max-w-4xl mx-auto">
      <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="mt-5"
    >
      <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold font-mono text-glow-white mb-10">
        Jeevan Baabu Murugan
      </h1>
    </motion.div>
    <motion.div 
      initial={{opacity:0, y:90}}
      animate={{opacity:1, y:0}}
      transition={{ duration: 1, ease:"easeInOut"}}
      className="flex-1 flex flex-col justify-start"
      >
         <h1 className='mt-10 bg-animated-gradient border border-transparent text-white flex items-center justify-center w-full max-w-[500px] h-[100px] mx-auto text-glow-white mb-10'>
          <span className='font-mono font-bold text-3xl md:text-4xl'>
              <Typewriter
               words={['Web Developer', 'Tech Enthusiast',"AI Enthusiast"]}
               loop={0} 
               cursor
               cursorStyle='|'
                  typeSpeed={90}  
                  deleteSpeed={60}
                  delaySpeed={1000}
              />
          </span>
         </h1>
         
         
        <h3 className="italic text-gray-500 text-xl md:text-2xl mt-10 mb-10 ">
          "Each line I write forges a blade that cleaves through the fabric of reality"
        </h3>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 justify-center items-center tracking-widest font-mono mt-10">
          <a
            href="https://github.com/therealgone"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-black hover:scale-[1.09] transition-all duration-300 ease-in-out"
          >
            <FaGithub className="w-12 h-12" />
            <span className="text-lg">GitHub</span>
          </a>

          <a
            href="mailto:jeevanbaabu03@gmail.com"
            className="flex items-center gap-4 px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-red-600 hover:scale-[1.09] transition-all duration-300 ease-in-out"
          >
            <FaEnvelope className="w-12 h-12" />
            <span className="text-lg">Email</span>
          </a>

          <a
            href="https://www.linkedin.com/in/jeevan-baabu-97a19125b/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-blue-800 hover:scale-[1.09] transition-all duration-300 ease-in-out"
          >
            <FaLinkedin className="w-12 h-12" />
            <span className="text-lg">LinkedIn</span>
          </a>
        </div>
      </motion.div>

      <motion.div 
        initial={{opacity:0, y:90}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.9, ease:"easeInOut"}}
        className="absolute bottom-8 left-0 right-0 mx-auto w-full flex flex-col items-center justify-center z-10"
      >
        <h1 className='text-glow-white text-lg md:text-xl mb-2'>Scroll for more</h1>
        <h2 className='animate-bounce text-2xl md:text-4xl font-extrabold text-glow-white'>↓</h2>
      </motion.div>
    </div>
   </div>
     
    
    
  );
}

export default About;
