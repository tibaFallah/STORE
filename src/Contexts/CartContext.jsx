import { Alert, AlertIcon } from '@chakra-ui/react'
import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext()
const CartProvider = ({children}) => {
   
  const [ cart , setCart ] = useState([])
  const [ itemAmount , setItemAmount] = useState(0)
  const [total , setTotal] = useState(0)
 


 useEffect(() => {
  const total = cart.reduce((accumulate , currentItem) => {
    return accumulate + currentItem.price * currentItem.amount
  },0)
   setTotal(total)
 },[cart])

  useEffect(() => {
    if(cart){
      const amount = cart.reduce((accumulate , currentItem) =>{
        return accumulate + currentItem.amount
      },0)
      setItemAmount(amount)
    }
  },[cart])

  const addToCard = (product , id) => {
    const newItem = {...product , amount : 1}
    const cartItem = cart.find((item) => {
      return item.id === id
    })
    if (cartItem) {
      const newCart = [...cart].map(item => {
        if (item.id === id){
           return {...item , amount : cartItem.amount + 1}
        } else {
          return item
        }
      })
      setCart(newCart)
    } else {
      setCart([...cart , newItem])
     
    }
  }


  const removeFromCart = (id) => {
     const newCart = cart.filter(item => {
      return item.id !== id
     })
     setCart(newCart)
  }
  const clearCart = () => {
    setCart([])
  }
  const incAmount = (id) => {
    const cartItem = cart.find((item) => item.id ===id )
    addToCard(cartItem , id)
  }
  const decAmount = (id) => {
    const cartItem = cart.find((item) => {
      return (item.id === id)
    })
    if(cartItem){
      const newCart = cart.map(item => {
        if (item.id === id){
          return {...item , amount: cartItem.amount -1}
        }else{
          return item
        }
      })
      setCart(newCart)
    }
      if(cartItem.amount < 2){
          removeFromCart(id)
      
    }
  }
  return (
   <CartContext.Provider value={{cart , addToCard , removeFromCart , clearCart , incAmount , decAmount , itemAmount , total}}>
       {children}
   </CartContext.Provider>
  )
}

export default CartProvider