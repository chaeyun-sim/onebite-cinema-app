import Image from 'next/image';
import style from './page.module.css';

export default function Loading() {
  return (
    <div className={style.loading}>
      <Image
        src='/loading.gif'
        alt='loading'
        width={40}
        height='40'
      />
    </div>
  );
}
