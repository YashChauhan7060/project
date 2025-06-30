import React , { useContext, useEffect, useState } from 'react'
import Nav from '../components/Nav'
import { FiPlus } from "react-icons/fi";
import { FiCamera } from "react-icons/fi";
import ConnectionButton from '../components/ConnectionButton'
import Post from '../components/Post'
import EditProfile from '../components/EditProfile'
import axios from 'axios'
import { authDataContext } from '../context/AuthContext'
import { HiPencil } from "react-icons/hi2";
import { userDataContext } from '../context/userContext'
import dp from "../assets/dp.png"

function Profile() {

let {userData,setuserData,edit,setEdit,postData,setPostData,profileData,setProfileData}=useContext(userDataContext)
let [profilePost,setProfilePost]=useState([])    
let {serverUrl}=useContext(authDataContext)

  useEffect(() => {
    if (!profileData && userData) {
      setProfileData(userData);
    }
  }, [profileData, userData, setProfileData]);

if (!profileData) return <div>Loading...</div>;

  return (
    <div className='w-full min-h-[100vh] bg-[#f0efe7] flex flex-col items-center pt-[100px] pb-[40px]'>
      <Nav/>
    <div className='w-full max-w-[900px] min-h-[100vh] flex flex-col gap-[10px]'>

        <div className='relative bg-[white] pb-[40px] rounded shadow-lg'>
            <div className='w-[100%] h-[100px] bg-gray-400 rounded overflow-hidden flex items-center justify-center relative cursor-pointer'>
                    <img src={userData.coverImage || ""} alt="" className='w-full'/>
                   </div>
                   <div className='w-[70px] h-[70px] rounded-full overflow-hidden flex items-center justify-center absolute top-[65px] left-[35px] cursor-pointer'>
                        <img src={userData.profileImage || dp} alt="" className='h-full'/>
                      
                    </div>
                   <div className='mt-[30px] pl-[20px]  font-semibold text-gray-700'>
                    <div className='text-[22px]'>{`${userData.firstName} ${userData.lastName}`}</div>
                    <div className='text-[18px] font-semibold text-gray-600'>{userData.headline || ""}</div>
                    <div className='text-[16px]text-gray-500'>{userData.location}</div>
                    <div className='text-[16px]text-gray-500'>{`${Data.connection.length} connection`}</div>
                   </div>
                   {profileData._id==userData._id &&  <button className='min-w-[150px] h-[40px] my-[20px] rounded-full border-2 ml-[20px] border-[#2dc0ff] text-[#2dc0ff] flex items-center justify-center gap-[10px]'>Edit Profile <HiPencil /></button>}
                   {profileData._id!=userData._id && <div className="ml-[20px] mt-[20px]"><ConnectionButton userId={profileData._id}/></div> }
                  
        </div>

    </div>


    </div>
  )
}

export default Profile
