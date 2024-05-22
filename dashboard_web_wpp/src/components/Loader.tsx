import Image from 'next/image'
import React from 'react'

export const Loader = () => {
  return (
    <div className=' w-full h-full flex justify-center items-center'><Image unoptimized src='/load.gif' width={300} height={300} alt=''/></div>
  )
}
