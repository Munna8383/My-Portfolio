import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 container mx-auto px-10 bg-gradient-to-r from-blue-200 via-blue-100 to-blue-300">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <a className="font-extrabold text-xl md:text-3xl text-slate-700 hidden md:block">Jahed Ahmed Munna</a>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 text-slate-700 space-x-4 text-xl">
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Education</li>
          </ul>
        </div>
        <div className="navbar-end space-x-5">
          <a target="_blank" href="https://www.linkedin.com/in/jahed-ahmed-munna" className="text-3xl text-sky-700"><FaLinkedin /></a>
          <a target="_blank" href="https://github.com/Munna8383" className="text-3xl text-purple-600"><FaGithub /></a>
        </div>
      </div>
    );
};

export default Navbar;