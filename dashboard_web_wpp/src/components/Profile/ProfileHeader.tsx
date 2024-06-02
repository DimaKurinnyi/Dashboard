import React from 'react'

type HeaderProps={tittle:string}

export const ProfileHeader = ({tittle}:HeaderProps) => {
  return (
    <div className=' font-semibold text-lg'>{tittle}</div>
  )
}
