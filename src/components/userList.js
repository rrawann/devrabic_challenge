import React, { useState, useEffect } from "react";
import DataTable from "./dataTable";
import axios from "axios";
import SearchFilter from "./search";

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
  { id: "maidenName", label: "Maiden Name" },
  { id: "bloodGroup", label: "Blood Group" },
];

const AllUsers = () => {
  const [user, setUser] = useState(null);
  const [pageSize, setPageSize] = useState(5);
  // const [showInput, setShowInput] = useState(false);
  // const [searchValue, setSearchValue] = useState("");
  const [results, setResults] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // const handleSearchIconClick = () => {
  //   setShowInput(true);
  // };
  useEffect(() => {
    fetchData();
  }, [inputValue, pageSize]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/users?limit=${pageSize}`
      );
      setUser(response.data.users);
      // inputValue
      //   ? setResults(
      //       user.filter((results) =>
      //         results.firstName
      //           .toLowerCase()
      //           .includes(inputValue.toLowerCase())
      //       )
      //     )
      //   : setResults([]);
      const filteredResults = user.filter((item) => {
        return (
          item.firstName.toLowerCase().includes(inputValue.toLowerCase()) ||
          item.age.toLowerCase().includes(inputValue.toLowerCase())
        );
      });
      inputValue ? setResults(filteredResults) : setResults([]);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(inputValue, "inputValue++++++++++++++++++++");
  if (!user)
    return (
      <p className="flex items-center justify-center h-screen">
        STILL LOADING ...
      </p>
    );
  const handlePageSizeChange = (e) => {
    setPageSize(parseInt(e.target.value, 10));
  };

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  return (
    <div>
      <div className="flex justify-end mr-20">
        <div className="p-10">
          <label htmlFor="pageSize" className="mr-2">
            Select Page Size:
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
      <DataTable columns={userColumns} data={inputValue ? results : user} />
      {/* <DataTable columns={userColumns} data={user} /> */}
    </div>
  );
};

export default AllUsers;

// import React, { useState, useEffect } from "react";
// import User from "../components/userCard";
// import axios from "axios";
// import {SearchResults} from './searchRsults'
// import Paged from "./pagenation";
// // import SearchFilter from "./search";
// function AllUsers() {
//   const [user, setUser] = useState(null);
//   const [pageSize, setPageSize] = useState(5);
//   const [showInput, setShowInput] = useState(false);
//   const [searchValue, setSearchValue] = useState("");
//   const [results, setResults] = useState([]);

//   const handleSearchIconClick = () => {
//     setShowInput(true);
//   };
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `https://dummyjson.com/users?limit=${pageSize}`
//         );
//         setUser(response.data.users);
//         searchValue? setResults(user.filter(results => results.firstName.toLowerCase().includes(searchValue.toLowerCase()))):setResults([])
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, [searchValue,pageSize]);
//   console.log(user, "user");
//   if (!user)
//     return (
//       <p className="flex items-center justify-center h-screen">
//         STILL LOADING ...
//       </p>
//     );
//   const handlePageSizeChange = (e) => {
//     setPageSize(parseInt(e.target.value, 10));
//   };
//   return (
//     <>
//       <div className="flex justify-end">
//         <div className="p-10">
//           {" "}
//           <label htmlFor="pageSize" className="mr-2">
//             Select Page Size:
//           </label>
//           <select
//             id="pageSize"
//             onChange={handlePageSizeChange}
//             value={pageSize}
//             className="p-2 rounded-md border"
//           >
//             <option value="5">5</option>
//             <option value="10">10</option>
//             <option value="20">20</option>
//             <option value="50">50</option>
//           </select>
//         </div>

//         <div className="p-10">
//         <div className="flex items-center">
//       <div className="mr-2">

//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           x="0px"
//           y="0px"
//           width="30"
//           height="30"
//           viewBox="0 0 32 32"
//           onClick={handleSearchIconClick}
//         >
//           <path d="M 19 3 C 13.488281 3 9 7.488281 9 13 C 9 15.394531 9.839844 17.589844 11.25 19.3125 L 3.28125 27.28125 L 4.71875 28.71875 L 12.6875 20.75 C 14.410156 22.160156 16.605469 23 19 23 C 24.511719 23 29 18.511719 29 13 C 29 7.488281 24.511719 3 19 3 Z M 19 5 C 23.429688 5 27 8.570313 27 13 C 27 17.429688 23.429688 21 19 21 C 14.570313 21 11 17.429688 11 13 C 11 8.570313 14.570313 5 19 5 Z"></path>
//         </svg>
//       </div>
//       {showInput && (
//         <input
//           type="text"
//           value={searchValue}
//           onChange={(e) => {setSearchValue(e.target.value)}}
//           placeholder="Search .."
//           className="p-2 rounded-md border"
//         />
//       )}

//     </div>
//         </div>
//       </div>

//       <div className="h-20 mt-5">
//         {" "}
//         <h3 className="uppercase  text-yellow-500   text-3xl xl:text-6xl text-center animate-pulse ">
//           ALL Users
//         </h3>
//       </div>
// <div>
// {
//   searchValue?<SearchResults searchResults={results} /> : <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//   {user.map((item) => {
//     console.log(item, "ppppppp");
//     return (
//       <section key={item.id}>
//         <User
//           firstName={item.firstName}
//           age={`Age:${item.age}`}
//           phone={`Phone:${item.phone}`}
//           image={item.image}
//         />
//       </section>
//     );
//   })}
// </div>
// }

// <Paged/>
// </div>

//     </>
//   );
// }

// export default AllUsers;

// import React, { useState, useEffect } from "react";
// import User from "../components/userCard";
// import axios from "axios";
// import SearchFilter from "./search";
// function AllUsers() {
//   const [user, setUser] = useState(null);
//   const [pageSize, setPageSize] = useState(5);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `https://dummyjson.com/users?limit=${pageSize}`
//         );
//         setUser(response.data.users);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, [pageSize]);
//   console.log(user, "user");
//   if (!user)
//     return (
//       <p className="flex items-center justify-center h-screen">
//         STILL LOADING ...
//       </p>
//     );
//   const handlePageSizeChange = (e) => {
//     setPageSize(parseInt(e.target.value, 10));
//   };
//   return (
//     <>
//       <div className="flex justify-end">
//         <div className="p-10">
//           {" "}
//           <label htmlFor="pageSize" className="mr-2">
//             Select Page Size:
//           </label>
//           <select
//             id="pageSize"
//             onChange={handlePageSizeChange}
//             value={pageSize}
//             className="p-2 rounded-md border"
//           >
//             <option value="5">5</option>
//             <option value="10">10</option>
//             <option value="20">20</option>
//             <option value="50">50</option>
//           </select>
//         </div>

//         <div className="p-10">
//           <SearchFilter />
//         </div>
//       </div>

//       <div className="h-20 mt-5">
//         {" "}
//         <h3 className="uppercase  text-yellow-500   text-3xl xl:text-6xl text-center animate-pulse ">
//           ALL Users
//         </h3>
//       </div>

//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {user.map((item) => {
//           console.log(item, "ppppppp");
//           return (
//             <section key={item.id}>
//               <User
//                 firstName={item.firstName}
//                 age={`Age:${item.age}`}
//                 phone={`Phone:${item.phone}`}
//                 image={item.image}
//               />
//             </section>
//           );
//         })}
//       </div>
//     </>
//   );
// }

// export default AllUsers;
