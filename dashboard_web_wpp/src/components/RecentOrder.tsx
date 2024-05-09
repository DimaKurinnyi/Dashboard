import { fakeData } from '@/data/fakeData';
export const RecentOrder = () => {
  return (
    <div className="    rounded-xl bg-gray-100 shadow-2xl shadow-gray-900/30 dark:shadow-slate-400/50 dark:shadow-xl mb-10 mx-8">
      <div className="flex justify-between items-center border-solid border-b border-gray-300 p-4">
        <p className="text-lg font-semibold text-black">Recent Order</p>
        <p className=" font-semibold text-gray-400">Last Transactions</p>
      </div>

      <div className="flex justify-between items-center *:text-lg *:font-semibold border-b border-gray-300 border-solid p-4 *:text-black *:w-[20%] *:text-center">
        <h3>Customer</h3>
        <h3>Product</h3>
        <h3>Order Number</h3>
        <h3>Data</h3>
        <h3>Status</h3>
      </div>
      {fakeData.slice(0,4).map((item) => (
        <div
          className="flex justify-between items-center *:text-base *:font-normal border-b border-gray-300 border-solid p-4 *:text-gray-400 *:w-[20%] *:text-center bg-ye"
          key={item.order_number}>
          <div className="flex flex-col ">
            <p className='text-black font-medium'>
              {item.first_name} {item.last_name}
            </p>
            <p>{item.email}</p>
          </div>
          <p>{item.product}</p>
          <p>{item.order_number}</p>
          <p>{item.date}</p>
          <div className='flex justify-center ' >
          <p className={`font-medium text-center rounded-full p-2 ${item.shipping_status ==='Shipped' && 'bg-yellow-100 text-yellow-600' } ${item.shipping_status ==='Pending' && 'bg-gray-300 text-black' } ${item.shipping_status ==='Delivered' && 'bg-green-200 text-green-500' }  `}   >{item.shipping_status}</p></div>
        </div>
      ))}
    </div>
  );
};
