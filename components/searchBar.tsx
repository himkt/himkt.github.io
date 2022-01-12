import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { FaSearch } from 'react-icons/fa';

type Props = {
  setSearchKeyword: Dispatch<SetStateAction<string>>;
};

const SearchBar = ({ setSearchKeyword }: Props) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.currentTarget.value);
  };

  return (
    <nav className="flex p-8 bg-white/40" style={{ position: 'fixed', width: '100%', top: 0 }}>
      <div className="sm:container mx-auto flex justify-center">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">
              <FaSearch />
            </span>
          </div>
          <input
            type="text"
            name="keyword"
            className="
              rounded-md
              p-2
              pl-10
              ring-4
              ring-transparent
              outline-none
              text-gray-800
              bg-gray-200
              focus:outline-offset-0
              focus:bg-gray
              focus:border-black
              focus:ring-indigo-200
              focus:ring-opacity-50
              transition
            "
            placeholder="ACL"
            onChange={handleInputChange}
          />
        </div>
      </div>
    </nav>
  );
};

export default SearchBar;
