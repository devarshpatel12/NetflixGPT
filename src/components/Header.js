import React, { useEffect, useState } from 'react';
import { signOut, onAuthStateChanged } from 'firebase/auth'; // Corrected import statement
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO_URL, Support_Lang } from '../utils/constants';
import { toggleGptSearch } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)
  const handleGptSearchClick=()=>{
   dispatch(toggleGptSearch());
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Optional: Do something after sign-out
      })
      .catch((error) => {
        navigate('/error');
      });
  };
  const handleLanguageChange=(e)=>{
    console.log(e.target.value);
    dispatch(changeLanguage(e.target.value))
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email } = user;
        dispatch(addUser({ uid: uid, email: email }));
        setUser(user); 
        navigate('/browse');
      } else {
        dispatch(removeUser());
        setUser(null);
        navigate('/');
      }
    });

    return unsubscribe;
  }, [dispatch, navigate]); 

  return (
    <div className="absolute flex justify-between w-full px-8 py-2 bg-gradient-to-b from-black z-20">
      <img
        className="w-44"
        src={LOGO_URL}
        alt="logo"
      />
      {user && (
        <div>
        { showGptSearch && (
          <select className='p-2 m-2 bg-gray-900 text-white' onChange={handleLanguageChange}>
        {Support_Lang.map(lang=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
          
        </select>)}
        )
          
          <button className="py-2 px-4 mx-4 my-2 rounded-lg bg-red-700 text-white " onClick={handleGptSearchClick}>
           {showGptSearch? "HomePage":"GPT-Search"}
          </button>

          <button onClick={handleSignOut} className="font-bold text-white">Sign Out</button>
        </div>
      )}
    </div>
  );
};

export default Header;

