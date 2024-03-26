import React from "react";
import { useSelector } from "react-redux";
import { MovieBGTrailer } from "./MovieBGTrailer";
import useAddMoviesToStore from "../CuistomHooks/useAddMoviesToStore";



const MainContainer = () => {
  const movies = useSelector((store) => store.movies);

  useAddMoviesToStore()

  if (movies.length === 0) return <>Shimmer</>;
  // return<>Shimmer</>
  const bannerMovie = movies[0].movies[0];

  return (
    <div>

      <div className="text-white ">
        {/*  create a saperate component later
      <div className='md:hidden px-5 py-2 '>
       <img alt='movie banner' className=' h-96 mx-auto rounded-xl' src={movieBannerLink+bannerMovie.poster_path}/>
       <div className='flex justify-center'>
          <button className='bg-white text-black py-1 px-4 rounded-md mt-2 '>Play</button>
        </div>
      </div> */}

        <div className="z-10 absolute bottom-1/3 ml-20">
          <span className="text-white relative font-serif text-7xl">
            {bannerMovie.title}
          </span>
          {/* <span class="absolute inset-0 bg-red-500 opacity-25 blur-sm rounded-md"></span> */}
          <div className="w-96 text-base font-semibold">
            <p className="line-clamp-3">{bannerMovie.overview}</p>
          </div>
          <div>
            <button className="bg-white text-black py-1 px-4 rounded-sm mt-2">
              ▶ Play
            </button>
            <button className="bg-gray-600 text-white bg-opacity-70 py-1 mx-5 px-4 rounded-sm mt-2">
              More Info
            </button>
          </div>
        </div>
        <MovieBGTrailer bannerMovieID={bannerMovie.id} />
      </div>
    </div>
  );
};

export default MainContainer;
