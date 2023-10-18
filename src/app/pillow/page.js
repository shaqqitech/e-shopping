import React from 'react'
import ProductPage from '../components/ProductPage'
import pillow from '../Data/pillow'

const Pillow = () => {
  return (
    <div>
        <ProductPage data={pillow} bg={'bg-yellow-300'}  />
    </div>
  )
}

export default Pillow