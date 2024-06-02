import { Header, SettingsNavBar } from '@/components';
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <Header tittle="Profile page" description="Lorem ipsum, dolor sit amet" />
      <div className=" h-[85%] w-[calc(100%-96px)] absolute     overflow-y-scroll  overflow-hidden ">
        <div className="flex mt-20">
          <SettingsNavBar />
          <div className="w-full ml-[150px]">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default layout;
