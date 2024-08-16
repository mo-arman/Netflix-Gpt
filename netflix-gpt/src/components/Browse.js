
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import SecandoryContainer from "./SecandoryContainer";
import MainContainer from "./MainContainer";
import usePopularMovies from "../hooks/usePopularMovies";

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
 
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecandoryContainer/>
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
