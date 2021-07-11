import Head from "next/head";
import {useRouter} from 'next/router'
import { getMovies, getNewReleases, getPopularMovies } from "../helpers/api-util";
import Link from 'next/link'

export default function Home({ newReleases, popularMovies, topRatedMovies }) {

  const router = useRouter()

  const handleClick = (movieId) => {
    router.push(`/${movieId}`);
  }
  return (
    <>
      <Head>
        <title>Next Movie</title>
        <meta
          name="description"
          content="Browse all of your favourite movies in the same place"
        />
        <link rel="icon" href="" />
      </Head>
      <section className="">
      <ul>
        {newReleases.map(movie => (
          <li key={movie.id}>
            <Link href={`/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`} alt="" />
          </Link>
          
          </li>
        ))}
      </ul>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const res = await getNewReleases();
  const movies = await  res.json()

  return {
    props: {

      newReleases: movies.results,
     
    },
  };
}
