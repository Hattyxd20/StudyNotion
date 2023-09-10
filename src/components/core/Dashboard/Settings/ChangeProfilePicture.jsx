import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { FiUpload } from 'react-icons/fi'
import IconBtn from '../../../common/Iconbtn'
import { updateDisplayPicture } from '../../../../services/operations/settingsApi'


const ChangeProfilePicture = () => {
    const { token } = useSelector((state) => state.auth)
    const { user } = useSelector((state) => state.profile)
    const dispatch = useDispatch()

    const fileInputRef = useRef(null);

    function handleClick(){
         fileInputRef.current.click();
    }
   
    const [previewSource,setPreviewSource] = useState(null);
    const [imageFile,setImageFile] = useState(null);
    const [loading,setLoading] = useState(false);
    

    function handleFileChange(e){
         const file = e.target.files[0];
         console.log(file)
         if(file){
            setImageFile(file);
            previewFile(file)
         }
    }

    function previewFile(file){
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file)
        fileReader.addEventListener("loadend", () => {
             setPreviewSource(fileReader.result);
        })
    }

    const handleFileUpload = () => {
    try {
      console.log("uploading...")
      setLoading(true)
      const formData = new FormData()
      formData.append("displayPicture", imageFile)
      // console.log("formdata", formData)
      dispatch(updateDisplayPicture(token, formData)).then(() => {
        setLoading(false)
      })
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
    }
  }

  

  return (  
     <div className='w-full rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12 text-richblack-5'>
          <div className='flex flex-row gap-x-4 change-picture'>
          
              <img className="aspect-square rounded-full w-[78px] object-cover"src={previewSource || user?.image} alt={`profile-${user.firstName}`} />

              <div className='space-y-2'>
                  <p>Change Profile Picture</p>
                  <div className='flex flex-row gap-3'>
                       <input type='file'
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className='hidden'
                        accept='image/png, image/gif, image/jpeg'
                       />

                       <button onClick={handleClick}
                       disabled={loading}
                       className='cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50'>
                            Select
                       </button>

                       <IconBtn text={loading ? "Uploading..." : "Upload"}
                       handeler={handleFileUpload}>
                            {
                              !loading && <FiUpload/>
                            }
                       </IconBtn>
 
                        
                  </div>
                  
              </div>
           
          </div>
     </div>
  )
}

export default ChangeProfilePicture