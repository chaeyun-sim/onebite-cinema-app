import style from './page.module.css';
import MovieItem from '@/_components/movie-item';
import { Suspense } from 'react';
import Loading from './loading';
import fetchSearchMovies from '@/_lib/fetch-search-movies';

export function generateMetadata({ searchParams }: { searchParams: { q?: string } }) {
  return {
    title: `한입시네마 | 검색 결과 - ${searchParams.q}`,
    description: `${searchParams.q} 검색 결과`,
    openGraph: {
      title: `한입시네마 | 검색 결과 - ${searchParams.q}`,
      description: `${searchParams.q} 검색 결과`,
      images: ['/thumbnail.png'],
    },
  };
}

async function SearchResult({ q }: { q: string }) {
  const response = await fetchSearchMovies(q);

  return (
    <div className={style.container}>
      {response.data.length > 0 ? (
        response.data.map(movie => (
          <MovieItem
            key={movie.id}
            data={movie}
            isRecommended
          />
        ))
      ) : (
        <p>검색 결과가 없습니다.</p>
      )}
    </div>
  );
}

export default function Page({
  searchParams,
}: {
  searchParams: {
    q: string;
  };
}) {
  return (
    <Suspense
      key={searchParams.q || ''}
      fallback={<Loading size={40} />}
    >
      <SearchResult q={searchParams.q || ''} />
    </Suspense>
  );
}
