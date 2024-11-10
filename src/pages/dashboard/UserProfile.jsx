import React, { useEffect, useState } from 'react';
import { apiGetProfile } from '../../services/auth';  
import axios from 'axios';

const UserProfile = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);  

  useEffect(() => {
    const token = localStorage.getItem("token");  

    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      apiGetProfile()
        .then(response => {
          setProfile(response.data); 
          setError(null);  
        })
        .catch(error => {
          console.error('Error fetching the profile data:', error);
          setError('Failed to load profile. Please try again later.');
        });
    } else {
      console.error('No token found in localStorage!');
      setError('You need to be logged in to view the profile.');
    }
  }, []);  

 
  if (error) return <div className="text-red-500">{error}</div>;
  if (!profile) return <div>Loading...</div>;

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800">{profile.fullName}</h2>
      <p className="text-gray-600">Email: {profile.email}</p>
      <p className="text-gray-600">Location: {profile.location || 'Not specified'}</p>

      <p className="text-gray-500">
        Profile Created At: {new Date(profile.createdAt).toLocaleString()}
      </p>
      <p className="text-gray-500">
        Last Updated At: {new Date(profile.updatedAt).toLocaleString()}
      </p>

     
      <h3 className="text-xl font-semibold mt-4">Friends</h3>
      <ul className="list-disc list-inside text-gray-700">
        {profile.friends && profile.friends.length > 0 ? (
          profile.friends.map(friend => (
            <li key={friend.id} className="pl-2">{friend.name}</li>
          ))
        ) : (
          <li className="text-gray-500">No friends listed</li>
        )}
      </ul> 
    </div>
  );
};

export default UserProfile;
