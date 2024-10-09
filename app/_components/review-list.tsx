import ReviewItem from './review-item';
import fetchReviews from '@/_lib/fetch-reviews';

export default async function ReviewList({ id }: { id: string }) {
  const response = await fetchReviews(id);

  if (!response.status) return <div>오류가 발생했습니다.</div>;

  return (
    <section>
      {response.data.map(review => (
        <ReviewItem
          key={review.id}
          {...review}
        />
      ))}
    </section>
  );
}
