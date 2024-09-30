import style from './movie-item-skeleton.module.css';

export default function MovieItemSkeleton({
  numOfColumn = 3,
  totalCount,
}: {
  numOfColumn: number;
  totalCount: number;
}) {
  return (
    <div className={`${style.container}`}>
      {Array.from({ length: totalCount / numOfColumn }).map((_, idx) => (
        <div
          key={idx}
          className={`${style.container} ${
            numOfColumn === 3 ? style.three_sections : style.five_sections
          }`}
        >
          {Array.from({ length: numOfColumn }).map((_, index) => (
            <div
              key={index}
              className={style.skeleton_container}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
