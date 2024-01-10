import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES, profileURL } from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user)
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser(
          {
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }));
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearch());
  }
  
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between ">
      <img
        className=" w-44 px-2"
        src={LOGO}
        alt="logo"
      />
      {user && (<div className="flex p-2">
        {showGptSearch && (
          <select className="p-2 m-4 mt-2 bg-gray-900 text-white rounded-lg" onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map((lang)=>
          (<option key={lang.identifier} value={lang.identifier}>{lang.name}
          </option>
          ))}
          </select>
        )}
        <button className="px-6 my-6 mx-4 mt-2 bg-gradient-to-r from-red-600 text-white rounded-lg whitespace-nowrap font-semibold "
        onClick={handleGptSearchClick}
        >
          {showGptSearch ? "Home":"GPT Search" }
        </button>
        <img className="w-14 h-12 mt-2" alt="userIcon" src={profileURL}/>
        <button
          onClick={handleSignOut}
          className="bg-gradient-to-l from-red-600 my-6 mx-4 p-4 mt-2 w-full font-semibold rounded-lg text-white"
        >
          Sign out
        </button>
      </div>
      )}
    </div>
  );
};

export default Header;
