import React from 'react'
import Nav from '../components/Nav'
import dp from '../assets/dp.png'

function Home() {
  return (
    <div className='w-full min-h-[100vh] bg-[#f0efe7] pt-[100px] flex items-center lg:items-start justify-center gap-[20px] px-[20px] flex-col lg:flex-row relative pb-[50px]'>
      <Nav/>
      <div className='w-full lg:w-[25%] min-h-[200px] bg-[white] shadow-lg rounded-lg p-[10px] relative'>
        <div className='w-[100%] h-[100px] bg-gray-400 rounded overflow-hidden flex items-center justify-center relative cursor-pointer'>
          <img src="" alt="" className='w-full'/>
        </div>
        <div className='w-[70px] h-[70px] rounded-full overflow-hidden flex items-center justify-center absolute top-[65px] left-[35px] cursor-pointer'>
            <img src={dp} alt="" className='h-full'/>
          
        </div>
      </div>



      
      <div className='w-full lg:w-[50%] min-h-[200px] bg-[white] shadow-lg rounded-lg p-[10px] relative'>

      </div>




      <div className='w-full lg:w-[25%] min-h-[200px] bg-[white] shadow-lg rounded-lg p-[10px] relative'>

      </div>


    </div>
  )
}

export default Home
