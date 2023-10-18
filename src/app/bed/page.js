import React from 'react'
import ProductPage from '../components/ProductPage'
import bed from '../Data/bed'

const Bed = () => {
  return (
    <div>
        <ProductPage data={bed} bg={'bg-blue-500'}  />
    </div>
  )
}

export default Bed