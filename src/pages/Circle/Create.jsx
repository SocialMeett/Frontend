import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiCreateCircle } from "../../services/product";
import Swal from "sweetalert2";

const CreateCircle = () => {
  const [circleName, setCircleName] = useState("");
  const [inviteCode, setInviteCode] = useState(null); // Store the invite code
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCreateCircle = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Please login first");
      }

      if (!circleName.trim()) {
        throw new Error("Circle name cannot be empty");
      }

      // Call the API with the payload
      const payload = { name: circleName };
      const response = await apiCreateCircle(payload, token);

      // Check if response exists and has data
      if (!response || !response.data) {
        throw new Error("Invalid response from server");
      }

      setInviteCode(response.data.inviteCode);

      if (response.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Circle created successfully!",
          confirmButtonText: "OK",
        });
      }
    } catch (err) {
      console.error("Error creating circle:", err);
      let errorMessage = "Failed to create circle. Please try again.";

      if (err.message === "Please login first") {
        errorMessage = "Please login to create a circle";
        navigate("/login");
      } else if (err.message === "Circle name cannot be empty") {
        errorMessage = err.message;
      } else if (err.response?.data?.message) {
        errorMessage = err.response.data.message;
      }

      setError(errorMessage);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: errorMessage,
        confirmButtonText: "OK",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-blue-400 to-orange-300 h-screen">
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="relative w-full max-w-lg">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center z-10 relative">
            <h2 className="text-xl font-bold mb-4">Enter Circle Name</h2>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            {!inviteCode ? (
              // Display the form if no invite code yet
              <form onSubmit={handleCreateCircle} className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Circle Name"
                  value={circleName}
                  onChange={(e) => setCircleName(e.target.value)}
                  className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 disabled:opacity-50"
                  disabled={loading}
                >
                  {loading ? "Creating..." : "Create a Circle"}
                </button>
              </form>
            ) : (
              // Display the invite code after successful creation
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">Circle Created Successfully!</h3>
                <p className="text-sm text-gray-700 mb-4">
                  Share the invite code below with others to join your circle.
                </p>
                <div className="bg-gray-100 p-2 rounded-lg text-lg font-bold text-gray-800 mb-4">
                  {inviteCode}
                </div>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(inviteCode);
                      Swal.fire({
                        icon: "success",
                        title: "Copied!",
                        text: "Invite code copied to clipboard",
                        timer: 1500,
                      });
                    }}
                    className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600"
                  >
                    Copy Code
                  </button>
                  <button
                    onClick={() => navigate("/dashboard")}
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                  >
                    Go to Dashboard
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCircle;