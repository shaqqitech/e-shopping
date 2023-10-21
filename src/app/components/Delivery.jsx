import React from 'react';
import { BsDoorOpen, BsCashCoin } from 'react-icons/bs';
import { TbTruckDelivery, TbTruckReturn } from 'react-icons/tb';
import { BiMobileAlt } from 'react-icons/bi';
import { FaHandsHelping } from 'react-icons/fa';


const Delivery = () => {
    const data = [
        { icon: BsDoorOpen, desc: '24/7 Open', bg: "bg-blue-200" },
        { icon: TbTruckDelivery, desc: 'Expected Delivery in 3 Days', bg: "bg-teal-300" },
        { icon: BsCashCoin, desc: 'Cash On Delivery', bg: "bg-blue-500" },
        { icon: BiMobileAlt, desc: 'Online Payment', bg: "bg-indigo-200" },
        { icon: TbTruckReturn, desc: 'Easy Return', bg: "bg-green-400" },
        { icon: FaHandsHelping, desc: '24/7 Helpline Facility', bg: "bg-red-100" },
    ];

    return (
        <main className='w-screen p-4 md:p-16 flex flex-col justify-center items-center bg-[#fefae0] dark:bg-gray-900'>
            <h1 className='text-5xl font-bold my-8 w-full text-center'>Services We Provided</h1>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 '>
                {data.map((item, ind) => {
                    return (
                        <div
                            className={`border-2 w-full h-60 rounded-xl p-4 flex flex-col items-center justify-center ${item.bg} transition-all duration-300 hover:scale-105 dark:text-black`}
                            key={ind}
                        >
                            <p className='text-4xl mb-2'>{React.createElement(item.icon)}</p>
                            <h1 className='text-lg text-center'>{item.desc}</h1>
                        </div>
                    );
                })}
            </div>
        </main>
    );
};

export default Delivery;
