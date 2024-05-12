'use client';
import Link from 'next/link';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Loader } from '@/components';

export default function Home() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Loader/>;
  }

  return (
    <div className=" h-[90%] w-[calc(100%-96px)] absolute  mt-32 flex flex-col items-center justify-center ">
      <h1 className="text-5xl font-bold mb-8 ">E-commerce Dashboard App</h1>
      <p className="text-2xl font-medium mb-8">Grow your business with our App</p>
      <div className="flex items-center gap-3 justify-center *:font-medium *:  *:p-2 *:rounded-xl mb-5 ">
        <Link className="hover:scale-110 duration-300 ease-in-out dark:text-white " href="/login">
          Log in
        </Link>
        <Link
          className="hover:scale-110 duration-300 ease-in-out dark:bg-white dark:text-bg-dark text-text-color bg-bg-dark"
          href="/register">
          Sing up
        </Link>
      </div>

      <div className="  mt-[150px] relative">
        <Image
          className=" rounded-2xl overflow-hidden w-full h-auto"
          src={resolvedTheme === 'dark' ? '/screen-b.png' : '/screen-w.png'}
          width={900}
          height={900}
          alt=""
        />

        <div className=" w-[1160px] absolute h-[1160px]  p-[56px] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 dark:border-white  top-[-100px] right-[-100px] rounded-full -z-10 ">
          <div className="rounded-full h-full w-full bg-white dark:bg-bg-dark duration-500 ease-in-out"></div>
        </div>
      </div>
    </div>
  );
}
