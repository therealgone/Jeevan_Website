import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
function About() {
  return (
   <div className='text-center tracking-widest min-h-screen px-4 sm:px-6 lg:px-8'>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold py-6 sm:py-10 mb-10 sm:mb-20 font-mono text-glow-white">Jeevan Baabu Murugan</h1>
       <h1 className='bg-animated-gradient border border-transparent text-white flex items-center justify-center w-[280px] sm:w-[350px] md:w-[400px] h-[60px] sm:h-[70px] md:h-[80px] mx-auto text-glow-white'>
        {''}
        <span className='font-mono font-bold text-xl sm:text-2xl md:text-3xl'>
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
       <div>
      <h3 className="italic text-gray-500 py-6 sm:py-10 text-sm sm:text-base md:text-lg">
        "Each line I write forges a blade that cleaves through the fabric of reality"
      </h3>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 justify-center mt-6 tracking-widest font-mono">
        <a
          href="https://github.com/therealgone"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 sm:gap-4 px-4 py-2 bg-gray-900 text-white rounded-full hover:bg-black transition"
        >
          <FaGithub className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          <span>GitHub</span>
        </a>

        <a
          href="mailto:jeevanbaabu03@gmail.com"
          className="flex items-center justify-center gap-2 sm:gap-4 px-4 py-2 bg-gray-900 text-white rounded-full hover:bg-red-600 transition"
        >
          <FaEnvelope className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          <span>Email</span>
        </a>

        <a
          href="https://www.linkedin.com/in/jeevan-baabu-97a19125b/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 sm:gap-4 px-4 py-2 bg-gray-900 text-white rounded-full hover:bg-blue-800 transition"
        >
          <FaLinkedin className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          <span>LinkedIn</span>
        </a>
      </div>
     </div>
     <div className='mt-20 sm:mt-32 md:mt-40 animate-bounce'>
        <h5 className="text-sm sm:text-base">Scroll for more</h5>
        <h5 className='font-bold text-xl sm:text-2xl'>↓</h5>
      </div>
    </div>
  );
}

export default About;
