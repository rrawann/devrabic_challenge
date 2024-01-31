
function Pagination({ page, totalPages, setPage }) {

  const nextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const prevPagee = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleCurrentPage = (page) => {
    setPage(page);
  };
  return (
    <div class="bg-white p-4 flex items-center flex-wrap justify-center">
      <nav aria-label="Page navigation">
        <ul class="inline-flex">
          <li>
            <button class="h-10 px-5 text-gray-600 transition-colors duration-150 rounded-l-lg focus:shadow-outline hover:bg-gray-100" onClick={prevPagee}>
              <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                  fill-rule="evenodd"
               
                ></path>
              </svg>
            </button>
          </li>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handleCurrentPage(index + 1)}
              className={`h-10 px-5  transition-colors duration-150 focus:shadow-outline hover:bg-gray-100 ${
                page === index + 1 ? "bg-gray-500 text-white rounded" : ""
              }`}
            >
              {index + 1}
            </button>
          ))}
          <li>
            <button
              class="h-10 px-5 text-gray-600 transition-colors duration-150 bg-white rounded-r-lg focus:shadow-outline hover:bg-gray-100"
              onClick={nextPage}
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </div>

  );
}

export default Pagination;
