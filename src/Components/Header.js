import React from "react";
// import profileImg from "../utils/profile.png";
import { useDispatch, useSelector } from "react-redux";
import { signOutUser } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { toggleSearchPage } from "../utils/store/searchPageOpenSlice";

export const Header = () => {
  // const user = useSelector((store) => store.user);
  const {isSearchOpen} =useSelector(store=> store.searchPageStatus)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="sticky top-0 h-14 z-20 sm:h-0   mx-auto ">
      <div className="flex  px-5 pt-3 bg-gradient-to-b from-black ">
        <span className="text-red-700 m-1 font-semibold text-xl text-center justify-center">
          netflix
        </span>
        <div className="ml-auto flex h-fit ">
          <span className="text-white m-1 pr-3 ">
            {/* Welcome {user.displayName} */}
          </span>
          <button className="mx-2  px-3 py-1  bg-white  rounded-md sm:text-sm font-medium"
            onClick={()=>{
              dispatch(toggleSearchPage())
            }}>
              {isSearchOpen?"🏠 Home":"Search"}
          </button>

          {/* <img
            onMouseOver={() => setIsProfileClicked(true)}
            width="40px"
            src={profileImg}
            alt="profile"
            className="cursor-pointer"
          ></img> */}
          <button
            className="text-white mx-2  px-3 py-1 text-xl bg-red-600 rounded-md sm:text-sm font-medium "
            onClick={() => {
              signOutUser();
              navigate("/login");
            }}
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};
