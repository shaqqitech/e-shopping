import React from 'react'
import ProductPage from '../components/ProductPage'
import headphones from '../Data/headphones'

const HeadPhones = () => {
  return (
    <div>
        <ProductPage data={headphones} bg={'bg-green-100'}  />
    </div>
  )
}

export default HeadPhones