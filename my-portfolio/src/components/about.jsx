import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from "framer-motion";

function About() {
  return (
   <div className='text-center  tracking-widest min-h-screen px-4 md:px-8 lg:px-16 '>
    <motion.div
    initial={{ opacity: 0, y: 0 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: 'easeInOut' }}
  >
    <h1 className="text-4xl md:text-5xl font-bold py-10 mb-20 font-mono text-glow-white">
      Jeevan Baabu Murugan
    </h1>
  </motion.div>
  <motion.div 
    initial={{opacity:0, y:80}}
    animate={{opacity:1, y:0}}
    transition={{ duration: 1, ease:"easeInOut"}}
    >
       <h1 className='bg-animated-gradient border border-transparent text-white flex items-center justify-center w-full max-w-[400px] h-[80px] mx-auto text-glow-white'>
        
        
        <span className='font-mono font-bold text-3xl  '>
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
       
       
      <h3 className="italic text-gray-500 py-10">
        "Each line I write forges a blade that cleaves through the fabric of reality"
      </h3>
      </motion.div >
      <motion.div initial={{opacity:0 , y:90}}
                  animate={{opacity:1 , y:0}}
                  transition={{duration:0.9 , ease:"easeInOut"}}
      >
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-center mt-6 tracking-widest font-mono">
        <a
          href="https://github.com/therealgone"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 px-4 py-2 bg-gray-900 text-white rounded-full hover:bg-black hover:scale-[1.05] transition-all duration-300 ease-in-out"
        >
          <FaGithub className="w-10 h-10" />
          <span>GitHub</span>
        </a>

        <a
          href="mailto:jeevanbaabu03@gmail.com"
          className="flex items-center gap-4 px-4 py-2  bg-gray-900 text-white rounded-full  hover:bg-red-600  hover:scale-[1.05] transition-all duration-300 ease-in-out "
        >
          <FaEnvelope className="w-10 h-10" />
          <span>Email</span>
        </a>

        <a
          href="https://www.linkedin.com/in/jeevan-baabu-97a19125b/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 px-4 py-2 bg-gray-900 text-white rounded-full hover:bg-blue-800   hover:scale-[1.05] transition-all duration-300 ease-in-out"
        >
          <FaLinkedin className="w-10 h-10" />
          <span>LinkedIn</span>
        </a>
      </div>
      </motion.div>
     

    </div>
     
    
    
  );
}

export default About;
