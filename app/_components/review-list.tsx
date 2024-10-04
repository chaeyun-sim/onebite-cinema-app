import { ReviewData } from '@/types';
import ReviewItem from './review-item';

async function fetchReviews(id: string) {
  const response = await fetch(`http://localhost:12345/review/movie/${id}`, {
    next: { tags: [`review-${id}`] },
  });
  if (!response.ok) throw new Error(`Review fetch failed : ${response.statusText}`);
  return await response.json();
}

export default async function ReviewList({ id }: { id: string }) {
  const reviews: ReviewData[] = await fetchReviews(id);

  return (
    <section>
      {reviews.map(review => (
        <ReviewItem
          key={review.id}
          {...review}
        />
      ))}
    </section>
  );
}
