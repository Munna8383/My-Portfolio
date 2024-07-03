
import Image from "next/image";
import bookish from "../../../public/images/bookish.png"
import rent from "../../../public/images/rent.png"
import journey from "../../../public/images/Screenshot 2024-07-02 211027.png"

const Projects = () => {
    return (
        <div id="projects" className="mt-20 container mx-auto px-10">
             <div className="text-center">
                <h1 className="text-3xl font-extrabold text-slate-700">Projects</h1>
            </div>

            <div className="mt-10 flex flex-col lg:flex-row items-center gap-5">
                <div  data-aos="zoom-in" className="w-full lg:w-1/2 shadow-2xl h-full  shadow-pink-900 ">

                    
                <Image className="rounded-md h-full " src={rent} alt="rent"></Image>

                </div>
                <div  data-aos="zoom-in" className="w-full lg:w-1/2 h-full space-y-3">

                    <h1 className="text-3xl font-bold text-slate-700">Rent Ease</h1>
                    <h1 className="text-xl font-bold text-slate-700">Made With: <span className="text-pink-500">HTML || CSS || Javascript || React || Firebase || JWT || NodeJS || ExpreesJS || MongoDB</span></h1>
                    <h1 className="font-bold text-slate-700">Feature: <span className="font-normal">This website is an apartment rental platform created using React, Express, NodeJS,
and MongoDB. It features a dashboard system customized for users, members, and administrators,
with varying views and access levels depending on the users role. A payment method is also
integrated into the website. Additionally, JWT (JSON Web Token) authentication is implemented
using Local Storage.</span></h1>
   
   <div>
   <a target="_blank" href="https://rent-ease-2de9a.web.app/" className="border-2 border-pink-500 px-4 py-2 text-pink-500">Live Website</a>
 
   

   </div>

                </div>

            </div>
            <div className="mt-20 flex flex-col lg:flex-row items-center gap-5">
                <div data-aos="zoom-in" className="w-full lg:w-1/2 shadow-2xl h-full  shadow-pink-900 ">

                    
                <Image className="rounded-md h-full " src={bookish} alt="rent"></Image>

                </div>
                <div data-aos="zoom-in" className="w-full lg:w-1/2 h-full space-y-3">

                    <h1 className="text-3xl font-bold text-slate-700">Bookish Bliss</h1>
                    <h1 className="text-xl font-bold text-slate-700">Made With: <span className="text-pink-500">HTML || CSS || Javascript || React || Firebase || NodeJS || ExpreesJS || MongoDB</span></h1>
                    <h1 className="font-bold text-slate-700">Feature: <span className="font-normal">I created an e-library website using React, Express, and MongoDB. It has a search
feature to help you find books easily. Users can also add, update, and delete books. Additionally,
the website allows users to borrow and return books. For better security, the website uses JWT
authorization to keep user information safe.</span></h1>
   
   <div >
   <a target="_blank" href="https://bookish-bliss.web.app/" className="border-2 border-pink-500 px-4 py-2 text-pink-500">Live Website</a>
  
   

   </div>

                </div>

            </div>
            <div className="mt-20 flex flex-col lg:flex-row items-center gap-5">
                <div  data-aos="zoom-in" className="w-full lg:w-1/2 shadow-2xl h-full  shadow-pink-900 ">

                    
                <Image className="rounded-md h-full " src={journey} alt="rent"></Image>

                </div>
                <div  data-aos="zoom-in" className="w-full lg:w-1/2 h-full space-y-3">

                    <h1 className="text-3xl font-bold text-slate-700">Journey Junction</h1>
                    <h1 className="text-xl font-bold text-slate-700">Made With: <span className="text-pink-500">HTML || CSS || Javascript || React || NodeJS || ExpreesJS || MongoDB</span></h1>
                    <h1 className="font-bold text-slate-700">Feature: <span className="font-normal">This website has login and registration authentication system using Firebase.By login in the website user can has the access to multiple features.After signing in, the user have ability to add different spot in the website and if he/she wants,then they can update and delete the spots that they added.Basically it a website which was implemented using crud operation</span></h1>
   
   <div>
   <a target="_blank" href="https://journey-junction78.netlify.app/" className="border-2 border-pink-500 px-4 py-2 text-pink-500">Live Website</a>
 
   

   </div>

                </div>

            </div>
            
            
        </div>
    );
};

export default Projects;