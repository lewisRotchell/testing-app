import React from 'react'
import {getMovies, getMovieById, getNewReleases} from '../helpers/api-util'

const MovieDetailPage = ({selectedMovie}) => {

    const {title, poster_path, overview} = selectedMovie
    return (
        <div>
          <h1>{title}</h1> 
          <img src={`https://image.tmdb.org/t/p/w185/${poster_path}`} alt="" /> 
          <p>{overview}</p>
        </div>
    )
}

export async function getStaticProps(context) {
    const movieId = context.params.movieId;
  
    const movie = await getMovieById(movieId);
  

  
    return {
      props: {
        selectedMovie: movie,
 
      },
      revalidate: 1800,
    };
  }

  export async function getStaticPaths() {


    const movies = await getNewReleases()

  
console.log(movies);
  
    const paths = movies.results.map((movie) => ({
      params: { movieId: movie.id.toString() },
    }));

    
  
    return {
     paths,
      fallback: false,
    };
  }

export default MovieDetailPage
