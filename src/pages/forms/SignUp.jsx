import React from 'react';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdOutlinePermIdentity } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import { apiSignUp } from '../../services/auth';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";


const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();


   // password visibility here
   const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // signup functionality here
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData(event.target);
      const fullName = formData.get("fullName");
      const email = formData.get("email");
      const password = formData.get("password");
      const location = formData.get("location");


      const payload = { fullName, email, password, location };

      const response = await apiSignUp(payload);

      // sweet alert goes here
      Swal.fire({
        icon: "Success",
        title: "Registered Successfully",
        text: "You have successfully created an account",
        confirmationButtonText: " OK"
      });
      navigate("/login");
    } catch (error) {
      Swal.fire({
        icon: "Error!",
        title: "Registered Failed",
        text: error.response?.data?.message || "Something went wrong!",
        confirmationButtonText: " Try Again"
      });
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 p-6">
      <div className="relative bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8 max-w-sm w-full border border-white/20">

        <h2 className="text-2xl font-semibold mb-6 text-center text-white">Sign Up</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="flex items-center text-white text-sm font-medium mb-2" htmlFor="name">
              <MdOutlinePermIdentity className="mr-2 text-lg text-orange-400" />
              Full Name
            </label>
            <input
              name="fullName"
              type="text"
              id="fullName"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-gray-300 rounded-full bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-300"
              required
            />
          </div>

          <div className="mb-4">
            <label className="flex items-center text-white text-sm font-medium mb-2" htmlFor="email">
              <MdEmail className="mr-2 text-lg text-orange-400" />
              Email
            </label>
            <input
              name="email"
              type="text"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-full bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-300 transition duration-300"
              required
            />
          </div>

          <div className="mb-6 relative">
            <label className="flex items-center text-white text-sm font-medium mb-2" htmlFor="password">
              <RiLockPasswordFill className="mr-2 text-lg text-orange-400" />
              Password
            </label>
            <div className='relative'>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              onChange={handlePasswordChange}
              className=" w-full px-4 py-3 border border-gray-300 rounded-full bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-300 transition duration-300"
              required
            />
            <button type='button' onClick={togglePasswordVisibility} className='absolute right-3 top-1/2 transform -translate-y-1/2 text-white '>
              {showPassword ? <AiFillEye /> :  <AiFillEyeInvisible /> }
            </button>
          </div>
          </div>

          <div className="mb-6">
            <label className="flex items-center text-white text-sm font-medium mb-2" htmlFor="password">
              <FaLocationDot className="mr-2 text-lg text-orange-400" />
              Location
            </label>
            <input
              name="location"
              type="text"
              id="location"
              placeholder="Enter your location"
              className="w-full px-4 py-3 border border-gray-300 rounded-full bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-300 transition duration-300"
              required
            />
          </div>

          <div className="mb-4 flex items-center justify-between text-sm">
            <label className="inline-flex items-center text-white">
              <input type="checkbox" className="form-checkbox text-orange-400" />
              <span className="ml-2">Remember me</span>
            </label>

            <a href="#" className="text-orange-400 hover:underline">Forgot Password?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 font-bold text-white py-2 px-4 rounded-full shadow-md hover:bg-orange-600 transition duration-300"
          >
            {loading ? "Loading..." : "Sign Up"}
          </button>
        </form>

        <div className="my-6 flex items-center justify-between">
          <span className="border-b border-gray-500 w-full"></span>
          <span className="text-sm text-gray-300 px-4">OR</span>
          <span className="border-b border-gray-500 w-full"></span>
        </div>

        <button
          type="Submit"
          className="w-full bg-blue-600 font-bold text-white py-2 px-4 rounded-full shadow-md hover:bg-blue-700 transition duration-300 mb-4"
        >
          Sign Up with Google
        </button>

        <p className="mt-6 text-center text-white text-sm">
          Already have an account?{" "}
          <Link className="text-orange-400 hover:underline" to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
