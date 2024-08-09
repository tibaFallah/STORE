import { useParams } from "react-router-dom"
import { CartContext } from "../Contexts/CartContext"
import { ProductContext } from "../Contexts/ProductContext"
import { useContext } from "react"
import  Basket from '../Components/Basket'
import { useToast } from "@chakra-ui/react"

const ShowProduct = () => {
  const {id} = useParams()
  const {products} = useContext(ProductContext)
  const {addToCard} = useContext(CartContext)

  const product = products.find((item) => {
    return item.id === parseInt(id)
  })
   if(!product) {
    return (
      <section className="h-screen flex justify-center items-center pb-32 font-semibold text-xl">
        Loading...
      </section>
    )
   }

    const { title , price , description , image} = product
    const toast = useToast()
  return (
    <>
    <Basket/>
    <section className="pt-28 pr-[10rem] pb-12 lg:py-32 ">
      <div className="container mx-auto">
        <div className="flex flex-col  lg:flex-row items-center ">
        <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
          <img src={image} className="max-w-[100px] h-[50vh] lg:max-w-sm object-contain" />
        </div>
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">{title}</h1>
          <div className="text-xl text-red-700 font-medium mb-6">${price}</div>
          <p className="mb-8 ">{description}</p>
          <div  onClick={() =>
        toast({
          position : 'top',
          colorScheme: 'gray' ,
          title: 'Product Added!',
          description: "item has been added successfully.. ",
          status: 'success',
          duration: 2000,
          isClosable: true,
        })}>
          <button onClick={() => addToCard(product , product.id)} className="bg-gray-500 hover:bg-gray-700 duration-300 py-4 px-8 text-white">Add To Card</button>
          </div>
        </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default ShowProduct