import React, { useEffect } from 'react'
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
  

  const handleSignOut = ()=>{
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error");
    });
  }

  const handleLanguageChange = (e)=>{
   
    dispatch(changeLanguage(e.target.value));
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
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full h-[80px] flex justify-between">
        <img  
        className="w-[180px]"
        src= {LOGO}
        alt='logo'/>

        {user && 
          <div className='flex'>
            { gptSearchView &&
              <select className='p-2 mx-2 my-3 bg-gray-800 text-white' onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map(lang=>(
                <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
              ))}
              </select>
            } 
            <button 
              className={'p-2 mx-3 my-3  bg-purple-800 text-white rounded-lg'} 
              // className = { gptSearchView? "bg-red-800" : " bg-purple-800"}
              onClick={handleGptSearchClick}>
                { gptSearchView? "Home Page" : "GPT Search"}
            </button>
            <img 
            alt='userIcon'
            className='w-14 h-14 p-2 ml-2'
            src={user.photoURL}/>
            <button 
            className='font-bold text-white p-2 my-2 '
            onClick={handleSignOut}>
              Sign Out </button>
          </div>
        }
        

    </div>
  )
}

export default Header