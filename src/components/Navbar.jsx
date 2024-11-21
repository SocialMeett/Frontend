import React from 'react';
import logo from "../assets/images/pic 19.png"
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between">
        <div className="text-2xl font-bold text-blue-600">
          <img src={logo} alt="logo" className=' mr-3 h-32 w-32' />  
        </div>

      
        <div className="hidden md:flex space-x-8 items-center   ">
          <a href="#features" className="text-gray-700  hover:text-blue-600">Features</a>
          <a href="#steps" className="text-gray-700  hover:text-blue-600">Guide</a>
          <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
           
           <Link className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700" to={"/signup"}>Sign Up</Link>
           <Link className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700" to={"/login"}>Login</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Items */}
      <div className="md:hidden bg-white shadow-md">
        <a href="#features" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Features</a>
        <a href="#about" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">About</a>
        <a href="#contact" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Contact</a>
        <a href="#signup" className="block px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 text-center">Sign Up</a>
        <a href="#signup" className="block px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 text-center">Login</a>
      </div>
    </nav>
  );
}

export default Navbar;
