import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/movieSlice'
//const request = require('request');

// fetches nowPlayingMovies data from TMDB API
const useNowPlayingMovies = ()=>{

  //const proxyRequest = request.defaults({'proxy': process.env.IPB_HTTP});
  
  

    const dispatch = useDispatch();

    const getNowPlayingMovies = async ()=>{
      // proxyRequest('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS, async (err, res, body) => {
      //   const json = await res.json();
      //   dispatch(addNowPlayingMovies(json.results));
      // });
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/now_playing?page=1', 
      API_OPTIONS);
      const json = await data.json();
      
      dispatch(addNowPlayingMovies(json.results));
     }

    useEffect(()=>{
        getNowPlayingMovies();
    },[])
}

export default useNowPlayingMovies;