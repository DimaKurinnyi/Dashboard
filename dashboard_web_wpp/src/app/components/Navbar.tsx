import Image from 'next/image';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <div className=" mx-8  w-[20%] min-h-full ">
      <div className=" flex flex-col justify-around h-[100%]">
        <Link href="/" className='flex items-center gap-4'>
          
          <Image src="/dashdoard.png" width={50} height={50} alt=""></Image>
          <h1 className=" text-2xl font-bold">DashboardApp</h1>
        </Link>

        <nav>
          <ul className=" text-lg">
            <li className="mb-7">Dashboard</li>
            <li className="mb-7">Analytics</li>
            <li className="mb-7">Order</li>
            <li className="mb-7">Transactions</li>
            <li className="mb-7">Shipping</li>
            <li className="">Product lis</li>
          </ul>
        </nav>
        <div className=" text-lg">
          <ul>
            <li className="mb-7">Settings</li>
            <li className="mb-7">Light Mode</li>
            <li>Logout</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
