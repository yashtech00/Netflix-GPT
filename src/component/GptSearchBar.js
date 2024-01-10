import React from 'react'
import lang from '../utils/LanguageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {

  const langKey = useSelector((store) => store.config.lang);

  return (
    
    <div className="pt-[12%] flex justify-center ">
      <form className=" absolute bg-black w-1/2 grid grid-cols-12 rounded-lg ">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="col-span-3 py-2 px-4 m-2 bg-red-600 text-white rounded-lg ">{lang[langKey].search}</button>
      </form>  
    </div>
  )
}

export default GptSearchBar