import { apiClient } from "./config";

export const apiCreateCircle = async (payload) => {
    const token = localStorage.getItem("token")
    const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": `Application/json`
    };
    return apiClient.post("/circles", payload, {headers})
}

export const apiJoinCircle = async (code) => {
    const token = localStorage.getItem("token"); 
    const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
    };
    
    return apiClient.post('/circles/join', { 
        inviteCode: code 
    }, { headers });
};

export const apiGetCircles = async (id) => {
    try {
        const response = await apiClient.get(`/circles/${id}`);
        return response.data;  // Returning the circle data
    } catch (error) {
        console.error("Error fetching circle:", error);
        throw error;  // Throwing error to handle it further up in your app
    }
};


export const getUserLocation = async (userId) => {
  try {
    const response = await apiClient.get(`/users/location/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user location:', error);
    throw error;
  }
};