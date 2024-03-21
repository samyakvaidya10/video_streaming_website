import React from 'react'
import useGetMovieTrailer from '../CuistomHooks/useGetMovieTrailer';
export const MovieBGTrailer = ({bannerMovieID}) => {
    // setTrailrVideo(useGetMovieTrailer())
    const trailerVideo=useGetMovieTrailer(bannerMovieID)
    
  return (
    <div className='z-0 relative'>
        {/* <img alt='movie banner'  src={movieBannerLink+bannerMovie.backdrop_path}/> */}
        <iframe className='aspect-video -mt-20' 
            width="100%"
            // src={"https://www.youtube.com/embed/DwuJeGYlYyw?&autoplay=1" }
            src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1" }
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <div className='absolute bottom-2 w-full h-48 bg-gradient-to-t  from-black from-10%'> 
            </div>
    </div>
    
  )
}

/*

*/