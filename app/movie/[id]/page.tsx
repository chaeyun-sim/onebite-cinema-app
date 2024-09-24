import style from './page.module.css';
import movies from '../../_mock/dummy.json';

export default function Page({ params }: { params: { id: string | string[] } }) {
  const movie = movies.find(el => el.id === Number(params.id));

  if (!movie) return <div>Not Found</div>;

  return (
    <div className={style.container}>
      <div
        className={style.cover_img_container}
        style={{
          backgroundImage: `url('${movie.posterImgUrl}')`,
        }}
      >
        <img src={movie.posterImgUrl} />
      </div>
      <div className={style.title}>{movie.title}</div>

      <div className={style.release_data}>
        {movie.releaseDate} / {movie.genres.join(', ')} / {movie.runtime}분
      </div>
      <div className={style.company}>{movie.company}</div>
      <div className={style.subTitle}>{movie.subTitle}</div>
      <div className={style.description}>{movie.description}</div>
    </div>
  );
}
