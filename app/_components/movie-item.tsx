import { MovieData } from '../types';

const MovieItem = (data: MovieData) => {
  return (
    <div>
      <img
        src={data.posterImgUrl}
        alt={data.title}
        width={'100%'}
      />
    </div>
  );
};

export default MovieItem;
