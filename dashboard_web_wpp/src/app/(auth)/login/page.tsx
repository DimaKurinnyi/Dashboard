import { LoginForm } from '@/components';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '../../api/auth/[...nextauth]/route';

const Login =async() => {
  const session = await getServerSession(authOptions);

  if (session) redirect('/');
  return <LoginForm />;
};

export default Login;
