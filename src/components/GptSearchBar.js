import React, { useRef } from 'react'
import { lang } from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import model from '../utils/gemini'
import { API_OPTIONS } from '../utils/constants'
import { addGptMovies } from '../utils/gptSlice'

const GptSearchBar = () => {
    const langKey = useSelector(store=>store.config.lang)
    const searchText = useRef();
    const dispatch = useDispatch();

    // search movie in TMDB
    const searchMovieTMDB = async (movie)=>{
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",API_OPTIONS);
        const json = await data.json();
        return json.results;
    }

    const handleGptSearch = async ()=>{
        

        const prompt = "Act as a Movie Recommondation System and suggest some movies for the the query:"
                        +searchText.current.value
                        +". Only give me the names of the 5 movies, comma seperated like as in the exaple. example: 3 idiots, koi mil gaya, sholay, golmaal, Hera Pheri"

        const geminiResult = await model.generateContent(prompt);
        const response = await geminiResult.response;
        const text = response.text();
        
        const gptMovies = text.split(", ");
        
        const promiseArray = gptMovies.map((movie)=>searchMovieTMDB(movie));
        const tmdbResults = await Promise.all(promiseArray);

        
        dispatch(addGptMovies({movieNames:gptMovies, movieResults:tmdbResults}));

    }

  return (
    <div className='pt-[45%] md:pt-[10%] flex justify-center'>
        <form className=' mx-2 px-2 bg-black w-full md:w-1/2 grid grid-cols-12 bg-opacity-60 rounded-lg ' onSubmit={(e)=>e.preventDefault()}>
            <input 
                ref={searchText}
                type='text' 
                className='p-4 m-4 col-span-9 rounded-lg h-[40px] md:h-14'
                placeholder={lang[langKey].gptSearchPlaceholder}>
            </input>
            <button 
                className=' text-white bg-red-800 rounded-lg px-4 mx-2 my-4 col-span-3'
                onClick={handleGptSearch}>
                {lang[langKey].search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar