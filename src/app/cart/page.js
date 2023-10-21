"use client";
import { remove } from "@/store/cartSlice";
import { GiCrossedBones } from "react-icons/gi";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DropDown from "../components/Dropdown";

const Cart = () => {
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [productQuantities, setProductQuantities] = useState(
    Array(products.length).fill(1)
  );

  useEffect(() => {
    const totalQuantities = productQuantities.reduce(
      (acc, quantity) => acc + quantity,
      0
    );
    const totalPrice = products.reduce(
      (acc, item, index) => acc + item.price * productQuantities[index],
      0
    );

    setTotalQuantities(totalQuantities);
    setTotalPrice(totalPrice);
  }, [productQuantities, products]);

  const increaseQuantity = (index) => {
    const newQuantities = [...productQuantities];
    newQuantities[index]++;
    setProductQuantities(newQuantities);
  };

  const decreaseQuantity = (index) => {
    if (productQuantities[index] > 1) {
      const newQuantities = [...productQuantities];
      newQuantities[index]--;
      setProductQuantities(newQuantities);
    }
  };

  const removeFromCart = (productId) => {
    const index = products.findIndex((product) => product.id === productId);

    if (index !== -1) {
      const newQuantities = [...productQuantities];
      newQuantities.splice(index, 1);

      setProductQuantities(newQuantities);

      dispatch(remove(productId));
    }
  };

  return (
    <main className="w-full p-5 md:p-10 space-y-5 bg-[#fefae0] dark:bg-gray-900 relative">
      <div className="absolute top-2 right-5 z-[100]">
        <DropDown title={'More Products'} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            key={product.id}
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-300">
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <button
                onClick={() => removeFromCart(product.id)}
                className="text-red-500 hover:text-red-700 focus:outline-none"
              >
                <GiCrossedBones />
              </button>
            </div>
            <div className="flex items-center p-4">
              <Image
                src={product.img}
                alt="Product Image"
                width={1}
                height={1}
                sizes="100%"
                className="w-24 h-24 md:w-36 md:h-36 rounded-md"
              />
              <div className="flex flex-col justify-end items-end w-full ml-4">
                <p className="text-base md:text-lg">${product.price}</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => decreaseQuantity(index)}
                    className="text-xl font-semibold text-gray-600 hover:text-gray-900 focus:outline-none"
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold mx-3">
                    {productQuantities[index]}
                  </span>
                  <button
                    onClick={() => increaseQuantity(index)}
                    className="text-xl font-semibold text-gray-600 hover:text-gray-900 focus:outline-none"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center p-4">
              <p className="text-lg font-semibold">Total:</p>
              <p className="text-lg">
                ${(product.price * productQuantities[index]).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex flex-col items-center mt-5 md:mt-10">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 md:p-6 font-semibold text-lg md:text-xl  space-y-4">
          <div className="flex justify-between items-center border-b border-gray-300 pb-3 md:pb-4">
            <h1 className="text-base md:text-lg dark:text-gray-400">
              Total Quantities:{" "}
              <span className="dark:text-white">{totalQuantities}</span>
            </h1>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="text-base md:text-lg dark:text-gray-400">
              Total Price:{" "}
              <span className="dark:text-white">${totalPrice.toFixed(2)}</span>
            </h1>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
