import MovieListCom from "./MovieListCom";
const MovieList = (props) => {
  return (
    // sm:mx-5 flex flex-wrap sm:justify-evenly md:justify-between ml-2
    //sm:mx-5 sm:my-12 sm:w-[300px] sm:h-[445px] relative w-[160px] h-[310px] mx-3 my-5
    <>
      <div className="grid w-screen grid-flow-row md:grid-cols-3 md:gap-3 lg:grid-cols-3 lg:gap-4 xl:grid-cols-4 xl:gap-5 2xl:grid-cols-5 2xl:gap-5 grid-cols-2 gap-2 sm:grid-cols-2 sm:gap-3 ">
        {props.movies.map((movie, index) => (
          <div
            className="mx-5 my-5 
        "
          >
            <MovieListCom movie={movie} />
          </div>
        ))}
      </div>
    </>
  );
};

export default MovieList;
