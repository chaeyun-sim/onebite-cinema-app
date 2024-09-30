import style from './page.module.css';
import MovieItem from '@/_components/movie-item';
import { MovieData } from '@/types';

export default async function Page({
  searchParams,
}: {
  searchParams: {
    q: string;
  };
}) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/search?q=${searchParams.q}`,
    { cache: 'force-cache' }
  );

  const movies: MovieData[] = await response.json();

  return (
    <div className={style.container}>
      {movies.length > 0 ? (
        movies.map(movie => (
          <MovieItem
            key={movie.id}
            {...movie}
          />
        ))
      ) : (
        <p>검색 결과가 없습니다.</p>
      )}
    </div>
  );
}
