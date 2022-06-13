const SearchBox = (props) => {
  return (
    <>
      <div className="mx-5">
        <input
          className="text-center mt-1 block w-full px-2 py-1 sm:px-3 sm:py-2 bg-white rounded-md text-sm  placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1"
          type="text"
          placeholder="Type to Search"
          value={props.value}
          onChange={(event) => props.setSearchValue(event.target.value)}
        />
      </div>
    </>
  );
};

export default SearchBox;
