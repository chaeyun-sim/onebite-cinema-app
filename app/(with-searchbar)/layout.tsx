'use client';

import { PropsWithChildren } from 'react';
import Searchbar from './searchbar';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <Searchbar />
      {children}
    </div>
  );
}
