function Navbar() {
  return (
    <nav className="flex justify-center p-4 py-9 text-2xl font-mono ">
      <ul className="list-none flex space-x-10 font-mono border rounded-full px-6 py-3 border-gray-500 bg-gray-900 tracking-widest">
        
        <li>
          <a href="#" className="text-gray-400 hover:text-white">Home</a>
        </li>
        <li>
          <a href="#" className="text-gray-400 hover:text-white">About</a>
        </li>
        <li>
          <a href="#" className="text-gray-400 hover:text-white">Stack</a>
        </li>
        <li>
          <a href="#" className="text-gray-400 hover:text-white">Project</a>
        </li>
        <li>
          <a href="#" className="text-gray-400 hover:text-white">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
