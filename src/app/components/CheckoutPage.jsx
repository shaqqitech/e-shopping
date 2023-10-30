'use client'
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaUser, FaEnvelope, FaPhone, FaCashRegister, FaCreditCard, FaMapMarkerAlt, FaCity, FaAddressCard } from 'react-icons/fa';
import Link from 'next/link';

const CheckoutPage = () => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      province: '',
      city: '',
      postalCode: '',
      deliveryAddress: '',
      paymentMethod: 'cashOnDelivery',
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('Full name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      phoneNumber: Yup.string().required('Phone number is required'),
      province: Yup.string().required('Province is required'),
      city: Yup.string().required('City is required'),
      postalCode: Yup.string().required('Postal code is required'),
      deliveryAddress: Yup.string().required('Delivery address is required'),
    }),
    onSubmit: (values) => {
      // You can submit the form data to your backend here.
      console.log('Form data submitted:', values);
    },
  });

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <form onSubmit={formik.handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
        <div className="mb-4 space-y-2">
          <label htmlFor="fullName" className="flex items-center">
            <FaUser className="mr-2" /> Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border p-2 rounded-md bg-gray-300 dark:bg-gray-900"
          />
          {formik.touched.fullName && formik.errors.fullName && (
            <div className="text-red-500">{formik.errors.fullName}</div>
          )}
        </div>
        <div className="mb-4 space-y-2">
          <label htmlFor="fullName" className="flex items-center">
            <FaEnvelope className="mr-2" /> Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border p-2 rounded-md bg-gray-300 dark:bg-gray-900"
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500">{formik.errors.email}</div>
          )}
        </div>
        <div className="mb-4 space-y-2">
          <label htmlFor="fullName" className="flex items-center">
            <FaPhone className="mr-2" /> Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border p-2 rounded-md bg-gray-300 dark:bg-gray-900"
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber && (
            <div className="text-red-500">{formik.errors.phoneNumber}</div>
          )}
        </div>
        <div className="mb-4 space-y-2">
          <label htmlFor="fullName" className="flex items-center">
            <FaMapMarkerAlt className="mr-2" /> Province
          </label>
          <input
            type="text"
            id="province"
            name="province"
            value={formik.values.province}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border p-2 rounded-md bg-gray-300 dark:bg-gray-900"
          />
          {formik.touched.province && formik.errors.province && (
            <div className="text-red-500">{formik.errors.province}</div>
          )}
        </div>
        <div className="mb-4 space-y-2">
          <label htmlFor="fullName" className="flex items-center">
            <FaCity className="mr-2" /> City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border p-2 rounded-md bg-gray-300 dark:bg-gray-900"
          />
          {formik.touched.city && formik.errors.city && (
            <div className="text-red-500">{formik.errors.city}</div>
          )}
        </div>
        <div className="mb-4 space-y-2">
          <label htmlFor="fullName" className="flex items-center">
            <FaAddressCard className="mr-2" /> Postal Code
          </label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={formik.values.postalCode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border p-2 rounded-md bg-gray-300 dark:bg-gray-900"
          />
          {formik.touched.postalCode && formik.errors.postalCode && (
            <div className="text-red-500">{formik.errors.postalCode}</div>
          )}
        </div>
        <div className="mb-4 space-y-2">
          <label htmlFor="fullName" className="flex items-center">
            <FaMapMarkerAlt className="mr-2" /> Delivery Address
          </label>
          <textarea
            type="text"
            id="deliveryAddress"
            name="deliveryAddress"
            value={formik.values.deliveryAddress}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border p-2 rounded-md bg-gray-300 dark:bg-gray-900"
          />
          {formik.touched.deliveryAddress && formik.errors.deliveryAddress && (
            <div className="text-red-500">{formik.errors.deliveryAddress}</div>
          )}
        </div>


        <div className="mb-4">
          <label htmlFor="paymentMethod" className="mb-2 block text-sm font-medium ">
            Payment Method
          </label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="cashOnDelivery"
                checked={formik.values.paymentMethod === 'cashOnDelivery'}
                onChange={formik.handleChange}
                className="mr-2"
              />
              <FaCashRegister className="text-2xl mx-1" /> Cash on Delivery
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="onlinePayment"
                checked={formik.values.paymentMethod === 'onlinePayment'}
                onChange={formik.handleChange}
                className="mr-2"
              />
              <FaCreditCard className="text-2xl mx-1" /> Online Payment
            </label>
          </div>
        </div>

        <Link
          href={'/cart/placeorder'}
          className=" bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 w-full grid place-content-center"
        >
          Place Order
        </Link>
      </form>
    </div>
  );
};

export default CheckoutPage;
