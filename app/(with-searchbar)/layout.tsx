import { PropsWithChildren } from 'react';
import Searchbar from '../_components/searchbar';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <Searchbar />
      {children}
    </div>
  );
}
