'use client'
import Image from 'next/image';
import { IHeaderProps } from '../types';
import { useSession } from 'next-auth/react';

export const Header = ({ tittle, description }: IHeaderProps) => {
  const {data:session,update} = useSession()
  console.log(session)
  return (
    <div className="flex justify-between items-center pt-4 pb-2 ">
      <div className="">
        <h1 className="text-2xl font-semibold mb-2 ">{tittle}</h1>
        <p className="text-sm font-semibold text-gray-500 ">{description}</p>
      </div>
      <div className="flex items-center">
        <div className="rounded-full bg-gray-500 w-[50px] h-[50px] flex justify-center overflow-hidden items-end ">
          <Image src="/Avatar.png" width={40} height={40} alt="" />
        </div>

        <div className="ml-4 text-sm">
          <p className=" font-semibold">{session?.user?.name}</p>
          <p className="">{session?.user?.company}</p>
          <button onClick={()=>update({name:'Dim'})}>edit name</button>
        </div>
      </div>
    </div>
  );
};
