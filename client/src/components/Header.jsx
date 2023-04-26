import { UserContext } from './UserContext';
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const { user } = useContext(UserContext);
  const [searchString, setSearchString] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/account/places/search?q=${searchString}`);
  };

  const handleInputChange = (event) => {
    setSearchString(event.target.value);
  };
 


  return (
    <header className="flex items-center justify-between bg-violet text-black">
      <Link to={'/'} className="flex items-center gap-1">
        <img

          className='h-10 w-10'
          src="../src/assets/HouseForRentLogo.png"
          alt=""
        />

        <span className="font-bold text-2xl text-violet-500">Room For Rent</span>
      </Link>

  <div className="flex gap-2 border border-violet-300 rounded-full py-2 px-4 shadow-md shadow-violet-300"> 
      <input type="text" value={searchString} onChange={handleInputChange} />
      <button onClick={handleSearch} className="bg-darkBlue text-black px-4 py-2 rounded-full">Search</button>
  </div>

  <Link
    to={user ? '/account' : '/login'}
    className="flex gap-2 items-center border border-gray-300 rounded-full py-2 px-4 text-black"
  >
    <svg
      //xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
    <div className="bg-darkBlue text-black rounded-full border border-darkBlue overflow-hidden">
      <svg
        //xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path
          fillRule="evenodd"
          d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    {user && <div>{user.name}</div>}
    </Link>
    </header>
  );
};
