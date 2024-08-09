import { Box } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const FormSuccess = () => {
  return (
    <Box boxShadow='outline' p='6' rounded='md' bg='white'>
    <div className='h-[72.5vh] flex items-center justify-center font-semibold'>
        
        <div className='pb-28'>
          <h2 className='pb-3 '>Your Account Has Been Created!</h2>
          <Link to={'/'}>
          <button className='bg-teal-800  text-center text-gray-100 p-3 w-[15rem] pt-3 rounded-sm'>Back to Main Page</button>
          </Link>
          
        </div>
        
    </div>
  </Box>
  )
}

export default FormSuccess