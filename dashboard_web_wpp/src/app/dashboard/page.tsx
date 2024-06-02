import { Chart, Header, RecentOrder } from '@/components';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { BsFillBoxFill } from 'react-icons/bs';
import { FiDollarSign } from 'react-icons/fi';
import { IoIosPeople } from 'react-icons/io';
import { MdShoppingCartCheckout } from 'react-icons/md';
import { authOptions } from '../api/auth/[...nextauth]/route';

const Dashboard = async () => {
  const session = await getServerSession(authOptions);

  if (!session) redirect('/login');

  return (
    <>
      <Header tittle="Mean page" description="Lorem ipsum, dolor sit amet" />
      <div
        className=" h-[85%] w-[calc(100%-96px)] absolute     overflow-y-scroll overflow-hidden
    ">
        <div className=" mx-8 flex justify-between items-center mb-12 mt-6  *:p-4 *:w-[20%] *:rounded-xl *:bg-gray-100 *:shadow-2xl *:shadow-gray-900/30 dark:*:shadow-slate-400/50 dark:*:shadow-xl ">
          <div>
            <div
              className=" w-fit bg-blue-600 rounded-full
          p-2 ">
              <FiDollarSign size={25} style={{ color: 'white' }} />
            </div>
            <h1 className="text-xl font-semibold mt-2 text-black">$10000</h1>
            <p className=" text-gray-500 text-sm">Total Balance</p>
          </div>
          <div>
            <div
              className=" w-fit bg-red-600 rounded-full
          p-2 ">
              <BsFillBoxFill size={25} style={{ color: 'white' }} />
            </div>
            <h1 className="text-xl font-semibold mt-2 text-black">10000</h1>
            <p className=" text-gray-500 text-sm">Total Products</p>
          </div>
          <div>
            <div
              className=" w-fit bg-green-400 rounded-full
          p-2 ">
              <MdShoppingCartCheckout size={25} style={{ color: 'white' }} />
            </div>
            <h1 className="text-xl font-semibold mt-2 text-black">5000</h1>
            <p className=" text-gray-500 text-sm">Total Orders</p>
          </div>

          <div>
            <div
              className=" w-fit bg-yellow-400 rounded-full
          p-2 ">
              <IoIosPeople size={25} style={{ color: 'white' }} />
            </div>
            <h1 className="text-xl font-semibold mt-2 text-black">200</h1>
            <p className=" text-gray-500 text-sm">Total Customers </p>
          </div>
        </div>
        <div className="flex justify-center w-full mb-12">
          <Chart />
        </div>

        <div className="">
          <RecentOrder />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
