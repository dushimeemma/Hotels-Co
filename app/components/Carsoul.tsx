import { useState } from 'react';
import Image from 'next/image';
import ActionButton from './ActionButton';

enum Action {
  prev = 'prev',
  next = 'next',
}

interface Props {
  imagesArr: string[];
}

export default function Carsoul({ imagesArr }: Props) {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const handleNextOrPrevImage = (action: Action) => {
    if (action.toLowerCase() === Action.prev) {
      if (currentIdx == 0) {
        setCurrentIdx(imagesArr.length - 1);
      } else {
        setCurrentIdx((prevIndx) => prevIndx - 1);
      }
    } else if (action.toLowerCase() === Action.next) {
      if (currentIdx == imagesArr.length - 1) {
        setCurrentIdx(0);
      } else {
        setCurrentIdx((prevIndx) => prevIndx + 1);
      }
    }
  };
  return (
    <div className='carousel w-full'>
      <div className='carousel-item relative w-full'>
        <Image
          src={imagesArr[currentIdx]}
          alt='Hotel'
          width='300'
          height='300'
          className='w-full'
        />
        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <ActionButton handleAction={() => handleNextOrPrevImage(Action.prev)}>
            ❮
          </ActionButton>
          <ActionButton handleAction={() => handleNextOrPrevImage(Action.next)}>
            ❯
          </ActionButton>
        </div>
      </div>
    </div>
  );
}
