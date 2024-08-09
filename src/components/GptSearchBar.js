import React from 'react'
import { lang } from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
    const langKey = useSelector(store=>store.config.lang)
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='bg-black w-1/2 grid grid-cols-12 bg-opacity-60 rounded-lg'>
            <input 
                type='text' 
                className='p-4 m-4 col-span-9 rounded-lg'
                placeholder={lang[langKey].gptSearchPlaceholder}>
            </input>
            <button 
                className=' text-white bg-red-800 rounded-lg px-4 mx-2 my-4 col-span-3'>
                {lang[langKey].search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar