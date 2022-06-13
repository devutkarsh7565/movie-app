import MovieList from "./MovieList";
import Nav from "./Nav";
const Home = (props) => {
  return (
    <>
      <div className="bg-[#354259] min-h-screen">
        <div className=" bg-[#2E0249]  w-screen">
          <Nav
            searchValue={props.searchValue}
            setSearchValue={props.setSearchValue}
          />
        </div>
        <MovieList
          movies={props.movies}
          getFavouriteMovies={props.getFavouriteMovies}
          setDesireValue={props.setDesireValue}
        />
      </div>
    </>
  );
};

export default Home;
