import React, { useEffect } from 'react'
import {auth} from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import {signOut } from "firebase/auth";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";

import {addUser} from "../utils/userSlice";
import {removeUser} from "../utils/userSlice";
import { LOGO } from '../utils/constants';



const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store)=>store.user);

  const handleSignOut = ()=>{
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error");
    });
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

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full h-[80px] flex justify-between">
        <img  
        className="w-[180px]"
        src= {LOGO}
        alt='logo'/>

        {user && <div className='flex'>
          <img 
          alt='userIcon'
          className='w-14 h-14 p-2 m-2'
          src={user.photoURL}/>
          <button 
          className='font-bold text-white p-2 my-2 w-[120px]'
          onClick={handleSignOut}>
            Sign Out </button>
        </div>}
        

    </div>
  )
}

export default Header