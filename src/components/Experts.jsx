import React from 'react'
import laptop from "../assets/images/laptop.jpg"

function Experts() {
  return (
    <div className='max-w-[1075px] py-[10px] md:grid grid-cols-2 mx-auto '>
        <div className='md:w-[80%] '>
            <img src={laptop} alt="" />
        </div>
        <div className='flex flex-col justify-center'>
            <h1 className='text-[25px] font-bold text-[#00df9a] pb-[5px]'>Learn from experts</h1>
            <p className='text-[15px] pb-[10px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas quibusdam assumenda ut
                 quisquam facilis corporis consectetur fuga, alias et blanditiis eveniet saepe? Officia!</p>
                 <button className='w-[30%] bg-[black] p-[4px] text-white rounded text-[15px]'>Get started</button>
        </div>
    </div>
  )
}

export default Experts
