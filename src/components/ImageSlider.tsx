'use client';
import { ImageSliderProps } from '@/types';
import { useState } from 'react';
import { FaCircle, FaRegCircle } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export default function ImageSlider({ imgUrls }: ImageSliderProps) {
  const [imgIndex, setImgIndex] = useState(0);
  return (
    <div className="w-full aspect-video relative flex overflow-hidden">
      <div className="flex">
        {imgUrls.map((url) => (
          <img
            key={url}
            src={url}
            className={`w-full transition-transform ease-in-out duration-500 h-full object-cover shrink-0 grow-0 block`}
            style={{ translate: `${-100 * imgIndex}%` }}
          />
        ))}
      </div>

      <button
        onClick={() => {
          setImgIndex((index) => {
            if (index === 0) return imgUrls.length - 1;
            return index - 1;
          });
        }}
        className="absolute top-0 bottom-0 left-0 p-1 cursor-pointer hover:bg-tertiary/20 transition-all"
      >
        <IoIosArrowBack className=" bg-tertiary/20 rounded-full size-5 m-1 fill-white" />
      </button>
      <button
        onClick={() => {
          setImgIndex((index) => {
            if (index === imgUrls.length - 1) return 0;
            return index + 1;
          });
        }}
        className="absolute top-0 bottom-0 right-0 p-1 cursor-pointer hover:bg-tertiary/20 transition-all"
      >
        <IoIosArrowForward className="bg-tertiary/20 rounded-full size-5 m-1 fill-white" />
      </button>
      <div className="absolute flex -translate-x-1/2 left-1/2 bottom-2 gap-2 bg-tertiary/20 p-2 rounded-full">
        {imgUrls.map((_, index) => (
          <button key={index} className="cursor-pointer transition-transform duration-300 hover:scale-125" onClick={() => setImgIndex(index)}>
            {index === imgIndex ? <FaCircle className='fill-white' /> : <FaRegCircle  className='fill-white' />}
          </button>
        ))}
      </div>
    </div>
  );
}
