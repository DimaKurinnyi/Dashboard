'use client';
import { useEffect, useState } from 'react';
import { FaSun } from 'react-icons/fa';
import { IoMdMoon } from 'react-icons/io';
interface navProps {
  isOpen:boolean
} 

export const LightDarkSwitch = ({ isOpen }: navProps) => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <li className=" flex items-center">
      
        <>
          {theme === 'light' ? (
            <FaSun size={25} style={{ marginRight: '10px' }} />
          ) : (
            <IoMdMoon size={25} style={{ marginRight: '10px' }} />
          )}

          {isOpen && (<p className="w-[110px]">{theme === 'light' ? 'Light' : 'Dark'} Mode</p>)}
        </>
      

      <div
        onClick={handleThemeChange}
        className={`${isOpen?'':'ml-3'}  rounded-full relative bg-gray-500 w-12 h-6 cursor-pointer `}>
        <span
          className=" h-full bg-white absolute w-1/2 rounded-full duration-1000 ease-in-out transition-all"
          style={theme === 'light' ? { right: '0', background: 'red' } : { left: '0' }}></span>
      </div>
    </li>
  );
};
