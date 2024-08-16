import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import SecandoryContainer from "./SecandoryContainer";
import MainContainer from "./MainContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
       <GptSearch /> 
      ):(
        <>
         <MainContainer />
        <SecandoryContainer />
        </>
      )}
      
     
      {/* 

      MainContainer
       - VideoBackground
       - VideoTitle
      SecandoryContainer
       - MovieList * n
        - Cards * n

       */}
    </div>
  );
};

export default Browse;
