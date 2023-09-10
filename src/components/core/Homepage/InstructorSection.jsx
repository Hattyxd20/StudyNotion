import React from 'react'
import Instructor from "../../../assets/Images/Instructor.png"
import HighLightText from './HighLightText'
import CTAButton from './Button'
import { FaArrowRight } from 'react-icons/fa'

const InstructorSection = () => {
  return (
       <div className='flex flex-row gap-20 items-center mt-16'>
              <div className='w-[50%]'>
                  <img src={Instructor} alt="" className='shadow-white shadow-[-20px_-20px_0_0]' />
              </div>

              <div className='w-[50%] flex flex-col gap-5'>
                    <h1 className='text-4xl font-semibold w-[40%]'>
                        Become an
                        <HighLightText text={"Instructor"}/>
                    </h1>

                    <p  className=' font-medium text-[16px] w-[80%%] text-richblack-300 '>
                        Instructors from around the world teach millions of students on
                        StudyNotion. We provide the tools and skills to teach what you
                        love.
                    </p>

                    <CTAButton active={true} linkto={"/signup"}>
                        <div className='flex flex-row items-center gap-2'>
                               Start Teaching Today
                               <FaArrowRight/>
                        </div>
                    </CTAButton>

                    
              </div>
       </div>
  )
}

export default InstructorSection