import { FaSearch } from "react-icons/fa";
import React from 'react'

const SearchBox = () => {
  return (
    <div className="flex items-center h-12 w-80 bg-gray-900 hover:border border-gray-700 rounded-3xl px-4 py-2 shadow-sm">
    <input
        type="text"
        placeholder="Search anything here..."
        className="bg-transparent outline-none ml-2 w-full placeholder-gray-500 text-sm"
    />
    <FaSearch className="text-gray-400 cursor-pointer" />
</div>


  )
}

export default SearchBox