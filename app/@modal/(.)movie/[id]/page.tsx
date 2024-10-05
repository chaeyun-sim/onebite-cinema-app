'use client';

import Modal from '@/_components/modal';
import MoviePage from '../../../movie/[id]/page';
import { useEffect } from 'react';

export default function Page(props: any) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div>
      <Modal>
        <MoviePage {...props} />
      </Modal>
    </div>
  );
}
