'use client';
import { useState } from 'react';
import { useQuery } from 'react-query';
import Card from './components/Card';
import { Room, fetchRooms } from './utils/get-rooms';
import Loading from './components/Loading';
import Button from './components/Button';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [offset, setOffset] = useState<number>(0);
  const [limit, setLimit] = useState<number>(6);
  const { data, isLoading } = useQuery('rooms', fetchRooms);
  const router = useRouter();

  const scrollToBottom = () => {
    const windowHeight = window.innerHeight;
    window.scrollTo(0, windowHeight);
    setLimit((prevLimit) => prevLimit + 3);
  };

  const handleOpenNewWidow = (e: any, data: Room) => {
    if ((e.target as HTMLElement).tagName != 'BUTTON') {
      const url = `/rooms/${data.id}`;
      const win = window.open(url, '_blank');
      if (win != null) {
        win.focus();
      } else {
        router.push(url);
      }
    }
  };

  return isLoading ? (
    <Loading data-testid='loading' />
  ) : (
    <main className='flex flex-col min-h-screen items-center justify-between p-24'>
      <div className='flex flex-wrap min-h-screen items-center justify-between'>
        {data?.slice(offset, limit).map((data) => (
          <Card
            key={data.id}
            item={data}
            handleClick={(e) => handleOpenNewWidow(e, data)}
          />
        ))}
      </div>
      {data!.length > limit && (
        <Button handleClick={scrollToBottom}>load more...</Button>
      )}
    </main>
  );
}
