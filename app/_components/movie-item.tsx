import Link from 'next/link';
import { MovieData } from '../types';
import style from './movie-item.module.css';

export default function MovieItem(data: MovieData) {
  return (
    <Link
      className={style.container}
      href={`/movie/${data.id}`}
    >
      <img src={data.posterImgUrl} />
    </Link>
  );
}
