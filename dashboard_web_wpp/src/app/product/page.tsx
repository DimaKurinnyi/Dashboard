import { Header } from '@/components';
import React from 'react';

const page = () => {
  return (
    <>
      <Header tittle="Product List" description="Lorem ipsum, dolor sit amet" />
      <div
        className=" h-[85%] w-[calc(100%-96px)] absolute     overflow-y-scroll overflow-hidden
      "></div>
    </>
  );
};

export default page;
