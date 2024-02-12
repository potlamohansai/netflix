import React from "react";
import { NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div className="relative h-18 flex w-full bg-black items-center text-white  ">
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

      <div className="py-6  text-white">
        <h2 className="">Username</h2>
      </div>
    </div>
  );
};

export default Header;
