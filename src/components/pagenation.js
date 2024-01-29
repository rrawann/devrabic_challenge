import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Paged({ page , totalPages ,setPage}) {

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="p-4">
      <div className="mt-4">
        <button
          onClick={handlePrevPage}
          disabled={page === 1}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={page === totalPages}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Paged;
