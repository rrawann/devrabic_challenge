import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
    
        <nav className="bg-gray-600 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <a href="/" className="text-white text-2xl font-bold">Devrabic Challenge</a>
                <ul className="flex space-x-4">
                    <li><Link to="/productsPage" className="text-white">Products</Link></li>
                    <li><Link to="/usersPage" className="text-white">Users</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
