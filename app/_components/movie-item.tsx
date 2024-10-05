import { MovieData } from '@/types';
import Link from 'next/link';
import styles from './movie-item.module.css';

const MovieItem = (data: MovieData) => {
  return (
    <div className={styles.movieItemContainer}>
      <Link
        href={`/movie/${data.id}`}
        className={styles.movieLink}
      >
        <img
          src={data.posterImgUrl}
          alt={data.title}
          className={styles.movieImage}
        />
      </Link>
    </div>
  );
};

export default MovieItem;
