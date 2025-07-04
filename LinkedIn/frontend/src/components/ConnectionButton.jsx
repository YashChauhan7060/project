import React from 'react'
import { useContext } from 'react'
import { authDataContext } from '../context/AuthContext'
import axios from 'axios'
import { io } from "socket.io-client"
import { useState, useEffect } from 'react'
import { userDataContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'
const socket=io("http://localhost:8000")

function ConnectionButton({userId}) {

let {serverUrl}=useContext(authDataContext)
let {userData,setUserData}=useContext(userDataContext)
let [status,setStatus]=useState("")
let navigate=useNavigate()

    const handleSendConnection=async ()=>{
        try{
            let result=await axios.post(`${serverUrl}/api/connection/send/${userId}`,{},{withCredentials:true})
            console.log(result)
        }  catch(error){
            console.log(error.response?.data || error)
      alert(error.response?.data?.message || "Failed to send connection request")
        }
    }

    const handleRemoveConnection=async ()=>{
        try {
            let result=await axios.delete(`${serverUrl}/api/connection/remove/${userId}`,{withCredentials:true})
            console.log(result)
        } catch (error) {
            console.log(error.response?.data || error)
      alert(error.response?.data?.message || "Failed to remove connection")
        }
    }

    const handleGetStatus=async ()=>{
        try {
            let result=await axios.get(`${serverUrl}/api/connection/getStatus/${userId}`,{withCredentials:true})
            console.log(result)
            setStatus(result.data.status)
        } catch (error) {
            console.log(error.response?.data || error)
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


const handleClick=async ()=>{
    if(status=="disconnect"){
      await handleRemoveConnection()
    }else if(status=="received"){
        navigate("/network")
    }else{
await handleSendConnection()
    }
}


  return (
    <button className='min-w-[100px] h-[40px] rounded-full border-2 border-[#2dc0ff] text-[#2dc0ff]' onClick={handleClick}  disabled={status=="pending"}>{status}</button>
  )
}

export default ConnectionButton
