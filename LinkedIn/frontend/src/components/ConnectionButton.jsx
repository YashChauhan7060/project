import React from 'react'
import { useContext } from 'react'
import { authDataContext } from '../context/AuthContext'
import axios from 'axios'
import { io } from "socket.io-client"
import { useState, useEffect } from 'react'
import { userDataContext } from '../context/userContext'
const socket=io("http://localhost:8000")

function ConnectionButton({userId}) {

let {serverUrl}=useContext(authDataContext)
let {userData,setUserData}=useContext(userDataContext)
let [status,setStatus]=useState("")

    const handleSendConnection=async ()=>{
        try{
            let result=await axios.post(`${serverUrl}/api/connection/send/${userId}`,{},{withCredentials:true})
            console.log(result)
        }  catch(error){
            console.log(error)
        }
    }

    const handleGetStatus=async ()=>{
        try {
            let result=await axios.get(`${serverUrl}/api/connection/getStatus/${userId}`,{withCredentials:true})
            console.log(result)
            setStatus(result.data.status)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
    if (userData && userData._id) {
        socket.emit("register", userData._id);
    }
    handleGetStatus()
    socket.on("statusUpdate",({updatedUserId,newStatus})=>{
if(updatedUserId==userId){
    setStatus(newStatus)
}
    })
    
}, [userData?._id]);

  return (
    <button className='min-w-[100px] h-[40px] rounded-full border-2 border-[#2dc0ff] text-[#2dc0ff]' >{status}</button>
  )
}

export default ConnectionButton
