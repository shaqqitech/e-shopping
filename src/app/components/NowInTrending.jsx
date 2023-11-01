import React from 'react';
import MakeupBox from '../../../public/assets/trending/trending1.png';
import Jeans from '../../../public/assets/trending/trending2.png';
import EarPhones from '../../../public/assets/trending/trending3.png';
import Cap from '../../../public/assets/trending/trending4.png';
import Image from 'next/image';
import Link from 'next/link';

const NowInTrending = () => {
    const data = [
        { img: MakeupBox, title: 'MakeUp Box', price: '$19.99', link: '/makeup-box' },
        { img: Jeans, title: 'Jeans', price: '$29.99', link: '/jeans-pants' },
        { img: EarPhones, title: 'Ear Phones', price: '$24.99', link: '/headphones' },
        { img: Cap, title: 'Cap', price: '$49.99', link: '/caps' },
    ];

    return (
        <div className="px-8 py-24 flex justify-center items-center flex-col w-screen bg-[#fefae0] dark:bg-gray-900">
            <h1 className="text-5xl font-bold text-center mb-8">Now in Trending</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {data.map((item, ind) => (
                    <div key={ind} className=" relative w-72 h-80 shadow-md rounded-xl overflow-hidden ">
                        <Link href={`${item.link}`} className="relative border-2 w-full h-full flex justify-center items-center">
                            <Image
                                src={item.img}
                                alt="Trending Image"
                                width={1}
                                height={1}
                                sizes='100%'
                                className='absolute mb-8 w-48 h-48 rounded-xl hover:scale-105 duration-150'
                            />
                        </Link>
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
