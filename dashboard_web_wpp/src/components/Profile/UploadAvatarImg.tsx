'use client';

import {  UploadDropzone } from '@/app/utils/uploadthing';
import Image from 'next/image';
import { useState } from 'react';
//import "@uploadthing/react/styles.css";

export const UploadAvatarImg = ({openUploadHandler,imageUrl,setImageUrl}:{openUploadHandler:()=>void,imageUrl:string,setImageUrl:(value:string)=>void}) => {
  
  console.log(imageUrl);
  return (
    <div>
      <div onClick={openUploadHandler} className=" text-end cursor-pointer">X</div>
      {imageUrl.length ? <Image src={imageUrl} width={50} height={50} alt="" /> : null}
      <UploadDropzone
        endpoint="imageUploader"
        appearance={{
            container:{ 
                minWidth:'250px',
                border:'1px solid gray',
                padding:'15px'
            },
            button:{
              width:'100%',
              borderRadius:'15px',
              padding:'2px 6px',
              backgroundColor: '#60a5fa'


            },
            
      
        }}
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log('Files: ', res);
          setImageUrl(res[0].url);
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </div>
  );
};
