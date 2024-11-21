import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../services/auth"; 

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); 
    navigate("/login"); 
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600 transition duration-300"
    >
      Logout
    </button>
  );
};

export default Logout;
