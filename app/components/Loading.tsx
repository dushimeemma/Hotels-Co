import React from 'react';

export default function Loading() {
  return (
    <div className='flex w-screen h-screen items-center justify-center'>
      <span className='loading loading-infinity loading-lg'></span>
    </div>
  );
}
