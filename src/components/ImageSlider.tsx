import { ImageSliderProps } from '@/types';
import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export default function ImageSlider({ imgUrls }: ImageSliderProps) {
  const [imgIndex, setImgIndex] = useState(0);
  return (
    <div>
      <img src={imgUrls[imgIndex]} />
      <button>
        <IoIosArrowBack />
      </button>
      <button>
        <IoIosArrowForward />
      </button>
    </div>
  );
}
