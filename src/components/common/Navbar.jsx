import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/Logo/Logo-Full-Light.png"
import { NavbarLinks } from '../../data/navbar-links'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {GrCart} from "react-icons/gr"
import CTAButton from '../core/Homepage/Button'
import ProfileDropDown from '../core/Auth/ProfileDropDown'
import { apiConnector } from '../../services/apiConnector'
import { categories } from '../../services/apis'
import axios from 'axios'
import {BsChevronDown} from "react-icons/bs"
import { useLocation } from 'react-router-dom'
import {RxHamburgerMenu} from "react-icons/rx"
import {AiOutlineShoppingCart} from "react-icons/ai"
import { ACCOUNT_TYPE } from '../../utils/constants'
import { setActive } from '../../slices/LinkSliderSLice'
import { motion } from 'framer-motion'
import {RxCross1} from "react-icons/rx"
import {AiFillHome} from "react-icons/ai"
import {IoIosArrowDropdown} from "react-icons/io"
import Hamburger from 'hamburger-react'
import { FcAbout } from 'react-icons/fc'


const Navbar = () => {
  
  const [title,setTitle] = useState('Home');

  const {token} = useSelector((state) => state.auth);
  const {user} = useSelector((state) => state.profile);
  const {totalItems} = useSelector((state) => state.cart);
  const location = useLocation();
  const dispatch = useDispatch();

  const [subLinks,setSubLinks] = useState([]);
  const [loading,setLoading] = useState(false)


  const [active,setActive] = useState(false)
  const [showDropDown,setShowDropDown] = useState(false)

  

  

  useEffect ( () => {
     
       const getCategories = async () => {
           try{
              setLoading(true)
              const result = await axios.get("http://localhost:4000/api/v1/course/showAllCategories")
              console.log("All Categories are here -> ",result);
              setSubLinks(result.data.data);
              setLoading(false);
           }
           catch(error){
              console.log("cannot fetch the categories")
              
           }
         
          //  setLoading(false)
          
       }
       
       getCategories();
      
  },[])



  
const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}

  return (
     <>
       <div  className={`flex items-center h-14 justify-center border-b-[1px] border-richblack-700 
       
       ${location.pathname !== "/" && "bg-richblack-800 navbar "} `} >
           <div className='flex flex-row-reverse md:flex-row items-center justify-between w-11/12 max-w-maxContent '>
                  <motion.div className='block order-1 md:order-0 md:hidden text-white font-bold' onClick={() => setActive(!active)}>
                       <Hamburger toggled={active} toggle={setActive} direction='right' size={24}/>
                  </motion.div>


                  <Link to="/">
                      <img src={logo} alt="" width={160} height={42}/>
                  </Link>

                
                 <div className='hidden lg:flex flex-row gap-6 items-center'>
                    {
                      NavbarLinks.map( (element,index) => {
                           return (
                               <div className={``} key={index}>
                                  {
                                    element.title === "Catalog" ?  (
                                        <div className = {` text-richblack-25 
                                        transition-all duration-200 cursor-pointer flex flex-row items-center gap-1 relative group`}
                                         c>
                                           <p>
                                             {element.title}
                                           </p> 
                                            
                                               <BsChevronDown />

                                             <div className='invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px] px-6 '>
                                                  

                                                <div className='absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5'>
                                                  
                                                </div>
                                                 
                                                {
                                                  loading ? (<div className='text-center'>Loading...</div>) :
                                                  subLinks?.length ? (<div>
                                                    {
                                                      subLinks.filter((item,index) => {
                                                         return item?.courses?.length > 0
                                                      }).map((item,index) => {
                                                          return (
                                                            <div key={index} className='py-4 capitalize font-medium text-md hover:bg-richblack-50
                                                            rounded-xl transition-[hover] duration-500 
                                                            cursor-pointer'>
                                                                 <Link className ='px-3 py-[20px]
                                                            ' to={`/catelog/${item.name
                                                           
                                                              .  split(" ")
                                                              .join('-')
                                                              .toLowerCase()}`}>
                                                               {item.name}
                                                            </Link>
                                                            </div>
                                                          )
                                                      })
                                                    }
                                                  </div>) : (<p>No Courses Found</p>)
                                                      
                                                 
                                                }


                                             </div>

                                        </div>

                                    )  : 
                                    (
                                    <Link to={element?.path}>
                                       <p className={` ${title === element.title && "text-yellow-25"} text-richblack-25 transition-all duration-200`}
                                       onClick={() => setTitle(element.title)}>
                                         {element.title}
                                       </p>
                                    </Link>
                                    )
                                  }
                               </div>
                           )
                      })
                    }
                 </div>

                 <div className='hidden lg:flex gap-x-4 items-center'>
                     {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
            <Link to="/dashboard/cart" className="relative">
              <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
              {totalItems > 0 && (
                <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
                  {totalItems}
                </span>
              )}
            </Link>
          )}

                      {
                        token === null && (
                              <Link to="/login">
                                  <button className='border border-richblack-700 bg-richblack-800 px-[12px] py-[8px]
                                  text-richblack-100 rounded-md'>
                                      Log In
                                  </button>
                              </Link>
                        )
                      }
                      
                      {
                        token === null && (
                              <Link to="/signup">
                                  <button className='border border-richblack-700 bg-richblack-800 px-[12px] py-[8px]
                                  text-richblack-100 rounded-md'>
                                      Sign Up
                                  </button>
                              </Link>
                        )
                      }

                      {
                        token !== null && (
                            <ProfileDropDown/>
                        )
                      }
                 </div>

           </div>
       </div>

       {
         active && (
            <div className='bg-richblack-800 py-4 fixed top-[3.5rem] left-0 h-[100vh] z-10 rounded-md
            bg-opacity-80 backdrop-blur-md'
            animate={{width:!active ? "0px" : "200px"}}
          
            transition={{duration:0.5}}>

            {
              !token && (
                  <div className='w-full'> 
                     <div className='flex flex-col items-center mt-2 gap-y-2 pb-10 border-b-2
                     border-richblack-500'>
                         <Link to={"/login"}>
                           <button  class="bg-richblack-500 px-6 py-2 border border-richblack-600
                           rounded-md bg-gradient-to-r from-richblack-700 from-10% to-pink-700 text-white
                           text-opacity-50">
                                Log In
                           </button>
                         </Link>

                        <Link to={"/signup"}>
                             <button  class="bg-richblack-500 px-9 py-2 border border-richblack-600
                             rounded-md bg-gradient-to-r from-richblack-700 from-10% to-caribbeangreen-600 text-white
                             text-opacity-50">
                                 Sign Up
                           </button>
                        </Link>
                     </div>

                      <div className='w-full flex flex-col items-center py-6 gap-y-5'>
                           <div className='flex flex-row gap-x-1 items-center text-richblack-5 font-normal
                           text-opacity-50'>
                              <AiFillHome className='font-normal'
                               size={16}
                              />
                              <div>
                                 Home
                              </div>
                           </div>

                           <div className=' text-richblack-5 font-normal
                           text-opacity-50 flex flex-col items-center'>
                              <div onClick={() => setShowDropDown(!showDropDown)} className='flex flex-row gap-x-1
                              items-center mb-4'>
                               Catalog
                              <IoIosArrowDropdown size={16}/>
                              </div>

                            
                            
                           </div>
                      </div>

                          <div className='flex flex-col 
                        
                               h-[400px] '
                               
                             
                              >
                                  {
                                      showDropDown && (
                                        subLinks.map((item,index) => {
                                            return (
                                                   <Link  key={index} className ={`py-2 border-b-2
                                                   border-richblack-400 w-full px-0
                                                   border-opacity-50
                                                   
                                                   text-richblack-5 text-center ${index === 0 && "border-t-2 border-richblack-400"}`}
                                                             to={`/catelog/${item.name
                                                           
                                                              .  split(" ")
                                                              .join('-')
                                                              .toLowerCase()}`} onClick={() => setActive(false)}>
                                                               {item.name}
                                                            </Link>
                                            )
                                        })
                                     )
                                  }
                              </div>

                          <div>
                              Hello
                          </div>
                    
                  </div>
              )
            }


                
            </div>
         )
       }

       </>
  )
}

export default Navbar