import React from "react";
import { FaSearch } from "react-icons/fa";


const Header = () => {
  return (
    <nav className="flex bg-indigo-500 p-4" style={{ position: "fixed", width: "100%" }}>
      <div className="sm:container mx-auto px-14">
        <div className="relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm"><FaSearch /></span>
          </div>
          <input
            type="text"
            name="keyword"
            className="
              rounded-md
              p-2
              pl-12
              pr-24
              ring-4
              ring-transparent
              outline-none
              text-gray-800
              bg-gray-200
              focus:outline-offset-0
              focus:bg-white
              focus:border-black
              focus:ring-indigo-200
              focus:ring-opacity-50
              transition
            "
            placeholder="ACL"
          />
        </div>
      </div>
    </nav>
  );
}


export default Header;
