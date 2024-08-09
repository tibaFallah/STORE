import { Alert, Box, Image, } from '@chakra-ui/react'
import React from 'react'
import about from '../assets/about.avif'
import { BsTelephone } from "react-icons/bs";

const About = () => {
  return (
    <>
    
     <Box  boxShadow='dark-lg' p='6' rounded='md'>
     <div className=' min-h-[70vh] relative flex font-semibold'>
     <Image src={about} className='h-[73.7vh] w-[100%] brightness-50 rounded-md ' />
     <div className='absolute text-slate-300 left-12 top-[25%] '>
     <h3 className=' text-2xl  pb-5'>Branches...</h3>
     <li className=' list-decimal'>United States : Broadway 222, New York, NY 10038</li>
     <li className=' list-decimal'>United Kingdom : 61 Oxford St, London W1D 2EH</li>
     <li className=' list-decimal'>France : Rue du Pont Neuf 15, 75001 Paris</li>

     <div className='pt-14 '>
     <span className='pb-2'>
      <BsTelephone className='inline' size={25}/> 
    </span>
     <p className='hover:text-orange-400 w-[140px] cursor-pointer'>+33 801 84 13 91</p>
     <p className='hover:text-orange-400 w-[140px] cursor-pointer'>+44 800 368 4990</p>
     <p className='hover:text-orange-400 w-[140px] cursor-pointer'>+11 500 283 1213</p>
     </div>
     </div>
     
     </div>
     
     </Box>
    </>
  )
}

export default About