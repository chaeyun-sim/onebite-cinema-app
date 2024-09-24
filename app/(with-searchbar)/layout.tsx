import { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <div>Searchbar Layout</div>
      {children}
    </div>
  );
}
