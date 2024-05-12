'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FaSun } from 'react-icons/fa';
import { IoMdMoon } from 'react-icons/io';
interface navProps {
  isOpen: boolean;
}

export const LightDarkSwitch = ({ isOpen }: navProps) => {
  // const [istheme, setTheme] = useState<'dark' | 'light'>('dark');
  const { setTheme, resolvedTheme } = useTheme();
  const[mounted,setMounted]=useState<boolean>(false);

  // useEffect(() => {
  //   if (theme === 'light') {
  //     document.documentElement.classList.add('dark');
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //   }
  // }, [theme]);

  // const handleThemeChange = () => {
  //   setTheme(theme === 'light' ? 'dark' : 'light');
  // };
  useEffect(()=>{
setMounted(true);
  },[])
console.log(resolvedTheme)
  if(mounted)return (
    <li className=" flex items-center">
      <>
        {resolvedTheme === 'dark' ? (
          <FaSun size={25} style={{ marginRight: '10px' }} />
        ) : (
          <IoMdMoon size={25} style={{ marginRight: '10px' }} />
        )}

        {isOpen && <p className="w-[110px]">{resolvedTheme === 'dark' ? 'Light' : 'Dark'} Mode</p>}
      </>

      {resolvedTheme === 'dark' ? (
        <div
          onClick={() => setTheme('light')}
          className={`${
            isOpen ? '' : 'ml-3'
          }  rounded-full relative bg-gray-500 w-12 h-6 cursor-pointer `}>
          <span
            className=" h-full bg-white absolute w-1/2 rounded-full duration-500 ease-in-out transition-all right-0"
            ></span>
        </div>
      ) : (
        <div
          onClick={() => setTheme('dark')}
          className={`${
            isOpen ? '' : 'ml-3'
          }  rounded-full relative bg-gray-500 w-12 h-6 cursor-pointer `}>
          <span
            className=" h-full bg-white absolute w-1/2 rounded-full duration-500 ease-in-out transition-all left-0"
            ></span>
        </div>
      )}
    </li>
  );
};
