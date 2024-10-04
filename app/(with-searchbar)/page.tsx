import style from './page.module.css';
import { MovieData } from '@/types';
import MovieItem from '@/_components/movie-item';
import React, { Suspense } from 'react';
import { delay } from '@/_utils/delay';
import MovieItemSkeleton from '@/_components/skeleton/movie-item-skeleton';

export const dynamic = 'force-dynamic';

async function AllMovies() {
  await delay(1500);
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie`, {
    cache: 'force-cache',
  });
  if (!response.ok) {
    return <div>오류가 발생했습니다.</div>;
  }

  const allMovies: MovieData[] = await response.json();

  return (
    <div className={`${style.movie_container} ${style.five_sections}`}>
      {allMovies.map(movie => (
        <MovieItem
          key={movie.id}
          {...movie}
        />
      ))}
    </div>
  );
}

async function RecommendedMovies() {
  await delay(3000);
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/random`, {
    next: { revalidate: 3 },
  });
  if (!response.ok) {
    return <div>오류가 발생했습니다.</div>;
  }

  const recoMovies: MovieData[] = await response.json();

  return (
    <div className={`${style.movie_container} ${style.three_sections}`}>
      {recoMovies.map(movie => (
        <MovieItem
          key={movie.id}
          {...movie}
        />
      ))}
    </div>
  );
}

const Page = () => {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 가장 추천하는 영화</h3>
        <Suspense
          fallback={
            <MovieItemSkeleton
              numOfColumn={3}
              totalCount={3}
            />
          }
        >
          <RecommendedMovies />
        </Suspense>
      </section>
      <section>
        <h3>등록된 모든 영화</h3>
        <Suspense
          fallback={
            <MovieItemSkeleton
              numOfColumn={5}
              totalCount={10}
            />
          }
        >
          <AllMovies />
        </Suspense>
      </section>
    </div>
  );
};

export default Page;
