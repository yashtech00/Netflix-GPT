import React, { useState } from 'react'
import Header from "./Header"

const Login = () => {

  const [isSignInForm, setisSignInForm] = useState(true);
  const toggleIsSignInForm = () => {
    setisSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header />
      <div className="absolute">

        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo" />
      </div>
      <form className="absolute w-[28rem] p-12 px-16 my-36 mx-auto right-0 left-0 bg-black text-white bg-opacity-90 rounded-lg">

        <h1 className="text-white font-bold py-4 text-3xl">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-zinc-800 rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="Email or Phone Number"
          className=" p-4 my-4 bg-zinc-800 w-full rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-zinc-800 rounded-lg"
        />
        <button className=" bg-red-700 my-6 p-4 w-full rounded-lg ">{toggleIsSignInForm ? "Sign In" : "Sign Up"}</button>

        <p className="cursor-pointer"
          onClick={toggleIsSignInForm}>
          {isSignInForm 
          ? "New to Netflix? Sign up now" 
          : "Already Registered? Sign In now"}
          </p>
      </form>
    </div>
  )
}

export default Login
