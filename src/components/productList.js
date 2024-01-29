import React, { useState, useEffect } from "react";
import { getAllProducts } from "../utils/API";
import Product from "../components/productCard";
import axios from "axios";
import SearchFilter from "./search";
import DataTable from "./dataTable";
function AllProducts() {
  const [product, setProducts] = useState(null);
  const [pageSize, setPageSize] = useState(5);
  const [inputValue, setInputValue] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products?limit=${pageSize}`
        );
        setProducts(response.data.products);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [pageSize]);

  if (!product)
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

          <SearchFilter  onInputChange={handleInputChange}/>
        
      </div>
      <DataTable columns={columns} data={product} />
    </>
  );
}

export default AllProducts;

// import React, { useState, useEffect } from "react";
// import { getAllProducts } from '../utils/API';
// import Product from "../components/productCard"
// import axios from 'axios';
// import SearchFilter from './search'
// function AllProducts() {
//   const [product, setProducts] = useState(null)
//   const [pageSize, setPageSize] = useState(5);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`https://dummyjson.com/products?limit=${pageSize}`);
//         setProducts(response.data.products);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, [pageSize]);
//   console.log(product, "product");
//   if (!product) return <p className="flex items-center justify-center h-screen">STILL LOADING ...</p>;

//   const handlePageSizeChange = (e) => {
//     setPageSize(parseInt(e.target.value, 10));
//   };
//   return (
//     <><div className="flex justify-end">

// <div className="p-10">  <label htmlFor="pageSize" className="mr-2">Select Page Size:</label>
//       <select id="pageSize" onChange={handlePageSizeChange} value={pageSize} className="p-2 rounded-md border">
//         <option value="5">5</option>
//         <option value="10">10</option>
//         <option value="20">20</option>
//         <option value="50">50</option>
//       </select>

//       </div>

// <div className="p-10"><SearchFilter/></div>
//     </div>

//       <div className="h-20 m-5"> <h3 className="uppercase  text-yellow-500   text-3xl xl:text-6xl text-center animate-pulse">ALL PRODUCTS</h3></div>

//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {product.map((item) => {
//           console.log(item, "ppppppp");
//           return (<section key={item.id}>
//             <Product
//               title={item.title}
//               images={item.images[0]}
//               price={`$${item.price}`}
//             />
//           </section>)

//         })
//         }
//       </div>

//     </>
//   );
// }

// export const getStaticProps = async () => {
//   const products = await getAllProducts();

//   return {
//     props: {
//       products,

//     },
//   };
// };
// export default AllProducts;
