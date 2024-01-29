// components/DataTable.js
import React from "react";

const DataTable = ({ data, columns }) => {
  return (
    <div className="container mx-auto m-20 overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.id}
                className="px-6 py-3 text-left ... ... text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row) => (
            <tr key={row.id}>
              {columns.map((column) => (
                <td key={column.id} className="px-6 py-4 whitespace-nowrap">
                  {column.label === "Image" ? (
                    <div className="flex flex-wrap">
                      {column.id === "images" ? (
                        row.images.map((image, index) => (
                          <img
                            key={index}
                            src={image}
                            alt={`Image ${index}`}
                            className="w-16 h-16 rounded-full m-1"
                          />
                        ))
                      ) : (
                        <img
                          src={row.image}
                          alt={`Product-Image`}
                          className="w-16 h-16 rounded-full m-1"
                        />
                      )}
                    </div>
                  ) : (
                    row[column.id]
                  
                  )
                  
            
                  }
                </td>
                
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;

// import React, { useState } from 'react';

// // const data = [
// //   { id: 1, name: 'John Doe', age: 30, city: 'New York' },
// //   { id: 2, name: 'Jane Smith', age: 25, city: 'Los Angeles' },
// //   // Add more data as needed
// // ];

// // const columns = [
// //   { id: 'name', label: 'Name' },
// //   { id: 'age', label: 'Age' },
// //   { id: 'city', label: 'City' },
// //   // Add more columns as needed
// // ];

// const DataTable = ({columns,data}) => {
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);

//   const handleChangePage = (newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   return (
//     <div className="container mx-auto">
//       <table className="min-w-full">
//         <thead>
//           <tr>
//             {columns.map((column) => (
//               <th key={column.id} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 {column.label}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody className="bg-white divide-y divide-gray-200">
//           {data
//             .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//             .map((row) => (
//               <tr key={row.id}>
//                 {columns.map((column) => (
//                   <td key={column.id} className="px-6 py-4 whitespace-nowrap">
//                     {row[column.id]}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//         </tbody>
//       </table>
//       <div className="my-4">
//         <select
//           onChange={(e) => handleChangeRowsPerPage(e)}
//           value={rowsPerPage}
//           className="px-3 py-2 border rounded-md"
//         >
//           <option value={5}>5 per page</option>
//           <option value={10}>10 per page</option>
//           <option value={20}>20 per page</option>
//         </select>
//         <div className="inline-block">
//           <button
//             onClick={() => handleChangePage(page - 1)}
//             disabled={page === 0}
//             className="px-3 py-2 mx-2 bg-blue-500 text-white rounded-md"
//           >
//             Previous
//           </button>
//           <button
//             onClick={() => handleChangePage(page + 1)}
//             disabled={(page + 1) * rowsPerPage >= data.length}
//             className="px-3 py-2 bg-blue-500 text-white rounded-md"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DataTable;
