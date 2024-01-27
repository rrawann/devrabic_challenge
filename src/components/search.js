import React, { useState } from 'react';

const SearchFilter = () => {
  const [showInput, setShowInput] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleSearchIconClick = () => {
    setShowInput(true);
  };

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
    // Perform filtering logic here based on the search value
    // For example, you can filter a list of items based on the search value
  };

  return (
    <div className="flex items-center">
      <div className="mr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={handleSearchIconClick}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </div>
      {showInput && (
        <input
          type="text"
          value={searchValue}
          onChange={handleInputChange}
          placeholder="Search..."
          className="p-2 rounded-md border"
        />
      )}
    </div>
  );
};

export default SearchFilter;
