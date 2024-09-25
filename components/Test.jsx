'use client'
import React, { useState } from "react";

export default function MyForm() {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
      <form>
        {/* Image input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Upload Image</label>
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
          />
        </div>

        {/* Two inputs in one line - First Row */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Input 1</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Input 1"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Input 2</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Input 2"
            />
          </div>
        </div>

        {/* Two inputs in one line - Second Row */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Input 3</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Input 3"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Input 4</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Input 4"
            />
          </div>
        </div>

        {/* Large description input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Description</label>
          <textarea 
            className="w-full h-32 px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Enter description"
          ></textarea>
        </div>

        {/* Submit button */}
        <div className="mt-4">
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
