import React from 'react'

function Newslatter() {
  return (
    <div className='w-ful bg-[#2699fb] py-[20px]'>
        <div className="md:flex justify-between max-w-[1075px] mx-auto py-[70px]">
            <div>
                <h1 className='md:text-[30px] text-[23px] font-bold text-white pb-[6px] '>Want to learn latest IT skills?</h1>
                <p className='text-white '>Sign up to our newslatter and stay up to date</p>
            </div>
            <div className='mt-[10px]'>
                <input type="text" className='p-2 ml-3px  rounded  ' placeholder='email' />
                <button className='ml-[7px] bg-[black] p-2 text-white rounded text-[13px] mb-[10px]'>Get started</button>
                <p className='text-white text-[15px] '>We care about protection of your data <br /> <a href="" className='text-black'>Privacy policy</a></p>
            </div>
        </div>
      
    </div>
  )
}

export default Newslatter
