import React from 'react'
import {auth} from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import {signOut } from "firebase/auth";
import { useSelector } from 'react-redux';


const Header = () => {

  const navigate = useNavigate();
  const user = useSelector((store)=>store.user);
  if(user)console.log(user.photoURL);
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      navigate("/error");
    });
  }

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full h-15 flex justify-between">
        <img  
        className="w-[200px]"
        src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
        alt='logo'/>

        {user && <div className='flex'>
          <img 
          alt='userIcon'
          className='w-14 p-2 m-2'
          src={user.photoURL}/>
          <button 
          className='font-bold text-white p-2 my-5'
          onClick={handleSignOut}>
            (Sign Out) </button>
        </div>}
        

    </div>
  )
}

export default Header