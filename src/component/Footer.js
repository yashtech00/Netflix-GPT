import React from 'react'

const Footer = () => {
  return (
    <div className=" absolute w-full h-1/6  bg-black bg-opacity-90 text-white mt-80 -bottom-20 ">
        <div className="pl-16 mt-4">Questions? Call 000-800-919-1694</div>
        <div className="grid grid-cols-4 gap-4 place-content-evenly px-16 m-2">
        <p>FAQ</p>
        <p>Help Centre</p>
        <p>Terms of Use</p>
        <p>Privacy</p>
        <p>Cookie Preferences</p>
        
        <p>Corporate Information</p>
        
        
        </div>
        
    </div>
  )
}

export default Footer