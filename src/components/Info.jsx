import { useState } from "react";
import CardWrapper from "./CardWrapper";
import AboutMe from "./AboutMe";
import Experiences from "./Experiences";
import Recommended from "./Recommended";

function Info() {
  const [activeBtn, setActiveBtn] = useState("about");
  const listData = [
    {
      title: "About Me",
      id: "about",
      p1: "Hello! I'm Noor, front-end web developer. I love coding and learning new tech stack and this journey is very exciting!",
      p2: "I was born and raised in Uttar Pradesh, India. And been living here since then. lorem15Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab quis quae eaque eius porro nobis"
    },
    {
      title: "Experiences",
      id: "experiences",
    },
    {
      title: "Recommended",
      id: "recommended",
    },
  ];

  
  return (
    <CardWrapper className="w-1/3">
      <div>
        <ul className="flex bg-[#171717] p-3 rounded-full  justify-between items-center">

            {/* mapping over all list items */}
          {listData.map(({ id, title }) => (
            <li
              className={`text-gray-300 select-none text-xs lg:text-md xl:text-lg rounded-full text-nowrap 2xl:px-8 xl:px-4 px-3 py-2 tracking-wide xl:tracking-wider 2xl:tracking-widest cursor-pointer hover:bg-[#2f323c] transition-all ${activeBtn === id ? "bg-[#2f323c] shadow-[0px_20px_100px_15px_black]" : "bg-[#1d1d1d]"}`}
              onClick={()=>setActiveBtn(id)}
              key={id}
            >
              {title}
            </li>
          ))}
        </ul>

        {/* conditional rendering based on which button is selected */}
        {
            activeBtn === "about" ? <AboutMe/> : 
            activeBtn === "experiences" ? <Experiences/> : <Recommended/>
        }
        
      </div>
    </CardWrapper>
  );
}

export default Info;
