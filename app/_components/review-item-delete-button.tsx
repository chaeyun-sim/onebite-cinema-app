'use client';

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
          <img
            src='/loading.gif'
            style={{ width: 20, height: 20 }}
          />
        </div>
      ) : (
        <div
          onClick={() => ref.current?.requestSubmit()}
          style={{ cursor: 'pointer' }}
        >
          🗑️ 리뷰 삭제하기
        </div>
      )}
    </form>
  );
}
