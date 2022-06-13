import RemoveFavourites from "./RemoveFavourites";
const FavouriteList = (props) => {
  return (
    <>
      <div className="sm:ml-10 bg-[#354259] min-h-screen flex flex-wrap justify-start ml-2">
        {props.movies.map((movie, index) => (
          <div
            className="sm:mx-5 sm:my-5 sm:w-[310px] sm:h-[466px] relative w-[160px] h-[310px] mx-3 my-5
        "
          >
            <img
              className="w-full h-full top-0 left-0 transition ease-in-out delay-150 bg-blue-500 translate-y-0.5 sm:hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ... rounded-xl"
              src={movie.Poster}
              alt="movie"
            />
            <div
              onClick={() => props.removeFavouriteMovies(index)}
              className="absolute bg-[#21201E] bottom-0 opacity-0  transition ease-linear delay-100 hover:opacity-75 text-center sm:text-xl text-sm sm:p-5 p-2 w-full z-20"
            >
              <RemoveFavourites />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FavouriteList;
