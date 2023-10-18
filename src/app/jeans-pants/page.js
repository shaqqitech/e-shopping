import React from 'react'
import ProductPage from '../components/ProductPage'
import jeans from '../Data/jeans-pants'

const Jeans = () => {
  return (
    <div>
        <ProductPage data={jeans} bg={'bg-teal-300'}  />
    </div>
  )
}

export default Jeans