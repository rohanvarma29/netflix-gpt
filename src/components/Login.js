import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const handleSignUp = ()=>{
        setIsSignInForm(!isSignInForm);
    }

  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img  
            className='h-[850px]'
            src='https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_large.jpg'
            alt='logo'/>
        </div>
        <form className='absolute p-12 my-40 mx-auto right-0 left-0 w-1/2 md:w-5/12 bg-black rounded-lg bg-opacity-80'>

            <h1 className='py-4 m-2 font-bold text-white text-2xl'>{(isSignInForm)?"Sign In" : "Sign Up"}</h1>
            <div>
                {(!isSignInForm)?
                    <input 
                    type='text' 
                    placeholder='Full Name' 
                    className='p-2 m-2 my-4 w-full bg-gray-600'>
                   </input>
                   : null
                }
            </div>
            <input 
             type='text' 
             placeholder='Email Address' 
             className='p-2 m-2 my-4 w-full bg-gray-600'>
            </input>
            <input 
             type='password' 
             placeholder='Password' 
             className='p-2 m-2 my-4 w-full bg-gray-600'>
            </input>
            
            <button 
              className='p-2 mx-2 my-4 text-white bg-red-800 rounded-lg w-full'>
              {(isSignInForm) ? "Sign In" : "Sign Up"}
            </button>

            <div>
                <p className='p-2 mx-2 my-4 text-white cursor-pointer' onClick={handleSignUp}> {(isSignInForm) ? "New to NetFlix? Sign Up Now" : "Already registered? Sign In"}</p>
            </div>
            
            
        </form>
    </div>
  )
}

export default Login