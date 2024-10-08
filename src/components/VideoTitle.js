import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[25%] md:pt-[15%] px-6 md:px-16 absolute bg-gradient-to-r from-black'>
      <h1 className='fonnt-bold text-2xl md:text-6xl text-white'>{title}</h1>
      <p className='hidden md:inline-block py-4 w-2/3 md:w-2/5 text-white'>{overview}</p>

      <div>
        <button 
          className='p-2 md:p-4 m-2 ml-0 text-sm md:text-xl text-black bg-white rounded-lg hover:opacity-80'>
          ▶️ Play Now
        </button>
        <button 
          className='p-4 m-2 hidden md:inline-block text-sm md:text-xl font-bold text-white bg-gray-500 bg-opacity-50 rounded-lg'>
          ⓘ More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle;