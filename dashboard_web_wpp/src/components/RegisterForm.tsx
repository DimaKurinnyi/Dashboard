'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { BsBook } from 'react-icons/bs';
import { GoArrowRight, GoPeople } from 'react-icons/go';
import { MdArrowCircleUp, MdOutlineWatchLater } from 'react-icons/md';


export  const RegisterForm = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [error, setError] = useState<string>('');
  const router =useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError('All fields are necessary');
      return;
    }

    try {
      const resUserExists = await fetch('api/userExist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();
      if (user) {
        setError('User already exists');
        return
      }

      const res = await fetch('api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
          company
        }),
      });
      if (res.ok) {
        const form = e.target as HTMLFormElement;
        form.reset();
        router.push('/login')
      } else {
        console.log('User registration failed');
      }
    } catch (error) {
      console.log('Error during registration:', error);
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
    <div className="flex flex-row-reverse justify-center items-center h-full *:h-[550px] *:w-[500px] *:justify-center *:flex *:flex-col *:shadow-2xl *:shadow-gray-900/40 dark:*:shadow-slate-400/50 dark:*:shadow-2xl ">
      <div className=" dark:bg-bg-dark items-center border-solid border-bg-dark border dark:border-white rounded-r-2xl ">
        <Image src="/dashboard.png" width={60} height={60} alt="" />
        <h1 className=" font-semibold text-2xl">Welcome back</h1>

        <p className=" text-xs mb-4">Please enter you details</p>
        {error && <div className="mb-2 text-red-600">{error}</div>}
        <form onSubmit={handleSubmit} className="flex flex-col mb-6 ">
          <p className=" text-xs font-medium mb-1">Full Name</p>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full Name"
            className="mb-4 border-solid border-gray-300 border py-1 px-4   "
          />
          <p className=" text-xs font-medium mb-1">Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email"
            className="mb-4 border-solid border-gray-300 border py-1 px-4   "
          />
          <input
            onChange={(e) => setCompany(e.target.value)}
            type="text"
            placeholder="company"
            className="mb-4 border-solid border-gray-300 border py-1 px-4   "
          />
          <p className=" text-xs font-medium mb-1">Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4 border-solid border-gray-300 border py-1 px-4   "
            type="password"
            placeholder="password"
          />
          <button className="hover:scale-105 duration-300 ease-in-out dark:bg-white dark:text-bg-dark text-text-color bg-bg-dark font-medium   p-1  rounded-xl">
            Register
          </button>
        </form>

        <div className=" text-sm">
          You have an account?
          <Link href={'/login'}>
            <span className=" font-semibold underline">Login</span>
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


