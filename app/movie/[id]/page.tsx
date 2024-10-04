/* eslint-disable @next/next/no-img-element */
import { MovieData } from '@/types';
import style from './page.module.css';
import ReviewEditor from '@/_components/review-editor';
import MovieDetail from '@/_components/movie-detail';
import ReviewList from '@/_components/review-list';

export const dynamicParams = false;

export async function generateStaticParams() {
  const movies: MovieData[] = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie`).then(
    res => res.json()
  );

  return movies.map((movie: MovieData) => ({
    id: movie.id.toString(),
  }));
}

export default async function Page({ params }: { params: { id: string | string[] } }) {
  return (
    <div className={style.container}>
      <MovieDetail id={params.id as string} />
      <ReviewEditor id={params.id as string} />
      <ReviewList id={params.id as string} />
    </div>
  );
}
