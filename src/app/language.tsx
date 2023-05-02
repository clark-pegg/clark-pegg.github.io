"use client"

import { ReactElement, useState } from "react"

interface LanguageData {
  name: string;
  description: string;
  experience: number;
  link: string | undefined;
}

const Language: (props:LanguageData) => ReactElement = (props:LanguageData) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="py-[14px] bg-gray-700 border-[1px]">
      <button className = "font-bold text-xl mb-2 text-center" onClick = {() => {setIsActive(!isActive)}}>
        {props.name}
      </button>
      <div className = {isActive === true ?  "" : "invisible max-h-0"}>
        <b>Description:</b> {props.description}<br/>
        <b>Experience:</b> {props.experience} / 5<br/>
        {props.link ? <a href={props.link} className="text-blue-400">GitHub</a> : ""}
      </div>
    </div>
  )
}

export default Language