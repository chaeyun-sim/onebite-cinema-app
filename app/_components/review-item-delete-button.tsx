'use client';

import Loading from '@/(with-searchbar)/search/loading';
import { deleteReviewAction } from '@/_actions/delete-review-action';
import { useActionState, useEffect, useRef } from 'react';

export default function ReviewItemDeleteButton({
  reviewId,
  movieId,
}: {
  reviewId: number;
  movieId: number;
}) {
  const ref = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(deleteReviewAction, null);

  useEffect(() => {
    if (state && !state.status) {
      alert(state.error);
    }
  }, [state]);

  return (
    <form
      ref={ref}
      action={formAction}
    >
      <input
        name='reviewId'
        value={reviewId}
        hidden
      />
      <input
        name='movieId'
        value={movieId}
        hidden
      />
      {isPending ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div
          onClick={() => ref.current?.requestSubmit()}
          style={{ cursor: 'pointer' }}
        >
          🗑️
        </div>
      )}
    </form>
  );
}
