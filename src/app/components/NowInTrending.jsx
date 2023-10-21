import React from 'react';
import Jeans from '../../../public/assets/trending/trending1.jpg';
import TShirt from '../../../public/assets/trending/trending2.jpg';
import Shoes from '../../../public/assets/trending/trending3.jpg';
import Watch from '../../../public/assets/trending/trending4.jpg';
import Image from 'next/image';

const NowInTrending = () => {
    const data = [
        { img: Jeans, title: 'Jeans Pants', price: '$19.99' },
        { img: TShirt, title: 'Low-Cut T-Shirt', price: '$29.99' },
        { img: Shoes, title: 'Lady Shoes', price: '$24.99' },
        { img: Watch, title: 'Men Watch', price: '$49.99' },
    ];

    return (
        <div className="px-8 py-24 flex justify-center items-center flex-col w-screen bg-[#fefae0] dark:bg-gray-900">
            <h1 className="text-5xl font-bold text-center mb-8">Now in Trending</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {data.map((item, ind) => (
                    <div key={ind} className=" relative w-72 h-80 shadow-xl rounded-xl overflow-hidden ">
                        <div className="relative w-full h-full">
                            <Image
                                src={item.img}
                                alt="Trending Image"
                                width={1}
                                height={1}
                                sizes='100%'
                                className='absolute w-full h-5/6 rounded-xl hover:scale-105 duration-150'
                            />
                        </div>
                        <div className='absolute bottom-3 flex  justify-between items-center w-full  px-6 text-black dark:text-white '>
                        <p className="text-lg font-semibold">{item.title}</p>
                        <p className="">{item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NowInTrending;
