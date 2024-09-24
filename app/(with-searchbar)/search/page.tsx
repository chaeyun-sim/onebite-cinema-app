import style from './page.module.css';
import movies from '../../_mock/dummy.json';
import MovieItem from '@/app/_components/movie-item';

export default function Page({
  searchParams,
}: {
  searchParams: {
    q: string;
  };
}) {
  const filtered = movies.filter(el => el.title.includes(searchParams.q));

  return (
    <div className={style.container}>
      {filtered.map(movie => (
        <MovieItem
          key={movie.id}
          {...movie}
        />
      ))}
    </div>
  );
}
