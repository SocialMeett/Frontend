import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiJoinCircle } from "../../services/product";
import Swal from "sweetalert2";

const JoinCircle = () => {
  const [code, setCode] = useState(""); // State to track the invite code
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(""); 
  const navigate = useNavigate(); 

  // Handle keyup event for alphanumeric validation and focus movement
  const handleKeyUp = (e, nextInputId) => {
    if (e.key.match(/[A-Za-z0-9]/)) {
      const nextInput = document.getElementById(nextInputId);
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  // Handle form submission to join a circle
  const handleJoinCircle = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (code.length !== 8) {
        throw new Error("Please enter a complete 8-character invite code");
      }

      const cleanCode = code.trim();
      console.log("Attempting to join with code:", cleanCode);
      
      const response = await apiJoinCircle(cleanCode);
      
      if (response.data) {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Successfully joined the circle!',
        });
        navigate("/dashboard");
      }
    } catch (err) {
      console.error("Join circle error:", err);
      
      const errorMessage = err.response?.data?.error || 
                         "Failed to join circle. Please try again.";
      
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: errorMessage,
      });
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Handle input changes and update invite code
  const handleChange = (e, index) => {
    const newCode = code.split(""); // Split code into array
    newCode[index] = e.target.value; // Update specific character
    setCode(newCode.join("")); // Join back to a string
  };

  // Handle paste event to distribute characters across inputs
  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 8); // Get the first 8 characters
    const newCode = pastedData.split("");

    // Update the code and populate the inputs
    setCode(pastedData);
    newCode.forEach((char, index) => {
      const input = document.getElementById(`code-${index}`);
      if (input) {
        input.value = char;
      }
    });
  };

  return (
    <div className="bg-gradient-to-br from-blue-400 to-orange-300 h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-2">
          Join a Circle
        </h1>
        <p className="text-sm text-gray-500 text-center mb-6">
          Enter the 8-character code you received to join the circle.
        </p>

        {/* Error Message */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form className="space-y-6" onSubmit={handleJoinCircle}>
          {/* Code Input Boxes */}
          <div className="flex justify-center space-x-2">
            {Array.from({ length: 8 }).map((_, index) => {
              const inputId = `code-${index}`;
              const nextInputId = `code-${index + 1}`;
              return (
                <input
                  key={inputId}
                  id={inputId}
                  type="text"
                  maxLength="1"
                  onChange={(e) => handleChange(e, index)}
                  onKeyUp={(e) => handleKeyUp(e, nextInputId)}
                  onPaste={handlePaste}
                  className="w-12 h-12 text-xl text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder=""
                />
              );
            })}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="block w-full py-3 bg-indigo-600 text-white text-center font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
            disabled={loading}
          >
            {loading ? "Joining..." : "Join Circle"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinCircle;
