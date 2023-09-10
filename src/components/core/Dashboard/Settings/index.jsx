import React from 'react'
import EditProfile from './EditProfile'
import ChangeProfilePicture from './ChangeProfilePicture'
import UpdatePassword from './UpdatePassword'
import DeleteAccount from './DeleteAccount'

const Settings = () => {
  return (
     <>
        <h1>Edit Profile</h1>
         <ChangeProfilePicture />
      {/* Profile */}
          <EditProfile />
      {/* Password */}
         <UpdatePassword />
      {/* Delete Account */}
         <DeleteAccount />
     </>
  )
}

export default Settings