import { PropsWithChildren, Suspense } from 'react';
import Searchbar from '@/_components/searchbar';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Searchbar />
      </Suspense>
      {children}
    </div>
  );
}
