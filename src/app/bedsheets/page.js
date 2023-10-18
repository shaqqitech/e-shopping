import React from 'react'
import ProductPage from '../components/ProductPage'
import bedsheets from '../Data/bedsheets'

const BedSheets = () => {
  return (
    <div>
        <ProductPage data={bedsheets} bg={'bg-green-300'}  />
    </div>
  )
}

export default BedSheets