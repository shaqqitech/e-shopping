"use client";
import { remove } from "@/store/cartSlice";
import { GiCrossedBones } from "react-icons/gi";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DropDown from "../components/Dropdown";
import CheckoutPage from "../components/CheckoutPage";

const Cart = () => {
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [netTotalPrice, setNetTotalPrice] = useState(0);

  //Dicount on product
  const discount = 37;

  //functinality for redux and redux toolkit
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  //functinality for set minimum cart item quantity to 1
  const [productQuantities, setProductQuantities] = useState(
    Array(products.length).fill(1)
  );

  //functinality for total quantities and total price
  useEffect(() => {
    //Getting the total quantity of the product quantity
    const totalQuantities = productQuantities.reduce(
      (acc, quantity) => acc + quantity,
      0
    );

    //Getting the total price of the total quantity
    const totalPrice = products.reduce(
      (acc, item, index) => acc + item.price * productQuantities[index],
      0
    );

    //Net Total Price after minus discount price from totalPrice
    const discountAmount = (discount / 100) * totalPrice;
    const discountPrice = totalPrice - discountAmount;

    setTotalQuantities(totalQuantities);
    setTotalPrice(totalPrice);
    setNetTotalPrice(discountPrice);
  }, [productQuantities, products, netTotalPrice]);

  //functinality for quantity increase
  const increaseQuantity = (index) => {
    const newQuantities = [...productQuantities];
    newQuantities[index]++;
    setProductQuantities(newQuantities);
  };
  //functinality for quantity decrease
  const decreaseQuantity = (index) => {
    if (productQuantities[index] > 1) {
      const newQuantities = [...productQuantities];
      newQuantities[index]--;
      setProductQuantities(newQuantities);
    }
  };

  //functinality for item remove from the cart list/ Cross Icon
  const removeFromCart = (productId) => {
    //Checking if the prodcut is available in the cart list
    const index = products.findIndex((product) => product.id === productId);

    //If the product is available in the cart then remove it from the cart list by using its index value
    //findindex method return -1 if the given condition is false
    if (index !== -1) {
      const newQuantities = [...productQuantities];
      // splice method is used to remove the product from the cart list
      // spliece method check the index of the product and 1 is used to remove the selected product from the cart list
      newQuantities.splice(index, 1);

      setProductQuantities(newQuantities);

      dispatch(remove(productId));
    }
  };

  return (
    <main className="w-full p-5 md:p-10 space-y-5 bg-[#fefae0] dark:bg-gray-900 relative">
      <div className="absolute top-2 right-5 z-[100]">
        {/* DropDown Menu components */}
        <DropDown
          title={`${
            products.length == 0 ? "Select Produtcs" : "More Products"
          }`}
        />
      </div>
      {/* Ternary operator for to check if the cart is empty or not. */}
      {products.length === 0 ? (
        // if the cart is empty then show this
        <div className="w-full h-72 grid place-content-center text-center bg-[#fefae0] dark:bg-gray-900">
          <div className="p-5 space-y-7">
            <p className="font-bold text-3xl">Cart is Empty</p>
            <p className="text-lg w-80">
              Please Click on the Top-Right Side{" "}
              <span className="text-red-500"> "Select Products"</span> Dropdown
              and Add Some Items
            </p>
          </div>
        </div>
      ) : (
        // if the cart is not empty then show this
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Here map method is used to get products from the redux store */}
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
          {/* Section for total items, total price, discount, net total */}
          <div className="w-full flex flex-col items-center mt-5 md:mt-10">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 md:p-6 font-medium text-lg md:text-xl  space-y-4">
              <div className="flex justify-between items-center border-b border-gray-300 pb-3 md:pb-4">
                <h1 className="text-base md:text-lg dark:text-gray-400">
                  Total Quantities:{" "}
                  <span className="dark:text-white">{totalQuantities}</span>
                </h1>
              </div>
              <div className="flex justify-between items-center">
                <h1 className="text-base md:text-lg border-b border-gray-300  pb-3 md:pb-4 dark:text-gray-400">
                  Sub Total:{" "}
                  <span className="dark:text-white">
                    $ {totalPrice.toFixed(2)}
                  </span>
                </h1>
              </div>
              <div className="flex justify-between items-center border-b border-gray-300 pb-3 md:pb-4">
                <h1 className="text-base md:text-lg dark:text-gray-400">
                  Discount: <span className="dark:text-white">{discount}%</span>
                </h1>
              </div>
              <div className="flex justify-between items-center border-b border-gray-300 pb-3 md:pb-4">
                <h1 className="text-base md:text-lg dark:text-gray-400">
                  Net Total:{" "}
                  <span className="dark:text-white">
                    $ {netTotalPrice.toFixed(2)}
                  </span>
                </h1>
              </div>
            </div>
            {/* Checkout page component */}
            <div className="mt-10">
              {/*Show the Checkout page component if the length of the cart item is more thab 0*/}
              {totalQuantities > 0 && <CheckoutPage />}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Cart;
