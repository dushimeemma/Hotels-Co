import Image from 'next/image';
import { Room } from '../../utils/get-rooms';
import Badge from '@/app/components/Badge';
import { Suspense } from 'react';
import Loading from '@/app/components/Loading';

interface Props {
  params: { id: string };
}

export default async function Room({ params }: Props) {
  const url = `https://6534b04de1b6f4c59046dd1b.mockapi.io/api/v1/rooms/${params.id}`;
  const response = await fetch(url);
  const data = await response.json();

  return (
    <Suspense fallback={<Loading />}>
      <div className='flex items-center justify-center h-screen w-screen px-24'>
        <div className='carousel rounded-box'>
          {(data as Room).avatars.map((avatar, index) => (
            <div
              className='carousel-item'
              key={index}
            >
              <Image
                src={avatar}
                alt='Hotel'
                width='300'
                height='300'
                className='w-full'
              />
            </div>
          ))}
        </div>
        <div className='card-body'>
          <h2 className='card-title'>
            {data.name}
            <Badge classes='w-24 flex items-center justify-around p-3'>
              ⭐️ {data.ratings}
            </Badge>
          </h2>
          <p>{data.location}</p>
          <div className='card-actions justify-end'>
            <Badge>{data.availability}</Badge>
            <Badge>$ {data.price}</Badge>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
