'use client';

import { createReviewAction } from '@/_actions/create-review-action';
import style from './review-editor.module.css';
import { useActionState, useEffect } from 'react';

interface ReviewEditorProps {
  id: string;
}

export default function ReviewEditor({ id }: ReviewEditorProps) {
  const [state, formAction, isPending] = useActionState(createReviewAction, null);

  useEffect(() => {
    if (state && !state.status) {
      alert(state.error);
    }
  }, [state]);

  return (
    <section>
      <form
        action={formAction}
        className={style.form_container}
      >
        <input
          name='movieId'
          defaultValue={id}
          hidden
        />
        <textarea
          required
          name='content'
          placeholder='리뷰 내용'
          disabled={isPending}
          style={{ backgroundColor: isPending ? '#ffffff10' : 'transparent' }}
        />
        <div className={style.submit_container}>
          <input
            required
            name='author'
            placeholder='작성자'
            disabled={isPending}
            style={{ backgroundColor: isPending ? '#ffffff10' : 'transparent' }}
          />
          {isPending ? (
            <div className={style.loading}>
              <img
                src='/loading.gif'
                style={{ width: 20, height: 20 }}
              />
            </div>
          ) : (
            <button
              type='submit'
              disabled={isPending}
            >
              작성하기
            </button>
          )}
        </div>
      </form>
    </section>
  );
}
