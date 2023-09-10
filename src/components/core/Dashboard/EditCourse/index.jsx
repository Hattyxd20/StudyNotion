import React from 'react'
import RenderSteps from '../AddCourse/RenderSteps'
import { useDispatch, useSelector } from 'react-redux'
import { setEditCourse,setCourse,setStep} from '../../../../slices/CourseSlice'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import { getFullDetailsOfCourse } from '../../../../services/operations/courseDetailsApi'

const EditCourse = () => {


  const location = useLocation();
  const {course} = useSelector(state => state.course);
  const dispatch = useDispatch();
  const [loading,setLoading] = useState(false)
  const courseId = location.pathname.split('/').at(-1);
  const {token} = useSelector(state => state.auth)



  useEffect( () => {
       dispatch(setStep(1))
  },[])

  
  useEffect( () => {
     
     const populateCourseDetails = async () => {
        setLoading(true);
        const result = await getFullDetailsOfCourse(courseId,token);
        if(result?.courseDetails){
            dispatch(setEditCourse(true));
            dispatch(setCourse(result.courseDetails))
        }

         setLoading(false)
     }

     populateCourseDetails();

      
  },[])

  if(loading){
     return (
        <div className='custom-loader mx-auto mt-[20%]  '>
           
        </div>
     )
  }
  return (
      <div>
           <h1 className='text-3xl font-medium text-richblack-5 '>Edit Course</h1>
           <div className='mt-[4rem] max-w-[60%] mx-auto '>
              {course ? (<RenderSteps/>): (<p>Course Not Found</p>)}
           </div>
      </div>
  )
}

export default EditCourse