import React from 'react'

interface Props {
  left?: boolean;
  onClick: (e: any) => void;
}

const ArrowSlider = ({ left, onClick }: Props) => {
  return (
    <svg
      onClick={onClick}
      className={`md:w-[25px] md:h-[25px] w-[15px] h-[15px] fill-white absolute top-1/2 cursor-pointer ${
        left ? 'left-2' : 'left-[auto] right-2'
      }`}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
    >
      {left && (
        <path d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z' />
      )}
      {!left && <path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />}
    </svg>
  )
}

export default ArrowSlider
