import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
  const gpt = useSelector((store)=>store.gpt);
  const {movieResults, movieNames} = gpt;
  if(!movieNames){
    return null;
  }

  return (
    <div className='p-4 m-5 bg-black opacity-90 rounded-xl'>
      {movieNames.map((movieName, index)=>(
        <MovieList 
          key={movieName} 
          title={movieName} 
          movies={movieResults[index]}
        />
      ))}
    </div>
  )
}

export default GptMovieSuggestions