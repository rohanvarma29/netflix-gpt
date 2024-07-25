import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-[150px] p-1 m-1'>
      <img
        alt='Movie Card'
        src={IMG_CDN_URL+posterPath}
      />
    </div>
  )
}
export default MovieCard