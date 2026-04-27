import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font-[font1] pt-5 mt-[90vw] lg:mt-0 text-center cursor-default '>

      <div className="lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw] ">
        L'étincelle
      </div>
      <div className="lg:text-[9.5vw] text-[12vw] justify-center flex items-start uppercase lg:leading-[8vw] leading-[10vw] ">
        qui
        <div className="h-[7vw] w-[16vw]  rounded-full mt-1 lg:mt-0 overflow-hidden border-none shadow-[10px_10px_50px_5px_black] ">
          <video className='h-full w-full object-cover rounded-full' disablePictureInPicture autoPlay loop muted src='../../../public/video.mp4'></video>
        </div>génère
      </div>
      <div className="lg:text-[9.5vw] text-[12vw] justify-center flex items-start uppercase lg:leading-[8vw] leading-[10vw] ">la créativité</div>
      
    </div>
  )
}

export default HomeHeroText

