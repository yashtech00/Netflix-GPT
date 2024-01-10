import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
      <div className="w-screen aspect-video pt-[15%] px-20 absolute text-white bg-gradient-to-r from-black">
          <h1 className=' text-3xl font-bold'>{title}</h1>
          <p className=' py-6 text-base w-1/4'>{overview}</p>
          <div className=''>
              <button className='bg-white p-4 px-14 text-lg text-black rounded-lg hover:bg-opacity-60'>
                ▶️ Play</button>
              <button className=' mx-2 bg-gray-500 p-4 px-14 text-lg text-white bg-opacity-50  rounded-lg'>ℹ️ More Info</button>
          </div>
      </div>
  )
}

export default VideoTitle