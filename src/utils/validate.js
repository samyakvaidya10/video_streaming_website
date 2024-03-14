const validateData=(email,password)=>{
    
    const isEmailValid= /^[a-zA-Z0-9. _%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)
    if(!isEmailValid){
        return "Please enter a valid email address or phone number."
    }
    const isPasswordValid=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*-])[^\s]{8,}$/.test(password)
    if(!isPasswordValid){
        return "Your password must contain between 4 and 60 characters."
    }
    return null
}
export default validateData