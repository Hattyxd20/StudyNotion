import React from 'react'
import { useSelector } from 'react-redux'

const LinkSlider = () => { 
  const {active} = useSelector(state => state.Link)
  const {token} = useSelector(state => state.auth)
  return (
     <div className='w-[200px] bg-richblack-900 py-3 px-4 transition-all duration-400 h-[100vh] overflow-hidden
     absolute top-[80px] left-0'>
         {
            active && (
              <div>
                 {
                    token ? (
                     <div>
                       
                     </div>
                    ):(<div>
                        
                    </div>)
                 }
              </div>
            )
         }
     </div>
  )
}

export default LinkSlider