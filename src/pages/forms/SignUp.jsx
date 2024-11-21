import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdOutlinePermIdentity } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { apiSignUp } from "../../services/auth";
import Swal from "sweetalert2";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaLocationDot, FaClipboardUser } from "react-icons/fa6";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData(event.target);
      const fullName = formData.get("fullName");
      const email = formData.get("email");
      const password = formData.get("password");
      const latitude = formData.get("latitude");
      const longitude = formData.get("longitude");
      const role = formData.get("role");

      const payload = { fullName, email, password, role, latitude, longitude };
      const response = await apiSignUp(payload);

      if (response.status === 201) {
        localStorage.setItem("role", response.data.role);
        Swal.fire({
          icon: "success",
          title: "Registered Successfully",
          text: "You have successfully created an account. Proceed to choose an option.",
          confirmButtonText: "OK",
        });

        navigate("/circle-options");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: error.response?.data?.message || "Something went wrong!",
        confirmButtonText: "Try Again",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-300 to-blue-300">
      <div className="flex w-[800px] h-[500px] bg-white rounded-lg overflow-hidden shadow-xl">
        {/* Left side - Form */}
        <div className="w-[400px] p-8">
          <h2 className="text-xl font-medium text-gray-800 text-center mb-1">
            Create account
          </h2>
          <p className="text-sm text-center text-gray-500 mb-6">
            Please fill in the form below
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="relative">
              <MdOutlinePermIdentity className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                name="fullName"
                type="text"
                placeholder="Enter your name"
                className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-[4px] text-sm focus:outline-none focus:border-gray-400"
                required
              />
            </div>

            <div className="relative">
              <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-[4px] text-sm focus:outline-none focus:border-gray-400"
                required
              />
            </div>

            <div className="relative">
              <RiLockPasswordFill className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                onChange={handlePasswordChange}
                className="w-full pl-10 pr-10 py-2 border border-gray-200 rounded-[4px] text-sm focus:outline-none focus:border-gray-400"
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

            <div className="relative">
              <FaLocationDot className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                name="Latitude"
                type="number"
                placeholder="Enter your latitude"
                className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-[4px] text-sm focus:outline-none focus:border-gray-400"
                
              />
            </div>
            <div className="relative">
              <FaLocationDot className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                name="Longitude"
                type="number"
                placeholder="Enter your longitude"
                className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-[4px] text-sm focus:outline-none focus:border-gray-400"
                
              />
            </div>

            <div className="relative">
              <FaClipboardUser className="absolute left-3 top-1/4 -translate-y-1/2 text-gray-400" />
              <select
                name="role"
                className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-[4px] text-sm focus:outline-none focus:border-gray-400"
                required
              >
                <option value="">Select your role</option>
                <option value="admin">Admin</option>
                <option value="member">Member</option>
              </select>
              <p className="mt-2 text-xs text-gray-500">
                Your role is flexible. You can create or join circles regardless
                of your choice and update it later in your profile settings.
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-[4px] hover:bg-blue-700 transition-colors text-sm font-medium"
              disabled={loading}
            >
              {loading ? "Loading..." : "Sign up"}
            </button>
          </form>

          <p className="mt-4 text-center text-xs text-gray-500">
            Already have an account?{" "}
            <Link className="text-blue-500 hover:underline" to="/login">
              Log in
            </Link>
          </p>
        </div>

        {/* Right side - Image */}
        <div className="flex-1 relative">
          <img
            src="https://static.vecteezy.com/system/resources/previews/003/689/230/non_2x/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg"
            alt="People working on laptop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white p-8">
            <div className="max-w-[280px] text-center">
              <h2 className="text-2xl font-medium mb-2">
                Join the Social Meet App
              </h2>
              <p className="text-white/90">
                and connect with your circle safely.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
