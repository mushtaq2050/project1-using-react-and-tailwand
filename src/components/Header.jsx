import React,{useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"

function Header() {
    const [toggle, settoggle] = useState(true)
  return (
    <div className='bg-[#2699fb] p-[10px]'>
      <div className=' flex justify-between max-w-[1075px] items-center  mx-auto py-[12px] '>
        <div className='text-[30px] font-bold'>WsCube Tech </div>
       {
        
            toggle ?
            <AiOutlineMenu onClick={()=>settoggle(!toggle)} className='text-white text-xl md:hidden block'/>
            :
            <AiOutlineClose onClick={()=>settoggle(!toggle)} className='text-white text-2xl md:hidden block'/> 
           
       }
    

        <ul className='hidden md:flex gap-6 text-[15px] '>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>Company</li>
            <li className='cursor-pointer'>Resources</li>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Contact</li>
        </ul>
        {/* responsive menu */}
        <ul className={` duration-300 md:hidden w-full  gap-2 text-[15px] h-screen fixed 
        ${toggle ? 'left-[-100%]' : 'left-[0]'}
        top-[68px] bg-[black]  text-white`}>
            <li className='p-5 cursor-pointer'>Home</li>
            <li className='p-5 cursor-pointer'>Company</li>
            <li className='p-5 cursor-pointer'>Resources</li>
            <li className='p-5 cursor-pointer'>About</li>
            <li className='p-5 cursor-pointer'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Header

