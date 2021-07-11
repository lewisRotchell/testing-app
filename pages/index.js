import Head from "next/head";
import {useRouter} from 'next/router'
import { getMovies } from "../helpers/api-util";

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
          <li key={movie.id} onClick={()=>handleClick(movie.id)}>
            <img src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`} alt="" />
          </li>
        ))}
      </ul>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const data = await getMovies();

  return {
    props: {
      newReleases: data[0].results,
      popularMovies: data[1].results,
      topRatedMovies: data[2].results,
    },
  };
}
