import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { Header } from "./Header";

import useAddMoviesToStore from "../CuistomHooks/useAddMoviesToStore";
import MainContainer from "./MainContainer";
import { SecondaryContainer } from "./SecondaryContainer";

import { onAuthStateChanged } from "firebase/auth";
import { useSelector } from "react-redux";
import SearchPage from "./SearchPage/SearchPage";

function Browse() {
  const navigate = useNavigate();
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      navigate("/login");
    }
  });

  const {isSearchOpen} = useSelector((store) => store.searchPageStatus);
  return (
    <div className="px-2  bg-black  ">
      <Header />
      {isSearchOpen ? 
        <SearchPage />
       : 
        <div>
          <MainContainer />
          <SecondaryContainer />
        </div>
      }
    </div>
  );
}

export default Browse;

/* Structure of page
  browse
    - MainContainer Trailer playing area
        - trailer in bg
        - leftside trailer name and description and play now button

    - Secondary Container
        Recomended movies section
        - sections  list
        - movie card 
          - name and image
  
*/
