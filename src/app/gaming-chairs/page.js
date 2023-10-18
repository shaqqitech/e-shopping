import React from 'react'
import ProductPage from '../components/ProductPage'
import chairs from '../Data/gaming-chairs'

const GamingChairs = () => {
  return (
    <div>
        <ProductPage data={chairs} bg={'bg-red-200'}  />
    </div>
  )
}

export default GamingChairs