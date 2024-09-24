import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ONEBITE CINEMA',
  description: 'one bite cinema',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <div>Global Layout</div>
        {children}
      </body>
    </html>
  );
}
