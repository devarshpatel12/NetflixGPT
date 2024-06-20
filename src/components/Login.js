import React, { useRef, useState } from 'react';
import Header from './Header';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'; // Remove unused import
import { checkValidate } from '../utils/validate';
import { auth } from '../utils/firebase';
import { BG_IMG } from '../utils/constants';

const Login = () => {
  const [isSignIn, setisSignIn] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignIn = () => {
    setisSignIn(!isSignIn);
  };

  const handleButtonClick = () => {
    const message = checkValidate({ email: email.current.value, password: password.current.value });
    seterrorMessage(message);
    if (message) return;
    if (!isSignIn) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          // Handle error
          seterrorMessage(error.code + '-' + error.message); // Utilize error code and message
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          // Handle error
          seterrorMessage(error.code + '-' + error.message); // Utilize error code and message
        });
    }
  };

  return (
    <div>
      <div className='absolute'>
        <Header />
        <img src={BG_IMG} alt='bg' />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='p-12 absolute my-36 mx-auto right-0 left-0 w-4/12 bg-black text-white bg-opacity-80'>
        <h1 className='font-bold text-3xl m-2 py-4 '>{isSignIn ? 'Sign In' : 'SIgn Up'}</h1>
        {!isSignIn && <input type='text' placeholder='Name' className='p-4 my-4 w-full bg-gray-800' />}
        <input ref={email} type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-800' />
        <input
          type='text'
          ref={password}
          placeholder='Password'
          className='p-4 my-4 w-full bg-gray-800'
        />
        <div className='button'>
          <p className='text-red-700 font-bold text-lg py-4'>{errorMessage}</p>
          <button className='p-4 my-8 bg-red-500 w-full rounded-lg' onClick={handleButtonClick}>
            {isSignIn ? 'Sign In' : 'SIgn Up'}
          </button>
        </div>
        <p className='py-4 '>
          {isSignIn ? 'New to Netflix? ' : 'Already Registered! '}
          <span className='py-4 cursor-pointer' onClick={toggleSignIn}>
            {isSignIn ? 'Sign Up Now' : 'Sign In'}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
