
import model1 from "../assets/model1.jpg"
import model2 from "../assets/model2.jpg"
import model3 from "../assets/model3.jpg"
import gift from '../assets/gift.jpg'
import Branch from '../assets/Branch.jpg'
import React, { useState } from 'react'
import { HiArrowSmallRight , HiArrowSmallLeft } from "react-icons/hi2";
import { Link } from "react-router-dom"

const Home = () => {
  
   const slides = [
    {urls :model1 },
    {urls :model2 }, 
    {urls :model3 },
   ]
   const [current , setCurrent] = useState(0)
   const prev = () => {
    const isFirstSlide = current === 0
    const newIndex = isFirstSlide ? slides.length -1 : current -1
    setCurrent(newIndex)
   }
   const next = () => {
    const isLastSlide = current === slides.length -1
    const newIndex = isLastSlide ? 0 : current +1
    setCurrent(newIndex)
   }
  return (
    <>
    
  <div className="max-w[1000px] h-[89vh] w-full m-auto pt-[0.5px] relative ">
     <div style={{backgroundImage : `url(${slides[current].urls})`}} className="w-[60%] h-[87vh] rounded bg-center bg-contain bg-no-repeat items-center duration-500 ease-in mx-[20%]">
        {/* <p className="italic m-[10px] font-bold text-2xl mx-[-70px] pt-[13%] text-teal-800">ENJOY SHOPPING</p>
        <p className="italic m-[10px] font-bold text-2xl mx-[-70px] pt-[15%] text-teal-800">WITH THE BEST</p>
        <p className="italic m-[10px] font-bold text-2xl mx-[-70px] pt-[15%] text-teal-800"> QUALITY POSSIBLE</p> */}
     </div>
     <div className=" absolute top-[45%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"><HiArrowSmallLeft onClick={prev} size={40}/></div>
     <div className="absolute top-[45%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"><HiArrowSmallRight onClick={next} size={40}/></div>
  </div>

  <div className="flex justify-between items-center mx-[10rem] pt-20 pb-10"> 
  <Link to='/product'>
<div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 ">
  <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={gift}  />
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Want A Gift?</h5>
        <p className="mb-3 font-semibold text-gray-700 ">You can earn a free ZARA bag </p>
        <p className="font-semibold">by shopping over <span className="text-red-700">980$</span>!</p>
    </div>
</div>
</Link>

<Link to='/about'>
<div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 ">
  
  <img className="object-cover w-full rounded-t-lg h-[30vh] md:w-48 md:rounded-none md:rounded-s-lg" src={Branch}  />
 
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Visit Our Branches!</h5>
        <p className="mb-3 font-semibold text-gray-700 ">make sure to find our closest branch to you!</p>
        
    </div>
</div>
</Link>
</div>

<footer className="relative h-[18rem]">
  <div className="absolute left-0 w-full h-[20rem] overflow-hidden bg-slate-900">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="relative block fill-white"></path>
    </svg>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 pb-24 gap-20 mx-28"> 
      <div className="flex flex-col gap-5">
        <h2 className="text-2xl text-orange-300 ">Contact</h2>
        <Link to='/about' className="text-white">
        <p className="hover:text-gray-400 transition-all duration-200">United State</p>
        <p className="hover:text-gray-400 transition-all duration-200">United Kingdom</p>
        <p className="hover:text-gray-400 transition-all duration-200">Europe</p>
        </Link>
      </div>

      <div className="flex flex-col gap-5">
        <h2 className="text-2xl text-orange-300 ">Services</h2>
       <Link to='/product' className="text-white text-l">
       <p className="hover:text-gray-400 transition-all duration-200">Buying</p>
       <p className="hover:text-gray-400 transition-all duration-200">Gifting</p>
       <p className="hover:text-gray-400 transition-all duration-200">Sales</p>
       </Link>
      </div>

      <div className="flex flex-col gap-5 pr-10 pt-9">
       <Link to='/signup' className="text-white text-l">
       <p>You can also join our community by <br /> <span className="text-orange-300 hover:text-orange-400">Creating your account!</span></p>
       </Link>
      </div>
    </div>
  </div>
</footer>


{/* <footer className="bg-gray-900 h-[15rem] w-[50px] inline items-center justify-between  ">
  <div className="text-white  pt-12 bg-purple-300">
    <h1 className="text-2xl font-semibold pb-3">Services</h1>
    <Link to='/product' className="text-l w-[13%] text-slate-200">
    <p>buying</p>
    <p>gifting</p>
    <p>sale</p>
    </Link>
    
    <div className=" bg-white ">
    <h1 className="text-2xl font-semibold pb-4">Contact</h1>
    <Link to='/about' className="text-l text-slate-200">
    <p>United State</p>
    <p>United Kingdom</p>
    <p>Europe</p>
    </Link>
    </div>

    
  </div>
</footer> */}
    </>
  )
}

export default Home