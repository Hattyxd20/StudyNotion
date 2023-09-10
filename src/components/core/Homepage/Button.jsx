import React from 'react'
import { Link } from 'react-router-dom'

const CTAButton = ({children,active,linkto}) => {
  return (
     <Link to={linkto}>
         <button className={`text-center text-[13px] px-6 py-3 rounded-md font-bold 
         ${active  ? "bg-yellow-50 text-black" : "bg-richblack-800 text-richblack-5"} hover:scale-95 transition-all duration-300`}>
             {children}
         </button>
     </Link>
  )
}

export default CTAButton