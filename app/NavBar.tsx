'use client';

import Link from 'next/link';
import Button from './components/Button';
import { useContext } from 'react';
import { ThemeContext } from './utils/theme';

export function NavBar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className='flex w-screen h-24 items-center justify-between px-6 border-b-2 border-b-light'>
      <Link
        href='/'
        className='font-bold text-2xl flex items-center justify-center'
      >
        🏩 Hotels&Co
      </Link>
      <Button handleClick={toggleTheme}>
        {theme === 'light' ? '🌩 dark' : '🌦 light'}
      </Button>
    </div>
  );
}
