import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Education from "@/components/Education/Education";
import Footer from "@/components/Footer/Footer";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";


const Homepage = () => {
    return (
        <div>

           <div >
           <About></About>
           </div>
           <div>
            <Skills></Skills>
           </div>
           <div>
            <Projects></Projects>
           </div>
           <div>
            <Education></Education>
           </div>
           <div>
            <Contact></Contact>
           </div>
           <div>
            <Footer></Footer>
           </div>
            
        </div>
    );
};

export default Homepage;