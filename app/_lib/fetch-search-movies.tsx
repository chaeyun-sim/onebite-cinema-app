import { MovieData } from '@/types';

export default async function fetchSearchMovies(q: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/search?q=${q}`);

  if (!response.ok) {
    return {
      status: false,
      data: [],
    };
  }

  const movies: MovieData[] = await response.json();
  return {
    status: true,
    data: movies,
  };
}
