import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext/UserStates'

const Profile = () => {
    const { userInfo,user } = useContext(UserContext)

    useEffect(()=>{
        userInfo()
    },[])

    console.log(user)

    if(!user){
        return <span>Cargando...</span>
    }

  return (
    <div>
        <h1>Profile</h1> 
        <span>Tu npmbre: {user.username}</span><br />
        <span>Tu email: {user.email}</span><br />
        <span>Tu cueva: {user.adress}</span>
    </div>
  )
}

export default Profile