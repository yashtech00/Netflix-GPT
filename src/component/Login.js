import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BgURl, profileURL } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errormessage, setErrormessage] = useState(null);

  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handledButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);

    setErrormessage(message);

    if (message) return;

    if (!isSignInForm) {
      //sign up form logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: profileURL,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrormessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrormessage(errorCode + "-" + errorMessage);
        });
    } else {
      //sign in form logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrormessage(errorCode + "-" + errorMessage);
        });
    }
  };
  const toggleIsSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="h-screen object-cover w-screen" src={BgURl} alt="logo" />
      </div>
      <form
        onClick={(e) => e.preventDefault()}
        className="w-full md:w-3/12 absolute  p-12 my-36 mx-auto right-0 left-0 bg-black text-white bg-opacity-80 rounded-lg"
      >
        <h1 className=" font-bold py-4 text-3xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-zinc-800 rounded-lg"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className=" p-4 my-4   bg-zinc-800 w-full rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-zinc-800 rounded-lg"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errormessage}</p>
        <button
          className=" bg-red-700 my-6 p-4 w-full rounded-lg "
          onClick={handledButtonClick}
        >
          {toggleIsSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="cursor-pointer" onClick={toggleIsSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign up now"
            : "Already Registered? Sign In now"}
        </p>
      </form>
      {/* <Footer/> */}
    </div>
  );
};

export default Login;
