"use client";
import { useState } from "react";
import Link from "next/link";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCashRegister,
  FaCreditCard,
  FaMapMarkerAlt,
  FaCity,
  FaAddressCard,
} from "react-icons/fa";
import { useEffect } from "react";
import Spinner from "./Spinner";

const CheckoutPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cashOnDelivery");
  const [disabledButton, setDisabledButton] = useState(true); // Initially disable the button
  const [errors, setErrors] = useState({
    fullName: false,
    email: false,
    number: false,
    province: false,
    city: false,
    postalCode: false,
    deliveryAddress: false,
  });
  const [loading, setLoading] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const isFieldEmpty = (value) => value.trim() === "";

    const fields = [
      fullName,
      email,
      number,
      province,
      city,
      postalCode,
      deliveryAddress,
    ];

    const newErrors = {};

    fields.forEach((field, index) => {
      if (isFieldEmpty(field)) {
        newErrors[Object.keys(errors)[index]] = true;
      } else {
        newErrors[Object.keys(errors)[index]] = false;
      }
    });

    const allFieldsEmpty = fields.every((field) => isFieldEmpty(field));

    setErrors(newErrors);

    if (allFieldsEmpty) {
      setDisabledButton(true);
    } else {
      setDisabledButton(false);
    }
  }, [fullName, email, number, province, city, postalCode, deliveryAddress]);

  const togglePaymentMethod = () => {
    if (paymentMethod === "cashOnDelivery") {
      setPaymentMethod("onlinePayment");
    } else {
      setPaymentMethod("cashOnDelivery");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 400);
  }, []);

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
            <div className="mb-4 space-y-2">
              <label htmlFor="fullName" className="flex items-center">
                <FaUser className="mr-2" /> Full Name
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full border p-2 rounded-md bg-gray-300 dark:bg-gray-900"
              />
              {errors.fullName && (
                <div className="text-red-500">Full name is required.</div>
              )}
            </div>
            <div className="mb-4 space-y-2">
              <label htmlFor="email" className="flex items-center">
                <FaEnvelope className="mr-2" /> Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border p-2 rounded-md bg-gray-300 dark:bg-gray-900"
              />
              {errors.email && (
                <div className="text-red-500">Email is required.</div>
              )}
            </div>
            <div className="mb-4 space-y-2">
              <label htmlFor="fullName" className="flex items-center">
                <FaPhone className="mr-2" /> Phone Number
              </label>
              <input
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="w-full border p-2 rounded-md bg-gray-300 dark:bg-gray-900"
              />
              {errors.number && (
                <div className="text-red-500">Phone number is required.</div>
              )}
            </div>
            <div className="mb-4 space-y-2">
              <label htmlFor="fullName" className="flex items-center">
                <FaMapMarkerAlt className="mr-2" /> Province
              </label>
              <input
                type="text"
                value={province}
                onChange={(e) => setProvince(e.target.value)}
                className="w-full border p-2 rounded-md bg-gray-300 dark:bg-gray-900"
              />
              {errors.province && (
                <div className="text-red-500">Province name is required.</div>
              )}
            </div>
            <div className="mb-4 space-y-2">
              <label htmlFor="fullName" className="flex items-center">
                <FaCity className="mr-2" /> City
              </label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full border p-2 rounded-md bg-gray-300 dark:bg-gray-900"
              />
              {errors.city && (
                <div className="text-red-500">City name is required.</div>
              )}
            </div>
            <div className="mb-4 space-y-2">
              <label htmlFor="fullName" className="flex items-center">
                <FaAddressCard className="mr-2" /> Postal Code
              </label>
              <input
                type="number"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                className="w-full border p-2 rounded-md bg-gray-300 dark:bg-gray-900"
              />
              {errors.postalCode && (
                <div className="text-red-500">Postal Code is required.</div>
              )}
            </div>
            <div className="mb-4 space-y-2">
              <label htmlFor="fullName" className="flex items-center">
                <FaMapMarkerAlt className="mr-2" /> Delivery Address
              </label>
              <textarea
                type="text"
                value={deliveryAddress}
                onChange={(e) => setDeliveryAddress(e.target.value)}
                className="w-full border p-2 rounded-md bg-gray-300 dark:bg-gray-900"
              />
              {errors.deliveryAddress && (
                <div className="text-red-500">
                  Delivery Address is required.
                </div>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="paymentMethod"
                className="mb-2 block text-sm font-medium "
              >
                Payment Method
              </label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="cashOnDelivery"
                    checked={paymentMethod === "cashOnDelivery"}
                    onChange={togglePaymentMethod}
                    className="mr-2"
                  />
                  <FaCashRegister className="text-2xl mx-1" /> Cash on Delivery
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="onlinePayment"
                    checked={paymentMethod === "onlinePayment"}
                    onChange={togglePaymentMethod}
                    className="mr-2"
                  />
                  <FaCreditCard className="text-2xl mx-1" /> Online Payment
                </label>
              </div>
            </div>

            <Link
              href={`${disabledButton ? "" : "/cart/placeorder"}`}
              className={`${
                disabledButton ? "bg-gray-400" : "bg-blue-500"
              } text-white p-2 rounded-md hover:bg-blue-700 w-full grid place-content-center`}
            >
              {disabledButton ? "Fill all the fields" : "Place the order"}
            </Link>
          </form>
        </>
      )}
    </div>
  );
};

export default CheckoutPage;
