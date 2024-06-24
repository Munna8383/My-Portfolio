"use client"
import image1 from "../../../public/images/image1.png"
import Image from "next/image";
import { Typewriter } from 'react-simple-typewriter'


const About = () => {
  
    
    return (
        <div className="mt-10 container mx-auto px-10">
      <div className="flex flex-col sm:flex-row items-center sm:justify-between space-y-5">
     <div data-aos="fade-up" className="w-full  sm:w-1/2 text-center sm:text-left space-y-4 text-slate-700">
     <h1 className="text-xl font-semibold text-slate-700">Hello ! I am a</h1>
     <h1  className="text-4xl font-extrabold text-pink-500">
     <Typewriter
            words={["Frontend Web Developer"]}
            cursor
            cursorStyle='_'
            loop="false"
            delaySpeed={1000}
            typeSpeed={11}
          />

        
        
        </h1>
     <p>I am a passionate Frontend Web Developer with a keen eye for design and a commitment to creating beautiful, user-friendly websites. With a strong foundation in HTML, CSS, and JavaScript, and extensive experience in React,and I am looking forward to exploring opportunities to enhance my skills</p>
     <div>
     <a target="_blank" href="https://drive.google.com/file/d/1zlhny9VJpG97no3aoxXX-DISfIquwdLg/view?usp=sharing" className="border-2 border-pink-500 px-4 py-2 text-pink-500">Get My Resume</a>
     </div>
     </div>
     <div data-aos="fade-up" className="w-full sm:w-1/2">
     <Image  className="w-full object-cover hover:scale-110" src={image1} alt="picture"/>
     </div>
      </div>
            
        </div>
    );
};

export default About;