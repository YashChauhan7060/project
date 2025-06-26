import React,{ useContext, useEffect, useState }  from 'react'
import logo2 from '../assets/logo2.png'
import { FaSearch } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { FaUserGroup } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import profile from '../assets/profile.png';
import { userDataContext } from '../context/userContext';
import { authDataContext } from '../context/AuthContext';
import axios from 'axios';
import { Navigate,useNavigate } from 'react-router-dom';

function Nav() {
    let [activeSearch,setActiveSearch]=useState(false)
    let [showPopup, setShowPopup] = useState(false);
    let {userData,setUserData}=useContext(userDataContext)
    let {serverUrl}=useContext(authDataContext)
    let navigate=useNavigate()


    const handleSignOut=async ()=>{
    try {
        let result =await axios.get(serverUrl+"/api/auth/logout",{withCredentials:true})
        setUserData(null)
        navigate("/login")
        console.log(result);
      
    } catch (error) {
        console.log(error);
    }
}




  return (
    <div className='w-full h-[80px] bg-[white] fixed top-0 shadow-lg flex justify-between md:justify-around items-center px-[10px] left-0 z-[80]'>
        <div className='flex justify-center items-center gap-[10px]'>
        <div onClick={ ()=>{
            setActiveSearch(false);
        }}>
            <img src={logo2} alt="" className='w-[50px] ml-0' />
        </div>
        {!activeSearch && <div><FaSearch className='w-[23px] h-[23px] text-gray-600 lg:hidden' onClick={()=>setActiveSearch(true)}/></div>}

        <form className={`w-[190px] lg:w-[350px] h-[40px] bg-[#f0efe7] lg:flex items-center gap-[10px] px-[10px] py-[5px] rounded-md ${!activeSearch?"hidden":"flex"} `}>
            <div><FaSearch className='w-[23px] h-[23px] text-gray-600'/></div>
            <input type="text" className='w-[80%] h-full bg-transparent  outline-none  border-0 'placeholder='search users...' />
        </form>
        </div>

        <div className='flex justify-center items-center gap-[20px]'>

        {showPopup && <div className='w-[300px] min-h-[300px] bg-white shadow-lg absolute top-[75px] rounded-lg flex flex-col items-center p-[20px] gap-[20px] right-[20px] lg:right-[100px]'>
                <div className='w-[50px] h-[50px] rounded-full overflow-hidden cursor-pointer'>
                <img src={userData.profileImage || profile} alt="" />
                </div>

                <div className='text-[19px] font-semibold text-gray-700'>{`${userData.firstName} ${userData.lastName}`}</div>
                <button className='w-[100%] h-[40px] rounded-full border-2 border-[#2dc0ff] text-[#2dc0ff]'>View Profile</button>
                <div className='w-full h-[1px] bg-gray-700 '></div>
                <div className='flex  w-full items-center justify-start text-gray-600 gap-[10px] cursor-pointer' onClick={()=>navigate("/network")}>
                <FaUserGroup className='w-[23px] h-[23px] text-gray-600 '/>
                <div>My Networks</div>
                </div>
                <button className='w-[100%] h-[40px] rounded-full border-2 border-[#ec4545] text-[#ec4545]' onClick={handleSignOut} >Sign Out</button>
            </div>}
            
            <div className='lg:flex flex-col items-center justify-center cursor-pointer text-gray-600 hidden' >
                <IoMdHome className='w-[23px] h-[23px] text-gray-600'/>
                <div>Home</div>
            </div>
            <div className='md:flex flex-col items-center justify-center cursor-pointer text-gray-600 hidden'>
                <FaUserGroup className='w-[23px] h-[23px] text-gray-600'/>
                <div>My Networks</div>
            </div>
            <div className='flex flex-col items-center justify-center cursor-pointer text-gray-600 '>
                <IoNotifications className='w-[23px] h-[23px] text-gray-600'/>
                <div className='hidden md:block'>Notifications</div>
            </div>
            <div className='w-[50px] h-[50px] rounded-full overflow-hidden cursor-pointer' onClick={()=>setShowPopup(prev=>!prev)} >
                <img src={userData.profileImage || profile} alt="" />
            </div>
        </div>
    </div>
    
  )
}

export default Nav