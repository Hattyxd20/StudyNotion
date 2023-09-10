import React from 'react'
import ContactUsForm from '../ContactPage/ContactUsForm'

const ContactFormSection = () => {
  return (
      <div>
         <h1 className='text-4xl font-semibold text-center'>Get in Touch</h1>
         <p className='text-center text-richblack-300 mt-3'>We,d love to here for you,Please fill out the form</p>
         <div className='mt-12 '>
            <ContactUsForm/>
         </div>
      </div>
  )
}

export default ContactFormSection