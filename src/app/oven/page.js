import React from 'react'
import ProductPage from '../components/ProductPage'
import oven from '../Data/oven'

const Oven = () => {
  return (
    <div>
        <ProductPage data={oven} bg={'bg-green-400'}  />
    </div>
  )
}

export default Oven