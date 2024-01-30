import React, { useState, useEffect } from "react";
import DataTable from "./dataTable";
import axios from "axios";
import SearchFilter from "./search";
import Pagination from "./pagenation";
import Loader from "./loader";

const userColumns = [
  { id: "image", label: "Image" },
  { id: "firstName", label: "First Name" },
  { id: "lastName", label: "Last Name" },
  { id: "username", label: "UserName" },
  { id: "age", label: "Age" },
  { id: "phone", label: "Phone" },
  { id: "email", label: "Email" },
  { id: "gender", label: "Gender" },
  { id: "birthDate", label: "Birth Date" },
  { id: "eyeColor", label: "EyeColor" },
  { id: "bloodGroup", label: "Blood Group" },
];

const AllUsers = () => {
  const [user, setUser] = useState(null);

  
  const [results, setResults] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // pagination
  const [pageSize, setPageSize] = useState(5);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handlePageSizeChange = (e) => {
    setPageSize(parseInt(e.target.value, 10));
    setPage(1);
  };

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  useEffect(() => {
    fetchData();
  }, [inputValue, page, pageSize]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/users?limit=${pageSize}&skip=${(page - 1) * pageSize}`)
      const resultFilter = await axios.get(`https://dummyjson.com/users`);

      inputValue?setTotalPages(1):setTotalPages(Math.ceil(response.data.total / pageSize));
      setUser(response.data.users);

       
      const filteredResults = resultFilter.data.users.filter((results) => {
        return (
          results.firstName.toLowerCase().includes(inputValue.toLowerCase()) ||
          results.age === parseInt(inputValue)
        );
      });
      inputValue ? setResults(filteredResults) : setResults([]);
    } catch (error) {
      console.error(error);
    }
  };
 
  if (!user)
    return (
      <p className="flex items-center justify-center h-screen">
        <Loader/>
      </p>
    );

  return (
    <div>
      <div className="flex justify-end mr-20">
        <div className="p-10">
          <label htmlFor="pageSize" className="mr-2">
          Page Size :
          </label>
          <select
            id="pageSize"
            onChange={handlePageSizeChange}
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
      <span className="flex justify-center bold">PAGE - {page}</span>
      <DataTable columns={userColumns} data={inputValue ? results : user} />


      <div className="justify-center">
        <Pagination page={page} totalPages={totalPages} setPage={setPage} />
      </div>
    </div>
  );
};

export default AllUsers;
