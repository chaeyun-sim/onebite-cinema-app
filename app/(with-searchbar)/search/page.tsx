import style from './page.module.css';
import MovieItem from '@/_components/movie-item';
import { delay } from '@/_utils/delay';
import { MovieData } from '@/types';
import { Suspense } from 'react';
import Loading from './loading';

async function SearchResult({ q }: { q: string }) {
  await delay(1500);
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/search?q=${q}`);

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

export default function Page({
  searchParams,
}: {
  searchParams: {
    q: string;
  };
}) {
  return (
    <Suspense
      key={searchParams.q || ''}
      fallback={<Loading />}
    >
      <SearchResult q={searchParams.q || ''} />
    </Suspense>
  );
}
