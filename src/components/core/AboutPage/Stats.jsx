import React from 'react'

const StatsComponent = () => {

  const stas = [
       {
         count:'5k',
         label:"Active Students"
       },

       {
         count:'10+',
         label:"Mentors"
       },

       {
         count:'200+',
         label:"Courses"
       },

       {
         count:'50+',
         label:"Awards"
       }

     
  ]
  return ( 
     <section className='bg-richblack-700 py-12 mt-6'>
        
            <div className ='w-11/12 max-w-maxContent mx-auto grid grid-cols-2 lg:grid-cols-4 gap-y-20 lg:gap-y-0 '>
                {
                  stas.map( (item,index) => {
                      return (
                         <div key={index} className='text-richblack-5 px-20 flex flex-col text-center gap-1'>
                            <h1 className="font-bold text-4xl ">{item.count}</h1>
                            <h2 className='font-semibold text-[16px] text-richblack-500'>{item.label}</h2>
                         </div>
                      )
                  })
                }
            </div>
        
     </section>
  )
}

export default StatsComponent