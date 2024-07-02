"use client"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="mt-10 py-5" >

<div className="divider divider-secondary"></div>

<div className="space-y-5">
<div className="text-center text-3xl font-bold text-slate-700">
    <h1>Connect in Social media</h1>
</div>
<div className="flex justify-center gap-5">
                <a target="_blank" href="https://www.linkedin.com/in/jahed-ahmed-munna" className="text-3xl text-sky-700"><FaLinkedin /></a>
          <a target="_blank" href="https://github.com/Munna8383" className="text-3xl text-purple-600"><FaGithub /></a>
          <a target="_blank" href="https://www.facebook.com/jahed.munna.75?mibextid=LQQJ4d" className="text-3xl text-blue-700"><FaFacebook /></a>
                </div>
                <div>
                <p className="text-lg font-semibold text-center">Copyright © ${new Date().getFullYear()} - All right reserved</p>
                </div>
</div>

          
            
        </div>
    );
};

export default Footer;