import React from 'react';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { apiLogin } from '../../services/auth';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from 'react';

const Login = () => {
  const navigate =useNavigate();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // password visibility here
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


// login functionality here
  const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const email = formData.get("email");
  const password = formData.get ("password");

  try {
 const response = await apiLogin({email,password});

 if(response.status === 200) {
  localStorage.setItem("token", response.data.accessToken);

// sweet alert goes here
  Swal.fire({
    icon: "Success",
    title: "Login Successful",
    text: "You have logged in successfully"
  });

  navigate("/");
 }

  }catch (error) {
    console.error("Login failed:", error);


    Swal.fire({
      icon:"Error!",
      title: "Login failed",
      text: "Incorrect email or password. Please try again"
    });
  }
  };


  return (
    <div className="bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-300  min-h-screen flex items-center justify-center text-gray-700">
      <div className="relative bg-white bg-white/10 backdrop-blur-md rounded-lg shadow-lg max-w-md w-full border border-white/20">
        
        <div className="w-full p-8">
          <h2 className="text-3xl font-bold mb-2 text-center text-blue-700">Log In</h2>
          <h2 className="text-3xl font-bold mb-4 text-center">Welcome Back!</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="flex items-center text-gray-600 text-sm font-bold mb-2" htmlFor="email">
                <MdEmail className="mr-2 text-blue-500" />
                Email
              </label>
            
              <input
              name="email"
                type="text"
                id="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                required 
              />
            </div>

            <div className="mb-6 relative">
              <label className="flex items-center text-gray-600 text-sm font-bold mb-2" htmlFor="password">
                <RiLockPasswordFill className="mr-2 text-blue-500" />
                Password
              </label>

              <div className='relative'>
              <input
              name="password"
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                onChange={handlePasswordChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                required
              />
              <button type='button' onClick={togglePasswordVisibility} className='absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-600 '>
              {showPassword ? <AiFillEye /> :  <AiFillEyeInvisible /> }
            </button>
            </div>
            </div>

            <div className="mb-4 flex items-center justify-between">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox text-blue-500" />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-blue-500 hover:underline">Forgot Password?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 font-bold text-white py-2 px-4  hover:bg-blue-600 transition duration-300"
            >
              Log In
            </button>
          </form>
          
          <p className="mt-6 text-center text-gray-600 text-sm">
            Don't have an account?{" "}
            <Link className="text-blue-500 hover:underline" to="/signup">Sign Up</Link>
          </p>
        </div>

        
      </div>
    </div>
  );
}

export default Login;

