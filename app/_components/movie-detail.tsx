import { MovieData } from '@/types';
import style from './movie-detail.module.css';

async function fetchMovieDetail(id: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/${id}`);
  if (!response.ok) throw new Error(`Failed to fetch movie data`);
  return await response.json();
}

export default async function MovieDetail({ id }: { id: string }) {
  const singleMovie: MovieData = await fetchMovieDetail(id);

  if (!singleMovie) return <div>Not Found</div>;

  return (
    <section>
      <div
        className={style.cover_img_container}
        style={{
          backgroundImage: `url('${singleMovie.posterImgUrl}')`,
        }}
      >
        <img src={singleMovie.posterImgUrl} />
      </div>
      <h2 className={style.title}>{singleMovie.title}</h2>
      <div className={style.release_data}>
        {singleMovie.releaseDate} / {singleMovie.genres.join(', ')} / {singleMovie.runtime}분
      </div>
      <div className={style.company}>{singleMovie.company}</div>

      <div className={style.info_container}>
        <div className={style.subTitle}>{singleMovie.subTitle}</div>
        <div className={style.description}>{singleMovie.description}</div>
      </div>
    </section>
  );
}
