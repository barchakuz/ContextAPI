import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'
import UserContextProvider from '../Context/UserContextProvider'

function Profile() {
    const { user } = useContext(UserContext);
 
    if(!user){
        return <div>No user</div>
    }

    return <div>Login : {user.username}</div>

  
}

export default Profile
