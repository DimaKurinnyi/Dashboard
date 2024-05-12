'use client';
import Link from 'next/link';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function Home() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className=" h-[90%] w-[calc(100%-96px)] absolute  mt-32 flex flex-col items-center justify-center ">
      <h1 className="text-5xl font-bold mb-8 ">E-commerce Dashboard App</h1>
      <p className="text-2xl font-medium mb-8">Grow your business with our App</p>
      <div className="flex items-center gap-3 justify-center *:font-medium *:  *:p-2 *:rounded-xl mb-5 ">
        <Link className="hover:scale-110 duration-300 ease-in-out dark:text-white " href="#">
          Log in
        </Link>
        <Link
          className="hover:scale-110 duration-300 ease-in-out dark:bg-white dark:text-bg-dark text-text-color bg-bg-dark"
          href="#">
          Sing up
        </Link>
      </div>
      <div className="  mt-[150px] relative">
       {mounted ? <><Image
          className=" rounded-2xl overflow-hidden "
          src={resolvedTheme === 'dark' ? '/screen-b.png' : '/screen-w.png'}
          width={800}
          height={800}
          alt=""
        />

        <div className=" w-[1000px] absolute h-[1000px] border-solid border-[48px] dark:border-white border-black top-[-100px] right-[-100px] rounded-full -z-10"></div></>:<div className=" ">Loading</div>}
      </div>
    </div>
  );
}
