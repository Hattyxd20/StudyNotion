import React from 'react'
import HighLightText from './HighLightText'
import KnowYourProgress from "../../../assets/Images/Know_your_progress.png"
import compareWithOthers from "../../../assets/Images/Compare_with_others.png"
import planYourLessons  from "../../../assets/Images/Plan_your_lessons.png"
import CTAButton from './Button'


const LearningLanguageSection = () => {
  return (
      <div className='mt-[130px] mb-24'>
          <div className='flex flex-col gap-5 '>
               <div className='text-4xl font-semibold text-center'>
                  Your swiss knife for
                  <HighLightText  text={"learning any language"}/>
               </div>

               <div className='mx-auto text-center text-richblack-600 text-base font-medium mt-3 w-[70%]'>
                    Using spin making learning multiple languages easy. with 20+
                    languages realistic voice-over, progress tracking, custom schedule
                    and more.
               </div>

               <div className='flex flex-col lg:flex-row items-center justify-center mt-5 lg:mt-0' >
                     <img src={KnowYourProgress} alt="KnowYourProgress" className='object-contain lg:-mr-32'/>
                     <img src={compareWithOthers} alt="compareWithOthers" className=' lg:-mb-10 lg:-mt-0 -mt-12' />
                     <img src={planYourLessons} alt="planYourLessons"  className='object-contain  lg:-ml-36 lg:-mt-5 -mt-16' />
               </div>

                <div className='flex justify-center lg:mb-20 mb-8 -mt-5'> 
                       <CTAButton active={true} linkto={"/signup"}>
                           Learn More
                       </CTAButton>
                </div>
          </div>
      </div>
  )
}

export default LearningLanguageSection