import { MovieData } from '@/types';
import style from './movie-detail.module.css';
import Image from 'next/image';

export default async function MovieDetail({ data }: { data: MovieData }) {
  if (!data) return <div>Not Found</div>;

  return (
    <section>
      <div
        className={style.cover_img_container}
        style={{
          backgroundImage: `url('${data.posterImgUrl}')`,
        }}
      >
        <Image
          src={data.posterImgUrl}
          alt='영화 상세 이미지'
          width={234}
          height={350}
        />
      </div>
      <h2 className={style.title}>{data.title}</h2>
      <div className={style.release_data}>
        {data.releaseDate} / {data.genres.join(', ')} / {data.runtime}분
      </div>
      <div className={style.company}>{data.company}</div>

      <div className={style.info_container}>
        <div className={style.subTitle}>{data.subTitle}</div>
        <div className={style.description}>{data.description}</div>
      </div>
    </section>
  );
}
