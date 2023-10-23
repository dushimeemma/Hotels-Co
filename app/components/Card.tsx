'use client';
import { MouseEventHandler } from 'react';
import { Room } from '../utils/get-rooms';
import Carsoul from './Carsoul';
import Badge from './Badge';

interface Props {
  item: Room;
  handleClick?: MouseEventHandler<HTMLDivElement>;
}

export default function Card({ item, handleClick }: Props) {
  return (
    <div
      className='card w-96 h-96 bg-base-100 shadow-xl my-6'
      onClick={handleClick}
    >
      <figure>
        <Carsoul imagesArr={item.avatars} />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>
          {item.name}
          <Badge classes='w-24 flex items-center justify-around p-3'>
            ⭐️ {item.ratings}
          </Badge>
        </h2>
        <p>{item.location}</p>
        <div className='card-actions justify-end'>
          <Badge>{item.availability}</Badge>
          <Badge>$ {item.price}</Badge>
        </div>
      </div>
    </div>
  );
}
