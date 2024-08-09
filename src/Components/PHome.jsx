import React, { useContext, useState } from 'react'
import { ProductContext  } from "../Contexts/ProductContext"
import Product from '../Components/Product'
import Basket from './Basket'


const PHome = () => {
  
  const { products } = useContext(ProductContext)
  
  
  const filterProducts = products.filter(item => {
    return ( item.category === "men's clothing" ||  item.category === "women's clothing" )
    
  })
    
  return (
    <>
  <Basket />   
    <div>
      <section className='py-16 px-14'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[110px] max-w-sm mx-auto md:max-w-none md:x-0'>
            {filterProducts.map((product) => {
            return <Product  product={product} key={product.id}/>
            })}
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default PHome