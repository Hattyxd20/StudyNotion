import { toast } from "react-hot-toast"
import { profilendPoints } from "../apis"
import { apiConnector } from "../apiConnector"


const {GET_ENROLLED_COURSES,
GET_INSTRUCTOR_DATA_API} = profilendPoints



export async function getEnrolledCourses(token) {
  let id = toast.loading("loading")
  let result = []
  try {
    const response = await apiConnector(
      "GET",
      GET_ENROLLED_COURSES,
      null,
      {
        Authorization: `Bearer ${token}`,
      }
    )
    console.log(response);
   
    if (!response.data.success) {
      throw new Error(response.data.message)
    }
    result = response.data.data
  } catch (error) {
    console.log("GET_USER_ENROLLED_COURSES_API API ERROR............", error)
    toast.error("Could Not Get Enrolled Courses")
  }

  toast.dismiss(id);
  return result

}

export async function getInstructorData(token) {
  let toastId = toast.loading("Loading...");
  let result = []
  try {
    const response = await apiConnector("GET", GET_INSTRUCTOR_DATA_API, null, {
      Authorization: `Bearer ${token}`,
    })
    console.log("GET_INSTRUCTOR_DATA_API API RESPONSE............", response)
    result = response?.data?.courses
  } catch (error) {
    console.log("GET_INSTRUCTOR_DATA_API API ERROR............", error)
    toast.error("Could Not Get Instructor Data")
  }
  toast.remove(toastId)
  return result
}
