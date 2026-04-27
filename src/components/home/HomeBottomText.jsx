import React from 'react'
import {Link} from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center lg:gap-5 gap-3 '>
      <div className="border-3 lg:h-24 mb-2 flex items-center lg:px-14 px-2 border-white rounded-full uppercase hover:text-[#D3FD50] hover:border-[#D3FD50] ">
        <Link className='lg:text-[6vw] text-[5vw] lg:mt-6' to='/projects'>Projects</Link>
      </div>
      <div className="border-3 lg:h-24 mb-2 flex items-center lg:px-14 px-2 border-white rounded-full uppercase hover:text-[#D3FD50] hover:border-[#D3FD50]">
        <Link className='lg:text-[6vw] text-[5vw] lg:mt-6' to='/agence'>Agence</Link>
      </div>
    </div>
  )
}

export default HomeBottomText
