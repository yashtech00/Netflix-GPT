// Popup.js
import React, { useEffect } from 'react';
import { IMG_CON_URL } from '../utils/constants';

const Popup = ({ movie, onClose }) => {
  useEffect(() => {
    // Add class to body to disable scrolling when the pop-up is open
    document.body.classList.add('no-scroll');

    // Cleanup function to remove the class when the component is unmounted
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  if (!movie) {
    console.error('Invalid movie object in Popup');
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
      <div className="popup bg-white p-4 rounded-md shadow-md w-[50%] flex">
              <div className="popup-content pr-4 border-r">
        <button className="float-right" onClick={() => { onClose(); }}>
          Close
        </button>
          {/* Movie Title */}
          <h3 className="text-3xl font-semibold mb-2">{movie.title}</h3>
          
          {/* Movie Overview or Content */}
          <p className="text-gray-600 text-xl">{movie.overview}</p>
        </div>
        
        {/* Right side: Movie Image */}
        <div className="popup-image pl-4">
          <img className="object-cover w-full h-full" src={IMG_CON_URL + movie.poster_path} alt={movie.title} />
        </div>
      </div>
    </div>
  );
};

export default Popup;
