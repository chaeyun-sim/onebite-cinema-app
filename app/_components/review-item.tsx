import { ReviewData } from '@/types';
import style from './review-item.module.css';

export default function ReviewItem(props: ReviewData) {
  const { content, author, createdAt, id } = props;
  const WEEK = ['일', '월', '화', '수', '목', '금', '토'];

  const renderDate = () => {
    const date = new Date(createdAt);
    return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}. ${
      WEEK[date.getDay()]
    } 작성됨`;
  };

  return (
    <div className={style.container}>
      <div className={style.author_container}>
        <div className={style.author}>{author}</div>
        <div className={style.date}>{renderDate()}</div>
      </div>
      <div className={style.content}>{content}</div>
      <div className={style.delete_btn}>🗑️ 리뷰 삭제하기</div>
    </div>
  );
}
