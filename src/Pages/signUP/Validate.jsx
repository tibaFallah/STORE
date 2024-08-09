export default function Validate(values){
    let errors = {}

    if(!values.username.trim()){
        errors.username = 'username is required'
    }

    if(!values.email){
        errors.email = 'email is required'
    }else if("/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"/(values.email)){
        errors.email = 'email is invalid'
    }

    if(!values.password){
        errors.password = 'password is required'
    }else if(values.password.length < 6 ){
        errors.password = 'password needs to be at least 6 letter'
    }

    if(!values.confirmpassword){
        errors.confirmpassword = 'confirm password is required'
    }else if (values.confirmpassword !== values.password){
        errors.confirmpassword = 'password do not match'
    }
    return errors
}