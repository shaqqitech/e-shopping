import React from 'react'
import ProductPage from '../components/ProductPage'
import makeupbox from '../Data/makeup-box'

const MakeupBOx = () => {
  return (
    <div>
        <ProductPage data={makeupbox} bg={'bg-indigo-200'}  />
    </div>
  )
}

export default MakeupBOx