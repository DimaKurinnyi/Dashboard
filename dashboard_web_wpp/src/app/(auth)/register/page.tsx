import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { RegisterForm } from '@/components'
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react'

const page = async() => {
  const session = await getServerSession(authOptions);

  if (session) redirect('/');
  return (
    <RegisterForm/>
  )
}

export default page