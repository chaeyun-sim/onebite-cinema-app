import { ReviewData } from '@/types';

export default async function fetchReviews(id: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/review/movie/${id}`, {
    next: { tags: [`review-${id}`] },
  });

  if (!response.ok) {
    return {
      status: false,
      data: [],
    };
  }

  const review: ReviewData[] = await response.json();
  return {
    status: true,
    data: review,
  };
}
