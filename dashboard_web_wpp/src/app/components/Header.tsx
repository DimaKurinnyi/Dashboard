import Image from 'next/image';
import { IHeaderProps } from '../types';

export const Header = ({ tittle, description }: IHeaderProps) => {
  return (
    <div className="flex justify-between items-center pt-4 pb-10 ">
      <div className="">
        <h1 className='text-2xl font-semibold mb-2 '>{tittle}</h1>
        <p className='text-sm font-semibold text-gray-500 '>{description}</p>
      </div>
      <div className="flex items-center">
        <div className="rounded-full bg-gray-500 w-[50px] h-[50px] flex justify-center overflow-hidden items-end ">
          <Image src="/Avatar.png" width={40} height={40} alt="" />
        </div>

        <div className="ml-4 text-sm">
          <p className=" font-semibold">Jak Djeferson</p>
          <p className="">ARB zoo.</p>
        </div>
      </div>
    </div>
  );
};
