'use client';

import { MouseEventHandler, ReactNode } from 'react';

interface Props {
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

export default function Button({ handleClick, children }: Props) {
  return (
    <button
      className='btn btn-outline'
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
