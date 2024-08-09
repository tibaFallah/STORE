import { Link } from "react-router-dom"
import { SiderbarContext } from "../Contexts/SidebarContext"
import { useContext } from "react"
import { BsArrowRight, BsDashCircle } from "react-icons/bs"
import { CartContext } from "../Contexts/CartContext"
import Carditem from "./Carditem"

const Sidebar = () => {
  const { isOpen , handleClose} = useContext(SiderbarContext)
  const { cart , clearCart , total } = useContext(CartContext)

  return (
    <>
    <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw]
     xl:max-w-[30vw] transition-all duration-500 z-20 px-4 lg:px-[35px]`}>
      <div className="flex items-center justify-between py-6 border-b ">
        <div className="uppercase text-sm font-semibold">shopping bag (0)</div>
        <div onClick={handleClose} className="cursor-pointer w-8 h-8 pt-[2.5px] flex justify-center items-center">
        <BsArrowRight className="text-2xl" />
        </div>
     </div>

     <div className="flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b">{cart.map((item) => {
      return <Carditem item={item} key={item.id}/>
     })}
     </div>


     <div className="flex flex-col gap-y-3 mt-4">
      <div className=" flex w-full justify-between items-center">
        <div className="uppercase font-semibold">
          <span className="mr-2"> Total:</span> ${total}
        </div>
        <div onClick={clearCart} className="cursor-pointer py-4  bg-red-700 text-white w-11 h-11 flex justify-center items-center text-xl rounded"><BsDashCircle /></div>
      </div>
     </div>
     </div>
    </>
  )
}

export default Sidebar