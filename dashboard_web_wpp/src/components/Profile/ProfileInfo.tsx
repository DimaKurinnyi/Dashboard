'use client';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

import { RiEditLine } from 'react-icons/ri';

import { ProfileHeader } from './ProfileHeader';

export const ProfileInfo = () => {
  const { data: session, update } = useSession();
  console.log(session?.user);
  return (
    <div>
      <ProfileHeader tittle="My Profile" />
      <div className="flex items-center justify-between p-4 border-gray-200 border-solid border rounded-3xl mt-8  ">
        <div className="flex items-center">
        <div className="rounded-full h-[80px] w-[80px] text-center overflow-hidden  ">
          <Image
            className=" w-full "
            src={session?.user?.image ?session?.user?.image:"/Avatar.png"}
            width={80}
            height={80}
            alt=""
          /></div>
          <div className=" ml-4">
            <h3 className=" text-lg font-medium">{session?.user?.name}</h3>
            <p>Team Lid</p>
            <p>{session?.user?.company}</p>
          </div>
        </div>
        <Link
          href="/profile/edit"
          className="flex items-center gap-2 p-2 border-gray-200 border-solid border rounded-3xl hover:bg-gray-300 *:hover:text-black *:text-gray-400 duration-300 ease-in-out *:duration-300 *:ease-in-out ">
          <span className=" font-medium text-sm ">Edit</span>
          <RiEditLine size={18} />
        </Link>
      </div>
      <div className="p-4 border-gray-200 border-solid border rounded-3xl mt-8">
        <h1 className="text-lg font-medium  ">Personal Information</h1>
        <div className="flex justify-around mt-8">
          <div className="flex flex-col items-start justify-around  gap-8">
            <div className="">
              <p className=" font-medium text-sm text-gray-400">Full Name</p>
              <span>{session?.user?.name}</span>
            </div>
            <div className="">
              <p className=" font-medium text-sm text-gray-400">Email address</p>
              <span>{session?.user?.email}</span>
            </div>
          </div>
          <div className="flex flex-col items-start justify-around mt-8 gap-8">
            <div className="">
              <p className=" font-medium text-sm text-gray-400">Phone</p>
              <span>{session?.user?.phone}</span>
            </div>
            <div className="">
              <p className=" font-medium text-sm text-gray-400">Date of register</p>
              <span>{session?.expires.split('T')[0]}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 border-gray-200 border-solid border rounded-3xl mt-8">
        <h1 className="text-lg font-medium">Company Information</h1>
        <div className="flex justify-around mt-8">
          <div className="">
            <p className=" font-medium text-sm text-gray-400">Company name</p>
            <span>{session?.user?.company}</span>
          </div>
          <div className="">
            <p className=" font-medium text-sm text-gray-400">Website</p>
            <a href={`https://${session?.user?.Website}`} target='_blank'>
              <span className=' underline text-blue-700'>{session?.user?.Website}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
