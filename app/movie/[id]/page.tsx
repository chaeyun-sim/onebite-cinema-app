import { MovieData } from '@/types';
import style from './page.module.css';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const movies: MovieData[] = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie`).then(
    res => res.json()
  );

  return movies.map((movie: MovieData) => ({
    id: movie.id.toString(),
  }));
}

export default async function Page({ params }: { params: { id: string | string[] } }) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/${params.id}`, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) return <div>오류가 발생했습니다.</div>;
  if (response.status === 404) notFound();

  const singleMovie: MovieData = await response.json();

  if (!singleMovie) return <div>Not Found</div>;

  return (
    <div className={style.container}>
      <div
        className={style.cover_img_container}
        style={{
          backgroundImage: `url('${singleMovie.posterImgUrl}')`,
        }}
      >
        <img src={singleMovie.posterImgUrl} />
      </div>
      <div className={style.title}>{singleMovie.title}</div>

      <div className={style.release_data}>
        {singleMovie.releaseDate} / {singleMovie.genres.join(', ')} / {singleMovie.runtime}분
      </div>
      <div className={style.company}>{singleMovie.company}</div>
      <div className={style.subTitle}>{singleMovie.subTitle}</div>
      <div className={style.description}>{singleMovie.description}</div>
    </div>
  );
}
