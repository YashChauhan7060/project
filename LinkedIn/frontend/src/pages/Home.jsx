import React from 'react'
import Nav from '../components/Nav'
import dp from '../assets/dp.png'
import { FiPlus } from "react-icons/fi";
import { FiCamera } from "react-icons/fi";
import { useContext } from 'react';
import { userDataContext } from '../context/userContext';
import { HiPencil } from "react-icons/hi";
import EditProfile from '../components/EditProfile';
import { useState } from 'react';

function Home() {
  let {userData,setUserData,edit,setEdit} = useContext(userDataContext)

  return (
    <div className='w-full min-h-[100vh] bg-[#f0efe7] pt-[100px] flex items-center lg:items-start justify-center gap-[20px] px-[20px] flex-col lg:flex-row relative pb-[50px]'>
      {edit && <EditProfile />}
      <Nav/>
      <div className='w-full lg:w-[25%] min-h-[200px] bg-[white] shadow-lg rounded-lg p-[10px] relative'>
        <div className='w-[100%] h-[100px] bg-gray-400 rounded overflow-hidden flex items-center justify-center relative cursor-pointer' onClick={()=>setEdit(true)} >
          <img src="" alt="" className='w-full'/>
          <FiCamera className='absolute right-[20px] top-[20px] w-[25px] h-[25px] text-white cursor-pointer'/>
        </div>
        <div className='w-[70px] h-[70px] rounded-full overflow-hidden flex items-center justify-center absolute top-[65px] left-[35px] cursor-pointer' onClick={()=>setEdit(true)} >
            <img src={dp} alt="" className='h-full'/>
        </div>
        <div className='w-[20px] h-[20px] bg-[#17c1ff] absolute top-[105px] left-[90px] rounded-full flex justify-center items-center cursor-pointer'>
            <FiPlus className='text-white'/>
          </div>

        <div className='mt-[30px] pl-[20px]  font-semibold text-gray-700'>
          <div className='text-[22px]'>{`${userData.firstName} ${userData.lastName}`}</div>
          <div className='text-[18px] font-semibold text-gray-600'>{userData.headline || ""}</div>
          <div className='text-[16px]text-gray-500'>{userData.location}</div>
        </div>
        <button className='w-[100%] h-[40px] my-[20px] rounded-full border-2 border-[#2dc0ff] text-[#2dc0ff] flex items-center justify-center gap-[10px]' onClick={()=>setEdit(true)} >Edit Profile <HiPencil /> </button>
        
      </div>



      
      <div className='w-full lg:w-[50%] min-h-[200px] bg-[white] shadow-lg rounded-lg p-[10px] relative'>

      </div>




      <div className='w-full lg:w-[25%] min-h-[200px] bg-[white] shadow-lg rounded-lg p-[10px] relative'>

      </div>


    </div>
  )
}

export default Home
