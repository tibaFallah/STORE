import { useState , useEffect } from "react";
import Validate from "./Validate";

export const UseForm = (callback , Validate) => {
    const [values , setValues] = useState({
        username : '',
        email : '' ,
        password : '' ,
        confirmpassword : ''
    })
    const [errors , setErrors] = useState({})
    const [isSubmit , setIsSubmit] = useState(false)

    const handleChange = e => {
        const {name , value} = e.target
        setValues({
            ...values ,
            [name] : value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        setErrors(Validate(values))
        setIsSubmit(true)
    }
    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmit){
            callback()
        }
    },[errors])
    return { handleChange , values , handleSubmit , errors}
}