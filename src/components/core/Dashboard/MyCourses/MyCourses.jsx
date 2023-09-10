import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchInstructorCourses } from '../../../../services/operations/courseDetailsApi'
import IconBtn from '../../../common/Iconbtn'
import {VscAdd} from "react-icons/vsc"
import { useSelector } from 'react-redux'
import CourseTable from '../InstructorCourses/CourseTable'
import { toast } from 'react-hot-toast'
import { convertSecondsToDuration } from '../../../../utils/SecondsToDuration'


const MyCourses = () => {

    
     const { token } = useSelector((state) => state.auth)
     const navigate = useNavigate()
     const [courses, setCourses] = useState([])
     const [loading,setLoading] = useState(false)

     useEffect(() => {
       const fetchCourses = async () => {
       setLoading(true)
       const result = await fetchInstructorCourses(token)

       if(result){
          for(let i=0 ; i<result.length ; i++){
               let totalDurationInSeconds = 0
               result[i].courseContent.forEach((section) => {
                   section.subSection.forEach((sub) => {
                      totalDurationInSeconds += parseInt(sub?.timeDuration) 
                   })
               })

               result[i].totalDuration = convertSecondsToDuration(totalDurationInSeconds)
          }

           console.log("result here insider",result)
           setCourses(result)
           setLoading(false)
       }
       
       
     
       
      
    }
    fetchCourses()
   
  }, [])

  
   

  return (
     <div className='w-full'>
        <div className='mb-14 flex items-center justify-between'>
             <h1 className='text-3xl font-semibold text-richblack-5'>My Courses</h1>
             <IconBtn
              text={"Add Course"}
              handeler={() => navigate("/dashboard/add-course")}
             > 
               <VscAdd />
             </IconBtn>
        </div>
      

        {courses && <CourseTable courses={courses} setCourses={setCourses}/>}
     </div>
  )
}

export default MyCourses