import { FaSearch } from 'react-icons/fa';

export default function SearchInput() {
  return (
    <div className="flex items-center bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 shadow-sm w-full max-w-md">
      <FaSearch className="text-gray-400" />
      <input
        type="text"
        placeholder="Search anything here..."
        className="bg-transparent outline-none ml-2 w-full placeholder-gray-500 text-sm"
      />
    </div>
  );
}
