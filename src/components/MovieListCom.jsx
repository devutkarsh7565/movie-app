import AddFavourites from "./AddFavourites";
import { Link } from "react-router-dom";
const MovieListCom = (props) => {
  return (
    <>
      <div className="w-full h-[555px] rounded-xl top-0 left-0 transition ease-in-out delay-150 bg-[#363062] translate-y-0.5 sm:hover:-translate-y-1 hover:scale-110 border-gray-300 border-2 hover:bg-[#293462] duration-300 ...">
        <img
          className="w-full h-[450px] rounded-t-xl "
          src={props.movie.Poster}
          alt="movie"
        />
        <div className="flex flex-col justify-around pt-3 text-white">
          <div className="flex justify-start pl-4">
            <h1 className="text-white ">{props.movie.Title}</h1>
          </div>

          <div className="relative ">
            <h1 className="absolute top-1 left-4">Year : {props.movie.Year}</h1>

            <h2 className="absolute top-1 right-4">Type:{props.movie.Type}</h2>
          </div>

          <div className="flex justify-center items-center mt-5 pt-3 text-[#37E2D5] text-sm  ">
            <Link
              onClick={() => props.setDesireValue(props.movie.imdbID)}
              to="/moreInformation"
            >
              click here to know more
            </Link>
          </div>
        </div>
        <div
          onClick={() => props.getFavouriteMovies(props.movie)}
          className="absolute bg-[#21201E] text-white top-0 opacity-0  transition ease-linear delay-100 hover:opacity-75 text-center sm:text-xl text-sm sm:p-5 p-2 w-full z-20"
        >
          <AddFavourites addfavourite=" Add to Favourite" />
        </div>
      </div>
    </>
  );
};

export default MovieListCom;
