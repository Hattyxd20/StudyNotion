import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { setStep } from '../../../../../slices/CourseSlice'
import IconBtn from '../../../../common/Iconbtn'
import { toast } from 'react-hot-toast'

import { COURSE_STATUS } from '../../../../../utils/constants'
import { useEffect } from 'react'
import { getValue } from '@testing-library/user-event/dist/utils'
import { resetCourseState } from '../../../../../slices/CourseSlice'
import { useNavigate } from 'react-router-dom'
import { editCourseDetails } from '../../../../../services/operations/courseDetailsApi'

const PublishCourse = () => {

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState:{errors}
  } = useForm()
  const  {course} = useSelector(state => state.course);
  const {token} = useSelector(state => state.auth);
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate();

  const dispatch = useDispatch();


  useEffect( () => {
      if(course.status === COURSE_STATUS.PUBLISHED){
           setValue('public',true)
      }
  })

  const goToCourses = () => {
        dispatch(resetCourseState());
        navigate("/dashboard/my-courses")

  }

  async function handleCoursePublish(data){
      if(course?.status === COURSE_STATUS.PUBLISHED  &&  getValues('public') === true || course?.status === COURSE_STATUS.DRAFT && 
      getValues("public") === false){
             goToCourses();
             return ;
      }

      const formData = new FormData();
      formData.append('courseId',course._id)
      const courseStatus = getValues("public") ? COURSE_STATUS.PUBLISHED : COURSE_STATUS.DRAFT
      formData.append('status',courseStatus)

      setLoading(true);
      const result = await editCourseDetails(formData,token);
      if(result){
          goToCourses();
      }

      setLoading(false)
       
  }

  const onsubmit = (data) => {
      handleCoursePublish(data);
  }
    

 


  return (
      <div className='rounded-md border-[1px] bg-richblack-800 border-richblack-700 p-6'>
          <p className='font-semibold text-2xl text-richblack-5'>Publish Course</p>
          <form action="" onSubmit={handleSubmit(onsubmit)}>
               <div className='flex flex-row  items-center gap-x-2 mt-8 '>
                   <label className='text-lg text-richblack-400' htmlFor="public">Make this course as public</label>
                   <input
                   
                    type='checkbox'
                    id="public"
                    {...register('public')}
                    className='rounded h-4 w-4 -order-1 '

                   />
               </div>

               <div className='flex flex-row gap-x-3 justify-end mt-7 items-end '>
                    <button type='button' onClick={() => dispatch(setStep(2))} className='rounded-md bg-richblack-300 px-5 py-2 
                    text-richblack-800 font-semibold'>
                        Back
                    </button>

                    <IconBtn disabled={loading} text="Save Changes"/>
               </div>
          </form>
      </div>
  )
}

export default PublishCourse