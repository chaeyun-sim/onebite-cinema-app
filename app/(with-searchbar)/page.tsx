import Head from 'next/head';
import style from './page.module.css';
import { MovieData } from '@/types';
import MovieItem from '@/_components/movie-item';

async function AllMovies() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie`, {
    cache: 'force-cache',
  });
  if (!response.ok) {
    return <div>오류가 발생했습니다.</div>;
  }

  const allBooks: MovieData[] = await response.json();

  return (
    <div className={`${style.movie_container} ${style.five_sections}`}>
      {allBooks.map(book => (
        <MovieItem
          key={book.id}
          {...book}
        />
      ))}
    </div>
  );
}

async function RecommendedMovies() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/random`, {
    next: { revalidate: 3 },
  });
  if (!response.ok) {
    return <div>오류가 발생했습니다.</div>;
  }

  const recoBooks: MovieData[] = await response.json();

  return (
    <div className={`${style.movie_container} ${style.three_sections}`}>
      {recoBooks.map(book => (
        <MovieItem
          key={book.id}
          {...book}
        />
      ))}
    </div>
  );
}

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

          {RecommendedMovies()}
        </section>
        <section>
          <h3>등록된 모든 영화</h3>
          {AllMovies()}
        </section>
      </div>
    </>
  );
};

export default Page;
