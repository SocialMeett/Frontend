
import React, { useEffect, useState } from 'react';
import { apiGetProfile, apiUpdateProfile } from '../../services/auth';  
import axios from 'axios';

const UserProfile = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    latitude: '',
    longitude: '',
    role: '',
    circle: ''
  });

  useEffect(() => {
    const token = localStorage.getItem("token");  

    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      apiGetProfile()
        .then(response => {
          setProfile(response.data); 
          setFormData({
            fullName: response.data.fullName,
            email: response.data.email,
            latitude: response.data.latitude,
            longitude: response.data.longitude,
            circle: response.data.circle,
            role: response.data.role
          });
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error('No token found');
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const updatedProfile = await apiUpdateProfile(profile.id, formData);
      setProfile(updatedProfile.data);
      setError(null);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
      setError('Failed to update profile. Please try again later.');
    }
  };

  // New function to update latitude and longitude
  const updateLocation = (location) => {
    setFormData(prevData => ({
      ...prevData,
      latitude: location.latitude,
      longitude: location.longitude,
    }));
  };

  if (error) return <div className="text-red-500">{error}</div>;
  if (!profile) return <div>Loading...</div>;

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800">{profile.fullName}</h2>
      <p className="text-gray-600">Email: {profile.email}</p>
      <p className="text-gray-600">Role: {profile.role}</p>
      <p className="text-gray-600">Circle: {profile.circle}</p>
      <p className="text-gray-600">Latitude: {formData.latitude || 'Not specified'}</p>
      <p className="text-gray-600">Longitude: {formData.longitude || 'Not specified'}</p>

      <p className="text-gray-500">
        Profile Created At: {new Date(profile.createdAt).toLocaleString()}
      </p>
      <p className="text-gray-500">
        Last Updated At: {new Date(profile.updatedAt).toLocaleString()}
      </p>

      <h3 className="text-xl font-semibold mt-4">Update Profile</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700">Circle</label>
          <input
            type="text"
            name="circle"
            value={formData.circle}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>

        <div>
          <label className="block text-gray-700">Latitude</label>
          <input
            type="number"
            name="latitude"
            value={formData.latitude}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
            readOnly
          />
        </div>

        <div>
          <label className="block text-gray-700">Longitude</label>
          <input
            type="number"
            name="longitude"
            value={formData.longitude}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
            readOnly
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default UserProfile;


