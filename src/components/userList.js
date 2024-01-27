import React, { useState, useEffect } from "react";
import { getAllProducts } from '../utils/API';
import User from "../components/userCard"
import axios from 'axios';
function AllUsers() {
    const [user, setUser] = useState(null)
    const [pageSize, setPageSize] = useState(5);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`https://dummyjson.com/users?limit=${pageSize}`);
            setUser(response.data.users);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, [pageSize]);
    console.log(user, "user");
    if (!user) return <p>still Loading...</p>;
    const handlePageSizeChange = (e) => {
      setPageSize(parseInt(e.target.value, 10));
    };
    return (
        <>
         <div className="justify-center m-10">  <label htmlFor="pageSize" className="mr-2">Select Page Size:</label>
      <select id="pageSize" onChange={handlePageSizeChange} value={pageSize} className="p-2 rounded-md border">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </select></div>
            <div className="h-20 mt-5"> <h3 className="uppercase  text-yellow-500   text-3xl xl:text-6xl text-center animate-pulse ">ALL Users</h3></div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {user.map((item) => {
                  console.log(item,"ppppppp");
                     return (   <section key={item.id}>
                            <User
                                firstName={item.firstName}
                                age={item.age}
                                phone={`$${item.phone}`}
                                image={item.image}
                            />
                        </section>)
                    
                })
                }
            </div>
         
        </>
    );
}

// export const getStaticProps = async () => {
//     const products = await getAllProducts();

//     return {
//         props: {
//             products,

//         },
//     };
// };
export default AllUsers;