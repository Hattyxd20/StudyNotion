import React from 'react'
import { Route ,Routes} from 'react-router-dom'
import Home from './pages/Home'
import "./App.css"
import Navbar from './components/common/Navbar'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ForgotPassword from './pages/ForgotPassword'
import OpenRoute from './components/core/Auth/OpenRoute'
import UpdatePassword from './pages/UpdatePassword'
import VerifyEmail from './pages/VerifyEmail'
import About from './pages/About'
import Sidebar from './components/core/Dashboard/Sidebar'
import MyProfile from './components/core/Dashboard/MyProfile'
import ProtectedRoute from './components/core/Auth/ProtectedRoute'
import Error from './pages/Error'
import Dashboard from './pages/Dashboard'
import Settings from './components/core/Dashboard/Settings'
import EnrolledCourses from './components/core/Dashboard/EnrolledCourses'
import Cart from './components/core/Dashboard/Cart'
import { useSelector } from 'react-redux'
import { ACCOUNT_TYPE } from './utils/constants'
import AddCourse from './components/core/Dashboard/AddCourse/index'
import MyCourses from './components/core/Dashboard/MyCourses/MyCourses'
import EditCourse from './components/core/Dashboard/EditCourse'
import Catelog from './pages/Catelog'
import CourseDetails from './pages/CourseDetails'
import ViewCourse from './pages/ViewCourse'
import VideoDetails from './components/core/ViewCourse/VideoDetails'
import Instructor from './components/core/Dashboard/InstructorDashboard/Instructor'
import Contact from './pages/Contact'
import LinkSlider from './components/common/LinkSlider'
import CustomSidebar from './components/common/CustomSidebar'


const App = () => {
  const {user} = useSelector(state => state.profile)
  return (
      <div className='w-screen relative min-h-screen bg-richblack-900 flex flex-col font-inter'>
         <Navbar/>
        
         <Routes>
             <Route path='/catelog/:catalogName' element={<Catelog/>}/>
             <Route path='/courses/:courseId' element={<CourseDetails/>}/>
             <Route path="/contact" element={<Contact />} />
             <Route path="/" element={<Home/>}></Route>
             <Route path='/about' element={<About/>}></Route>
             {/* <Route path='/sidebar' element={<CustomSidebar/>}></Route> */}

          

              
               <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
        <Route
          path="forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />
        <Route
          path="update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />
        <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />

          <Route
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />
 

       <Route 
        path=''
        element={<ProtectedRoute>
            <Dashboard/>
        </ProtectedRoute>}>
            

         <Route path='/dashboard/my-profile' element={<MyProfile/>}/>
         <Route path='/dashboard/settings' element={<Settings/>}></Route>
         <Route path='/dashboard/enrolled-courses' element={<EnrolledCourses/>}></Route>
         <Route path='/dashboard/cart' element={<Cart/>}></Route>

         {user?.accountType === ACCOUNT_TYPE.INSTRUCTOR &&
               <>
               <Route path='/dashboard/instructor' element={<Instructor/>}></Route>
               <Route path='/dashboard/add-course' element={<AddCourse/>}></Route> 
               <Route path='/dashboard/my-courses' element={<MyCourses />} />
               <Route path='/dashboard/edit-course/:courseId' element={<EditCourse/>}/>
               </>
         }
           

         
       </Route>

         <Route
          element={
            <ProtectedRoute>
              <ViewCourse />
            </ProtectedRoute>
          }
        >
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route
                path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId"
                element={<VideoDetails />}
              />
            </>
          )}
        </Route>


      <Route path='*' element={<Error/>}></Route>
            
            
         </Routes>
      </div>
  )
}

export default App