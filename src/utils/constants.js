const optionsMovieAPI = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMDVkMmEyZGE1NjUzNjlmYmNkNDg1MjUxYjI5MjExNyIsInN1YiI6IjY1ZjNmNjUxNzM5MGMwMDE4N2E5ZjBhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qhs06Pw2Dzywyzw2QdnUaAbuK744QoHwp_iHs3NVjf4'
    }
  };


const movieBannerLink="https://image.tmdb.org/t/p/original"

function getSearchMovieAPI(searchString){
  if(searchString===undefined||searchString===null) return

  let filteredString=searchString.replace(/ /g,"%20");
  
  return 'https://api.themoviedb.org/3/search/movie?query='+filteredString+'&include_adult=false&language=en-US&page=1'

}


  export {optionsMovieAPI,movieBannerLink,getSearchMovieAPI}