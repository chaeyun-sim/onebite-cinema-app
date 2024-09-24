import style from './page.module.css';
import movies from '../_mock/dummy.json';
import Link from 'next/link';
import { MovieData } from '../types';

const Page = () => {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 가장 추천하는 영화</h3>
        <div className={`${style.movie_container} ${style.three_sections}`}>
          {movies?.slice(0, 3).map((item: MovieData) => (
            <Link
              key={item.id}
              href={`/movie/${item.id}`}
            >
              <img src={item.posterImgUrl} />
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
              <img src={item.posterImgUrl} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
