import { useEffect, useState } from "react"
import { VscAdd } from "react-icons/vsc"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { fetchInstructorCourses } from "../../../services/operations/courseDetailsAPI"
import IconBtn from "../../Common/IconBtn"
import CoursesTable from "./InstructorCourses/CoursesTable"
import convertSecondsToDuration from "../../../utils/duration"


export default function MyCourses() {
  const { token } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const [courses, setCourses] = useState([])
  const [loading,setLoading] = useState(false)

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true)
      const result = await fetchInstructorCourses(token)
      if (result) {
        for(let counter =0 ; counter < result?.length ; counter++) {
          let totalDurationInSeconds = 0
          result.courseContent?.forEach((sec) => {
             sec?.subSection?.forEach((sub) => {
                let duration = Number.parseInt(sub?.timeDuration)
                console.log("duration here ->",duration)
                totalDurationInSeconds += duration
             })
         })

         result[counter].time = (convertSecondsToDuration(totalDurationInSeconds))
       }


          setCourses(result)
       
      }

      
        console.log("result here -> ",result)

      setLoading(false)
    }
    fetchCourses()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  if(loading){
     return (
         <div className="w-full h-[70vh] flex justify-center items-center ">
             <div className="spinner"></div>
         </div>
     )
  }
 

  return (
    <div>
      <div className="mb-14 flex items-center justify-between">
        <h1 className="text-3xl font-medium text-richblack-5">My Courses</h1>
        <IconBtn
          text="Add Course"
          onclick={() => navigate("/dashboard/add-course")}
        >
          <VscAdd />
        </IconBtn>
      </div>
      {courses && <CoursesTable courses={courses} setCourses={setCourses} />}
    </div>
  )
}
