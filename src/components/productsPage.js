import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchFilter from "./search";
import DataTable from "./dataTable";
import Loader from "./loader";
import Pagination from "./pagenation";
function AllProducts() {

  const [product, setProducts] = useState(null);
  const [results, setResults] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // pagination
  const [pageSize, setPageSize] = useState(5);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchData();
  }, [inputValue, page, pageSize]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products?limit=${pageSize}&skip=${(page - 1) * pageSize
        }`
      );
      const resultFilter = await axios.get(`https://dummyjson.com/products`);
      inputValue
        ? setTotalPages(1)
        : setTotalPages(Math.ceil(response.data.total / pageSize));
      setProducts(response.data.products);

      const filteredResults = resultFilter.data.products.filter((results) => {
        return (
          results.title.toLowerCase().includes(inputValue.toLowerCase()) ||
          results.price === parseInt(inputValue) ||
          results.brand.toLowerCase().includes(inputValue.toLowerCase()) ||
          results.category.toLowerCase().includes(inputValue.toLowerCase())
        );
      });
      inputValue ? setResults(filteredResults) : setResults([]);

    } catch (error) {
      console.error(error);
    }
  };

  if (!product)
    return (
      <p className="flex items-center justify-center h-screen">
        <Loader />
      </p>
    );

  const pageSizeChange = (e) => {
    setPageSize(parseInt(e.target.value, 10));
    setPage(1);
  };
  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const columns = [
    { id: "title", label: "Title" },
    { id: "images", label: "Image" },
    { id: "price", label: "Price" },
    { id: "category", label: "category" },
    { id: "discountPercentage", label: "discount Percentage" },
    { id: "rating", label: "Rating" },
    { id: "stock", label: "Stock" },
    { id: "brand", label: "Brand" },
  ];
  return (
    <>
         
      <div className="flex justify-end mr-20">
        <div className="p-10">
          <label htmlFor="pageSize" className="mr-2 font-neutra">
          Page Size :
          </label>
          <select
            id="pageSize"
            onChange={pageSizeChange}
            value={pageSize}
            className="p-2 rounded-md border"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>

        <SearchFilter onInputChange={handleInputChange} />
      </div>
      <span className="flex justify-center bold text-custom-black">PAGE - {page}</span>
      <DataTable columns={columns} data={inputValue ? results : product} />
      <div className="justify-center">
        <Pagination page={page} totalPages={totalPages} setPage={setPage} />
      </div>
    </>
  );
}

export default AllProducts;
