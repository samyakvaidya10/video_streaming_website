import React from "react";
import SearchForm from "./SearchForm";
import DisplayResults from "./DisplayResults";

const SearchPage = () => {
  return (
    <div className="   bg-movies-banner bg-black">
      
      <div className="w-3/5 mx-auto bg-black bg-opacity-80 sm:p-10 ">
        <SearchForm />
        <DisplayResults />
      </div>
      <div className="h-screen"></div>
    </div>
  );
};

export default SearchPage;

/*
  1.store steup for results
    1.create a slice 
    2.add action from form
    3.subscribe to store
  2.result display component ✅
*/
