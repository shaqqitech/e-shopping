import React from 'react'
import ProductPage from '../components/ProductPage'
import tshirts from '../Data/t-shirts'

const TShirts = () => {
  return (
    <div>
        <ProductPage data={tshirts} bg={'bg-pink-300'}  />
    </div>
  )
}

export default TShirts