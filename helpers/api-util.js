let newReleasesUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-GB&page=1&region=GB`;
let popularMoviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-GB&page=1&region=GB`;
let topRatedMoviesUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-GB&page=1&region=GB`;

// export async function getMovies() {
//   const urls = [newReleasesUrl, popularMoviesUrl, topRatedMoviesUrl];

//   try {
//     let data = await Promise.all(
//       urls.map((url) => fetch(url).then((response) => response.json()))
//     ).catch((error) => console.log(error));
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// }

export async function getNewReleases(){
    try {
      const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-GB&page=1&region=GB`) 
      const data = await res.json() 
      return data
    } catch (error) {
        console.log(error);
    }
}

export async function getMovieById(movieId) {
    const res =
      await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-GB
  `);
    const data = await res.json();
    return data;
  }