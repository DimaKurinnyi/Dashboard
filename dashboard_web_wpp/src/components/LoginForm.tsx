'use client';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { BsBook } from 'react-icons/bs';
import { GoArrowRight, GoPeople } from 'react-icons/go';
import { MdArrowCircleUp, MdOutlineWatchLater } from 'react-icons/md';

export const LoginForm = () => {
  const [pending, setPending] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const router = useRouter();

  const handlerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    try {
      const res = await signIn('credentials', {
        email,
        password,
        callbackUrl: `${window.location.origin}`,
        redirect: false,
      });
      if (res?.error) {
        setError(res?.error);
        setPending(false);
        console.log(res);
        return;
      }
      setPending(false);
      return router.push('/');
    } catch (err) {
      console.log(err);
    }
  };

  const infoLinks = [
    { tittle: 'Support', description: 'Get guidance from our Support', icon: <BsBook size={20} /> },
    {
      tittle: 'Product Roadmap',
      description: 'Browse and vot1e on what`s next',
      icon: <MdOutlineWatchLater size={20} />,
    },
    {
      tittle: 'Latest releases',
      description: 'See new features and updates',
      icon: <MdArrowCircleUp size={20} />,
    },
    {
      tittle: 'Join our Slack Community',
      description: 'Discuss about ...',
      icon: <GoPeople size={20} />,
    },
  ];
  return (
    <div className="flex justify-center items-center h-full *:h-[550px] *:w-[500px] *:justify-center *:flex *:flex-col *:shadow-2xl *:shadow-gray-900/40 dark:*:shadow-slate-400/50 dark:*:shadow-2xl ">
      <div className=" dark:bg-bg-dark items-center border-solid border-bg-dark border dark:border-white rounded-l-xl">
        <Image src="/dashboard.png" width={60} height={60} alt="" />
        <h1 className=" font-semibold text-2xl">Welcome back</h1>

        <p className=" text-xs mb-4">Please enter you details</p>
        {error && <div className="mb-2 text-red-600">{error}</div>}

        <form onSubmit={handlerSubmit} className="flex flex-col mb-6 ">
          <p className=" text-xs font-medium mb-1">Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email"
            className="mb-4 border-solid border-gray-300 border py-1 px-4   "
          />
          <p className=" text-xs font-medium mb-1">Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4 border-solid border-gray-300 border py-1 px-4   "
            type="password"
            placeholder="password"
          />
          {!pending ? (
            <button className="hover:scale-105 duration-300 ease-in-out dark:bg-white dark:text-bg-dark text-text-color bg-bg-dark font-medium   p-1  rounded-xl">
              Login
            </button>
          ) : (
            <div className="flex justify-center">
              <svg
                className=" animate-spin h-7 w-7 text-black  dark:text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
          )}
        </form>

        <div className=" text-sm">
          Don`t have an account?
          <Link href={'/register'}>
            <span className=" font-semibold underline">Register</span>
          </Link>
        </div>
      </div>
      <div className=" bg-bg-dark text-text-color px-10 dark:bg-white dark:text-black ">
        {infoLinks.map((infoLink, index) => (
          <div key={index} className="flex justify-between items-center mb-4 cursor-pointer group">
            <div className="flex justify-between items-center gap-4">
              <div className=" p-3 rounded-lg  bg-white/30 dark:bg-slate-100">{infoLink.icon}</div>
              <div className="">
                <h1 className=" font-medium">{infoLink.tittle}</h1>
                <p className=" font-medium text-sm text-gray-400 "> {infoLink.description}</p>
              </div>
            </div>
            <GoArrowRight
              size={25}
              style={{ color: 'rgb(156,163,175)' }}
              className=" group-hover:translate-x-2"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
