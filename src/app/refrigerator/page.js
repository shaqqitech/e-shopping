import React from 'react'
import ProductPage from '../components/ProductPage'
import refrigerator from '../Data/refrigerator'

const Refrigerator = () => {
  return (
    <div>
        <ProductPage data={refrigerator} bg={'bg-red-100'}  />
    </div>
  )
}

export default Refrigerator