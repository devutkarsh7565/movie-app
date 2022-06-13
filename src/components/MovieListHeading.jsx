import { Link } from "react-router-dom";
const MovieListHeading = () => {
  return (
    <>
      <div>
        <Link
          className="text-[#FEA609] sm:text-4xl sm:font-bold leading-9 text-2xl font-medium  "
          to="/"
        >
          Movies
        </Link>
      </div>
    </>
  );
};

export default MovieListHeading;
