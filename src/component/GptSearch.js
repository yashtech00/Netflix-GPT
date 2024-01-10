import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from "./GptMovieSuggestion"
import { BgURl } from '../utils/constants'

const GptSearch = () => {
  return (
      <div>
          <div className="absolute ">
        <img 
          src={BgURl} />
      </div>
          <GptSearchBar />
          <GptMovieSuggestion/>
      </div>
  )
}

export default GptSearch