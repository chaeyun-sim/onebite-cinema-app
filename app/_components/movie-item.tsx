import { MovieData } from '@/types';
import Link from 'next/link';

const MovieItem = (data: MovieData) => {
  return (
    <Link href={`/movie/${data.id}`}>
      <img
        src={data.posterImgUrl}
        alt={data.title}
        width={'100%'}
      />
    </Link>
  );
};

export default MovieItem;
