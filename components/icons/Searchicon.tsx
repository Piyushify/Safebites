import type { SVGProps } from "react";

export default function Searchicon({className}: SVGProps<SVGSVGElement>){
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
      <circle id="ser-lens" cx="11" cy="11" r="6" fillOpacity="0.24" strokeWidth="2"></circle>
      <path id="ser-handle" d="M20 20L17 17" strokeWidth="2" strokeLinecap="round"></path>
      </g>
    </svg>
    )
}
