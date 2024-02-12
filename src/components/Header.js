import React from "react";
import { NETFLIX_LOGO } from "../utils/constants";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="relative h-16 flex w-full bg-black items-center text-white flex justify-between ">
      <div className="flex justify-between">
        <div className="py-4 px-8">
          <img className="w-32 h-18 inline" alt="logo" src={NETFLIX_LOGO} />
        </div>
        <div className="py-6 px-8 ">
          <ul className="flex text-center">
            <li className="mr-4">Home</li>
            <li className="mr-4">TV Shows</li>
            <li className="mr-4">Movies</li>
            <li className="mr-4">News & Popular</li>
            <li className="mr-4">My List</li>
            <li className="mr-4">Browse by Languages</li>
          </ul>
        </div>
      </div>

      <div className="py-6 mr-10 text-white">
        <button
          onClick={handleSignOut}
          className="text-white bg-red-600 py-2 px-6 m-auto rounded-lg hover:cursor-pointer"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
