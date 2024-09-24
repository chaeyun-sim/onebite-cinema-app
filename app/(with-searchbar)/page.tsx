import Head from 'next/head';
import style from './page.module.css';
import movies from '@/_mock/dummy.json';
import Link from 'next/link';
import { MovieData } from '@/types';

const Page = () => {
  return (
    <>
      <Head>
        <title>한입시네마</title>
        <meta
          property='og:image'
          content='/thumbnail.png'
        />
        <meta
          property='og:title'
          content='한입시네마'
        />
        <meta
          property='og:description'
          content='한입 시네마에 등록된 영화들을 만나보세요!'
        />
      </Head>
      <div className={style.container}>
        <section>
          <h3>지금 가장 추천하는 영화</h3>
          <div className={`${style.movie_container} ${style.three_sections}`}>
            {movies?.slice(0, 3).map((item: MovieData) => (
              <Link
                key={item.id}
                href={`/movie/${item.id}`}
              >
                <img
                  src={item.posterImgUrl}
                  alt={item.title}
                  width={200}
                  height={300}
                />
              </Link>
            ))}
          </div>
        </section>
        <section>
          <h3>등록된 모든 영화</h3>
          <div className={`${style.movie_container} ${style.five_sections}`}>
            {movies?.slice(3).map((item: MovieData) => (
              <Link
                key={item.id}
                href={`/movie/${item.id}`}
              >
                <img
                  src={item.posterImgUrl}
                  alt={item.title}
                  width={200}
                  height={300}
                />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;
