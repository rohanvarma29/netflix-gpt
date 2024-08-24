import React, { useEffect, useState } from 'react'
import {auth} from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import {signOut } from "firebase/auth";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";

import {addUser} from "../utils/userSlice";
import {removeUser} from "../utils/userSlice";
import { removeMovieNamesAndResults, toggleGptSearchView } from '../utils/gptSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { changeLanguage } from '../utils/configSlice';



const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store)=>store.user);
  const gptSearchView = useSelector(store=>store.gpt.showGptSearch);
  const [showMenu, setShowMenu] = useState(false);
  

  const handleSignOut = ()=>{
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error");
    });
  }

  const handleLanguageChange = (e)=>{
   
    dispatch(changeLanguage(e.target.value));
  }

  const handleMenuToggle = ()=>{
    setShowMenu(!showMenu);
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            const {uid, email, displayName, photoURL} = user;
            dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
            navigate("/browse");
        } else {
            dispatch(removeUser());
            navigate("/");
        }
    });

    //Unsubscribe when component unmounts
    return()=>unsubscribe;
},[]);

  const handleGptSearchClick = ()=>{
    dispatch(toggleGptSearchView());
    dispatch(removeMovieNamesAndResults());
  }

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full h-[80px] flex flex-col md:flex-row  md:justify-between">
        <div className='flex justify-between'>
          <img  
            className="w-[180px] md:mx-0"
            src= {LOGO}
            alt='logo'
          />
          <div className='my-auto' onClick={handleMenuToggle}>
            <div className='w-6 bg-white h-1 m-1 md:hidden'></div>
            <div className='w-6 bg-white h-1 m-1 md:hidden'></div>
            <div className='w-6 bg-white h-1 m-1 md:hidden'></div>
          </div>
        </div>

        {/* Accordian Body */}
        {/* {showMenu&&<div className='md:hidden'>
          <button 
              className={'p-2 mx-3 my-3 h-11 text-sm md:text-lg bg-purple-800 text-white rounded-lg'}
              onClick={handleGptSearchClick}>
                { gptSearchView? "Home Page" : "GPT Search"}
          </button>
          <img 
              alt='userIcon'
              className='w-14 h-14 p-2 ml-2 my-2'
              src={user.photoURL}
            />
             <button 
              className='font-bold text-white text-sm md:text-lg p-2 my-2 '
              onClick={handleSignOut}>
                Sign Out 
            </button>
        </div>} */}

        {user && 
          <div className='flex justify-between'>
            { gptSearchView &&
              <select className='p-2 mx-2 my-3 h-12 text-sm md:text-lg bg-gray-800 text-white' onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map(lang=>(
                <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
              ))}
              </select>
            } 

            <button 
              className={'p-2 mx-3 my-3 h-11 text-sm md:text-lg bg-purple-800 text-white rounded-lg'} 
              // className = { gptSearchView? "bg-red-800" : " bg-purple-800"}
              onClick={handleGptSearchClick}>
                { gptSearchView? "Home Page" : "GPT Search"}
            </button>

            <img 
              alt='userIcon'
              className='w-14 h-14 p-2 ml-2 my-2'
              src={user.photoURL}
            />

            <button 
              className='font-bold text-white text-sm md:text-lg p-2 my-2 '
              onClick={handleSignOut}>
                Sign Out 
            </button>
          </div>
        }
        

    </div>
  )
}

export default Header