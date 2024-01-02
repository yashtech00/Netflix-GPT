import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
      <div className=" pt-52 px-12">
          <h1 className=' text-3xl font-bold'>{title}</h1>
          <p className=' py-6 text-lg w-1/4'>{overview}</p>
          <div className=''>
              <button className='bg-gray-500 p-4 px-14 text-lg text-white bg-opacity-50  rounded-lg'>
                ▶ Play</button>
              <button className=' mx-2 bg-gray-500 p-4 px-14 text-lg text-white bg-opacity-50  rounded-lg'>More Info</button>
          </div>
      </div>
  )
}

export default VideoTitle