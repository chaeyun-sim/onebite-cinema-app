import { MovieData } from '@/types';

export const fetchAllMovies = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie`, {
    cache: 'force-cache',
  });

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
};
