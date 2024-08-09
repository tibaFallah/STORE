import { useContext } from "react"
import { SiderbarContext } from "../Contexts/SidebarContext"
import { BsBag } from "react-icons/bs"
import { CartContext } from "../Contexts/CartContext"

const Basket = () => {
  const { isOpen , setIsOpen } = useContext(SiderbarContext)
  const { itemAmount } = useContext(CartContext)
  
    return (
    <>
    <div>
        <div className="cursor-pointer flex relative max-w-[50px] left-[4rem] top-[1.5rem]" onClick={() => setIsOpen(!isOpen)}>
            <BsBag className="text-2xl"/>
            <div className="bg-red-600 absolute -right-2 left-3 -bottom-2 text-[12px]  w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">{itemAmount}</div>
        </div>
    </div>
    </>
  )
}

export default Basket