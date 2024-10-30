"use client"

import { ArrButtonProps } from "./types";
import { useEffect, useState } from "react";

const ArrButton: React.FC<ArrButtonProps> = ({icon, isActive, onClick}) => {
  
  const [activeClass, setActiveClass] = useState("");

  useEffect(() => {
    if(isActive) setActiveClass("bg-white rounded-md p-1 shadow-md");
    else setActiveClass("p-1 rounded-md bg-transparent");
  }, [isActive])
  
  return (
    <button className={`${activeClass} transition-all duration-300 hover:shadow-md hover:bg-white`} onClick={onClick}>
      <img src={`/icon/${icon}`} alt="" />
    </button>
  )
}

export default ArrButton;