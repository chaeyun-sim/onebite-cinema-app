import style from './review-editor.module.css';

interface ReviewEditorProps {
  id: string;
  handleCreateReview: (formData: FormData) => Promise<void>;
}

export default function ReviewEditor({ id, handleCreateReview }: ReviewEditorProps) {
  return (
    <section>
      <form
        action={handleCreateReview}
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
        />
        <div className={style.submit_container}>
          <input
            required
            name='author'
            placeholder='작성자'
          />
          <button type='submit'>작성하기</button>
        </div>
      </form>
    </section>
  );
}
