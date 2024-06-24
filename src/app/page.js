"use client"
import Homepage from "@/Homepage/Homepage";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import AnimatedCursor from "react-animated-cursor"
import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {

  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, [])
  return (
    <main className="bg-gradient-to-r from-blue-200 via-blue-100 to-blue-300 min-h-screen">
      <AnimatedCursor innerSize={15}
      outerSize={6}  color='127, 11, 212'/>
      <Navbar></Navbar>
      <Homepage></Homepage>
   
    </main>
  );
}
