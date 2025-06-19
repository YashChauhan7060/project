import React from 'react'
import logo2 from '../assets/logo2.png'
import { FaSearch } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { FaUserGroup } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";

function Nav() {
  return (
    <div className='w-full h-[80px] bg-white fixed top-0 shadow-lg flex items-center pl-0 left-0 z-[80]'>
        <div>
        <div >
            <img src={logo2} alt="" className='w-[50px] ml-0' />
        </div>
        <form>
            <div><FaSearch /></div>
            <input/>
        </form>
        </div>

        <div>
            <div>
                <IoMdHome />
                <div>Home</div>
            </div>
            <div>
                <FaUserGroup />
                <div>My Networks</div>
            </div>
            <div>
                <IoNotifications />
                <div>Notifications</div>
            </div>
            <div>
                <img/>
            </div>
        </div>
    </div>
    
  )
}

export default Nav