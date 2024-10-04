import './globals.css';
import Link from 'next/link';
import style from './layout.module.css';
import { ReactNode } from 'react';
import { MovieData } from './types';
import Image from 'next/image';

async function Footer() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie`, {
    cache: 'force-cache',
  });

  if (!response.ok) {
    return <footer className={style.footer}>제작 @chaeyun-sim</footer>;
  }

  const movies: MovieData[] = await response.json();
  const count = movies.length;

  return (
    <footer className={style.footer}>
      <div>제작 @chaeyun-sim</div>
      <div>{count}개의 영화가 등록되어있습니다.</div>
    </footer>
  );
}

export default function RootLayout({ children, modal }: { children: ReactNode; modal: ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <div className={style.container}>
          <header>
            <Link href={'/'}>
              <Image
                src='/logo.png'
                alt='logo'
                width='250'
                height='42'
              />
            </Link>
          </header>
          <main className={style.main}>{children}</main>
          <Footer />
        </div>
        {modal}
        <div id='modal-root'></div>
      </body>
    </html>
  );
}
