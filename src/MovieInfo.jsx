import Info from "./components/Info";
import { MdFavorite } from "react-icons/md";
const MovieInfo = (props) => {
  const userScore = props.desireMovie.imdbRating * 10 + 3;

  return (
    <>
      <div className="grid grid-cols-5 grid-rows-4 bg-gradient-to-r from-sky-300 via-sky-200 to-sky-100 ... border-gray-500 border-b-5 border-solid max-h-screen w-screen ">
        <div className="pr-10 mr-10 row-start-2 row-end-4  row-span-2 col-start-2 col-end-3">
          <img
            className="shadow-stone-800/40 rounded-xl"
            src={props.desireMovie.Poster}
            alt="poster"
          />
        </div>
        <div className="row-start-2 row-end-4 row-span-2 col-start-3 col-end-6 flex justify-start">
          <div className="flex flex-col justify-start pl-10 mr-10 text-black text-xl">
            <h1 className="font-bold text-3xl">
              {" "}
              {props.desireMovie.Title} {props.desireMovie.imdbRating}
              <span className="font-light pl-2 text-gray-600">
                ({props.desireMovie.Year})
              </span>
            </h1>
            <div className="flex justify-start items-center py-2 ">
              <div
                className="w-16 h-8 flex justify-center items-center
               rounded-md border-2 text-sm font-light hover:border-blue-500 border-black"
              >
                <h1
                  className="hover:text-lg
                 transition ease-in-out delay-150"
                >
                  13+
                </h1>
              </div>
              <div className="pl-2">
                <h1 className="font-light text-xl">
                  {props.desireMovie.Released}{" "}
                  <span className="font-light">
                    (IN) <span className="text-xl font-semibold  ">.</span>
                  </span>
                </h1>
              </div>
              <div>
                <h1 className="text-xl font-light pl-2">
                  {" "}
                  {props.desireMovie.Genre}
                </h1>
              </div>
              <div>
                <h1 className=" font-light text-lg">
                  <span className="pl-1 pr-1 text-xl font-bold">.</span>
                  {props.desireMovie.Runtime}
                </h1>
              </div>
            </div>
            <div className="flex justify-start items-center pt-4">
              <div className="h-20 w-20 rounded-full bg-black flex justify-center items-center border-4 border-yellow-400 text-white">
                {userScore}
                <span className="text-center">%</span>
              </div>
              <div className="flex flex-col justify-center pl-3 text-lg font-light pr-3">
                <div>User</div>
                <div>Score</div>
              </div>

              <h1 className="w-14 h-14 rounded-full bg-blue-900 flex justify-center items-center ">
                <MdFavorite className="text-white rounded-full" />
              </h1>
            </div>
            <div className="pt-3">
              <h1 className="font-bold">Overview: </h1>
              <div className="font-normal text-lg ">
                <h1> {props.desireMovie.Plot}</h1>
              </div>
            </div>
            <Info director={props.desireMovie.Writer} infoNames="Writer" />
            <Info director={props.desireMovie.Director} infoNames="Director" />
            <h1>Runtime : {props.desireMovie.Runtime}</h1>
            <h1>Theme : {props.desireMovie.Genre}</h1>
            <h1>Director : </h1>
            <h1>Writer : {props.desireMovie.Writer}</h1>
            <h1>Actors : {props.desireMovie.Actors}</h1>
            <div className="indent-0 sm:w-[450px]">
              <p>About Movie : {props.desireMovie.Plot}</p>
            </div>
            <h1>Language : {props.desireMovie.Language}</h1>
            <h1>imdb Rating : {props.desireMovie.imdbRating}/10</h1>
            <h1>BoxOffice Collection : {props.desireMovie.BoxOffice}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;
