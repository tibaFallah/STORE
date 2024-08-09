import React, { useState } from 'react'
import FormSignUp from './FormSignUp'
import FormSuccess from './FormSuccess'
const Form = () => {
    const [isSubmit , setIsSubmit] = useState(false)

    const submitForm = () => {
        setIsSubmit(true)
    }
  return (
    <>
   
    {!isSubmit ? <FormSignUp submitForm={submitForm}/> : <FormSuccess/>}

    </>
   
  )
}

export default Form