
import React from "react";

const DataTable = ({ data, columns }) => {
  return (
    <div className="container mx-auto m-20 overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="bg-custom-blue">
            {columns.map((column) => (
              <th
                key={column.id}
                className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 font-neutra">
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
                          className="w-16 h-10  m-1"
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
