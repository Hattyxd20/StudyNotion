import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCourse } from '../services/operations/studentFeaturesApi'
import { useNavigate, useParams } from 'react-router-dom';
import { fetchCourseDetails } from '../services/operations/courseDetailsApi';
import GetAvgRating from '../utils/avgRating';
import ConfirmationModal from '../components/common/ConformationModal';
import { formatDate } from '../utils/formatDate';
import CourseDetailsCard from '../components/core/Course/CourseDetailsCard';
import { BiInfoCircle } from "react-icons/bi"
import { HiOutlineGlobeAlt } from "react-icons/hi"
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import Footer from '../components/common/Footer';
import CourseAccordianBar from '../components/core/Course/CourseAccordianBar';
import RatingStars from '../components/common/RatingStars';



const CourseDetails = () => {

  const {user} = useSelector(state => state.profile);
  const {token} = useSelector(state => state.auth)
  const {loading} = useSelector(state => state.course)
  const {paymentLoading} = useSelector(state => state.course)
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const {courseId} = useParams();
  

  const [response,setResponse] = useState(null);

  const  handleBuyCourse = () => {
       if(token){
           buyCourse(token,[courseId],user,navigate,dispatch);
           return ;
       }

       setConfirmationModal({
      text1: "You are not logged in!",
      text2: "Please login purchase Course",
      btn1Text: "Login",
      btn2Text: "Cancel",
      btn1Handler: () => navigate("/login"),
      btn2Handler: () => setConfirmationModal(null),
    })
    }



  
  const [isActive, setIsActive] = useState(Array(0))
  const handleActive = (id) => {
    // console.log("called", id)
    setIsActive(
      !isActive.includes(id)
        ? isActive.concat(id)
        : isActive.filter((e) => e != id)
    )
  }

      
  

  useEffect( () => {
      const getCourseDetails = async () => {
         const result = await fetchCourseDetails(courseId);
         console.log("Prininting result",result)
         setResponse(result)
      }

      getCourseDetails()

  },[courseId])

  const [averageReviewCount,setAverageReviewCount] = useState(0);
  useEffect( () => {
      const count = GetAvgRating(response?.data?.courseDetails?.ratingAndReviews);
      setAverageReviewCount(count)
  },[response])

  const [totalLectures,setTotalLectures] = useState(0);

  useEffect( () => {
      let lectures = 0;
      response?.data?.courseDetails?.courseContent?.forEach((section) => {
          lectures  += section.subSection.length || 0
          setTotalLectures(lectures)
      })
  },[response])


  const [confirmationModal,setConfirmationModal]  = useState(null);


  if(!response){
      return (
         <div className='w-[100vw] h-[100vh] grid place-items-center'>
            <div className='custom-loader'></div>
         </div>
      )
  }

  
 const {
     courseName,
     courseDescription,
     thumbnail,
     price,
     whatYouWillLearn,
     courseContent,
     ratingAndReviews,
     instructor,
     studentsEnrolled,
     createdAt


  } = response?.data?.courseDetails

  

   
  
   return (
   <>
        <div className='relative bg-richblack-800 w-full '>

        <div className='mx-auto box-content px-4 lg:w-[1260px] 2xl:relative'> 
           <div className='mx-auto min-h-[450px] max-w-maxContentTab py-8 grid justify-items-center lg:mx-0
          lg:justify-items-start lg:py-0 xl:max-w-[810px]'>
            <div className="relative block max-h-[30rem] lg:hidden">
              <div className="absolute bottom-0 left-0 h-full w-full shadow-[#161D29_0px_-64px_36px_-28px_inset]"></div>
              <img
                src={thumbnail}
                alt="course thumbnail"
                className="aspect-auto w-full"
              />
            </div>

           <div className='my-4 flex flex-col justify-center gap-4 py-5 text-lg text-richblack-5'>
           <p className='text-4xl font-bold text-richblack-5 sm:text-[42px]'>{courseName}</p>
           <p className='text-richblack-200'>{courseDescription}</p>
           <div className='text-md flex flex-wrap items-center gap-2'>
                <RatingStars Review_Count={averageReviewCount} Star_Size={24} />
               <span className='text-yellow-25'>{averageReviewCount}</span>
               <span>({ratingAndReviews.length} reviews)</span>
               <span>{studentsEnrolled.length} students enrolled</span>
           </div>

           <div>
               <p className='capitalize'>Created By {instructor.firstName} {instructor.lastName}</p>
           </div>

            <div className='flex flex-wrap gap-5 text-lg'>
                  <p className="flex items-center gap-2 ">
                  {" "}
                  <BiInfoCircle /> Created at {formatDate(createdAt)}
                </p>
                <p className="flex items-center gap-2">
                  {" "}
                  <HiOutlineGlobeAlt /> English
                </p>
            </div>

            
         <div className='flex w-full flex-col gap-4 border-y border-y-richblack-500 py-4 lg:hidden'>
              <p className='space-x-3 pb-4 text-3xl font-semibold text-richblack-5'>
                 Rs. {price}
              </p>

              <button className='cursor-pointer rounded-md bg-yellow-50 px-[20px] py-[8px] font-semibold text-richblack-900' onClick={handleBuyCourse}>
                   Buy Now
              </button>

              <button className='cursor-pointer rounded-md bg-richblack-800 px-[20px] py-[8px] font-semibold text-richblack-5'
              
             >
                   Add to Cart
              </button>
         </div>   

      </div>
          <div className="right-[1rem] top-[60px] mx-auto hidden min-h-[600px] w-1/3 max-w-[410px] translate-y-24 md:translate-y-0 lg:absolute  lg:block">
            <CourseDetailsCard
              course={response?.data?.courseDetails}
              setConfirmationModal={setConfirmationModal}
              handleBuyCourse={handleBuyCourse}
            />
          </div>

           </div>
  
        </div>

          

        </div>

        <div className='mx-auto box-content px-4 text-richblack-5 lg:w-[1260px]'>
             <div className='mx-auto max-w-maxContentTab lg:mx-0 xl:max-w-[810px]'>
                  <div className='my-8 border border-richblack-600 p-8'>
                     <p className="text-3xl font-semibold">What you'll learn</p>
                      <div className='mt-5'>
                          <ReactMarkdown>{whatYouWillLearn}</ReactMarkdown>
                      </div>
                  </div>
             </div>
             <div className='max-w-[810px]'>
                <div className='flex flex-col gap-3'>
                   <p className='text-[28px] font-semibold'>Coure Content</p>
                   <div className='flex flex-wrap justify-between gap-2s'>
                       <div className='flex gap-2'>
                            <span>{courseContent.length} section(s)</span>
                            <span>{totalLectures} lecture(s)</span>
                            <span>{response?.data?.totalDuration}</span>
                       </div>

                       <div>
                           <button className='text-yellow-25'
                           onClick={() => setIsActive([])}>
                              Collapse all lectures
                           </button>
                       </div>
                   </div>
                </div>

                <div className='py-4'>
                     {
                         courseContent.map((course,index) => {
                             return (
                                <CourseAccordianBar course={course}
                                 key={index}
                                 isActive={isActive}
                                 handleActive={handleActive}
                                />
                             )
                         })
                     }
                </div>

                <div className='w-full overflow-hidden mt-6 flex flex-col gap-y-4 px-1 pb-24'>
                     <h1 className='text-richblack-5 text-3xl font-semibold'>Author</h1>
                     <div className='flex flex-row gap-x-5 items-center'>
                          <div className=''>
                             <img className='h-14 w-14 rounded-full object-fit' src={
                              instructor.image ? instructor.image : `https://api.dicebear.com/5.x/initials/svg?seed=${instructor.firstName} ${instructor.lastName}`
                             } alt="Author" />
                          </div> 
                          <p className='text-lg text-richblack-5 capitalize tracking-wide'>{instructor.firstName} {instructor.lastName}</p>
                     </div>
                </div>
             </div>
        </div>

        <Footer/>
        {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
   
       

   
   </>
   )
  


 
   
  }
 

export default CourseDetails