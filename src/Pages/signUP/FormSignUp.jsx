import React, { useEffect } from 'react'
import { UseForm } from './UseForm'
import Validate from './Validate'
import { Box } from '@chakra-ui/react'

const FormSignUp = ({submitForm}) => {
   const {handleChange , values , handleSubmit , errors} = UseForm(submitForm , Validate)
   
  return (
    <>
    <Box boxShadow='dark-lg' p='6' rounded='md' bg='white'>
    <div className=' min-h-[89.9vh] flex items-center justify-center font-semibold'>
        <div className='border' >
        <form onSubmit={handleSubmit} className=' h-[38rem] text-black font-semibold bg-neutral-50'>
            <h1 className='pt-9 text-center'>Create Your Account Today!</h1>
           <div className='p-10 '>
           <div className='m-5'>
                <label htmlFor="username" className='cursor-pointer font-normal mr-4'>User name : </label>
                <input id='username' type="text" name='username' placeholder='enter your username' value={values.username} onChange={handleChange} className='p-2 rounded-xl focus:outline-sky-700 bg-slate-200 focus:bg-neutral-100 ml-11 text-black'/>
                {errors.username && <p className='text-red-700 italic text-right p-1'>{errors.username}</p>}
            </div>

            <div className='m-5'>
                <label htmlFor="email" className='cursor-pointer font-normal mr-4'>Email :</label>
                <input id='email' type="email" name='email' placeholder='enter your email' value={values.email} onChange={handleChange} className='p-2 rounded-xl hover:outline-sky-700 bg-slate-200 focus:bg-neutral-100 ml-[5.5rem] text-black' />
                {errors.email && <p  className='text-red-700 italic text-right p-1'>{errors.email}</p>}
            </div>

            <div className='m-5'>
                <label htmlFor="password" className='cursor-pointer font-normal mr-4'>password : </label>
                <input id='password' type="password" name='password' placeholder='enter your Password' value={values.password} 
                onChange={handleChange} className='p-2 rounded-xl hover:outline-sky-700 bg-slate-200 focus:bg-neutral-100  text-black ml-[3.4rem]'/>
                {errors.password && <p  className='text-red-700 italic text-right p-1'>{errors.password}</p>}
            </div>

            <div className='m-5'>
                <label htmlFor="confirmpassword" className='cursor-pointer font-normal mr-4'>confirm password :</label>
                <input id='confirmpassword' type="password" name='confirmpassword' placeholder='confirm your Password' 
                value={values.confirmpassword} onChange={handleChange} className='p-2 rounded-xl hover:outline-sky-700 bg-slate-200 focus:bg-neutral-100 text-black'/>
                {errors.confirmpassword && <p  className='text-red-700 italic text-right p-1'>{errors.confirmpassword}</p>}
            </div>
            <div className='flex justify-start items-start pt-3 '>
            <button type='submit' className='text-white bg-black p-3 rounded-md font-semibold w-40 m-3'>sign up</button>
            </div>
           </div>
        </form>
        </div>
    </div>
    </Box>
    </>
  )
}

export default FormSignUp