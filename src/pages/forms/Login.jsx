import React, { useState } from 'react';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { apiLogin } from '../../services/auth';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Login = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await apiLogin({ email, password });

      if (response.status === 200) {
        localStorage.setItem("token", response.data.accessToken);

        Swal.fire({
          icon: "Success",
          title: "Login Successful",
          text: "You have logged in successfully"
        });

        navigate("/circle-options");
      }
    } catch (error) {
      console.error("Login failed:", error);

      Swal.fire({
        icon: "Error!",
        title: "Login failed",
        text: "Incorrect email or password. Please try again"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-300 to-blue-300 flex items-center justify-center p-4">
      <div className="flex w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left side - Login Form */}
        <div className="w-full md:w-[400px] p-8">
          <div className="w-full max-w-[320px] mx-auto">
            <h2 className="text-2xl text-center font-semibold ">Login</h2>
            <p className='mb-6 text-center'>Welcome Back!</p>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <div className="relative">
                  <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600"
                    required
                  />
                </div>
              </div>

              <div>
                <div className="relative">
                  <RiLockPasswordFill className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    onChange={handlePasswordChange}
                    className="w-full pl-10 pr-12 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600"
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <Link to="/forgot-password" className="text-blue-600 hover:underline">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Login
              </button>

              <p className="text-center text-sm text-gray-600">
                Don't have an account?{" "}
                <Link to="/signup" className="text-blue-600 hover:underline">
                  Sign up now
                </Link>
              </p>
            </form>
          </div>
        </div>

        {/* Right side - Image and Text */}
        <div className="hidden md:block flex-1 relative">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className="absolute inset-0 z-20 flex items-center justify-center text-white p-8">
            <div className="max-w-[280px] text-center">
              <h2 className="text-2xl font-bold mb-3">Stay connected with your circle.</h2>
              <p className="text-base opacity-90"></p>
            </div>
          </div>
          <img
            src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo="
            alt="Laptop with coffee"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;