import { MovieData } from '@/types';
import style from './page.module.css';
import ReviewEditor from '@/_components/review-editor';
import MovieDetail from '@/_components/movie-detail';
import ReviewList from '@/_components/review-list';
import { fetchAllMovies } from '@/_lib/fetch-all-movies';
import { fetchSingleMovie } from '@/_lib/fetch-single-movie';

export default async function Page({ params }: { params: { id: string | string[] } }) {
  const response = await fetchSingleMovie(params.id as string);

  if (!response.status) {
    return <div>Movie not found</div>;
  }

  const movie = response.data as MovieData;

  return (
    <div className={style.container}>
      <MovieDetail data={movie} />
      <ReviewEditor id={params.id as string} />
      <ReviewList id={params.id as string} />
    </div>
  );
}

export async function generateStaticParams() {
  const response = await fetchAllMovies();
  const movies: MovieData[] = response.data;

  return movies.map(movie => ({
    id: String(movie.id),
  }));
}

export const dynamicParams = false;
