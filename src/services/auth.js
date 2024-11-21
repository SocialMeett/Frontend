import { apiClient } from "./config";

export const apiSignUp = async (payload) => {
    return await apiClient.post("/users/register", payload)
}

export const apiLogin = async (payload) => {
    return apiClient.post("/users/login", payload)

}


export const apiGetProfile = async () => {
    return apiClient.get("/users/me")

}

export const logout = () => {
    localStorage.removeItem("token"); 
  };
  

 
  export const apiUpdateProfile = async (id, newLocation) => {
    try {
      const response = await apiClient.patch(
        `/users/${id}`,
        {
          latitude: newLocation.latitude,
          longitude: newLocation.longitude
        },
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
  