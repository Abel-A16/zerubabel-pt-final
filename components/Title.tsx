import React from 'react';

interface TitleProps {
  text: string;
}

function Title({ text }: TitleProps) {
  return <h3 className='absolute top-24 hover:tracking-[20.5px] uppercase tracking-[20px] 
  text-gray-500 text-2xl'>{text}</h3 >;
}

export default Title;