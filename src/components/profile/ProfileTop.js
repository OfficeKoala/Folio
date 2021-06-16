import React, { useEffect } from "react";
import ProfileImg from "../../assets/2.jpeg"
import GetAppIcon from '@material-ui/icons/GetApp';
import { Button } from "@material-ui/core";
import Typewriter from 'typewriter-effect/dist/core';

const ProfileTop = () => {
useEffect(()=>{

  let typingMan = new Typewriter(document.getElementById("typewriter"), {
    strings: ['Welcome', 'To my portfolio'],
    autoStart: true,
  });

  typingMan
    .typeString("Hi There I'm Vicky Yadav")
    .pauseFor(100)
    .start();
},[])

  return (<figure class="rounded-sm p-2 ">
    <img class="w-64 mb-10 h-64 p-3 transition duration-500 ease-in-out  hover:bg-black-500 transform hover:-translate-y-1 hover:scale-110 ... rounded-full  mx-auto" style={{ objectFit: "cover",border:'5px solid var(--themeColor)' }} src={ProfileImg} alt="ProfileImage" />
    <div style={{ backgroundColor: "var(--themeColor)", backgroundImage: "linear-gradient(to right,var(--themeColor), #2a0845);"}} class="rounded-xl p-12 text-center space-y-4">
      <blockquote>
        <p id="typewriter" style={{ color: "white", fontWeight: "bold",fontSize:"18px" }} >
          </p>
          <p class="mt-3" style={{ color: "white"}} >Full stack development engineer with 2.5 years of extensive experience moulding a passion for delivering exceptional results in diverse range of industries. Full lifecycle solutions including design, development, implementation and testing of back-end, front-end, system architecture. Thriving under pressure and managing complex projects with enthusiasm and creativity.</p>
      </blockquote>
      <figcaption class="font-medium">
        <div style={{ color: "white", fontWeight: "bold" }} class="font-semibold p-2 ">
          
    </div>
        <div style={{ color: "white", fontWeight: "bold" }}>
          FullStack Engineer (MERN), India
        </div>
        <Button className="animate-bounce" style={{ fontSize: "12px", marginTop: "15px", background: "white", color: "black" }}>Download Resume<GetAppIcon /></Button>
      </figcaption>
    </div>

  </figure>)
}

export default ProfileTop