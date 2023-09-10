import React from 'react'
import { Link } from 'react-router-dom'
import {FaArrowRight} from 'react-icons/fa'
import HighLightText from '../components/core/Homepage/HighLightText'
import CTAButton from '../components/core/Homepage/Button'
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from '../components/core/Homepage/CodeBlocks'
import TimeLineSection from '../components/core/Homepage/TimeLineSection'
import LearningLanguageSection from '../components/core/Homepage/LearningLanguageSection'
import InstructorSection from '../components/core/Homepage/InstructorSection'
import ExploreMore from '../components/core/Homepage/ExploreMore'
import Footer from '../components/common/Footer'
import ReviewSlider from '../components/common/ReviewSlider'

const Home = () => {

  
  return (
     <div>
        {/* section1 */}
        <div className='relative mx-auto flex flex-col  w-11/12 max-w-maxContent items-center text-white justify-between group'>
            <Link to="/signup">
                <div className='mt-16 p-1 rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-300 hover:scale-95 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] hover:drop-shadow-none">'>
                    <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[4px] group-hover:bg-richblack-900'>
                        <p>Become an Instructor</p>
                        <FaArrowRight/>
                    </div>
                </div>
            </Link>

            <div className='text-4xl font-semibold mt-7 w-[80%] text-center lg:w-fit'>
                 Empower Your Future with 
                 <HighLightText text={"Coding Skills"}/>
            </div>

            <div className= 'w-[90%]  text-center text-lg font-bold text-richblack-300 mt-4'>
                With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. 
            </div>

            <div className='flex flex-row gap-7 mt-8'>
                  <CTAButton active={true} linkto={"/signup"}>
                       Learn More
                  </CTAButton>

                  <CTAButton active={false} linkto={"/login"}>
                      Book a demo
                  </CTAButton>
            </div>


             <div className='w-[75%] md:w-full mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200'>
                    <video autoPlay loop muted className='rounded-sm shadow-[20px_20px_rgba(255,255,255)]'>
                         <source src={Banner} type="video/mp4"/>
                    </video>
             </div>
                
          

            <div className='w-full flex flex-col  gap-[15px] lg:gap-0'>
                <CodeBlocks position={"lg:flex-row"} 
                
                heading={
                    <div className='text-4xl font-semibold '>
                        Unlock Your
                        <HighLightText text={"coding potential"}/>
                        with our online courses
                    </div>
                }

                subHeading={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}

                ctabtn1={
                    {
                       btnText:"try it yourself",
                       linkto:"/signup",
                       active:true 
                    }
                }

                ctabtn2={
                    {
                        btnText:"learn more",
                        linkto:"/login",
                        active:false
                    }
                }

               codeColor={"text-yellow-25"}
               codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
                backgroundGradient={<div className="codeblock1 absolute"></div>}        


                />
                <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="w-[100%] text-4xl font-semibold lg:w-[65%]">
                Start
                <HighLightText text={"coding in seconds"} />
              </div>
            }
            subHeading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              linkto: "/signup",
              active: false,
            }}
            codeColor={"text-white"}
            codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
             backgroundGradient={<div className="codeblock2 absolute"></div>}
           
          />

           <ExploreMore/>
        
        </div>
                
            </div>






           
            

        </div>

        {/* section2 */}
        
        <div className='bg-pure-greys-5 text-richblack-700 w-full'>
              <div className='homepageBg h-[333px] flex justify-center items-center'>
                      <div className='flex flex-row gap-4 mt-1 lg:mt-40'>
                             <CTAButton active={true} linkto={"/signup"}>
                                   <div className='flex flex-row gap-3 py-1 px-3 text-[16px] items-center'>
                                        Explore Full Catelog
                                        <FaArrowRight/>
                                   </div>
                                   
                             </CTAButton>

                            <CTAButton active={false} linkto={"/signup"}>
                                  <div className='py-1 px-2'>
                                     Learn More
                                  </div>
                            </CTAButton>
                      </div>
              </div>
              
              <div className='w-11/12 max-w-maxContent mx-auto relative flex flex-col justify-between pb-[100px]'>
                     <div className='flex flex-col lg:flex-row gap-5  lg:gap-11  w-full mt-2 lg:mt-[95px] '>
                          <div className='text-4xl font-semibold  w-full lg:w-[47%] '>
                              Get the skills you need for a 
                             
                              <HighLightText text={"job that is in demand"}/>
                          </div>

                          <div className='flex flex-col gap-6 w-full  lg:w-[40%] '>
                            <div className='text-[16px]'>
                              The Modern StudyNotion is the dictates is own term. Today,to be
                              a competetive specialist requires more than professional skills
                            </div>

                             <CTAButton active={true} linkto={"/signup"}>
                                    Learn More
                             </CTAButton>
                          </div>
                         
                          
                     </div>

                     <TimeLineSection/>
                     <LearningLanguageSection/>
              </div>
        </div>
       

        {/* section3 */}
      
        <div className='w-11/12 mx-auto max-w-maxContent flex flex-col  justify-between gap-8 bg-richblack-900 text-white
         '>
              <InstructorSection/>

              <h2 className='text-4xl font-semibold mt-10 text-center'>
                   Reviews from other learners
              </h2>

               <ReviewSlider/>
        </div>

        
        <Footer/>
        

     </div>
  )
}

export default Home