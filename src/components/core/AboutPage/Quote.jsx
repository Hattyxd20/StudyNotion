import React from 'react'
import HighLightText from '../Homepage/HighLightText'

const Quote = () => {
  return (
     <div className=' mx-auto py-5 pb-20 mt-32 max-w-maxContent '>
        <div className='text-xl md:text-4xl text-center max-w-[95%] text-richblack-5 font-bold'>
           
        We are passionate about revolutiionizing the way we learn.
        Our Innovative platform <HighLightText text={"combines technology"}/>,{" "}
          <span className="bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text font-bold">
            {" "}
            expertise
            {" "}
        </span>
       ,and community to create an
        {" "}
        <span className="bg-gradient-to-b from-[#E65C00] to-[#F9D423] text-transparent bg-clip-text font-bold">unparalleled educational experience</span>
        </div>
      
     </div>
  )
}

export default Quote