import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
function About() {
  return (
   <div className='text-center  tracking-widest min-h-screen'>
      <h1 className="text-5xl font-bold py-10 mb-20 font-mono text-glow-white  ">Jeevan Baabu Murugan</h1>
       <h1 className='bg-animated-gradient border border-transparent text-white flex items-center  justify-center w-[400px] h-[80px]  mx-auto text-glow-white '>
        {''}
        
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
       <div>
      <h3 className="italic text-gray-500 py-10">
        "Each line I write forges a blade that cleaves through the fabric of reality"
      </h3>

      <div className="flex gap-10 justify-center mt-6 tracking-widest font-mono">
        <a
          href="https://github.com/therealgone"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 px-4 py-2 bg-gray-900 text-white rounded-full hover:bg-black transition"
        >
          <FaGithub className="w-10 h-10" />
          <span>GitHub</span>
        </a>

        <a
          href="mailto:jeevanbaabu03@gmail.com"
          className="flex items-center gap-4 px-4 py-2  bg-gray-900 text-white rounded-full  hover:bg-red-600 transition "
        >
          <FaEnvelope className="w-10 h-10" />
          <span>Email</span>
        </a>

        <a
          href="https://www.linkedin.com/in/jeevan-baabu-97a19125b/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 px-4 py-2 bg-gray-900 text-white rounded-full hover:bg-blue-800  transition"
        >
          <FaLinkedin className="w-10 h-10" />
          <span>LinkedIn</span>
        </a>
      </div>
     

    </div>
     <div className='mt-40 animate-bounce'>
        <h5>Scroll for more</h5>
        <h5 className='font-bold text-2xl'>↓</h5>
      </div>
    </div>
    
  );
}

export default About;
