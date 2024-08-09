import { BsEyeFill, BsPlus } from "react-icons/bs"
import {Link} from 'react-router-dom'
import { CartContext } from "../Contexts/CartContext"
import { useContext, useState } from "react"
import {  useToast } from "@chakra-ui/react"

const Product = ({product}) => {
  const { addToCard } = useContext(CartContext)
  const {id , image , category , title , price} = product
  const toast = useToast()
  
  return (
   <>
   
   <div className="" >
    <div className='border border-slate-300  w-[220px] h-[300px] relative overflow-hidden group transition'>
       <div className="w-full h-full flex justify-center items-center">
        <div>
           <img src={image} className='max-h-[160px] mt-7 group-hover:scale-110 transition duration-500' />
        </div>
       </div>
        

       <div className='absolute -right-4 group-hover:right-0 top-0  bg-red-700 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
        <button onClick={() => addToCard(product,id)}>
          <div className="flex justify-center items-center w-9 h-8 text-gray-600" onClick={() =>
        toast({
          position : 'top',
          colorScheme: 'gray' ,
          title: 'Product Added!',
          description: "item has been added successfully... ",
          status: 'success',
          duration: 3000,
          isClosable: true,
        })}>
          <BsPlus className="text-3xl text-white rounded-sm hover:bg-red-800 duration-500 transition-all" />
          </div>
        </button>
        <Link className='w-9 h-8 bg-white flex justify-center items-center drop-shadow-xl' to={`/product/${id}`}>
        <BsEyeFill/>
        </Link>
       </div>
    </div>

    <div>
    <div className="text-sm capitalize text-gray-500 mb-1 pt-3">{category}</div>
    <Link to={`/product/${id}`}>
    <h2 className="font-semibold mb-1">{title}</h2>
    <div className="fonet-semibold ">$ {price}</div>
    </Link>
    </div>
   </div>
   </>
  )
}

export default Product