
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'

const Browse = () => {

  // fetches nowPlayingMovies data from TMDB API
  useNowPlayingMovies();
  
  usePopularMovies();

  useTopRatedMovies();

  const toggleGptSearch = useSelector((store)=>store.gpt.showGptSearch);
  console.log(toggleGptSearch);
  return (
    <div>
      <Header/>
      {toggleGptSearch ? <GptSearch/> : 
      <>
        <MainContainer/>
        <SecondaryContainer/>
      </> 
      }
    </div>
  )
}

export default Browse