import React, { useContext } from 'react'
import { BsDash, BsPlus, BsTrash } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { CartContext } from '../Contexts/CartContext'

const Carditem = ({item}) => {
  const { removeFromCart , incAmount , decAmount } = useContext(CartContext)
  const {id , title , image , price , amount} = item
  return (
    
      <div className='flex border-b'>
        <div className='w-full min-h-[150px] flex items-center '>
          <Link to={`/product/${id}`}>
          <img src={image} className='max-w-[70px]' />
          </Link>
          <div className='w-full flex flex-col'>
            <div className='flex justify-center mb-2'>
              <Link to={`/product/${id}`} className='text-sm uppercase  font-small max-w-[240px] hover:underline'>{title}</Link>

              <div onClick={() =>removeFromCart(id)} className='text-xl cursor-pointer relative left-[10rem] '>
              <BsTrash className='text-gray-500  hover:text-red-500 transition '/>
              </div>
            </div>

            <div className=' flex gap-x-2 h-[36px] text-sm pl-4 pt-6'>
              <div className='flex flex-1 max-w-[]100px  
              items-center h-full  text-gray-600 font-medium'>
                <div onClick={() => decAmount(id)} className='flex-1 flex justify-center items-center cursor-pointer '>
                <BsDash />
                </div>
                <div className='h-full flex justify-center items-center px-2'>
                  {amount}
                </div>
                <div onClick={() => incAmount(id)} className='flex-1 h-full flex justify-center items-center cursor-pointer'>
                <BsPlus />
                </div>
              </div>
              <div className='flex-1 flex items-center justify-around'> $ {price}</div>
              <div className='flex-1 flex justify-end items-center text-gray-500 font-medium'>{`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
            </div>
          </div>
        </div>
      </div>
      
   
  )
}

export default Carditem