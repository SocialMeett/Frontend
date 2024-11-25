import { apiClient } from "./config";

export const apiSignUp = async (payload) => {
    const { location, ...restPayload } = payload;
    const response = await apiClient.post("/users/register", restPayload);
    if (response.data.token) {
        // Clear any existing data first
        localStorage.clear();
        // Then set the new token
        localStorage.setItem("token", response.data.token);
    }
    return response;
}

export const apiLogin = async (payload) => {
    const response = await apiClient.post("/users/login", payload);
    if (response.data.token) {
        // Clear any existing data first
        localStorage.clear();
        // Then set the new token
        localStorage.setItem("token", response.data.token);
    }
    return response;
}

export const apiGetProfile = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
        throw new Error('No token found');
    }
    
    apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return apiClient.get("/users/me");
}

export const logout = () => {
    localStorage.clear();
};

export const apiUpdateProfile = async (updateData) => {
  try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error('No token found');

      // Add the Authorization header
      apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      const { location, ...restUpdateData } = updateData;
      const response = await apiClient.patch(
          `/users/me`,
          restUpdateData,
          {
              headers: {
                  'Content-Type': 'application/json',
              },
          }
      );
      return response;
  } catch (error) {
      console.error("Error in apiUpdateProfile:", error);
      throw error;
  }
};

const updateLocationAndProfile = async (latitude, longitude) => {
  try {
      const locationData = { location: { latitude, longitude } };
      await apiUpdateProfile(locationData);
      console.log("Location updated successfully");

      // Optionally, re-fetch user profile or update profile state here
      // e.g., fetchProfile();
  } catch (error) {
      console.error("Error updating location:", error);
  }
};