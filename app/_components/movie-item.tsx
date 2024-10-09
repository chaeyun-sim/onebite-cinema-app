'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './movie-item.module.css';
import { MovieData } from '@/types';

const MovieItem = ({ data, isRecommended }: { data: MovieData; isRecommended?: boolean }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    router.push(`/movie/${data.id}`);
  };

  return (
    <div
      className={styles.movieItemContainer}
      style={{
        maxWidth: isRecommended ? '262px' : '154px',
        maxHeight: isRecommended ? '392px' : '231px',
      }}
    >
      <div
        className={styles.movieLink}
        onClick={handleClick}
        style={{ cursor: 'pointer', position: 'relative' }}
      >
        {isLoading && (
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              backgroundColor: '#222222b7',
            }}
          >
            <Image
              src='/loading.gif'
              alt='로딩 이미지'
              width={80}
              height={80}
              style={{ width: '80px', height: '80px' }}
            />
          </div>
        )}
        <Image
          src={data.posterImgUrl}
          alt={data.title}
          width={262}
          height={392}
          className={styles.movieImage}
        />
      </div>
    </div>
  );
};

export default MovieItem;
