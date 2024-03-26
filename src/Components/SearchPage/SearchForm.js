import React, { useState } from "react";
import { getSearchMovieAPI, optionsMovieAPI } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addSearchResult } from "../../utils/store/searchResultSlice";

const SearchForm = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  const fetchData = async () => {
    
    if (
      searchText === null ||
      searchText === undefined ||
      searchText.replace(/ /g, "").length === 0
    ) {
      dispatch(addSearchResult([]));
    } else {
      
      const searchMovieAPI = getSearchMovieAPI(searchText);
      const data = await fetch(searchMovieAPI, optionsMovieAPI);
      const json = await data.json();
      dispatch(addSearchResult(json.results))
    }
  };

  return (
    <div className="px-2 md:px-0   ">
      <div className=" p-5     sm:mx-auto ">
        <span className="text-3xl mb-5 text-white font-semibold block">
          What do you want to watch?
        </span>
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <input
            className=" px-4 w-[90%] bg-gray-700 text-white my-2 h-12 rounded-md   focus:outline-none"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
            type="text"
            placeholder="Search Here"
          />

          <button
            className="  bg-red-600 text-white ml-4 h-12 rounded-md px-4"
            onClick={() => {
              fetchData();
            }}
          >
            ▶
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
