import React from 'react';
import pic from "../../../public/images/graduation.png"
import Image from 'next/image';

const Education = () => {
    return (
        <div className="mt-20 container mx-auto px-10 overflow-x-hidden">
                 {/* <div className="text-center">
                <h1 className="text-3xl font-extrabold">Education</h1>
            </div>

            <div className='mt-10 flex flex-col-reverse md:flex-row items-center gap-5'>

                <div className='w-full md:w-1/2 flex-1 space-y-10 text-center md:text-left '>
                <h1 className='text-2xl font-bold text-slate-700'>Bsc in</h1>
                    <h1  className="text-2xl font-extrabold text-pink-500">Computer Science And Engineering</h1>
                    <h1 className='text-2xl font-bold text-slate-700'>Leading University,Sylhet,Bangladesh</h1>
                    <h1 className='text-2xl font-bold text-slate-700'>2018-2021</h1>

                </div>

                <div className='w-full md:w-1/2'>

                    <Image className='h-[400px] w-[300px]'  src={pic} alt='graduation'></Image>

                </div>
                
            </div> */}
             <div className="text-center">
                <h1 className="text-3xl font-extrabold text-slate-700">Education</h1>
            </div>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mt-10 text-slate-700">
  <li data-aos="fade-down-right">
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-start mb-10 md:text-end">
      <time className="font-extrabold">2018-2021</time>
      <div className="text-xl font-bold text-pink-500">Computer Science And Engineering</div>
      <p className='text-lg  font-extrabold'>Leading University</p>
      <p className='text-lg font-extrabold'>Sylhet,Bangladesh</p>
     
    </div>
    <hr />
  </li>
  <li data-aos="fade-up-left">
    <hr />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-end mb-10 h-20">
    <time className="font-extrabold">2017</time>
      <div className="text-xl font-bold text-pink-500">Higher Secondary Certificate</div>
      <p className='text-lg  font-extrabold'>Scholarshome</p>
      <p className='text-lg font-extrabold'>Sylhet,Bangladesh</p>
    </div>
    <hr />
  </li>
  <li data-aos="fade-down-right">
    <hr />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-start mb-10 md:text-end ">
    <time className="font-extrabold">2015</time>
      <div className="text-xl font-bold text-pink-500">Secondary School Certificate</div>
      <p className='text-lg  font-extrabold'>Scholarshome</p>
      <p className='text-lg font-extrabold'>Sylhet,Bangladesh</p>
    </div>
    <hr />
  </li>
 
</ul>
            
        </div>
    );
};

export default Education;