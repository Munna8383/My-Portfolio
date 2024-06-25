import Marquee from "react-fast-marquee";
import html from "../../../public/images/html.png"
import css from "../../../public/images/css.png"
import js from "../../../public/images/js.png"
import github from "../../../public/images/github.png"
import react from "../../../public/images/react.png"
import nodejs from "../../../public/images/node.png"
import mongodb from "../../../public/images/mongodb.png"
import tail from "../../../public/images/tail.png"
import Image from "next/image";

const Skills = () => {
    return (
        <div className="mt-20 container mx-auto px-10">
            <div className="text-center">
                <h1 className="text-3xl font-extrabold text-slate-700">Skills</h1>
            </div>

            <div className="mt-10">
            <Marquee>
                <div >
                    <Image className="h-32 w-40" src={html} alt="html"/>
                </div>
                <div >
                    <Image className="h-32 w-40 ml-4" src={css} alt="css"/>
                </div>
                <div >
                    <Image className="h-28 w-36 ml-4" src={tail} alt="css"/>
                </div>
                <div>
                    <Image  className="h-28 w-36 ml-4" src={js} alt="js"/>
                </div>
                <div>
                    <Image  className="h-28 w-36 ml-4" src={react} alt="js"/>
                </div>
                <div >
                    <Image className="h-28 w-36 ml-4" src={github} alt="github"/>
                </div>
                <div >
                    <Image className="h-28 w-40 ml-4" src={nodejs} alt="node"/>
                </div>
                <div >
                    <Image className="h-28 w-40 ml-4" src={mongodb} alt="mongodb"/>
                </div>
   
  </Marquee>

            </div>
            
        </div>
    );
};

export default Skills;