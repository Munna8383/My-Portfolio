"use client"

import { MdOutlineMail } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Contact = () => {

    const handleSubmit =e=>{
        e.preventDefault()
       
        toast.success("Message delivered")
        e.target.reset()
    }
    return (
        <div className="mt-20 container mx-auto px-10">
              <div>
              
                <div className="divider divider-secondary text-3xl font-extrabold text-slate-700">Contact Me</div>
                <Toaster></Toaster>
                <section className="py-6">
	<div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:items-center md:divide-x">
		<div className="py-6 md:py-0 md:px-6  md:text-l space-y-3">
			<h1 className="text-4xl font-bold text-slate-700">Get in touch</h1>
			<p className="pt-2 pb-4 text-slate-700">Here is my contact details</p>
			<div className="space-y-4">
				
				
				<p className="flex gap-5 items-center text-2xl">
				     <span className="text-slate-700">< MdOutlineMail/></span>
					<span className="text-xl text-green-700 font-semibold">jahedmunna612@gmail.com</span>
				</p>
                <p className="flex gap-5 items-center text-2xl">
				   <span className="text-slate-700"><FaPhoneFlip/></span>
					<span className="text-xl text-sky-700 font-semibold">+8801795500756</span>
				</p>
                <p className="flex gap-5 items-center text-2xl">
					<span className="text-slate-700"><FaHouse/></span>
					<span  className="text-xl text-violet-600 font-semibold">Sylhet,Bangladesh</span>
				</p>
			</div>
		</div>
		<form noValidate="" onSubmit={handleSubmit} className="flex flex-col py-6 space-y-6 md:py-2 md:px-6">
			<label className="block">
				<span className="mb-1">Full name</span>
				<input type="text" placeholder="Leroy Jenkins" className="block px-1 py-2 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" />
			</label>
			<label className="block">
				<span className="mb-1">Email address</span>
				<input type="email" placeholder="leroy@jenkins.com" className="block px-1 py-2 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" />
			</label>
			<label className="block">
				<span className="mb-1">Message</span>
				<textarea rows="3" className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100"></textarea>
			</label>
			<button type="submit" className="border-2 border-pink-500 px-4 py-2 text-pink-500">Message</button>
		</form>
	</div>
</section>

             
               
                <div className="divider divider-secondary">
                <a target="_blank" href="https://www.linkedin.com/in/jahed-ahmed-munna" className="text-3xl text-sky-700"><FaLinkedin /></a>
          <a target="_blank" href="https://github.com/Munna8383" className="text-3xl text-purple-600"><FaGithub /></a>
          <a target="_blank" href="https://www.facebook.com/jahed.munna.75?mibextid=LQQJ4d" className="text-3xl text-blue-700"><FaFacebook /></a>
                </div>

                <div className="text-center pb-5 pt-5">
                    <h1 className="text-3xl font-extrabold text-slate-700">Thank You</h1>
                </div>

            </div>
            
        </div>
    );
};

export default Contact;