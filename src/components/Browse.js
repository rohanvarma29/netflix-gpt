
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'


const Browse = () => {

  // fetches nowPlayingMovies data from TMDB API
  useNowPlayingMovies()

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
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