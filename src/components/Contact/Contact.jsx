"use client"

import { MdOutlineMail } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import ScrollToTop from "react-scroll-to-top";



const Contact = () => {
	const form = useRef();
	

    const handleSubmit =e=>{
        e.preventDefault()

		const name = e.target.user_name.value
        const email = e.target.user_email.value 
		const message = e.target.message.value 

		
		// if(!name || !email || !message){
		// 	return toast.error("Fill the form")
		// }


		// emailjs
		// .sendForm('service_wntx39g', 'template_0r5zf8c', form.current, {
		//   publicKey: 'TCmdG9rRZnUSsLWqd',
		// })
		// .then(
		//   () => {
		// 	console.log('SUCCESS!');
		//   },
		//   (error) => {
		// 	console.log('FAILED...', error.text);
		//   },
		// );

		
		  

        toast.success("Message delivered")
        e.target.reset()
    }
    return (
        <div id="contact" className="mt-20 container mx-auto px-10">
		<div />
      <ScrollToTop color="blue" width={32} smooth style={{display:"flex",justifyContent:"center",alignItems:"center"}} />
              <div>
              
                <div className="text-center text-3xl font-extrabold text-slate-700">Contact Me</div>
                <Toaster></Toaster>
                <section className="py-6">
	<div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:items-center md:divide-x">
		<div className="py-6 md:py-0 md:px-6  md:text-l space-y-3">
			<h1 className="text-2xl lg:text-4xl font-bold text-slate-700">Get in touch</h1>
			<p className="pt-2 pb-4 text-slate-700">Here is my contact details</p>
			<div className="space-y-4">
				
				
				<p className="flex gap-5 items-center text-2xl">
				     <span className="text-slate-700">< MdOutlineMail/></span>
					<span className="text-base sm:text-lg text-green-700 font-semibold">jahedmunna612@gmail.com</span>
				</p>
                <p className="flex gap-5 items-center text-xl">
				   <span className="text-slate-700"><FaPhoneFlip/></span>
					<span className="text-base sm:text-lg text-sky-700 font-semibold">+8801795500756</span>
				</p>
                <p className="flex gap-5 items-center text-xl">
					<span className="text-slate-700"><FaHouse/></span>
					<span  className="text-base sm:text-lg text-violet-600 font-semibold">Sylhet,Bangladesh</span>
				</p>
			</div>
		</div>
		<form ref={form} noValidate="" onSubmit={handleSubmit} className="flex flex-col py-6 space-y-6 md:py-2 md:px-6">
			<label className="block">
				<span className="mb-1 text-slate-700">Full name:</span>
				<input name="user_name" type="text" placeholder="Leroy Jenkins" className="block px-2 py-2 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" />
			</label>
			<label className="block">
				<span className="mb-1 text-slate-700">Email address:</span>
				<input name="user_email" type="email" placeholder="leroy@jenkins.com" className="block px-2 py-2 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" />
			</label>
			<label className="block">
				<span className="mb-1 text-slate-700">Message:</span>
				<textarea rows="3" name="message" className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100"></textarea>
			</label>
			<button type="submit" className="border-2 border-pink-500 px-4 py-2 text-pink-500">Message</button>
		</form>
	</div>
</section>

             

            </div>
            
        </div>
    );
};

export default Contact;