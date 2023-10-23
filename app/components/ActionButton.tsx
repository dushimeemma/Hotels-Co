import React, { ReactNode } from 'react';

interface Props {
  handleAction: any;
  children: ReactNode;
}

export default function ActionButton({ handleAction, children }: Props) {
  return (
    <button
      className='btn btn-circle'
      onClick={handleAction}
    >
      {children}
    </button>
  );
}
