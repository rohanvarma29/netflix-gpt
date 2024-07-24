import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {addUser} from "../utils/userSlice";
import { USER_AVATAR } from '../utils/constants';

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const fullName = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleSignUp = ()=>{
        setIsSignInForm(!isSignInForm);
    }

    const handleButtonClick = ()=>{
        const msg = checkValidData(fullName.current && fullName.current.value, email.current.value, password.current.value);
        setErrorMessage(msg);
        if(msg!==null) return

        if(!isSignInForm)
        {
            //Sign Up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: fullName.current.value, photoURL: USER_AVATAR
                  }).then(() => {

                    const {uid, email, displayName, photoURL} = auth.currentUser;
                    dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                    

                  }).catch((error) => {
                    // An error occurred
                    // ...
                  });
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+"-"+errorMessage);
            });

        }
        else{
            //Sign In logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+"-"+errorMessage);
            });
        }

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
        <form onSubmit={(e)=>e.preventDefault()} className='absolute p-12 my-40 mx-auto right-0 left-0 w-1/2 md:w-4/12 bg-black rounded-lg bg-opacity-85'>

            <h1 className='py-4 m-2 font-bold text-white text-2xl'>{(isSignInForm)?"Sign In" : "Sign Up"}</h1>
            <div>
                {(!isSignInForm)?
                    <input 
                    ref={fullName}
                    type='text' 
                    placeholder='Full Name' 
                    className='p-2 m-2 my-4 w-full bg-gray-600'>
                   </input>
                   : null
                }
            </div>
            <input 
            ref={email}
             type='text' 
             placeholder='Email Address' 
             className='p-2 m-2 my-4 w-full bg-gray-600'>
            </input>
            <input 
            ref={password}
             type='password' 
             placeholder='Password' 
             className='p-2 m-2 my-4 w-full bg-gray-600'>
            </input>
            
            <p className='font-bold text-red-500 p-2'>{errorMessage}</p>

            <button 
              className='p-2 mx-2 my-4 text-white bg-red-800 rounded-lg w-full' onClick={handleButtonClick}>
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