'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import style from './serachbar.module.css';

export default function Searchbar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const q = searchParams.get('q');
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    if (q) {
      setKeyword(q);
    }
  }, [q]);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (!keyword || keyword === q) return;

    router.push(`/search?q=${keyword}`);
  };

  return (
    <form
      onSubmit={submitHandler}
      className={style.container}
    >
      <input
        placeholder='검색어를 입력하세요...'
        value={keyword}
        onChange={changeHandler}
        aria-label='검색어 입력'
      />
      <button
        type='submit'
        aria-label='검색 실행'
      >
        검색
      </button>
    </form>
  );
}
