'use client'
import React, { useState } from "react";;
import Image from "next/image";

const ProductPage = ({data, bg}) => {
  // Create a state to manage the quantity for each product
  // const [productQuantities, setProductQuantities] = useState(Array(headphones.length).fill(0));

  // const increaseQuantity = (index) => {
  //   const newQuantities = [...productQuantities];
  //   newQuantities[index]++;
  //   setProductQuantities(newQuantities);
  // };

  // const decreaseQuantity = (index) => {
  //   if (productQuantities[index] > 0) {
  //     const newQuantities = [...productQuantities];
  //     newQuantities[index]--;
  //     setProductQuantities(newQuantities);
  //   }
  // };

  return (
    <>
      <main className="w-screen px-8 py-16 bg-[#fefae0] flex justify-center items-center">
        <div className="w-full min-h-full grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {data.map((item, index) => {
            return (
              <div className="flex justify-center items-center flex-col space-y-5 rounded-xl shadow-md" key={index}>
                <div className={`w-60 h-60 rounded-xl ${bg}`}>
                  <Image
                    src={item.img}
                    alt="Headphones"
                    width={1}
                    height={1}
                    sizes="100%"
                    className="w-full h-full p-8 hover:scale-110 duration-150 transition-all ease-in-out"
                  />
                </div>
                <div className="flex justify-between items-center w-full h-full px-5 py-3">
                  <div>
                    <p className="text-2xl font-bold">
                      <span className="text-sm">$</span>
                      {item.price}
                    </p>
                    <p className="text-sm font-semibold text-gray-500">Rating: {item.rating}</p>
                  </div>
                  <button className={`w-28 h-10 ${bg} rounded-xl text-sm font-semibold border-2`}>Add To Cart</button>

                  {/* <div className="flex justify-center items-center space-x-2">
                    <p
                      onClick={() => decreaseQuantity(index)}
                      className="cursor-pointer font-semibold text-2xl"
                    >
                      -
                    </p>
                    <h1>{productQuantities[index]}</h1>
                    <p
                      onClick={() => increaseQuantity(index)}
                      className="cursor-pointer font-semibold text-2xl"
                    >
                      +
                    </p>
                  </div> */}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default ProductPage;
