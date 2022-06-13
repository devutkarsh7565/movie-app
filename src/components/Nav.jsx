import MovieListHeading from "./MovieListHeading";
import SearchBox from "./SearchBox";
import { Link } from "react-router-dom";
const Nav = (props) => {
  return (
    <>
      <div className="flex justify-evenly m-5 pt-10 pb-10 px-5">
        <MovieListHeading />
        <div className="flex justify-center">
          <Link className="text-[#FEA609] text-2xl mr-5" to="/favourite">
            Favourite
          </Link>

          <SearchBox
            searchValue={props.searchValue}
            setSearchValue={props.setSearchValue}
          />
          <Link className="text-[#FEA609]" to="/Signup">
            Signup
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
