import React from 'react'
import Nav from '../components/Nav'

function Home() {
  return (
    <div className='w-full min-h-[100vh] bg-[#f0efe7] pt-[100px] flex items-center lg:items-start justify-center gap-[20px] px-[20px] flex-col lg:flex-row relative pb-[50px]'>
      <Nav/>
    </div>
  )
}

export default Home
