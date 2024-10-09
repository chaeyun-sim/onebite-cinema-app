import Image from 'next/image';
import style from './page.module.css';

export default function Loading({ size }: { size?: number }) {
  return (
    <div className={style.loading}>
      <Image
        src='/loading.gif'
        alt='로딩 이미지'
        width={size || 20}
        height={size || 20}
      />
    </div>
  );
}
