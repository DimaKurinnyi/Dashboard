'use client';
import Image from 'next/image';
import Link from 'next/link';

import { signOut, useSession } from 'next-auth/react';
import { useState } from 'react';
import { AiOutlineProduct } from 'react-icons/ai';
import { FaShippingFast } from 'react-icons/fa';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { IoMdSettings } from 'react-icons/io';
import { IoLogOut } from 'react-icons/io5';
import { LuLayoutDashboard } from 'react-icons/lu';
import { TbBrandGoogleAnalytics } from 'react-icons/tb';
import { TiHome } from 'react-icons/ti';
import { LightDarkSwitch } from './LightDarkSwitch';

export const Navbar = () => {
  const [openClose, setOpenClose] = useState<boolean>(true);
  const { status } = useSession();

  const handleClose = () => {
    setOpenClose(!openClose);
  };
  return (
    <div
      className={`${
        openClose ? 'w-auto ml-4 ' : 'w-auto'
      }    min-h-full flex items-center justify-end gap-2 duration-500 ease-in-out transition-all`}>
      <div className=" flex flex-col justify-around h-[100%] ">
        <Link href="/" className={`flex ${openClose ? ' items-center gap-4' : 'justify-center'}`}>
          <Image src="/dashboard.png" width={60} height={60} alt=""></Image>
          {openClose && <h1 className=" text-2xl font-bold">Dashboard</h1>}
        </Link>

        <nav>
          <ul className=" *:py-3.5 *:px-2 *:rounded-lg">
            <li
              className={`${
                openClose
                  ? 'hover:bg-blue-700 dark:hover:text-text-color'
                  : 'hover:border-r-4 hover:border-solid hover:border-blue-700 hover:rounded-none'
              } `}>
              <Link className={`flex items-center ${openClose ? '' : 'justify-center'}`} href="/">
                <TiHome size={25} style={openClose ? { marginRight: '10px' } : {}} />
                {openClose && <p>Home</p>}
              </Link>
            </li>
            <li
              className={`${
                openClose
                  ? 'hover:bg-blue-700 dark:hover:text-text-color'
                  : 'hover:border-r-4 hover:border-solid hover:border-blue-700 hover:rounded-none'
              } `}>
              <Link
                className={`flex items-center ${openClose ? '' : 'justify-center'}`}
                href="/dashboard">
                <LuLayoutDashboard size={25} style={openClose ? { marginRight: '10px' } : {}} />
                {openClose && <p>Dashboard</p>}
              </Link>
            </li>
            <li
              className={`${
                openClose
                  ? 'hover:bg-blue-700 dark:hover:text-text-color'
                  : 'hover:border-r-4 hover:border-solid hover:border-blue-700 hover:rounded-none'
              } `}>
              <Link className={`flex items-center ${openClose ? '' : 'justify-center'}`} href="#">
                <TbBrandGoogleAnalytics
                  size={25}
                  style={openClose ? { marginRight: '10px' } : {}}
                />
                {openClose && <p>Analytics</p>}
              </Link>
            </li>
            <li
              className={`${
                openClose
                  ? 'hover:bg-blue-700 dark:hover:text-text-color'
                  : 'hover:border-r-4 hover:border-solid hover:border-blue-700 hover:rounded-none'
              } `}>
              <Link className={`flex items-center ${openClose ? '' : 'justify-center'}`} href="#">
                <HiOutlineShoppingBag size={25} style={openClose ? { marginRight: '10px' } : {}} />
                {openClose && <p>Order</p>}
              </Link>
            </li>

            <li
              className={`${
                openClose
                  ? 'hover:bg-blue-700 dark:hover:text-text-color'
                  : 'hover:border-r-4 hover:border-solid hover:border-blue-700 hover:rounded-none'
              } `}>
              <Link
                className={`flex items-center ${openClose ? '' : 'justify-center'}`}
                href="/shipping">
                <FaShippingFast size={25} style={openClose ? { marginRight: '10px' } : {}} />
                {openClose && <p>Shipping</p>}
              </Link>
            </li>
            <li
              className={`${
                openClose
                  ? 'hover:bg-blue-700 dark:hover:text-text-color'
                  : 'hover:border-r-4 hover:border-solid hover:border-blue-700 hover:rounded-none'
              } `}>
              <Link
                className={`flex items-center ${openClose ? '' : 'justify-center'}`}
                href="/product">
                <AiOutlineProduct size={25} style={openClose ? { marginRight: '10px' } : {}} />
                {openClose && <p>Product list</p>}
              </Link>
            </li>
          </ul>
        </nav>
        <div className=" text-lg">
          <ul className=" *:py-3.5 *:px-2 *:rounded-lg">
            <li
              className={`${
                openClose
                  ? 'hover:bg-blue-700 dark:hover:text-text-color'
                  : 'hover:border-r-4 hover:border-solid hover:border-blue-700 hover:rounded-none'
              } `}>
              <Link className={`flex items-center ${openClose ? '' : 'justify-center'}`} href="#">
                <IoMdSettings size={25} style={openClose ? { marginRight: '10px' } : {}} />
                {openClose && <p>Settings</p>}
              </Link>
            </li>

            <LightDarkSwitch isOpen={openClose} />

            {status === 'authenticated' && (
              <li
                onClick={() => signOut()}
                className={`${
                  openClose
                    ? 'hover:bg-blue-700 dark:hover:text-text-color'
                    : 'hover:border-r-4 hover:border-solid hover:border-blue-700 hover:rounded-none'
                } `}>
                <Link className={`flex items-center ${openClose ? '' : 'justify-center'}`} href="#">
                  <IoLogOut size={25} style={openClose ? { marginRight: '10px' } : {}} />
                  {openClose && <p>Logout</p>}
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div
        onClick={handleClose}
        className=" dark:text-text-color bg-gray-600 text-2xl font-bold py-1 px-2 rounded-l-lg cursor-pointer">
        {openClose ? 'X' : '>'}
      </div>
    </div>
  );
};
