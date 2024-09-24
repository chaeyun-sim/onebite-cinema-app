import './globals.css';
import Link from 'next/link';
import style from './layout.module.css';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <div className={style.container}>
          <header>
            <Link href={'/'}>ONEBITE CINEMA</Link>
          </header>
          <main>{children}</main>
          <footer className={style.footer}>제작 @chaeyun-sim</footer>
        </div>
      </body>
    </html>
  );
}
