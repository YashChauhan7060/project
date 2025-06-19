import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import { authDataContext } from './AuthContext'
import { useEffect } from 'react'
import axios from 'axios'
export const userDataContext=createContext()

function UserContext({children}) {
let [userData,setUserData]=useState(null)
let {serverUrl}=useContext(authDataContext)

const getCurrentUser=async ()=>{
  try{
    let result=await axios.get(serverUrl+"/api/user/currentuser",
      {withCredentials:true})
      setUserData(result.data)
  } catch (error) {
    console.log(error);
    setUserData(null)
  }
}

useEffect(()=>{
  getCurrentUser()
},[])


  const value={
    userData,setUserData
  }
  return (
    <div>
      <userDataContext.Provider value={value}>
      {children}
      </userDataContext.Provider>
    </div>
  )
}

export default UserContext
