'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { DeleteUser } from './DeleteUser';
import { useSession } from 'next-auth/react';

export const SettingsNavBar = () => {
  const{data:session} =useSession()
  const [test, setTest] = useState('');

  useEffect(() => {
    const pathParts = location.pathname.split('/');
    if (pathParts.length === 2) {
      setTest(pathParts[1]);
    } else if (pathParts.length === 3) {
      setTest(pathParts[2]);
    }
  }, [location]);

  const handlerClick = (id:string) => {
    setTest(id);
  };

  const navItems = [
    { name: 'My profile', link: '/profile', id: 'profile' },
    { name: 'Edit Profile', link: '/profile/edit', id: 'edit' },
    { name: 'Teams', link: '/profile/team', id: 'team' },
    { name: 'Notifications', link: '/profile/notification', id: 'notification' },
  ];
  console.log(session?.user?.email)
  return (
    <div className="pr-8 fixed h-[70%]  border-r border-solid border-gray-200 *:p-2 *:font-medium *:cursor-pointer *:duration-300 *:ease-in-out w-fit ">
      {navItems.map((item, i) => (
        <Link
        onClick={()=>handlerClick(item.id)}
          href={item.link}
          className="my-2 hover:bg-blue-400 hover:text-text-color rounded-2xl object-contain w-fit flex flex-col  "
          style={test === item.id ? { backgroundColor: '#60a5fa',color:'white' } : {}}
          key={i}>
          {item.name}
        </Link>
      ))}
      <DeleteUser email={session?.user?.email}/>
    </div>
  );
};
