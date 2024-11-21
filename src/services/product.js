import { apiClient } from "./config";

export const apiCreateCircle = async (payload) => {
    const token = localStorage.getItem("token")
    const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": `Application/json`
    };
    return apiClient.post("/circles", payload, {headers})
}

export const apiJoinCircle = async (inviteCode) => {
    const token = localStorage.getItem("token"); 
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
  
    
    return apiClient.post(`/circles/${inviteCode}/join`, {}, { headers });
  };