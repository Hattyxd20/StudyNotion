import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/AuthSlice"
import profileReducer from '../slices/ProfileSlice'
import cartReducer from "../slices/CartSlice"
import courseReducer from "../slices/CourseSlice"
import viewCourseReducer from "../slices/ViewCourseSlice"
import LinkReducer from "../slices/LinkSliderSLice"


const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  course: courseReducer,
  cart: cartReducer,
  viewCourse: viewCourseReducer,
  Link:LinkReducer
 
  
})

export default rootReducer