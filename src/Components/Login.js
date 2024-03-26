import React, { useState,useEffect } from "react";
import validateData from "../utils/validate";
import { createUser,auth, signInUser, isUserSinnedIn } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/store/userSlice";
import { onAuthStateChanged } from "firebase/auth";


export const Login = () => {
  const navigate = useNavigate()
  const [formName, setFormName] = useState("Sign In");
  const [validationText, setValidationText] = useState(null);
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });
  
  const dispatch=useDispatch()
 
  onAuthStateChanged(auth, (user) => {
    if (user) {
      navigate('/browse')
     
    }
  });


  const handleFormName = () => {
    if (formName === "Sign In") {
      setFormName("Sign Up");
    } else {
      setFormName("Sign In");
    }
  };

  const handleClick =async () => {
    let validateResult = validateData(formData.email, formData.password); //validate user entered password and email in frontend
    if (validateResult === null) {//successfully validated
        if(formName==="Sign Up"){//for creating new user   
          try{
            const user= await createUser(formData.userName,formData.email,formData.password)
          
            const {displayName,email,uid}=user;
       
            dispatch(addUser({displayName:displayName,email:email,uid:uid}))
           //dispatch(addUser({displayName:displayName,email:email,uid:uid}))
           navigate('/browse')
          }  
          catch(error){
            setValidationText(error);
          }  
           
        }else{
            try{
              const user=await signInUser(formData.email,formData.password)
              
              const {displayName,email,uid}=user;
              
              dispatch(addUser({displayName:displayName,email:email,uid:uid}))
              //dispatch(addUser({name:"samyakTest"}))
              navigate('/browse')

              //dispatch(addUser({name:[user.displayName]}))
            }catch(error){
              setValidationText(error);
            }
            
        }
        
        //setValidationText("success");
    } else {
      setValidationText(validateResult);
    }
  };

  return (
    <div className="h-screen px-2 md:px-0 bg-black   sm:bg-movies-banner  ">
      <LoginHeader />
      <div className="mt-10 p-5 bg-black bg-opacity-80 sm:p-14  sm:w-2/4 md:w-1/3   sm:mx-auto ">
        <span className="text-3xl mb-5 text-white font-semibold block">
          {formName}
        </span>
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          {formName === "Sign Up" && (
            <input
              className="block px-4  bg-gray-700 text-white my-4 h-12 rounded-md w-full  focus:outline-none"
              type="text"
              placeholder="User name"
              onChange={(event) => {
                setFormData((prevVal) => {
                  let newVal = { ...prevVal };
                  newVal.userName = event.target.value;
                  return newVal;
                });
              }}
            />
          )}
          <input
            className="block px-4  bg-gray-700 text-white my-4 h-12 rounded-md w-full  focus:outline-none"
            value={formData.email}
            onChange={(event) => {
              setFormData((prevVal) => {
                let newVal = { ...prevVal };
                newVal.email = event.target.value;
                return newVal;
              });
            }}
            type="text"
            placeholder="Email or phone number"
          />
          <input
            className="block px-4  bg-gray-700 text-white my-4 h-12 rounded-md w-full  focus:outline-none"
            placeholder="Password"
            onChange={(event) => {
              setFormData((prevVal) => {
                let newVal = { ...prevVal };
                newVal.password = event.target.value;
                return newVal;
              });
            }}
            type="password"
          />

          <span className="text-yellow-500 text-sm ">{validationText}</span>
          
          

          <button
            className="block  bg-red-600 text-white my-10 h-12 rounded-md w-full"
            onClick={() => handleClick()}
          >
            {formName}
          </button>

          {/* conditionally change last question in form */}
          {formName === "Sign In" ? (
            <span className="pl-4 text-gray-400">
              New to Netflix?
              <span
                className="text-white cursor-pointer hover:underline"
                onClick={() => {
                  handleFormName();
                }}
              >
                {" "}
                Sign Up now.
              </span>
            </span>
          ) : (
            <span className="pl-4 text-gray-400">
              Already have an account?
              <span
                className="text-white cursor-pointer hover:underline"
                onClick={() => {
                  handleFormName();
                }}
              >
                Sign In
              </span>
            </span>
          )}
        </form>
      </div>
    </div>
  );
};

const LoginHeader=()=>{
  return(
    <div className='w-full'>
    <div className='flex h-10 pt-4 mx-auto sticky bg-gradient-to-b from-black '>
            <span className='text-red-700 m-1  font-semibold text-2xl sm:text-4xl sm:ml-32 text-center justify-center'>netflix</span>
    </div>
    </div>
  )
}