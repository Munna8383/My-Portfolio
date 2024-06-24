
import Image from "next/image";
import bookish from "../../../public/images/bookish.png"
import rent from "../../../public/images/rent.png"

const Projects = () => {
    return (
        <div className="mt-20 container mx-auto px-10">
             <div className="text-center">
                <h1 className="text-3xl font-extrabold">Projects</h1>
            </div>

            <div className="mt-10 flex flex-col md:flex-row items-center gap-5 md:h-[300px]">
                <div  data-aos="zoom-in" className="w-full md:w-1/2 shadow-2xl h-full  shadow-pink-900 ">

                    
                <Image className="rounded-md h-full " src={rent} alt="rent"></Image>

                </div>
                <div  data-aos="zoom-in" className="w-full md:w-1/2 h-full space-y-3">

                    <h1 className="text-3xl font-bold">Rent Ease</h1>
                    <h1 className="text-xl font-bold">Made With: <span className="text-pink-500">HTML   CSS   Javascript   React   NodeJS   ExpreesJS   MongoDB</span></h1>
                    <h1 className="font-bold text-slate-700">Feature: <span className="font-normal">This website is an apartment rental platform created using React, Express, NodeJS,
and MongoDB. It features a dashboard system customized for users, members, and administrators,
with varying views and access levels depending on the user's role. A payment method is also
integrated into the website. Additionally, JWT (JSON Web Token) authentication is implemented
using Local Storage.</span></h1>
   
   <div>
   <a target="_blank" href="https://rent-ease-2de9a.web.app/" className="border-2 border-pink-500 px-4 py-2 text-pink-500">Live Website</a>
 
   

   </div>

                </div>

            </div>
            <div className="mt-20 flex flex-col md:flex-row items-center gap-5 md:h-[300px]">
                <div data-aos="zoom-in" className="w-full md:w-1/2 shadow-2xl h-full  shadow-pink-900 ">

                    
                <Image className="rounded-md h-full " src={bookish} alt="rent"></Image>

                </div>
                <div data-aos="zoom-in" className="w-full md:w-1/2 h-full space-y-3">

                    <h1 className="text-3xl font-bold">Bookish Bliss</h1>
                    <h1 className="text-xl font-bold">Made With: <span className="text-pink-500">HTML   CSS   Javascript   React   NodeJS   ExpreesJS   MongoDB</span></h1>
                    <h1 className="font-bold text-slate-700">Feature: <span className="font-normal">I created an e-library website using React, Express, and MongoDB. It has a search
feature to help you find books easily. Users can also add, update, and delete books. Additionally,
the website allows users to borrow and return books. For better security, the website uses JWT
authorization to keep user information safe.</span></h1>
   
   <div >
   <a target="_blank" href="https://bookish-bliss.web.app/" className="border-2 border-pink-500 px-4 py-2 text-pink-500">Live Website</a>
  
   

   </div>

                </div>

            </div>
            
            
        </div>
    );
};

export default Projects;