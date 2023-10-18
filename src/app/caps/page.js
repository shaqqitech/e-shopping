import React from 'react'
import ProductPage from '../components/ProductPage'
import caps from '../Data/caps'

const Caps = () => {
  return (
    <div>
        <ProductPage data={caps} bg={'bg-blue-200'}  />
    </div>
  )
}

export default Caps