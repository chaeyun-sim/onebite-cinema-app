import style from './page.module.css';
import movies from '../../_mock/dummy.json';
import MovieItem from '@/app/_components/movie-item';
import { Suspense } from 'react';

export default function Page({
  searchParams,
}: {
  searchParams: {
    q: string;
  };
}) {
  const filtered = movies.filter(el => el.title.includes(searchParams.q));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={style.container}>
        {filtered.map(movie => (
          <MovieItem
            key={movie.id}
            {...movie}
          />
        ))}
      </div>
    </Suspense>
  );
}
