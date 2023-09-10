import React, { useEffect, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/scrollbar"

// import "../../.."
// Import required modules
import { FreeMode, Pagination ,Autoplay,Scrollbar,A11y} from "swiper/modules"

// import { getAllCourses } from "../../services/operations/courseDetailsAPI"
import CourseCard from "./CourseCard"


const CourseSlider = ({ Courses })  => {

  
  console.log("inside CourseSlide",Courses)
  return (
    <>
      {Courses?.length ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={25}
          loop={true}
          modules={[FreeMode, Pagination]}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
          }}
          className="max-h-[30rem]"
        >
          {Courses?.map((course, i) => (
            <SwiperSlide key={i}>
              <CourseCard course={course} Height={"h-[250px]"} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-xl text-richblack-5">No Course Found</p>
      )}
    </>
  )
}

export default CourseSlider
