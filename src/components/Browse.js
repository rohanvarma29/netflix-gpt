
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'


const Browse = () => {

  // fetches nowPlayingMovies data from TMDB API
  useNowPlayingMovies();
  
  usePopularMovies();

  return (
    <div>
      <Header/>
      <MainContainer/>
      <div className=''>
        <SecondaryContainer/>
      </div>
      {/* 
        MainContainer
          - videoBackgroun
          - videoTitle
        SecondaryContainer
          - MovieList * n
            - cards * n
      
      */}
    </div>
  )
}

export default Browse