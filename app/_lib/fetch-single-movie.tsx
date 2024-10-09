import { MovieData } from '@/types';

export const fetchSingleMovie = async (id: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/${id}`, {
    cache: 'force-cache',
  });

  if (!response.ok) {
    return {
      status: false,
      data: [],
    };
  }

  const movie: MovieData = await response.json();
  return {
    status: true,
    data: movie,
  };
};
