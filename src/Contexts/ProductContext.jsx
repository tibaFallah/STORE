import { Spinner } from '@chakra-ui/react'
import React, { createContext, useEffect, useState } from 'react'

export const ProductContext = createContext() 

const ProductProvider = ({children}) => {
  const [products , setProducts] = useState([])
  const [loading , setLoading] = useState(true)
  
  
  useEffect(() => {
     const FetchProducts = async() => {
        const res = await fetch("https://fakestoreapi.com/products")
        const data = await res.json()
        setProducts(data)
        setLoading(null)
     }
     FetchProducts()
  } , [])

    return <ProductContext.Provider value={{products}}>
                    {children}
                    {loading && loading ? <Spinner className='mx-[47%]'
                                       thickness='4px'
                                       speed='0.65s'
                                       emptyColor='gray.200'
                                       color='blue.500'
                                       size='xl'
/> : ""}
       
            </ProductContext.Provider>
    

}
export default ProductProvider