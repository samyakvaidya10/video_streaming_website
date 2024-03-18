import React from 'react'
import useGetMovieTrailer from '../CuistomHooks/useGetMovieTrailer';
export const MovieBGTrailer = ({bannerMovieID}) => {
    // setTrailrVideo(useGetMovieTrailer())
    const trailerVideo=useGetMovieTrailer(bannerMovieID)
    console.log(trailerVideo)
    
  return (
    <div className='z-0 '>
        {/* <img alt='movie banner'  src={movieBannerLink+bannerMovie.backdrop_path}/> */}
        <iframe className='aspect-video -mt-28' 
            width="100%"
            // src={"https://www.youtube.com/embed/DwuJeGYlYyw?&autoplay=1" }
            src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1" }
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    
  )
}

/*

*/