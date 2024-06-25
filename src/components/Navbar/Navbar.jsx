import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 container mx-auto px-10 bg-gradient-to-r from-blue-200 via-blue-100 to-blue-300">
        <div className="navbar-start">
        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
             <h1 className="font-extrabold text-lg text-slate-700">Jahed Ahmed Munna</h1>
            </div>
          <a className="font-extrabold text-xl md:text-3xl text-slate-700 hidden md:block">Jahed Ahmed Munna</a>
        </div>
        {/* <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 text-slate-700 space-x-4 text-xl">
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Education</li>
          </ul>
        </div> */}
        <div className="navbar-end space-x-5 md:space-x-10">
        <a target="_blank" href="https://www.linkedin.com/in/jahed-ahmed-munna" className="text-3xl md:text-4xl text-sky-700"><FaLinkedin /></a>
          <a target="_blank" href="https://github.com/Munna8383" className="text-3xl md:text-4xl text-purple-600"><FaGithub /></a>
          
        </div>
      </div>
    );
};

export default Navbar;