import React, { useEffect, useState } from "react";

export default function Scrollbar() {
    const [scrollTop,setScrollTop] = useState(0);

    const onScroll = () =>{
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        const scrolled = ((winScroll / height) * 100) ;
        setScrollTop(scrolled) 
        console.log(scrolled)
    }
    useEffect(()=>{
        window.addEventListener("scroll",onScroll)
        return ()=>{window.removeEventListener("scroll",onscroll)}
    },[])
  return (
    // <div className="absolute right-[5px]">
    //   <div className=" fixed h-[110dvh] w-[32px] bg-green-400"></div>
    //   <div className=""></div>
    // </div>

    <div className=""> 
      <div className="fixed right-0 top-0 h-[210vh] w-[8px] bg-white">
      <div className="fixed top-0 w-[8px] bg-green-400" style={{height:`${scrollTop}%`}}></div>
      </div>
    </div>
  );
}
