'use client'
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaUser, FaEnvelope, FaPhone, FaCashRegister, FaCreditCard, FaMapMarkerAlt, FaCity, FaAddressCard } from 'react-icons/fa';

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
      <form onSubmit={formik.handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
        <div className="mb-4">
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
            className="w-full border p-2 rounded-md"
          />
          {formik.touched.fullName && formik.errors.fullName && (
            <div className="text-red-500">{formik.errors.fullName}</div>
          )}
        </div>

        {/* Repeat the above pattern for other fields (email, phone, province, city, postalCode, deliveryAddress). */}

        <div className="mb-4">
          <label htmlFor="paymentMethod" className="mb-2 block text-sm font-medium text-gray-700">
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
              <FaCashRegister className="text-2xl" /> Cash on Delivery
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
              <FaCreditCard className="text-2xl" /> Online Payment
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 w-full"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
