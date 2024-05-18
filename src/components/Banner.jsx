import React from 'react'
import { ReactTyped } from "react-typed";

function Banner() {
  return (
    <div className='bg-[#2699fb] w-full py-[100px]'>
      <div className='max-w-[1075px] mx-auto font-bold text-center text-white mt-[70px]'>
        <div className='md:text-4xl text-2xl mt-[5px] ' >Learn with us</div>
        <div className='md:text-[70px] text-[50px] mt-[5px]'>Grow with us.</div>
        <div className='md:text-4xl text-2xl mt-[5px]'>Learn
        <ReactTyped className='pl-3' strings={["Web devolpment",'Digital marketing','Ethical Hackong']} typeSpeed={100} />
        </div>
        <button className='bg-[black] p-[10px] text-white rounded text-[13px] mt-[20px]'>Get started</button>
      </div>
    </div>
  )
}

export default Banner
