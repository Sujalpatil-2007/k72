import React from 'react'

const Video = () => {
  return (
    <div >
      <video className='h-screen w-screen object-cover' autoPlay loop muted src='/video.mp4' >
      </video>
    </div>
  )
}

export default Video
