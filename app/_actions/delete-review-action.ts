'use server';

import { delay } from '@/_utils/delay';
import { revalidateTag } from 'next/cache';

export async function deleteReviewAction(_: any, formData: FormData) {
  const reviewId = formData.get('reviewId')?.toString();
  const movieId = formData.get('movieId')?.toString();

  if (!reviewId) {
    return {
      status: false,
      errorr: '삭제할 리뷰가 없습니다.',
    };
  }

  try {
    await delay(500);
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/review/${reviewId}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error(response.statusText);

    revalidateTag(`review-${movieId}`);
    return {
      status: true,
      error: '',
    };
  } catch (err) {
    console.error(err);
  }
}
