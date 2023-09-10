import { settingsendPoints } from "../apis"
import { apiConnector } from "../apiConnector"
import { toast } from "react-hot-toast"
import { setUser } from "../../slices/ProfileSlice"
import { logOut } from "./authApi"


const {UPDATE_PROFILE_API,CHANGE_PASSWORD_API,DELETE_ACCOUNT_API,UPDATE_DISPLAY_PICTURE} = settingsendPoints


export function updateProfile(token, formData) {
  console.log(token)
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("PUT", UPDATE_PROFILE_API, formData, {
        Authorization: `Bearer ${token}`,
      })
      console.log("UPDATE_PROFILE_API API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      const userImage = response?.data.updatedUserDetails?.image
        ? response.data.updatedUserDetails.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.updatedUserDetails.firstName} ${response.data.updatedUserDetails.lastName}`
      dispatch(
        setUser({ ...response.data.updatedUserDetails, image: userImage })
      )
      toast.success("Profile Updated Successfully")
    } catch (error) {
      console.log("UPDATE_PROFILE_API API ERROR............", error)
      toast.error("Could Not Update Profile")
    }
    toast.dismiss(toastId)
  }
}

export const changePassword = (token,formData) => {
     return async (dispatch) => {
         const toastId = toast.loading("Loading...")
         try{
            const response = await apiConnector("POST",CHANGE_PASSWORD_API,
                  formData,
          {Authorization:`Bearer ${token}`})

            if(response.data.success = false){
                throw new Error(response.data.message);
            }

            toast.success("Password Updated Successfully")
         }

         catch(error){
             console.log("Update Password Error",error);
             toast.error("Unable To Update Password")
         }

         toast.dismiss(toastId);
     }
}

export const deleteAccount = (token,navigate) => {
      return async (dispatch) => {
          const toastId = toast.loading("Loading...");
          try{
          const response = await apiConnector("DELETE",DELETE_ACCOUNT_API,{},{Authorization:`Bearer ${token}`})
          console.log(response)
          if(!response.data.success){
              throw new Error(response.data.message)
          }
         
          toast.success("Profile Deleted Successfully")
          dispatch(logOut(navigate))

           
        }

          catch(error){
              console.log(error);
              toast.error("Failed To Delete Account")
          }

          toast.dismiss(toastId)
      }
      
}

export const updateDisplayPicture = (token,formData) => {
      return async (dispatch) => {
           const toastId = toast.loading("Loading...")
           try{
             const response = await apiConnector('PUT', UPDATE_DISPLAY_PICTURE,
                formData
             ,  {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        })

        console.log(response)

             if(!response.data.success){
                throw new Error(response.data.message);
             }

             toast.success("Display Picture Upadated Successfully");
             dispatch(setUser(response.data.data));
             localStorage.removeItem('user');
             localStorage.setItem('user',JSON.stringify({...response.data.data}))

           }

         

           catch(error){
               console.log("Update Picture Error",error);
               toast.error("Failed to Update Display Picture")
           }

           toast.dismiss(toastId)
      }
}