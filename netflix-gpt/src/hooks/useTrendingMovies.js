import { useDispatch } from "react-redux";
import { addTrendingMovies} from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";


const useTrendingMovies = () => {
    // fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/movie/?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTrendingMovies(json.results));
  };
  useEffect(() => {
    getTrendingMovies();

  },[]);
}
  
  export default useTrendingMovies;