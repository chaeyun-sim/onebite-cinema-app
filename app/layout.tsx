import './globals.css';
import Link from 'next/link';
import style from './layout.module.css';
import { ReactNode } from 'react';
import Image from 'next/image';
import { fetchAllMovies } from './_lib/fetch-all-movies';

async function Footer() {
  const response = await fetchAllMovies();
  const count = response.data.length;

  return (
    <footer className={style.footer}>
      <div>제작 @chaeyun-sim</div>
      {response.status && <div>{count}개의 영화가 등록되어있습니다.</div>}
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
                width={250}
                height={42}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '250px',
                }}
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
