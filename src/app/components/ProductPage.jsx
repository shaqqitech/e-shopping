'use client'
import React from "react";
import Image from "next/image";
import DropDown from "./Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { add } from "@/store/cartSlice";

const ProductPage = ({ data, bg }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const isItemInCart = (itemId) => {
    return cart.some((cartItem) => cartItem.id === itemId);
  };

  const addToCart = (item) => {
    if (!isItemInCart(item.id)) {
      dispatch(add(item));
    }
  };

  return (
    <>
      <main className="w-screen px-8 py-16 bg-[#fefae0] dark:bg-gray-900 flex justify-center items-center relative">
        <div className="absolute top-2 right-5 z-[100]">
          <DropDown title={'Change Category'} />
        </div>
        <div className="w-full min-h-full grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {data.map((item, index) => {
            const addedToCart = isItemInCart(item.id);
            return (
              <div
                className="flex justify-center items-center flex-col space-y-5 rounded-xl shadow-md dark:border-2 dark:border-white"
                key={index}
              >
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
                    <p className="text-sm font-semibold text-gray-500">
                      Rating: {item.rating}
                    </p>
                  </div>
                  <button
                    className={`w-28 h-10 ${bg} rounded-xl dark:text-black text-sm font-semibold border-2`}
                    onClick={() => addToCart(item)}
                  >
                    {addedToCart ? "ADDED" : "Add to cart"}
                  </button>
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
